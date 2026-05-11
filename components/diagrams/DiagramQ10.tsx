"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ10() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={3}
        cols={3}
        entries={[
          [{ value: "2", highlight: "green" }, { value: "4" }, { value: "-6" }],
          [{ value: "0" }, { value: "3", highlight: "green" }, { value: "6" }],
          [{ value: "0" }, { value: "0" }, { value: "3", highlight: "green" }],
        ]}
      />
      <p className="text-xs text-muted-foreground">Upper triangular: eigenvalues on diagonal</p>
    </div>
  );
}
