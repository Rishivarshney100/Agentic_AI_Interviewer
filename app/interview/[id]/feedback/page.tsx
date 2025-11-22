import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getEvaluationBySessionId,
  getSessionById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";

const EvaluationResults = async ({ params }: RouteParams) => {
  const { id } = await params;

  const sessionData = await getSessionById(id);
  if (!sessionData) redirect("/");

  const evaluation = await getEvaluationBySessionId({
    sessionId: id,
    userId: "guest",
  });

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Performance Assessment -{" "}
          <span className="capitalize">{sessionData.position}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Rating */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Performance:{" "}
              <span className="text-primary-200 font-bold">
                {evaluation?.overallRating}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {evaluation?.createdAt
                ? dayjs(evaluation.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>{evaluation?.detailedSummary}</p>

      {/* Performance Analysis */}
      <div className="flex flex-col gap-4">
        <h2>Detailed Performance Metrics:</h2>
        {evaluation?.performanceMetrics?.map((metric, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {metric.name} ({metric.score}/100)
            </p>
            <p>{metric.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Key Strengths</h3>
        <ul>
          {evaluation?.keyStrengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Improvement Opportunities</h3>
        <ul>
          {evaluation?.improvementAreas?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Return Home
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Practice Again
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default EvaluationResults;
