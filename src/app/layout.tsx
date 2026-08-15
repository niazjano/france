import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "École Libre — L'éducation ne peut pas attendre",
  description:
    "École Libre facilite l'accès à l'éducation des enfants défavorisés en Afghanistan. Programmes éducatifs, matériel scolaire et soutien humanitaire.",
  openGraph: {
    title: "École Libre — L'éducation ne peut pas attendre",
    description:
      "Association loi 1901 dédiée à l'éducation des enfants en Afghanistan.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-text">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
