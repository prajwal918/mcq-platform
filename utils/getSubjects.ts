import fs from "fs";
import path from "path";
import { SubjectMeta } from "@/types/quiz";

export const SUBJECT_MAP: Record<string, Omit<SubjectMeta, "questionCount">> = {
  dbms: {
    id: "dbms",
    title: "DBMS",
    description: "Database Management Systems — Unit 1-3 MCQ Bank",
    icon: "Database",
  },
};

export function getSubjects(): SubjectMeta[] {
  const subjectsDir = path.join(process.cwd(), "data", "subjects");
  if (!fs.existsSync(subjectsDir)) return [];

  const folders = fs.readdirSync(subjectsDir).filter((f) => {
    const full = path.join(subjectsDir, f);
    return fs.statSync(full).isDirectory();
  });

  return folders.map((folder) => {
    const override = SUBJECT_MAP[folder];
    const title = override?.title ?? folder.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const description = override?.description ?? `${title} MCQ practice and quiz`;
    const icon = override?.icon ?? "BookOpen";

    // Count questions
    let questionCount = 0;
    const qFile = path.join(subjectsDir, folder, "questions.ts");
    if (fs.existsSync(qFile)) {
      const content = fs.readFileSync(qFile, "utf-8");
      const match = content.match(/questions:\s*QuizQuestion\[\]/);
      if (match) {
        // rough count by id occurrences
        questionCount = (content.match(/id:\s*"[^"]+"/g) || []).length;
      }
    }

    return {
      id: folder,
      title,
      description,
      icon,
      questionCount,
    };
  });
}
