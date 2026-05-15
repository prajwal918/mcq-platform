"use client";

import { lazy, Suspense } from "react";
import type { ComponentType, LazyExoticComponent } from "react";
import EngineeringDiagram from "@/components/EngineeringDiagram";

const ERDiagramSymbols = lazy(() => import("./ERDiagramSymbols"));
const ThreeSchemaArchitecture = lazy(() => import("./ThreeSchemaArchitecture"));
const BPlusTreeDiagram = lazy(() => import("./BPlusTreeDiagram"));

const AVLTreeDiagram = lazy(() =>
  import("./AVLTreeDiagram").then((module) => ({
    default: module.AVLTreeDiagram,
  }))
);
const MaxHeapDiagram = lazy(() =>
  import("./MaxHeapDiagram").then((module) => ({
    default: module.MaxHeapDiagram,
  }))
);
const PrimsAlgorithmDiagram = lazy(() =>
  import("./PrimsAlgorithmDiagram").then((module) => ({
    default: module.PrimsAlgorithmDiagram,
  }))
);
const HuffmanTreeDiagram = lazy(() =>
  import("./HuffmanTreeDiagram").then((module) => ({
    default: module.HuffmanTreeDiagram,
  }))
);
const TopologicalSortDiagram = lazy(() =>
  import("./TopologicalSortDiagram").then((module) => ({
    default: module.TopologicalSortDiagram,
  }))
);
const Tree23SplitDiagram = lazy(() =>
  import("./Tree23SplitDiagram").then((module) => ({
    default: module.Tree23SplitDiagram,
  }))
);
const BellmanFordDiagram = lazy(() =>
  import("./BellmanFordDiagram").then((module) => ({
    default: module.BellmanFordDiagram,
  }))
);
const BacktrackingTreeDiagram = lazy(() =>
  import("./BacktrackingTreeDiagram").then((module) => ({
    default: module.BacktrackingTreeDiagram,
  }))
);

const DiagramQ5 = lazy(() => import("./DiagramQ5"));
const DiagramQ7 = lazy(() => import("./DiagramQ7"));
const DiagramQ8 = lazy(() => import("./DiagramQ8"));
const DiagramQ9 = lazy(() => import("./DiagramQ9"));
const DiagramQ10 = lazy(() => import("./DiagramQ10"));
const DiagramQ12 = lazy(() => import("./DiagramQ12"));
const DiagramQ13 = lazy(() => import("./DiagramQ13"));
const DiagramQ15 = lazy(() => import("./DiagramQ15"));
const DiagramQ16 = lazy(() => import("./DiagramQ16"));
const DiagramQ18 = lazy(() => import("./DiagramQ18"));
const DiagramQ20 = lazy(() => import("./DiagramQ20"));
const DiagramQ21 = lazy(() => import("./DiagramQ21"));
const DiagramQ24 = lazy(() => import("./DiagramQ24"));
const DiagramQ25 = lazy(() => import("./DiagramQ25"));
const DiagramQ26 = lazy(() => import("./DiagramQ26"));
const DiagramQ30 = lazy(() => import("./DiagramQ30"));
const DiagramQ32 = lazy(() => import("./DiagramQ32"));
const DiagramQ34 = lazy(() => import("./DiagramQ34"));
const DiagramQ38 = lazy(() => import("./DiagramQ38"));
const DiagramQ39 = lazy(() => import("./DiagramQ39"));
const DiagramQ41 = lazy(() => import("./DiagramQ41"));
const DiagramQ48 = lazy(() => import("./DiagramQ48"));
const DiagramQ49 = lazy(() => import("./DiagramQ49"));
const DiagramQ55 = lazy(() => import("./DiagramQ55"));
const DiagramQ56 = lazy(() => import("./DiagramQ56"));
const DiagramQ59 = lazy(() => import("./DiagramQ59"));
const DiagramQ62 = lazy(() => import("./DiagramQ62"));
const DiagramQ63 = lazy(() => import("./DiagramQ63"));
const DiagramQ65 = lazy(() => import("./DiagramQ65"));
const DiagramQ67 = lazy(() => import("./DiagramQ67"));
const DiagramQ70 = lazy(() => import("./DiagramQ70"));
const DiagramQ72 = lazy(() => import("./DiagramQ72"));
const DiagramQ76 = lazy(() => import("./DiagramQ76"));
const DiagramQ78 = lazy(() => import("./DiagramQ78"));
const DiagramQ79 = lazy(() => import("./DiagramQ79"));
const DiagramQ81 = lazy(() => import("./DiagramQ81"));
const DiagramQ82 = lazy(() => import("./DiagramQ82"));
const DiagramQ86 = lazy(() => import("./DiagramQ86"));
const DiagramQ89 = lazy(() => import("./DiagramQ89"));
const DiagramQ90 = lazy(() => import("./DiagramQ90"));

