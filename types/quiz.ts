export type QuizMode = "quiz" | "practice";

export interface QuizOption {
  id: string;
  text?: string;
  diagramUrl?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  diagramUrl?: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  answers: Record<string, string>;
}

export interface SubjectMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
}
