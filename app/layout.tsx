import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/themes/themes-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://douglas-loopes.vercel.app"),
  title: "Douglas Lopes | Senior Software Engineer",
  description:
    "Software Engineer para operações que não podem falhar. Full stack — mobile, web e arquitetura. Liderança técnica no MOP (SSP-BA): 7 mil+ usuários, offline-first e −65% em fluxos críticos.",
  openGraph: {
    title: "Douglas Lopes | Senior Software Engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Douglas Lopes — Senior Software Engineer · MOP 7k+ usuários",
      },
    ],
    description:
      "Full stack com liderança técnica no MOP: 7 mil+ usuários, offline-first e −65% em fluxos críticos. React Native · React · TypeScript.",
    url: "https://douglas-loopes.vercel.app/",
    siteName: "Portfólio Douglas Lopes",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Lopes | Senior Software Engineer",
    description:
      "Full stack · MOP 7k+ usuários · −65% em fluxos críticos · React Native, React, TypeScript.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
