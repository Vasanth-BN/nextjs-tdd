import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Car Specifications",
  description: "Evolve around the world of cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={cn("font-sans", fontSans.variable)}>{children}</body>
      </html>
    </>
  );
}
