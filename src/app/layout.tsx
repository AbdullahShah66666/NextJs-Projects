import { ThemeProvider } from "@/components/features/theme";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import clsx from "clsx";

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "min-h-screen",
          "flex",
          "flex-col"
        )}
      >
        <ThemeProvider >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
