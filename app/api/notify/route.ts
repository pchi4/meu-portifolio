import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { ua, origin } = await req.json();

    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

    if (!DISCORD_WEBHOOK_URL)
      return NextResponse.json({ error: "Webhook não configurado" });

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "🚀 Novo Acesso ao Portfólio",
            color: 3447003,
            fields: [
              {
                name: "📍 Origem",
                value: origin || "Acesso Direto",
                inline: true,
              },
              {
                name: "📱 Dispositivo",
                value: ua.slice(0, 100),
                inline: false,
              },
              {
                name: "⏰ Horário",
                value: new Date().toLocaleString("pt-BR"),
                inline: true,
              },
            ],
            footer: { text: "Douglas Lopes Portfólio" },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar log" }, { status: 500 });
  }
}
