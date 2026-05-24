import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "F1Pulse — Formula 1 Analytics",
  description: "Premium Formula 1 analytics platform. Live timing, standings, team histories, and driver stats for the 2026 season.",
  keywords: ["Formula 1", "F1", "racing", "analytics", "standings", "telemetry"],
  openGraph: {
    title: "F1Pulse — Formula 1 Analytics",
    description: "Premium Formula 1 analytics platform for the 2026 season.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink-0 text-text-1 antialiased">
        {children}
      </body>
    </html>
  );
}
