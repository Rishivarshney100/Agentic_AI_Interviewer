"use server";

import { db } from "@/firebase/admin";

export async function getSessionById(id: string): Promise<InterviewSession | null> {
  const sessionDoc = await db.collection("sessions").doc(id).get();

  if (!sessionDoc.exists) return null;

  return { id: sessionDoc.id, ...sessionDoc.data() } as InterviewSession;
}
