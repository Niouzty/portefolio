import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Portfolio – Style JSON",
  description: "Un CV minimaliste présenté comme un objet JSON."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
