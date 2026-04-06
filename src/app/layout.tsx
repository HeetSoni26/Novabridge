import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NovaBridge Agency | Elite Lead Generation",
  description: "High-converting lead generation and client-acquisition systems for B2B SaaS and professional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-inter antialiased bg-background text-foreground overflow-x-hidden`}>
        <LenisScroll>
          <CustomCursor />
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
