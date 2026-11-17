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
    "Senior Software Engineer especializado em Frontend, Full Stack, React, TypeScript e React Native — arquitetura e liderança técnica de aplicações críticas.",
  openGraph: {
    title: "Douglas Lopes | Senior Software Engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Douglas Lopes Portfolio Preview",
      },
    ],
    description:
      "Arquitetura e engenharia de produtos digitais para operações críticas. React, TypeScript, React Native.",
    url: "https://douglas-loopes.vercel.app/",
    siteName: "Portfólio Douglas Lopes",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Lopes | Senior Software Engineer",
    description:
      "Frontend & Full Stack · React, TypeScript, React Native · Mestrando UFBA.",
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
