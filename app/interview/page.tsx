"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import VoiceInterviewer from "@/components/Agent";

export default function InterviewPage() {
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);

  useEffect(() => {
    // Block vertical scrolling on body
    document.body.style.overflowY = 'hidden';
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/covers/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'hidden',
        height: '100vh'
      }}
    >
      {/* Header */}
      <nav className="flex items-center justify-between px-16 py-6 max-w-[1400px] mx-auto relative z-10 shadow-none bg-transparent backdrop-blur-none">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="IRIS Logo" width={32} height={32} />
          <span className="text-2xl font-semibold text-white">IRIS.ai</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/interview" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Student
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Enterprise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#ide" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            IDE Beta
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>

      {/* Hero Text Lines */}
      <div className="text-center space-y-4 px-16 py-4 max-w-7xl mx-auto relative z-10">
        <h1 className="text-7xl font-bold text-white tracking-tight">
            Practice. Improve. <span className="text-blue-400">Get Hired.</span>
        </h1>
      </div>
      <br></br>

      {/* Main Content */}
      <div className="px-40 pb-10 max-w-7xl mx-auto relative z-10 shadow-none">
        <br></br>
        {/* Two Panels - Always Visible */}
        <div className="max-w-6xl mx-auto mb-12">
          <VoiceInterviewer
            candidateName="Guest User"
            userId="guest"
            mode="generate"
            autoStart={isInterviewStarted}
          />
        </div>

      </div>
    </div>
  );
}
