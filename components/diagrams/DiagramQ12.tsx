"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ12() {
  return (
    <div className="my-2 flex flex-wrap items-center justify-center gap-4">
      <MatrixSVG
        label="A"
        rows={2}
        cols={2}
        entries={[
          [{ value: "1" }, { value: "2" }],
          [{ value: "3" }, { value: "4" }],
        ]}
      />
      <MatrixSVG
        label="B"
        rows={2}
        cols={2}
        entries={[
          [{ value: "5" }, { value: "-1" }],
          [{ value: "2" }, { value: "3" }],
        ]}
      />
    </div>
  );
}
