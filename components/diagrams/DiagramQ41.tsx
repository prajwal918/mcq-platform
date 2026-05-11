"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ41() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        rows={2}
        cols={2}
        entries={[
          [{ value: "1" }, { value: "2" }],
          [{ value: "-1" }, { value: "4" }],
        ]}
      />
    </div>
  );
}
