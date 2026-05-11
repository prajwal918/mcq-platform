"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  BookOpen,
  Trophy,
  Clock,
  AlertCircle,
} from "lucide-react";
import { QuizQuestion, QuizMode, QuizResult } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DiagramRenderer from "@/components/diagrams/DiagramRenderer";

interface QuizClientProps {
  questions: QuizQuestion[];
  mode: QuizMode;
  subjectId: string;
  title?: string;
}

export default function QuizClient({
  questions,
  mode: initialMode,
  subjectId,
  title,
}: QuizClientProps) {
  const router = useRouter();
  const [mode, setMode] = useState<QuizMode>(initialMode);
  const isQuiz = mode === "quiz";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const requestedMode = new URLSearchParams(window.location.search).get("mode");
    setMode(requestedMode === "practice" ? "practice" : "quiz");
  }, []);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const hasAnswered = !!answers[currentQuestion.id];
  const selectedOption = answers[currentQuestion.id];
  const isCorrect = selectedOption === currentQuestion.correctOptionId;

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = useCallback(
    (optionId: string) => {
      if (isQuiz && hasAnswered) return;
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
    },
    [isQuiz, hasAnswered, currentQuestion.id]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setVisited((prev) => new Set(prev).add(next));
    } else {
      setShowResults(true);
    }
  }, [currentIndex, totalQuestions]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      setVisited((prevSet) => new Set(prevSet).add(prev));
    }
  }, [currentIndex]);

  const handleJump = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setVisited((prev) => new Set(prev).add(index));
    },
    []
  );

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setVisited(new Set([0]));
  }, []);

  const result: QuizResult = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) correct++;
      else if (answers[q.id]) incorrect++;
    });
    return {
      totalQuestions,
      correctCount: correct,
      incorrectCount: incorrect,
      percentage: Math.round((correct / totalQuestions) * 100),
      answers,
    };
  }, [answers, questions, totalQuestions]);

  if (showResults) {
    return (
      <ResultsScreen
        result={result}
        questions={questions}
        mode={mode}
        onRestart={handleRestart}
        onHome={() => router.push("/")}
        onReview={(idx) => {
          setShowResults(false);
          setCurrentIndex(idx);
        }}
      />
    );
  }

  return (
    <div className="container mx-auto px-2 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-10 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/")}
          className="text-slate-600 dark:text-slate-400"
        >
          <Home className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Dashboard</span>
        </Button>
        <div className="min-w-0 px-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
          {title || subjectId}
        </div>
        <Badge
          variant={isQuiz ? "default" : "outline"}
          className={
            isQuiz
              ? "bg-emerald-600 text-white"
              : "border-amber-500 text-amber-700 dark:text-amber-400"
          }
        >
          {isQuiz ? "Quiz Mode" : "Practice Mode"}
        </Badge>
      </div>

      {/* Progress */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1.5">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          {isQuiz && (
            <span>
              Score: {result.correctCount}/{totalQuestions}
            </span>
          )}
        </div>
        <Progress value={progress} className="h-2 sm:h-2.5" />
      </div>

      {/* Dot Pagination - Mobile Only */}
      <div className="flex sm:hidden gap-1.5 mb-4 overflow-x-auto pb-1">
        {questions.map((_, idx) => {
          const answered = !!answers[questions[idx].id];
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => handleJump(idx)}
              className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-colors ${
                isCurrent
                  ? "bg-slate-900 dark:bg-slate-100"
                  : answered
                  ? isQuiz
                    ? answers[questions[idx].id] === questions[idx].correctOptionId
                      ? "bg-emerald-500"
                      : "bg-red-500"
                    : "bg-amber-400"
                  : visited.has(idx)
                  ? "bg-slate-400"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
            />
          );
        })}
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-3 sm:p-5 lg:p-6">
              {/* Question Text */}
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed mb-4">
                {currentQuestion.text}
              </h2>

              {/* Diagram */}
              <DiagramRenderer questionId={currentQuestion.id} />

              {/* Options */}
              <div className="space-y-2 sm:space-y-3 mt-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  const isCorrectOpt = option.id === currentQuestion.correctOptionId;
                  const showCorrect = !isQuiz || hasAnswered;
                  const showIncorrect = isQuiz && hasAnswered && isSelected && !isCorrect;

                  let btnClass =
                    "w-full text-left justify-start h-auto min-h-[52px] sm:min-h-[56px] lg:min-h-[60px] px-3 sm:px-4 py-3 text-xs sm:text-sm lg:text-base rounded-lg border transition-all duration-200 ";

                  if (showCorrect && isCorrectOpt) {
                    btnClass +=
                      "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-800 dark:text-emerald-300 ";
                  } else if (showIncorrect) {
                    btnClass +=
                      "bg-red-50 dark:bg-red-950/30 border-red-500 text-red-800 dark:text-red-300 ";
                  } else if (isSelected) {
                    btnClass +=
                      "bg-slate-100 dark:bg-slate-800 border-slate-400 dark:border-slate-600 text-slate-900 dark:text-slate-100 ";
                  } else {
                    btnClass +=
                      "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 ";
                  }

                  if (isQuiz && hasAnswered) {
                    btnClass += " cursor-default";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      disabled={isQuiz && hasAnswered}
                      className={btnClass}
                    >
                      <span className="inline-flex items-start gap-2 sm:gap-3">
                        <span
                          className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                            showCorrect && isCorrectOpt
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : showIncorrect
                              ? "bg-red-500 border-red-500 text-white"
                              : isSelected
                              ? "bg-slate-800 border-slate-800 text-white dark:bg-slate-200 dark:border-slate-200 dark:text-slate-900"
                              : "border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {option.id.toUpperCase()}
                        </span>
                        <span className="pt-0.5 leading-snug">{option.text || "Diagram option"}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {((!isQuiz && currentQuestion.explanation) ||
                  (isQuiz && hasAnswered && currentQuestion.explanation)) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 sm:mt-5 overflow-hidden"
                  >
                    <div className="p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                            Explanation
                          </p>
                          <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                            {currentQuestion.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 sm:mt-6 gap-3">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="h-11 sm:h-12 px-3 sm:px-5 text-xs sm:text-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <Button
          onClick={handleNext}
          disabled={isQuiz && !hasAnswered}
          className="h-11 sm:h-12 px-4 sm:px-6 text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
        >
          {currentIndex === totalQuestions - 1 ? (
            <>
              <span className="hidden sm:inline">
                {isQuiz ? "Finish Quiz" : "Finish Review"}
              </span>
              <span className="sm:hidden">Finish</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
            </>
          )}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Results Screen ---------------- */

function ResultsScreen({
  result,
  questions,
  mode,
  onRestart,
  onHome,
  onReview,
}: {
  result: QuizResult;
  questions: QuizQuestion[];
  mode: QuizMode;
  onRestart: () => void;
  onHome: () => void;
  onReview: (idx: number) => void;
}) {
  const isQuiz = mode === "quiz";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-2 py-4 sm:px-4 sm:py-8 lg:px-8 lg:py-12 max-w-3xl"
    >
      <Card className="border border-slate-200 dark:border-slate-800">
        <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
          {isQuiz ? (
            <>
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                Quiz Complete!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6">
                Here is how you performed
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="p-3 sm:p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {result.percentage}%
                  </p>
                  <p className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-500 mt-1">
                    Score
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                    {result.correctCount}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Correct
                  </p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-950/20">
                  <p className="text-xl sm:text-2xl font-bold text-red-700 dark:text-red-400">
                    {result.incorrectCount}
                  </p>
                  <p className="text-[10px] sm:text-xs text-red-600 dark:text-red-500 mt-1">
                    Incorrect
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-100 dark:bg-amber-950/30 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                Practice Complete!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6">
                You have reviewed all {result.totalQuestions} questions
              </p>
            </>
          )}

          {/* Review List */}
          <div className="text-left mb-6">
            <h3 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Question Review
            </h3>
            <div className="space-y-2 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const ans = result.answers[q.id];
                const correct = ans === q.correctOptionId;
                const missed = !ans;
                return (
                  <button
                    key={q.id}
                    onClick={() => onReview(idx)}
                    className="w-full flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-left"
                  >
                    {isQuiz ? (
                      correct ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                      ) : missed ? (
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                      )
                    ) : (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 truncate">
                      Q{idx + 1}. {q.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={onHome}
              className="flex-1 h-11 sm:h-12 text-xs sm:text-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button
              onClick={onRestart}
              className="flex-1 h-11 sm:h-12 text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {isQuiz ? "Retake Quiz" : "Restart Practice"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
