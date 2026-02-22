import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRIS - Your AI Interview Copilot",
  description: "Intelligent Review and Interview System - Practice mock interviews with AI-powered voice interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>
        <main>
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
