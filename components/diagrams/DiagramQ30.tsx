"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ30() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={2}
        cols={2}
        entries={[
          [{ value: "2" }, { value: "0" }],
          [{ value: "4" }, { value: "7" }],
        ]}
      />
    </div>
  );
}
