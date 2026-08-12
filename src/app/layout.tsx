import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Moraes — Direito → Tech",
    template: "%s · Daniel Moraes",
  },
  description:
    "Advogado com mais de 15 anos de experiência em transição de carreira para tecnologia. Portfólio, experiência profissional e contacto de Daniel Moraes.",
  keywords: [
    "Daniel Moraes",
    "Portfólio",
    "Frontend",
    "Transição de carreira",
    "Advogado para tech",
    "UPskill",
  ],
  authors: [{ name: "Daniel Moraes" }],
  openGraph: {
    title: "Daniel Moraes — Direito → Tech",
    description:
      "De 15+ anos de advocacia para o mundo da tecnologia. Conheça a jornada, a experiência e os projetos de Daniel Moraes.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
