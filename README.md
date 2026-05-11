# Engineering MCQ Platform

An elite, production-grade Engineering MCQ platform built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Dual Mode System**: Quiz Mode (strict scoring) and Practice Mode (guided learning)
- **166 DBMS Questions**: Verbatim extraction from Units 1-3
- **Interactive SVG Diagrams**: Inline ER diagrams, Three-Schema Architecture, B+ Tree visualizations
- **Diagram Zoom/Pan**: react-zoom-pan-pinch with 0.3x–8x zoom
- **Fully Responsive**: Mobile-first design with dot pagination, touch-friendly buttons
- **Framer Motion**: Smooth page transitions and animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI (Card, Button, Badge, Progress)
- Framer Motion
- react-zoom-pan-pinch
- Lucide React icons

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                 # Dashboard
│   └── quiz/[subjectId]/
│       └── page.tsx             # Quiz route
├── components/
│   ├── ui/                      # Shadcn UI components
│   ├── QuizClient.tsx           # Main quiz engine
│   ├── EngineeringDiagram.tsx   # Zoom/pan diagram wrapper
│   └── diagrams/
│       ├── DiagramRenderer.tsx  # Lazy-loaded diagram mapper
│       ├── ERDiagramSymbols.tsx
│       ├── ThreeSchemaArchitecture.tsx
│       └── BPlusTreeDiagram.tsx
├── data/subjects/dbms/
│   └── questions.ts             # 166 DBMS MCQs (verbatim)
├── types/
│   └── quiz.ts                  # TypeScript schemas
├── utils/
│   └── getSubjects.ts           # Server-side subject scanner
├── lib/
│   └── utils.ts                 # cn() helper
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The static export will be generated in the `dist/` folder.

### 4. Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or connect your Git repository to Vercel for automatic deployments.

## Quiz Modes

### Quiz Mode (`/quiz/dbms?mode=quiz`)
- Next button disabled until an option is selected
- Options lock after selection with green/red feedback
- Score tracked and displayed in real-time
- Explanation revealed only after answering
- Results screen with percentage, correct/incorrect counts, and full review
- No skipping allowed

### Practice Mode (`/quiz/dbms?mode=practice`)
- Correct answer pre-highlighted in green immediately
- Explanation visible right away without clicking
- No scoring, no locking mechanism
- Next button always enabled
- Dot pagination allows jumping to any question instantly
- Badge shows "Practice Mode" in amber
- Ideal for pre-exam review and learning

## Subject Registration

To add a new subject:

1. Create a folder under `data/subjects/<subject_id>/`
2. Add a `questions.ts` file exporting a `QuizQuestion[]` array
3. Register the subject in `utils/getSubjects.ts` via `SUBJECT_MAP`

## Diagrams

Questions referencing visual structures automatically render inline SVG diagrams via `DiagramRenderer.tsx`. Supported diagrams:

- **ER Diagram Symbols**: Entity (rectangle), Attribute (ellipse), Multi-valued (double ellipse), Relationship (diamond), Weak entity (double rectangle), Derived (dashed ellipse)
- **Three-Schema Architecture**: External → Conceptual → Internal levels
- **B+ Tree Structure**: Root, internal nodes, linked leaf nodes with data pointers

Diagrams support zoom (0.3x–8x), pan, pinch gestures, and double-click toggle.

## License

MIT
