import Link from "next/link";
import Image from "next/image";
import { Mic, Brain, Target, Server } from "lucide-react";

export default function Home() {
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

      {/* Hero Section */}
      <section className="relative px-16 py-20 max-w-7xl mx-auto z-10"><br></br>
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Practice. Improve. <span className="text-blue-400">Get Hired.</span>
          </h1>
          <h2 className="text-3xl text-white/90 font-medium">
            Meet IRIS - Your AI Interview Copilot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A voice-powered AI interview platform with adaptive follow-up questioning and intelligent feedback, like never before.
          </p>
          <br></br>
          <div className="flex items-center justify-center gap-6 mt-10">
            <Link 
              href="/interview"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              Start Mock Interview
            </Link>
            <a 
              href="https://drive.google.com/file/d/1K93vDfIwnTYZ84GHjcBpZ-pD2p_u10pu/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-all transform hover:scale-105 inline-block"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          The Future of Interviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Voice-Driven AI */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Longer Interviews</h3>
            <p className="text-gray-300">Handles longer conversations without breaking context</p>
          </div>

          {/* GPT-4o Intelligence */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Artificial Intelligence</h3>
            <p className="text-gray-300">Enables Context-aware evaluation of the interviewee's performance</p>
          </div>

          {/* Personalized Feedback */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Personalized Feedback</h3>
            <p className="text-gray-300">Detailed improvement insights as per the conversation</p>
          </div>

          {/* Scalable Architecture */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Scalable Architecture</h3>
            <p className="text-gray-300">Handles 1000+ sessions at scale with several types of different interview domains</p>
          </div>
        </div>
      </section>

      {/* IDE Section */}
      <section id="ide" className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-6">
            <Brain className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-300 font-medium">Coming Soon</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Integrated AI-Powered IDE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AI coding rounds with live execution and real-time code analysis
        </p>
      </div>

        {/* Code Editor Visual */}
        <div className="bg-gradient-to-b from-[#0f1e35] to-[#08090D] rounded-2xl p-8 border border-blue-500/30 mt-12 card-glow-blue relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Code Editor */}
            <div className="lg:col-span-2 bg-[#1a1a2e] rounded-lg overflow-hidden relative">
              <div className="flex gap-2 p-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-xs">solution.py</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-gray-600 pr-4 text-right select-none">
                    {Array.from({ length: 15 }, (_, i) => (
                      <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                  </div>
                  {/* Code Content */}
                  <div className="flex-1 text-gray-300">
                    <div className="leading-6"><span className="text-purple-400">def</span> <span className="text-blue-400">find_max_path_sum</span><span className="text-white">(</span><span className="text-yellow-400">root</span><span className="text-white">):</span></div>
                    <div className="leading-6 pl-4"><span className="text-gray-500"># Hard: Binary Tree Maximum Path Sum</span></div>
                    <div className="leading-6 pl-4"><span className="text-purple-400">if</span> <span className="text-yellow-400">root</span> <span className="text-white">is</span> <span className="text-purple-400">None</span><span className="text-white">:</span></div>
                    <div className="leading-6 pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">0</span></div>
                    <div className="leading-6"></div>
                    <div className="leading-6 pl-4"><span className="text-yellow-400">max_sum</span> <span className="text-white">=</span> <span className="text-yellow-400">float</span><span className="text-white">(</span><span className="text-green-400">'-inf'</span><span className="text-white">)</span></div>
                    <div className="leading-6"></div>
                    <div className="leading-6 pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">dfs</span><span className="text-white">(</span><span className="text-yellow-400">node</span><span className="text-white">):</span></div>
                    <div className="leading-6 pl-8"><span className="text-purple-400">nonlocal</span> <span className="text-yellow-400">max_sum</span></div>
                    <div className="leading-6 pl-8"><span className="text-purple-400">if</span> <span className="text-yellow-400">node</span> <span className="text-white">is</span> <span className="text-purple-400">None</span><span className="text-white">:</span></div>
                    <div className="leading-6 pl-12"><span className="text-purple-400">return</span> <span className="text-green-400">0</span></div>
                    <div className="leading-6 pl-8"><span className="text-yellow-400">left</span> <span className="text-white">=</span> <span className="text-blue-400">max</span><span className="text-white">(</span><span className="text-green-400">0</span><span className="text-white">,</span> <span className="text-blue-400">dfs</span><span className="text-white">(</span><span className="text-yellow-400">node</span><span className="text-white">.</span><span className="text-yellow-400">left</span><span className="text-white">))</span></div>
                    <div className="leading-6 pl-8"><span className="text-yellow-400">right</span> <span className="text-white">=</span> <span className="text-blue-400">max</span><span className="text-white">(</span><span className="text-green-400">0</span><span className="text-white">,</span> <span className="text-blue-400">dfs</span><span className="text-white">(</span><span className="text-yellow-400">node</span><span className="text-white">.</span><span className="text-yellow-400">right</span><span className="text-white">))</span></div>
                    <div className="leading-6 pl-8"><span className="text-yellow-400">max_sum</span> <span className="text-white">=</span> <span className="text-blue-400">max</span><span className="text-white">(</span><span className="text-yellow-400">max_sum</span><span className="text-white">,</span> <span className="text-yellow-400">node</span><span className="text-white">.</span><span className="text-yellow-400">val</span> <span className="text-white">+</span> <span className="text-yellow-400">left</span> <span className="text-white">+</span> <span className="text-yellow-400">right</span><span className="text-white">)</span></div>
                    <div className="leading-6 pl-8"><span className="text-purple-400">return</span> <span className="text-yellow-400">node</span><span className="text-white">.</span><span className="text-yellow-400">val</span> <span className="text-white">+</span> <span className="text-blue-400">max</span><span className="text-white">(</span><span className="text-yellow-400">left</span><span className="text-white">,</span> <span className="text-yellow-400">right</span><span className="text-white">)</span></div>
                    <div className="leading-6"></div>
                    <div className="leading-6 pl-4"><span className="text-blue-400">dfs</span><span className="text-white">(</span><span className="text-yellow-400">root</span><span className="text-white">)</span></div>
                    <div className="leading-6 pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-400">max_sum</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Control Panel */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#1a1a2e] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-semibold mb-3">Test Cases</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Test Case 1: Passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Test Case 2: Passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Test Case 3: Passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Test Case 4: Passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span>Test Case 5: Running...</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <span>Test Case 6: Pending</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <span>Test Case 7: Pending</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-3 pt-2 border-t border-gray-700">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <span>Hidden Tests: 3</span>
                  </div>
                </div>
              </div>
              
              {/* Buttons below test cases */}
              <div className="flex flex-col gap-2">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded flex items-center justify-center gap-2 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0011 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Run
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium rounded flex items-center justify-center gap-2 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
            Join Beta Waitlist
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-300">Concurrent Interviews</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">250k</h3>
            <p className="text-gray-300">Max Token Handling</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">90%+</h3>
            <p className="text-gray-300">Scenario Coverage</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">50%</h3>
            <p className="text-gray-300">Faster Preparation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-12 text-center border-t border-white/10 relative z-10">
        <p className="text-gray-400 text-sm">
          © 2026 IRIS - Intelligent Review & Interview System
        </p>
      </footer>
    </div>
  );
}
