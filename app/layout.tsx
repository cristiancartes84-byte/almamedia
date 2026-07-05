import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Alma Media - Marketing Digital Biobío",
  description: "Agencia de marketing digital en Concepción, Biobío.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="2aumA2nbinnyOanG1oBvlHK-tCoT9MBQr0zei26gdjY" />
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        {/* Particles.js - lazy load */}
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer async></script>
      </head>
      <body className="antialiased">
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
