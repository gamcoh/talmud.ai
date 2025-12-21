import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_Hebrew, Frank_Ruhl_Libre } from "next/font/google";
import { AppShell } from "~/components/app/AppShell";

export const metadata: Metadata = {
  title: "talmud.ai",
  description: "Gamified Jewish learning — streaks, points, and flashcards.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const hebrewSans = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-hebrew-sans",
  display: "swap",
});

const hebrewSerif = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-hebrew-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${hebrewSans.variable} ${hebrewSerif.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
