import { QuizQuestion } from "@/types/quiz";
import { questions as dbmsQuestions } from "@/data/subjects/dbms/questions";
import { questions as daaUnit1Questions } from "@/data/subjects/daa_unit1/questions";
import { questions as daaUnit2Questions } from "@/data/subjects/daa_unit2/questions";
import { questions as daaUnit3Questions } from "@/data/subjects/daa_unit3/questions";
import { questions as linearAlgebraQuestions } from "@/data/subjects/linear-algebra/questions";
import { questions as mpUnit1Questions } from "@/data/subjects/cs3005-unit1/questions";
import { questions as mpUnit2Questions } from "@/data/subjects/cs3005-unit2/questions";
import { questions as mpUnit3Questions } from "@/data/subjects/cs3005-unit3/questions";
import { sepm_unit_1_questions as sepmUnit1Questions } from "@/data/subjects/sepm-unit-1/questions";
import { sepm_unit_2_questions as sepmUnit2Questions } from "@/data/subjects/sepm-unit-2/questions";

export interface QuizUnit {
  id: string;
  subjectId: string;
  subjectTitle: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface SubjectGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  units: QuizUnit[];
}

function byIdPrefix(questions: QuizQuestion[], prefix: string) {
  return questions.filter((question) => question.id.startsWith(prefix));
}

function byQuestionNumber(
  questions: QuizQuestion[],
  min: number,
  max: number
) {
  return questions.filter((question) => {
    const value = Number(question.id.replace(/^q/, ""));
    return value >= min && value <= max;
  });
}

export const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    id: "dbms",
    title: "DBMS",
    description: "Database Management Systems question bank from the DBMS zip.",
    icon: "Database",
    units: [
      {
        id: "dbms-unit1",
        subjectId: "dbms",
        subjectTitle: "DBMS",
        title: "Unit 1",
        description: "Database concepts, ER model, relational model, and SQL basics.",
        questions: byIdPrefix(dbmsQuestions, "u1_"),
      },
      {
        id: "dbms-unit2",
        subjectId: "dbms",
        subjectTitle: "DBMS",
        title: "Unit 2",
        description: "SQL, constraints, views, normalization, and functional dependencies.",
        questions: byIdPrefix(dbmsQuestions, "u2_"),
      },
      {
        id: "dbms-unit3",
        subjectId: "dbms",
        subjectTitle: "DBMS",
        title: "Unit 3",
        description: "Indexing, query processing, transactions, recovery, and concurrency.",
        questions: byIdPrefix(dbmsQuestions, "u3_"),
      },
    ],
  },
  {
    id: "daa",
    title: "Design and Analysis of Algorithms",
    description: "DAA MCQs connected from the da.zip units.",
    icon: "Network",
    units: [
      {
        id: "daa_unit1",
        subjectId: "daa",
        subjectTitle: "Design and Analysis of Algorithms",
        title: "Unit 1",
        description: "Algorithm analysis, brute force, and divide and conquer.",
        questions: daaUnit1Questions,
      },
      {
        id: "daa_unit2",
        subjectId: "daa",
        subjectTitle: "Design and Analysis of Algorithms",
        title: "Unit 2",
        description: "Decrease and conquer, transform and conquer, heaps, and dynamic programming.",
        questions: daaUnit2Questions,
      },
      {
        id: "daa_unit3",
        subjectId: "daa",
        subjectTitle: "Design and Analysis of Algorithms",
        title: "Unit 3",
        description: "Greedy algorithms, graph algorithms, backtracking, and NP-completeness.",
        questions: daaUnit3Questions,
      },
    ],
  },
  {
    id: "maths",
    title: "Linear Algebra",
    description: "MA2005-1 Linear Algebra units from maths.zip.",
    icon: "Calculator",
    units: [
      {
        id: "linear-algebra-unit1",
        subjectId: "maths",
        subjectTitle: "Linear Algebra",
        title: "Unit 1",
        description: "Rank, systems of equations, eigenvalues, and matrix decompositions.",
        questions: byQuestionNumber(linearAlgebraQuestions, 1, 41),
      },
      {
        id: "linear-algebra-unit2",
        subjectId: "maths",
        subjectTitle: "Linear Algebra",
        title: "Unit 2",
        description: "Vector spaces, bases, linear transformations, and orthogonality.",
        questions: byQuestionNumber(linearAlgebraQuestions, 42, 75),
      },
      {
        id: "linear-algebra-unit3",
        subjectId: "maths",
        subjectTitle: "Linear Algebra",
        title: "Unit 3",
        description: "Quadratic forms, PCA, SVD, and applied linear algebra.",
        questions: byQuestionNumber(linearAlgebraQuestions, 76, 92),
      },
    ],
  },
  {
    id: "mp",
    title: "Microprocessor and Embedded Systems",
    description: "CS3005 unit question banks from mp.zip.",
    icon: "Cpu",
    units: [
      {
        id: "cs3005-unit1",
        subjectId: "mp",
        subjectTitle: "Microprocessor and Embedded Systems",
        title: "Unit 1",
        description: "8086 architecture, addressing modes, instruction set, and assembly basics.",
        questions: mpUnit1Questions,
      },
      {
        id: "cs3005-unit2",
        subjectId: "mp",
        subjectTitle: "Microprocessor and Embedded Systems",
        title: "Unit 2",
        description: "Interrupts, ARM systems, Arduino, and peripheral interfacing.",
        questions: mpUnit2Questions,
      },
      {
        id: "cs3005-unit3",
        subjectId: "mp",
        subjectTitle: "Microprocessor and Embedded Systems",
        title: "Unit 3",
        description: "8086 modes, bus cycles, instruction encoding, and interrupt architecture.",
        questions: mpUnit3Questions,
      },
    ],
  },
  {
    id: "sepm",
    title: "Software Engineering and Project Management",
    description: "SEPM unit question banks from sepm.zip.",
    icon: "Code2",
    units: [
      {
        id: "sepm-unit-1",
        subjectId: "sepm",
        subjectTitle: "Software Engineering and Project Management",
        title: "Unit 1",
        description: "SRS, SDLC, process models, ethics, and software engineering basics.",
        questions: sepmUnit1Questions,
      },
      {
        id: "sepm-unit-2",
        subjectId: "sepm",
        subjectTitle: "Software Engineering and Project Management",
        title: "Unit 2",
        description: "UML, agile, Scrum, XP, and software testing.",
        questions: sepmUnit2Questions,
      },
    ],
  },
];

export const QUIZ_UNITS = SUBJECT_GROUPS.flatMap((subject) => subject.units);

export function getSubjectGroups() {
  return SUBJECT_GROUPS;
}

export function getQuizUnit(id: string) {
  return QUIZ_UNITS.find((unit) => unit.id === id);
}

export function getQuizUnitIds() {
  return QUIZ_UNITS.map((unit) => unit.id);
}
