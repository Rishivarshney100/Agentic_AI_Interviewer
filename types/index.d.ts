interface InterviewSession {
  id: string;
  position: string;
  experienceLevel: string;
  queryList: string[];
  technicalStack: string[];
  createdAt: string;
  userId: string;
  interviewType: string;
  isCompleted: boolean;
}

interface VoiceAgentProps {
  candidateName: string;
  userId?: string;
  sessionId?: string;
  mode: "generate" | "interview";
  queryList?: string[];
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface TechnologyIconProps {
  technicalStack: string[];
}
