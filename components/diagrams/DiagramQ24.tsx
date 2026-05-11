"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ24() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={2}
        cols={2}
        entries={[
          [{ value: "3" }, { value: "2" }],
          [{ value: "3" }, { value: "8" }],
        ]}
      />
    </div>
  );
}
