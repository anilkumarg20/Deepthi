import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Story We Never Wrote",
  description: "A premium interactive cinematic digital storybook of childhood memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#060913] text-[#FFFDF8] overflow-hidden select-none">
        {children}
      </body>
    </html>
  );
}

