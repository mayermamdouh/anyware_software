import { GiSandsOfTime } from "react-icons/gi";
import { Button } from "./ui/button";
import type { Quiz } from "@/services/quiz";

type Props = {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
};

export default function WhatsDue({ quizzes, loading, error }: Props) {
  return (
    <section className="w-full bg-white flex flex-col py-2 px-3.5 rounded-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-bold">What's Due</h4>
        <span className="text-primary font-bold cursor-pointer text-md">
          All
        </span>
      </div>

      {loading && <p className="text-gray-500 text-sm">Loading quizzes...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {!loading && !error && quizzes.length === 0 && (
        <p className="text-gray-500 text-sm">No quizzes found.</p>
      )}

      <div className="flex flex-col gap-5 mt-5">
        {quizzes.map((quiz) => (
          <div className="space-y-2" key={quiz._id}>
            <div className="flex items-center gap-1.5">
              <GiSandsOfTime className="w-6 h-6 text-primary" />
              <span className="text-sm">{quiz.title}</span>
            </div>

            <p className="text-sm text-muted">
              From {new Date(quiz.startDate).toLocaleString()}
              <br />
              to {new Date(quiz.endDate).toLocaleString()}
            </p>

            <Button className="w-full bg-transparent border-2 border-primary text-primary hover:text-white">
              Start Quiz
            </Button>

            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
