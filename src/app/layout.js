import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Лиана Веснина — врач-гинеколог и специалист превентивной медицины в Ступино",
  description:
    "Консультации по женскому здоровью, гормональному балансу и профилактике заболеваний в городе Ступино. Лиана Веснина — врач-гинеколог.",
  keywords: [
    "гинеколог",
    "врач превентивной медицины",
    "женское здоровье",
    "гормональный баланс",
    "Лиана Веснина",
    "Ступино",
  ],
  authors: [{ name: "Лиана Веснина" }],
  openGraph: {
    title:
      "Лиана Веснина — врач-гинеколог и специалист превентивной медицины в Ступино",
    description:
      "Профессиональные консультации по женскому здоровью и профилактике заболеваний. Онлайн и очные приёмы в Ступино.",
    url: "https://doctor-vesnina.vercel.app",
    siteName: "Doctor Vesnina",
    images: [
      {
        url: "https://doctor-vesnina.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Доктор Лиана Веснина",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
