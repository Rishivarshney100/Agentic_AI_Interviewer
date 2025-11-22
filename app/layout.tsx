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
  title: "MockAI - AI Mock Interviews",
  description: "Practice mock interviews with AI-powered voice interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>
        <div className="min-h-screen bg-[#0a1628]">
          <nav className="flex items-center justify-between px-16 py-6 max-w-[1400px] mx-auto">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="MockAI Logo" width={32} height={32} />
              <span className="text-2xl font-semibold text-white">MockAI</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="https://github.com/Rishivarshney100/Agentic_AI_Interviewer" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </Link>
              <button className="px-6 py-2 rounded-full border border-gray-600 text-white hover:border-gray-400 transition-colors">
                Sign In
              </button>
            </div>
          </nav>

          <main className="max-w-[1200px] mx-auto px-8 py-12">
            {children}
          </main>
        </div>

        <Toaster />
      </body>
    </html>
  );
}
