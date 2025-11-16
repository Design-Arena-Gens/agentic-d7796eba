import type { Metadata } from "next";
import { JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MysticBackground } from "@/components/mystic-background";

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "Oraculum | Tarot de Marseille",
  description:
    "Expériences immersives de tirage de Tarot de Marseille avec animations, seeds reproductibles et interface mystique."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${spectral.className} ${mono.variable}`}>
        <ThemeProvider>
          <MysticBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
