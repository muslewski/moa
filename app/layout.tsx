import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOA Masters of Arts — 10 koncepcji homepage",
  description: "10 propozycji designu strony głównej dla MOA Masters of Arts sp. z o.o.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;500;700&family=DM+Serif+Display&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,700;9..144,900&family=JetBrains+Mono:wght@400;500;700&family=Bebas+Neue&family=Cormorant+Garamond:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
