"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VoiceInterviewer from "@/components/Agent";

export default function PersonalPage() {
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/covers/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header */}
      <nav className="flex items-center justify-between px-16 py-6 max-w-[1400px] mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="IRIS Logo" width={32} height={32} />
          <span className="text-2xl font-semibold text-white">IRIS.ai</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/personal" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Student
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Enterprise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button className="px-6 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-white hover:bg-purple-600/30 transition-all transform hover:scale-105">
            End Mock Interview
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-16 py-12 max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            IRIS <span className="font-extrabold">Mock Interview</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Answer adaptive questions from your AI interview copilot.
          </p>
          <p className="text-lg text-gray-400">
            Ace your next interview with real-time voice responses.
          </p>
        </div>

        {!isInterviewStarted ? (
          <>
            {/* Two Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* AI Interviewer Panel */}
              <div className="glassmorphism rounded-2xl p-8 border border-purple-500/30 card-glow-purple">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                      <circle cx="9" cy="10" r="1.5"/>
                      <circle cx="15" cy="10" r="1.5"/>
                      <path d="M12 14c-1.5 0-3 .5-3 1.5v1h6v-1c0-1-.5-1.5-3-1.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">AI Interviewer</h3>
                </div>
                <p className="text-gray-400 text-lg">Listening...</p>
              </div>

              {/* User Panel */}
              <div className="glassmorphism rounded-2xl p-8 border border-blue-500/30 card-glow-blue">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">You</h3>
                </div>
                <p className="text-gray-400 text-lg mb-4">Start voice response...</p>
                <div className="bg-white/5 rounded-lg p-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <p className="text-center text-gray-400 mb-8">
              Transcription is auto-captured. Click Start to begin speaking.
            </p>

            {/* Start Button */}
            <div className="text-center">
              <button
                onClick={() => setIsInterviewStarted(true)}
                className="px-12 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
              >
                Click to Start
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-6xl mx-auto">
            <VoiceInterviewer
              candidateName="Guest User"
              userId="guest"
              mode="generate"
            />
          </div>
        )}
      </div>
    </div>
  );
}
