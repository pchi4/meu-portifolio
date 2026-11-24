import { NextResponse } from "next/server";

const RATE_LIMIT_MS = 60 * 60 * 1000; // 1h por IP
const hits = new Map<string, number>();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function maskIp(ip: string): string {
  if (ip.includes(".")) {
    const parts = ip.split(".");
    if (parts.length === 4) {
      return `${parts[0]}.${parts[1]}.${parts[2]}.xxx`;
    }
  }
  if (ip.includes(":")) {
    return `${ip.split(":").slice(0, 4).join(":")}:…`;
  }
  return "masked";
}

function clampStr(value: unknown, max: number, fallback = ""): string {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  if (!trimmed) return fallback;
  return trimmed.slice(0, max);
}

function isAllowedRequest(req: Request): boolean {
  const fetchSite = req.headers.get("sec-fetch-site");
  if (fetchSite === "same-origin") return true;

  const allowedHosts = new Set<string>();
  const host = req.headers.get("host");
  if (host) allowedHosts.add(host.toLowerCase());
  if (process.env.VERCEL_URL) {
    allowedHosts.add(process.env.VERCEL_URL.toLowerCase());
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try {
      allowedHosts.add(
        new URL(process.env.NEXT_PUBLIC_SITE_URL).host.toLowerCase(),
      );
    } catch {
      /* ignore invalid env */
    }
  }
  allowedHosts.add("douglas-loopes.vercel.app");
  allowedHosts.add("localhost:3000");
  allowedHosts.add("127.0.0.1:3000");

  const matchesHost = (raw: string | null) => {
    if (!raw) return false;
    try {
      return allowedHosts.has(new URL(raw).host.toLowerCase());
    } catch {
      return false;
    }
  };

  return (
    matchesHost(req.headers.get("origin")) ||
    matchesHost(req.headers.get("referer"))
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, ts] of hits) {
    if (now - ts > RATE_LIMIT_MS) hits.delete(key);
  }
  const last = hits.get(ip);
  if (last && now - last < RATE_LIMIT_MS) return true;
  hits.set(ip, now);
  return false;
}

export async function POST(req: Request) {
  try {
    if (!isAllowedRequest(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    const payload = body as Record<string, unknown>;
    const ua = clampStr(payload.ua, 120, "desconhecido");
    const referrer = clampStr(payload.origin, 200, "Acesso Direto");

    let geoData = {
      city: "Desconhecida",
      region: "??",
      country: "??",
      org: "Provedor comum",
    };

    if (ip !== "unknown" && ip !== "127.0.0.1") {
      try {
        const geoRes = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
          next: { revalidate: 0 },
        });
        if (geoRes.ok) {
          const geoJson = (await geoRes.json()) as {
            success?: boolean;
            city?: string;
            region?: string;
            country?: string;
            connection?: { org?: string; isp?: string };
          };
          if (geoJson.success) {
            geoData = {
              city: geoJson.city || geoData.city,
              region: geoJson.region || geoData.region,
              country: geoJson.country || geoData.country,
              org:
                geoJson.connection?.org ||
                geoJson.connection?.isp ||
                geoData.org,
            };
          }
        }
      } catch (e) {
        console.error("Erro ao buscar geo", e);
      }
    }

    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
    if (!DISCORD_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Service unavailable" },
        { status: 503 },
      );
    }

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "Novo acesso no portfólio",
            color: 3447003,
            fields: [
              {
                name: "Localização",
                value: `${geoData.city}, ${geoData.region} — ${geoData.country}`,
                inline: false,
              },
              { name: "Provedor/Org", value: geoData.org, inline: false },
              { name: "Referência", value: referrer, inline: true },
              { name: "IP (mascarado)", value: maskIp(ip), inline: true },
              { name: "Dispositivo", value: ua, inline: false },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Tráfego do portfólio — Douglas Lopes" },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar log" },
      { status: 500 },
    );
  }
}