const SegmentOffsetDiagram = lazy(() =>
  import("./SegmentOffsetDiagram").then((module) => ({
    default: module.SegmentOffsetDiagram,
  }))
);
const MemoryAddressingDiagram = lazy(() =>
  import("./MemoryAddressingDiagram").then((module) => ({
    default: module.MemoryAddressingDiagram,
  }))
);
const BitRotationRCLDiagram = lazy(() =>
  import("./BitRotationRCLDiagram").then((module) => ({
    default: module.BitRotationRCLDiagram,
  }))
);
const SevenSegmentDiagram = lazy(() =>
  import("./SevenSegmentDiagram").then((module) => ({
    default: module.SevenSegmentDiagram,
  }))
);
const StepperMotorDiagram = lazy(() =>
  import("./StepperMotorDiagram").then((module) => ({
    default: module.StepperMotorDiagram,
  }))
);
const ArduinoPinsDiagram = lazy(() =>
  import("./ArduinoPinsDiagram").then((module) => ({
    default: module.ArduinoPinsDiagram,
  }))
);
const KeypadMatrixDiagram = lazy(() =>
  import("./KeypadMatrixDiagram").then((module) => ({
    default: module.KeypadMatrixDiagram,
  }))
);
const PinoutAD0AD15 = lazy(() => import("./PinoutAD0AD15"));
const ReadCycleTiming = lazy(() => import("./ReadCycleTiming"));
const MovInstructionEncoding = lazy(() => import("./MovInstructionEncoding"));
const InterruptStackPush = lazy(() => import("./InterruptStackPush"));
const InterruptVectorTable = lazy(() => import("./InterruptVectorTable"));

const SpiralModelDiagram = lazy(() => import("./SpiralModelDiagram"));
const WaterfallModelDiagram = lazy(() => import("./WaterfallModelDiagram"));
const SDLCDiagram = lazy(() => import("./SDLCDiagram"));
const UMLClassDiagram = lazy(() => import("./UMLClassDiagram"));
const ScrumProcessDiagram = lazy(() => import("./ScrumProcessDiagram"));
const TestingLevelsDiagram = lazy(() => import("./TestingLevelsDiagram"));
const AgileManifestoDiagram = lazy(() => import("./AgileManifestoDiagram"));

