import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/themes/themes-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Douglas Lopes | Engenheiro de Software",
  description:
    "Portfólio profissional de Douglas Lopes, especialista em Mobile e Frontend.",
  openGraph: {
    title: "Douglas Lopes | Engenheiro de Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Douglas Lopes Portfolio Preview",
      },
    ],
    description:
      "Engenheiro de Software Mobile e Frontend. Confira meus projetos e trajetória acadêmica.",
    url: "https://douglas-loopes.vercel.app/",
    siteName: "Portfólio Douglas Lopes",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Lopes | Software Engineer",
    description: "Engenheiro de Software & Mestrando na UFBA.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
