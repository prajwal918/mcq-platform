"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ18() {
  return (
    <div className="my-2 flex flex-wrap items-center justify-center gap-4">
      <MatrixSVG
        label="A"
        rows={3}
        cols={3}
        entries={[
          [{ value: "1" }, { value: "3" }, { value: "2" }],
          [{ value: "5" }, { value: "6" }, { value: "-1" }],
          [{ value: "2" }, { value: "-2" }, { value: "3" }],
        ]}
      />
      <MatrixSVG
        label="B"
        rows={3}
        cols={3}
        entries={[
          [{ value: "-6" }, { value: "2" }, { value: "5" }],
          [{ value: "2" }, { value: "1" }, { value: "8" }],
          [{ value: "4" }, { value: "-2" }, { value: "2" }],
        ]}
      />
    </div>
  );
}
