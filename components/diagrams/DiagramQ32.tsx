"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ32() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <p className="text-sm text-muted-foreground">Coefficient matrix:</p>
      <MatrixSVG
        rows={3}
        cols={3}
        entries={[
          [{ value: "3" }, { value: "2" }, { value: "1" }],
          [{ value: "1" }, { value: "4" }, { value: "1" }],
          [{ value: "2" }, { value: "1" }, { value: "4" }],
        ]}
      />
    </div>
  );
}
