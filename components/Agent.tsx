"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { aiInterviewerConfig } from "@/constants";

enum ConnectionState {
  IDLE = "IDLE",
  ESTABLISHING = "ESTABLISHING",
  CONNECTED = "CONNECTED",
  TERMINATED = "TERMINATED",
}

interface DialogEntry {
  role: "user" | "system" | "assistant";
  content: string;
}

const VoiceInterviewer = ({
  candidateName,
  userId,
  sessionId,
  mode,
  queryList,
}: VoiceAgentProps) => {
  const navigation = useRouter();
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.IDLE);
  const [dialogHistory, setDialogHistory] = useState<DialogEntry[]>([]);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  useEffect(() => {
    const handleConnectionEstablished = () => {
      setConnectionState(ConnectionState.CONNECTED);
    };

    const handleConnectionClosed = () => {
      setConnectionState(ConnectionState.TERMINATED);
    };

    const handleIncomingMessage = (msg: Message) => {
      if (msg.type === "transcript" && msg.transcriptType === "final") {
        const dialogEntry = { role: msg.role, content: msg.transcript };
        setDialogHistory((previous) => [...previous, dialogEntry]);
      }
    };

    const handleAgentSpeechStart = () => {
      console.log("Agent started speaking");
      setAgentSpeaking(true);
    };

    const handleAgentSpeechEnd = () => {
      console.log("Agent stopped speaking");
      setAgentSpeaking(false);
    };

    const handleConnectionError = (err: Error) => {
      console.log("Connection error:", err);
    };

    vapi.on("call-start", handleConnectionEstablished);
    vapi.on("call-end", handleConnectionClosed);
    vapi.on("message", handleIncomingMessage);
    vapi.on("speech-start", handleAgentSpeechStart);
    vapi.on("speech-end", handleAgentSpeechEnd);
    vapi.on("error", handleConnectionError);

    return () => {
      vapi.off("call-start", handleConnectionEstablished);
      vapi.off("call-end", handleConnectionClosed);
      vapi.off("message", handleIncomingMessage);
      vapi.off("speech-start", handleAgentSpeechStart);
      vapi.off("speech-end", handleAgentSpeechEnd);
      vapi.off("error", handleConnectionError);
    };
  }, []);

  useEffect(() => {
    if (dialogHistory.length > 0) {
      setCurrentMessage(dialogHistory[dialogHistory.length - 1].content);
    }

    // When call ends, redirect to home
    if (connectionState === ConnectionState.TERMINATED) {
      console.log("✅ Interview completed! Redirecting to home...");
      setTimeout(() => {
        navigation.push("/");
      }, 1000); // Small delay to show the ended state
    }
  }, [dialogHistory, connectionState, navigation]);

  const initiateConnection = async () => {
    setConnectionState(ConnectionState.ESTABLISHING);

    if (mode === "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
        variableValues: {
          username: candidateName,
          userid: userId,
        },
      });
    } else {
      let structuredQueries = "";
      if (queryList) {
        structuredQueries = queryList
          .map((query) => `- ${query}`)
          .join("\n");
      }

      await vapi.start(aiInterviewerConfig, {
        variableValues: {
          questions: structuredQueries,
        },
      });
    }
  };

  const terminateConnection = () => {
    setConnectionState(ConnectionState.TERMINATED);
    vapi.stop();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      {/* Interview Cards */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {/* AI Interviewer Card */}
        <div className="relative bg-[#0f1e35] border border-[#1e3a5f] rounded-2xl p-12 flex flex-col items-center justify-center space-y-6 min-h-[320px] hover:border-[#2e4a6f] transition-all">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
              </svg>
            </div>
            {agentSpeaking && (
              <span className="absolute inset-0 w-32 h-32 rounded-full border-4 border-purple-400 animate-ping" />
            )}
          </div>
          <h3 className="text-2xl font-semibold text-white">AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="relative bg-[#0f1e35] border border-[#1e3a5f] rounded-2xl p-12 flex flex-col items-center justify-center space-y-6 min-h-[320px] hover:border-[#2e4a6f] transition-all">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-400/50">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white">{candidateName}</h3>
        </div>
      </div>

      {/* Conversation Display */}
      {dialogHistory.length > 0 && (
        <div className="w-full max-w-2xl">
          <div className="bg-[#0f1e35] border border-[#1e3a5f] rounded-xl px-8 py-4">
            <p
              key={currentMessage}
              className={cn(
                "text-gray-300 text-center transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {currentMessage}
            </p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="flex flex-col items-center space-y-6">
        {connectionState === "IDLE" && !dialogHistory.length && (
          <p className="text-gray-400 text-lg">
            Alright, {candidateName.split(' ')[0]}. Should we start ?
          </p>
        )}
        
        {connectionState !== "CONNECTED" ? (
          <button 
            className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-green-500/50 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => initiateConnection()}
            disabled={connectionState === "ESTABLISHING"}
          >
            <span className={cn(
              connectionState === "ESTABLISHING" && "opacity-0"
            )}>
              {connectionState === "IDLE" || connectionState === "TERMINATED"
                ? "Start Interview"
                : "Connecting"}
            </span>
            {connectionState === "IDLE" || connectionState === "TERMINATED" ? (
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            ) : (
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
              </div>
            )}
          </button>
        ) : (
          <button 
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-red-600/50 transition-all"
            onClick={() => terminateConnection()}
          >
            End Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceInterviewer;
