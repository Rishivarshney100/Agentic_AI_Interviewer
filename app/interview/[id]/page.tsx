import Image from "next/image";
import { redirect } from "next/navigation";

import VoiceInterviewer from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import {
  getEvaluationBySessionId,
  getSessionById,
} from "@/lib/actions/general.action";
import TechnologyBadges from "@/components/DisplayTechIcons";

const SessionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const sessionData = await getSessionById(id);
  if (!sessionData) redirect("/");

  const evaluation = await getEvaluationBySessionId({
    sessionId: id,
    userId: "guest",
  });

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full max-w-4xl bg-[#0f1e35] border border-[#1e3a5f] rounded-2xl p-6">
        <div className="flex flex-row gap-6 justify-between items-center max-md:flex-col max-md:items-start">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={48}
              height={48}
              className="rounded-full object-cover size-[48px] border-2 border-purple-500"
            />
            <h2 className="capitalize text-2xl font-semibold text-white">
              {sessionData.position} Interview
            </h2>
          </div>

          <div className="flex gap-4 items-center">
            <TechnologyBadges technicalStack={sessionData.technicalStack} />
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30 text-sm font-medium">
              {sessionData.interviewType}
            </span>
          </div>
        </div>
      </div>

      <VoiceInterviewer
        candidateName="Guest User"
        userId="guest"
        sessionId={id}
        mode="interview"
        queryList={sessionData.queryList}
        evaluationId={evaluation?.id}
      />
    </div>
  );
};

export default SessionDetails;
