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
  title: "PrepWise - AI Mock Interviews",
  description: "Practice mock interviews with AI-powered voice interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        <div className="root-layout">
          <nav>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
              <h2 className="text-primary-100">PrepWise</h2>
            </Link>
          </nav>

          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
