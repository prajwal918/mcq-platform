import { notFound } from "next/navigation";
import { getQuizUnit, getQuizUnitIds } from "@/data/quizBank";
import QuizClient from "@/components/QuizClient";
import { QuizMode } from "@/types/quiz";

interface QuizPageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { subjectId } = await params;
  const unit = getQuizUnit(subjectId);

  if (!unit) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <QuizClient
        questions={unit.questions}
        mode={"quiz" as QuizMode}
        subjectId={unit.id}
        title={`${unit.subjectTitle} - ${unit.title}`}
      />
    </main>
  );
}

export function generateStaticParams() {
  return getQuizUnitIds().map((subjectId) => ({ subjectId }));
}
