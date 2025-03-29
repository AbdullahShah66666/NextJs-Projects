import clsx from 'clsx';

import Link from 'next/link';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'bg-white',
          'min-h-screen',
          'flex',
          'flex-col'
        )}
      >
        <header className="flex flex-row bg-white text-black justify-evenly mb-2">
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/">Home</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/skills">Skills</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/about">About</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/contact">Contact</Link>
          </div>
        </header>
        {children}

        <footer className="flex flex-row bg-white text-black justify-evenly mt-2">
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/">Home</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/skills">Skills</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/about">About</Link>
          </div>
          <div className="bg-yellow-300 px-4 py-2">
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
