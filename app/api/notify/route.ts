import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { ua, origin } = await req.json();

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    let geoData = {
      city: "Desconhecida",
      regionName: "??",
      country: "??",
      org: "Provedor comum",
    };

    try {
      const geoRes = await fetch(
        `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,org`,
      );
      const geoJson = await geoRes.json();
      if (geoJson.status === "success") {
        geoData = geoJson;
      }
    } catch (e) {
      console.error("Erro ao buscar geo", e);
    }

    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
    if (!DISCORD_WEBHOOK_URL)
      return NextResponse.json({ error: "Webhook missing" });

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "🚀 Novo Acesso Detectado",
            color: 3447003,
            fields: [
              {
                name: "📍 Localização",
                value: `${geoData.city}, ${geoData.regionName} - ${geoData.country}`,
                inline: false,
              },
              { name: "🏢 Provedor/Org", value: geoData.org, inline: false },
              {
                name: "🔗 Referência",
                value: origin || "Acesso Direto",
                inline: true,
              },
              { name: "🖥️ IP", value: ip, inline: true },
              {
                name: "📱 Dispositivo",
                value: ua.slice(0, 100),
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Inteligência de Tráfego - Douglas Lopes" },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao processar log" },
      { status: 500 },
    );
  }
}
