"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { evaluationCriteriaSchema } from "@/constants";

export async function generateEvaluation(params: CreateEvaluationParams) {
  const { sessionId, userId, conversationHistory, evaluationId } = params;

  try {
    const formattedDialog = conversationHistory
      .map(
        (entry: { role: string; content: string }) =>
          `- ${entry.role}: ${entry.content}\n`
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }) as any,
      schema: evaluationCriteriaSchema,
      prompt: `
        You are an experienced hiring manager evaluating a job interview session. Analyze the candidate's performance comprehensively. Be objective and highlight both strengths and weaknesses.
        Conversation History:
        ${formattedDialog}

        Rate the candidate from 0 to 100 in these key dimensions:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system:
        "You are an experienced hiring manager conducting a thorough candidate assessment. Provide constructive and actionable feedback.",
    });

    const assessmentData = {
      sessionId: sessionId,
      userId: userId,
      overallRating: object.totalScore,
      performanceMetrics: object.categoryScores,
      keyStrengths: object.strengths,
      improvementAreas: object.areasForImprovement,
      detailedSummary: object.finalAssessment,
      createdAt: new Date().toISOString(),
    };

    let evaluationRef;

    if (evaluationId) {
      evaluationRef = db.collection("evaluations").doc(evaluationId);
    } else {
      evaluationRef = db.collection("evaluations").doc();
    }

    await evaluationRef.set(assessmentData);

    return { success: true, feedbackId: evaluationRef.id };
  } catch (error) {
    console.error("Error generating evaluation:", error);
    return { success: false };
  }
}

export async function getSessionById(id: string): Promise<InterviewSession | null> {
  const sessionDoc = await db.collection("sessions").doc(id).get();

  return sessionDoc.data() as InterviewSession | null;
}

export async function getEvaluationBySessionId(
  params: GetEvaluationBySessionIdParams
): Promise<InterviewEvaluation | null> {
  const { sessionId, userId } = params;

  const querySnapshot = await db
    .collection("evaluations")
    .where("sessionId", "==", sessionId)
    .where("userId", "==", userId)
    .limit(1)
    .get();

  if (querySnapshot.empty) return null;

  const evaluationDoc = querySnapshot.docs[0];
  return { id: evaluationDoc.id, ...evaluationDoc.data() } as InterviewEvaluation;
}

export async function getLatestSessions(
  params: GetLatestSessionsParams
): Promise<InterviewSession[] | null> {
  const { userId, limit = 20 } = params;

  const sessions = await db
    .collection("sessions")
    .orderBy("createdAt", "desc")
    .where("isCompleted", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return sessions.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as InterviewSession[];
}

export async function getSessionsByUserId(
  userId: string
): Promise<InterviewSession[] | null> {
  const sessions = await db
    .collection("sessions")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return sessions.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as InterviewSession[];
}
