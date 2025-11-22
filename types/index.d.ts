interface InterviewEvaluation {
  id: string;
  sessionId: string;
  overallRating: number;
  performanceMetrics: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  keyStrengths: string[];
  improvementAreas: string[];
  detailedSummary: string;
  createdAt: string;
}

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

interface CreateEvaluationParams {
  sessionId: string;
  userId: string;
  conversationHistory: { role: string; content: string }[];
  evaluationId?: string;
}

interface AppUser {
  name: string;
  email: string;
  id: string;
}

interface SessionCardProps {
  sessionId?: string;
  userId?: string;
  position: string;
  interviewType: string;
  technicalStack: string[];
  createdAt?: string;
}

interface VoiceAgentProps {
  candidateName: string;
  userId?: string;
  sessionId?: string;
  evaluationId?: string;
  mode: "generate" | "interview";
  queryList?: string[];
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GetEvaluationBySessionIdParams {
  sessionId: string;
  userId: string;
}

interface GetLatestSessionsParams {
  userId: string;
  limit?: number;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

type FormType = "sign-in" | "sign-up";

interface SessionConfigProps {
  sessionId: string;
  position: string;
  experienceLevel: string;
  interviewType: string;
  technicalStack: string[];
  questionCount: number;
}

interface TechnologyIconProps {
  technicalStack: string[];
}
