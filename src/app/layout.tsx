import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Noto_Sans_Hebrew, Frank_Ruhl_Libre } from "next/font/google";
import { AppShell } from "~/components/app/AppShell";

export const metadata: Metadata = {
  title: {
    default: "talmud.ai",
    template: "%s | talmud.ai",
  },
  description: "Gamified Jewish learning — streaks, points, and flashcards.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "talmud.ai",
    description: "Gamified Jewish learning — streaks, points, and flashcards.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "talmud.ai",
    description: "Gamified Jewish learning — streaks, points, and flashcards.",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const hebrewSans = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  variable: "--font-hebrew-sans",
  display: "swap",
  preload: true,
});

const hebrewSerif = Frank_Ruhl_Libre({
  subsets: ["hebrew"],
  variable: "--font-hebrew-serif",
  display: "swap",
  preload: false,
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