const diagramMap: Record<string, LazyExoticComponent<ComponentType>> = {
  u1_4: ThreeSchemaArchitecture,
  u1_11: ERDiagramSymbols,
  u1_17: ERDiagramSymbols,
  u1_18: ERDiagramSymbols,
  u1_19: ERDiagramSymbols,
  u1_25: ERDiagramSymbols,
  u3_5: BPlusTreeDiagram,
  u3_7: BPlusTreeDiagram,
  u3_8: BPlusTreeDiagram,
  u3_13: BPlusTreeDiagram,
  u3_16: BPlusTreeDiagram,
  u3_17: BPlusTreeDiagram,

  u2_q17: AVLTreeDiagram,
  u2_q18: AVLTreeDiagram,
  u2_q20: Tree23SplitDiagram,
  u2_q21: MaxHeapDiagram,
  u2_q23: MaxHeapDiagram,
  u3_q1: PrimsAlgorithmDiagram,
  u3_q3: PrimsAlgorithmDiagram,
  u3_q6: PrimsAlgorithmDiagram,
  u3_q10: HuffmanTreeDiagram,
  u3_q11: BellmanFordDiagram,
  u3_q14: BellmanFordDiagram,
  u3_q15: BacktrackingTreeDiagram,

  q5: DiagramQ5,
  q7: DiagramQ7,
  q8: DiagramQ8,
  q9: DiagramQ9,
  q10: DiagramQ10,
  q12: DiagramQ12,
  q13: DiagramQ13,
  q15: DiagramQ15,
  q16: DiagramQ16,
  q18: DiagramQ18,
  q20: DiagramQ20,
  q21: DiagramQ21,
  q24: DiagramQ24,
  q25: DiagramQ25,
  q26: DiagramQ26,
  q30: DiagramQ30,
  q32: DiagramQ32,
  q34: DiagramQ34,
  q38: DiagramQ38,
  q39: DiagramQ39,
  q41: DiagramQ41,
  q48: DiagramQ48,
  q49: DiagramQ49,
  q55: DiagramQ55,
  q56: DiagramQ56,
  q59: DiagramQ59,
  q62: DiagramQ62,
  q63: DiagramQ63,
  q65: DiagramQ65,
  q67: DiagramQ67,
  q70: DiagramQ70,
  q72: DiagramQ72,
  q76: DiagramQ76,
  q78: DiagramQ78,
  q79: DiagramQ79,
  q81: DiagramQ81,
  q82: DiagramQ82,
  q86: DiagramQ86,
  q89: DiagramQ89,
  q90: DiagramQ90,

  "cs3005-unit1-q14": SegmentOffsetDiagram,
  "cs3005-unit1-q16": MemoryAddressingDiagram,
  "cs3005-unit1-q39": BitRotationRCLDiagram,
  "cs3005-unit2-q28": SevenSegmentDiagram,
  "cs3005-unit2-q37": StepperMotorDiagram,
  "cs3005-unit2-q38": ArduinoPinsDiagram,
  "cs3005-unit2-q39": KeypadMatrixDiagram,
  "cs3005-unit3-q6": PinoutAD0AD15,
  "cs3005-unit3-q7": ReadCycleTiming,
  "cs3005-unit3-q8": MovInstructionEncoding,
  "cs3005-unit3-q9": MovInstructionEncoding,
  "cs3005-unit3-q10": MovInstructionEncoding,
  "cs3005-unit3-q11": MovInstructionEncoding,
  "cs3005-unit3-q16": InterruptStackPush,
  "cs3005-unit3-q18": InterruptVectorTable,
  "cs3005-unit3-q19": InterruptVectorTable,
  "cs3005-unit3-q20": InterruptVectorTable,

  "sepm-unit-1-q16": SpiralModelDiagram,
  "sepm-unit-1-q30": SpiralModelDiagram,
  "sepm-unit-1-q32": SpiralModelDiagram,
  "sepm-unit-1-q44": SpiralModelDiagram,
  "sepm-unit-1-q38": WaterfallModelDiagram,
  "sepm-unit-1-q39": WaterfallModelDiagram,
  "sepm-unit-1-q41": WaterfallModelDiagram,
  "sepm-unit-1-q49": WaterfallModelDiagram,
  "sepm-unit-1-q15": SDLCDiagram,
  "sepm-unit-1-q24": SDLCDiagram,
  "sepm-unit-1-q29": SDLCDiagram,
  "sepm-unit-2-q3": UMLClassDiagram,
  "sepm-unit-2-q4": UMLClassDiagram,
  "sepm-unit-2-q5": UMLClassDiagram,
  "sepm-unit-2-q17": UMLClassDiagram,
  "sepm-unit-2-q25": ScrumProcessDiagram,
  "sepm-unit-2-q31": ScrumProcessDiagram,
  "sepm-unit-2-q32": ScrumProcessDiagram,
  "sepm-unit-2-q40": TestingLevelsDiagram,
  "sepm-unit-2-q41": TestingLevelsDiagram,
  "sepm-unit-2-q43": TestingLevelsDiagram,
  "sepm-unit-2-q47": TestingLevelsDiagram,
  "sepm-unit-2-q23": AgileManifestoDiagram,
  "sepm-unit-2-q26": AgileManifestoDiagram,
};

interface DiagramRendererProps {
  questionId: string;
}

export default function DiagramRenderer({ questionId }: DiagramRendererProps) {
  const Component = diagramMap[questionId];

  if (!Component) return null;

  return (
    <EngineeringDiagram alt={`Diagram for ${questionId}`}>
      <Suspense
        fallback={
          <div className="flex items-center gap-2 py-8 text-slate-400">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" />
            <span className="text-xs">Loading diagram...</span>
          </div>
        }
      >
        <Component />
      </Suspense>
    </EngineeringDiagram>
  );
}
