export type Quiz = {
  _id: string;
  title: string;
  startDate: string;
  endDate: string;
  durationMinutes?: number;
  questions?: string[];
  totalMarks?: number;
  status?: "upcoming" | "open" | "closed";
  questionsCount?: number;
};

export async function getQuizzes(): Promise<Quiz[]> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/quiz`);
  if (!res.ok) throw new Error("Failed to fetch quizzes");

  const json = await res.json();
  return json?.data?.quizes || [];
}
