import Link from "next/link";
import {
  BookOpen,
  Calculator,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  Network,
  Play,
  type LucideIcon,
} from "lucide-react";
import { getSubjectGroups } from "@/data/quizBank";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  Code2,
  Cpu,
  Database,
  Network,
};

export default function DashboardPage() {
  const subjects = getSubjectGroups();
  const totalUnits = subjects.reduce(
    (count, subject) => count + subject.units.length,
    0
  );
  const totalQuestions = subjects.reduce(
    (count, subject) =>
      count +
      subject.units.reduce(
        (unitCount, unit) => unitCount + unit.questions.length,
        0
      ),
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-3 py-5 sm:px-6 sm:py-7 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
              <GraduationCap className="h-4 w-4" />
              Engineering MCQ Platform
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Subjects and Units
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Choose a subject, then open the unit you want in practice mode or quiz mode.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
              <Layers3 className="h-3.5 w-3.5" />
              {totalUnits} Units
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
              <ClipboardCheck className="h-3.5 w-3.5" />
              {totalQuestions} Questions
            </Badge>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {subjects.map((subject) => {
            const Icon = iconMap[subject.icon] || BookOpen;
            const subjectQuestionCount = subject.units.reduce(
              (count, unit) => count + unit.questions.length,
              0
            );

            return (
              <Card
                key={subject.id}
                className="flex h-full flex-col border-slate-200 shadow-sm dark:border-slate-800"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-lg leading-tight sm:text-xl">
                          {subject.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-xs leading-relaxed sm:text-sm">
                          {subject.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {subjectQuestionCount} Qs
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3">
                  {subject.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {unit.title}
                            </h2>
                            <Badge variant="secondary" className="text-[11px]">
                              {unit.questions.length} Qs
                            </Badge>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            {unit.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 gap-2">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-amber-500 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30"
                          >
                            <Link href={`/quiz/${unit.id}?mode=practice`}>
                              <BookOpen className="mr-1.5 h-4 w-4" />
                              Practice
                            </Link>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="bg-emerald-600 text-white hover:bg-emerald-700"
                          >
                            <Link href={`/quiz/${unit.id}?mode=quiz`}>
                              <Play className="mr-1.5 h-4 w-4" />
                              Quiz
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
