"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ9() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={3}
        cols={3}
        entries={[
          [{ value: "5", highlight: "green" }, { value: "6" }, { value: "17" }],
          [{ value: "0" }, { value: "-19", highlight: "green" }, { value: "23" }],
          [{ value: "0" }, { value: "0" }, { value: "37", highlight: "green" }],
        ]}
      />
      <p className="text-xs text-muted-foreground">Eigenvalues are the diagonal entries (highlighted)</p>
    </div>
  );
}
