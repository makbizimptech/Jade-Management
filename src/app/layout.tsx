import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

/**
 * Archivo carries the whole structural voice of the site. It is loaded with
 * its `wdth` axis so headlines can be set genuinely expanded and annotations
 * genuinely condensed — one family, two extremes, no second sans and no
 * monospace label face.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

/** Reserved strictly for running prose: the About text, quotes and answers. */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "JADE Management Group · General Contracting & Home Renovation",
  description:
    "A general contractor working in residential renovation and remodeling: kitchens, bathrooms, basements, additions and whole-home projects.",
};

export const viewport: Viewport = {
  themeColor: "#191612",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
