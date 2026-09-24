import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { colorSchemeInitScript } from "@/lib/colorSchemeScript";
 import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Manuel Joaquin — Desarrollador full stack | Portfolio",
  description:
    "Portfolio interactivo de Juan Manuel Joaquin, desarrollador full stack especializado en React, Next.js, Laravel, Express Js, accesibilidad y rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorSchemeInitScript }} />
      </head>
      <body className="h-full min-w-0 overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
