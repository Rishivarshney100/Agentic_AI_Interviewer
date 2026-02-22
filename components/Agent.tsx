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
  autoStart = false,
}: VoiceAgentProps & { autoStart?: boolean }) => {
  const navigation = useRouter();
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.IDLE);
  const [dialogHistory, setDialogHistory] = useState<DialogEntry[]>([]);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [userTranscript, setUserTranscript] = useState<string>("");
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const handleConnectionEstablished = () => {
      setConnectionState(ConnectionState.CONNECTED);
      setStartTime(Date.now());
    };

    const handleConnectionClosed = () => {
      setConnectionState(ConnectionState.TERMINATED);
      setStartTime(null);
      setElapsedTime(0);
    };

    const handleIncomingMessage = (msg: Message) => {
      if (msg.type === "transcript") {
        if (msg.role === "user") {
          // Show interim transcripts for user in real-time
          if (msg.transcriptType === "partial") {
            setUserTranscript(msg.transcript);
          } else if (msg.transcriptType === "final") {
            setUserTranscript(msg.transcript);
            const dialogEntry = { role: msg.role, content: msg.transcript };
            setDialogHistory((previous) => [...previous, dialogEntry]);
          }
        } else {
          // Only add final transcripts for assistant
          if (msg.transcriptType === "final") {
            const dialogEntry = { role: msg.role, content: msg.transcript };
            setDialogHistory((previous) => [...previous, dialogEntry]);
          }
        }
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

    // When call ends, redirect to personal page
    if (connectionState === ConnectionState.TERMINATED) {
      console.log("✅ Interview completed! Redirecting to personal page...");
      setTimeout(() => {
        navigation.push("/interview");
      }, 1000); // Small delay to show the ended state
    }
  }, [dialogHistory, connectionState, navigation]);

  // Auto-start interview when autoStart prop is true
  useEffect(() => {
    if (autoStart && connectionState === ConnectionState.IDLE) {
      const startInterview = async () => {
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
      startInterview();
    }
  }, [autoStart, connectionState, mode, candidateName, userId, queryList]);

  // Real-time timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (startTime && connectionState === ConnectionState.CONNECTED) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, connectionState]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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

  // Get the latest assistant message for display
  const latestAssistantMessage = dialogHistory
    .filter(entry => entry.role === "assistant")
    .slice(-1)[0]?.content || "";

  const latestUserMessage = dialogHistory
    .filter(entry => entry.role === "user")
    .slice(-1)[0]?.content || "";

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      {/* Two Panels Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* AI Interviewer Panel */}
        <div className="glassmorphism rounded-2xl p-8 border border-purple-500/30 card-glow-purple flex flex-col min-h-[150px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  <circle cx="9" cy="10" r="1.5"/>
                  <circle cx="15" cy="10" r="1.5"/>
                  <path d="M12 14c-1.5 0-3 .5-3 1.5v1h6v-1c0-1-.5-1.5-3-1.5z"/>
                </svg>
              </div>
              {agentSpeaking && (
                <span className="absolute inset-0 w-12 h-12 rounded-xl border-2 border-purple-400 animate-ping" />
              )}
            </div>
            <h3 className="text-2xl font-semibold text-white">AI Interviewer</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            {connectionState === "CONNECTED" ? (
              <div className="space-y-4">
                <p className="text-gray-400 text-lg mb-4">
                  {agentSpeaking ? "Speaking..." : "Listening..."}
                </p>
                {latestAssistantMessage && (
                  <div className="bg-white/5 rounded-lg p-4 border border-purple-500/20">
                    <p className="text-white text-lg leading-relaxed">{latestAssistantMessage}</p>
                    <div className="text-right mt-2 text-xs text-gray-400">{formatTime(elapsedTime)}</div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-lg">Waiting to start...</p>
            )}
          </div>
        </div>

        {/* User Panel */}
        <div className="glassmorphism rounded-2xl p-8 border border-blue-500/30 card-glow-blue flex flex-col min-h-[300px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white">You</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            {connectionState === "CONNECTED" ? (
              <div className="space-y-4">
                <p className="text-gray-400 text-lg mb-4">
                  {userTranscript ? "Speaking..." : "Start voice response..."}
                </p>
                {(userTranscript || latestUserMessage) && (
                  <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                    <p className="text-white text-lg leading-relaxed">{userTranscript || latestUserMessage}</p>
                    <div className="text-right mt-2 text-xs text-gray-400">{formatTime(elapsedTime)}</div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-lg">Ready to respond...</p>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center space-y-6">
        {connectionState !== "CONNECTED" ? (
          <button 
            className="group relative px-12 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1",
                connectionState !== "ESTABLISHING" && "hidden"
              )}>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
              </div>
            )}
          </button>
        ) : (
          <button 
            className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-red-600/50 transition-all transform hover:scale-105"
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
