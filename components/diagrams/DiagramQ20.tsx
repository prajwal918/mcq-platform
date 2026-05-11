"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ20() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        rows={3}
        cols={3}
        entries={[
          [{ value: "1" }, { value: "1" }, { value: "3" }],
          [{ value: "1" }, { value: "5" }, { value: "1" }],
          [{ value: "3" }, { value: "-1" }, { value: "-1" }],
        ]}
      />
    </div>
  );
}
