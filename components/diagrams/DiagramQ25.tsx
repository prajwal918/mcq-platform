"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ25() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        rows={3}
        cols={3}
        entries={[
          [{ value: "1", highlight: "green" }, { value: "0" }, { value: "0" }],
          [{ value: "0" }, { value: "2", highlight: "green" }, { value: "0" }],
          [{ value: "0" }, { value: "0" }, { value: "3", highlight: "green" }],
        ]}
      />
      <p className="text-xs text-muted-foreground">Diagonal matrix: spectrum = {"{1, 2, 3}"}</p>
    </div>
  );
}
