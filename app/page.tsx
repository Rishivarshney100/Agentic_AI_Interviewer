import VoiceInterviewer from "@/components/Agent";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-12">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          AI Mock Interviews
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          "Ace your next interview with our open-source, voice-based AI." <br></br> Practice, get feedback, and land your dream job.
        </p>
      </div>

      <VoiceInterviewer
        candidateName="Guest User"
        userId="guest"
        mode="generate"
      />
    </div>
  );
}

