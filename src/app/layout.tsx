import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script, Quintessential } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quintessential",
});

export const metadata: Metadata = {
  title: "Laks Glam House | Professional Makeup Artist",
  description: "Expert bridal, editorial, and fashion makeup services by Lakshmi Sharma at Laks Glam House.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${quintessential.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
