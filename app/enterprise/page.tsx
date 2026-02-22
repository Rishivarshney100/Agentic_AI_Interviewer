import Link from "next/link";
import Image from "next/image";
import { Settings, BarChart3, Layers, Mail } from "lucide-react";

export default function EnterprisePage() {
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
          <Link href="/interview" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Student
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors relative group inline-block">
            Enterprise
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a 
            href="https://drive.google.com/file/d/1K93vDfIwnTYZ84GHjcBpZ-pD2p_u10pu/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 inline-block"
          >
            Watch Latest Demo
          </a>
        </div>
      </nav>

      <br></br>

      {/* Hero Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-6">
          IRIS AI Recruitment <span className="text-purple-400">Solutions</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your hiring process with adaptable, AI-driven interviews calibrated specifically for your hiring needs.
        </p>
        <br></br>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a 
            href="mailto:enterprise@iris.ai"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Contact Our Team
          </a>
          <a 
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            View Pricing Plans
          </a>
        </div>
      </section>
      <br></br>

      {/* Custom Solutions Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <br></br>
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          Custom AI Solutions for <span className="text-purple-400">Enterprises</span>
        </h2>
        <br></br>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Tailored AI interviews, streamlined assessments, and analytics tailored specifically for your hiring requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tailored AI Interviews */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Tailored AI Interviews</h3>
            <p className="text-gray-300 leading-relaxed">
              Customize question banks to target specific roles, seniority levels, and skillsets for optimal fit.
            </p>
          </div>

          {/* Streamline Evaluations */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Streamline Evaluations</h3>
            <p className="text-gray-300 leading-relaxed">
              Consistent, bias-free assessments across technical and behavioral domains.
            </p>
          </div>

          {/* Scalable Platform */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Scalable Platform</h3>
            <p className="text-gray-300 leading-relaxed">
              Efficiently manage interviews at scale with detailed analytics and reporting.
            </p>
          </div>
        </div>
      </section>
      <br></br>

      {/* Request a Demo Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <br></br>
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          <br></br>
          Request a Demo
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          See IRIS in action for your hiring needs. Schedule a personalized demo to experience our platform tailored to your organization's requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-5xl font-bold text-white mb-3">92%</h3>
            <p className="text-gray-300">Candidate Match Rate</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-5xl font-bold text-white mb-3">1,000+</h3>
            <p className="text-gray-300">Interviews Managed Smoothly</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-5xl font-bold text-white mb-3">1-Week</h3>
            <p className="text-gray-300">Implementation Time</p>
          </div>
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-5xl font-bold text-white mb-3">20%</h3>
            <p className="text-gray-300">Hiring Time Reduction</p>
          </div>
        </div>
      </section>
      <br></br>

      {/* Billing/Pricing Section */}
      <section id="pricing" className="px-16 py-20 max-w-7xl mx-auto relative z-10">
        <br></br>
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Choose the plan that fits your organization's hiring needs. All plans include dedicated support and custom configuration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple">
            <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$499</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Up to 50 interviews/month
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Basic analytics
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Email support
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Standard question banks
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Limited Usage of Integrated IDE
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border-2 border-purple-500 card-glow-purple relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-bl-lg rounded-tr-2xl">
              Popular
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$1,499</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Up to 200 interviews/month
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Advanced analytics & reporting
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Priority support
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Custom question banks
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Unlimited Usage of Integrated IDE
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl p-8 border border-purple-500/30 card-glow-purple">
            <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Unlimited interviews
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> White-label solution
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Dedicated account manager
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> Full customization
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <span className="text-green-400">✓</span> On-premise deployment option
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Let's make hiring seamless and intelligent for your business. Contact us to design your AI recruitment program.
        </p>
        
        <a
          href="mailto:enterprise@iris.ai"
          className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          enterprise@iris.ai
        </a>
      </section>

      {/* Footer */}
      <footer className="px-16 py-12 text-center border-t border-white/10 relative z-10">
        <p className="text-gray-400 text-sm">
          © 2026 IRIS – Intelligent Review & Interview System
        </p>
      </footer>
    </div>
  );
}
