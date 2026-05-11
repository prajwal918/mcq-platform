"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ39() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        rows={3}
        cols={4}
        entries={[
          [{ value: "0" }, { value: "0" }, { value: "1", highlight: "green" }, { value: "0" }],
          [{ value: "2", highlight: "green" }, { value: "0" }, { value: "1" }, { value: "0" }],
          [{ value: "1", highlight: "green" }, { value: "0" }, { value: "0" }, { value: "0" }],
        ]}
      />
      <p className="text-xs text-muted-foreground">Pivot positions highlighted in columns 1 and 3</p>
    </div>
  );
}
