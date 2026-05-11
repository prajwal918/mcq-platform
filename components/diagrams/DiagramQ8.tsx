"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ8() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={3}
        cols={3}
        entries={[
          [{ value: "3" }, { value: "-7" }, { value: "-2" }],
          [{ value: "-3" }, { value: "5" }, { value: "1" }],
          [{ value: "6" }, { value: "-4" }, { value: "0" }],
        ]}
      />
    </div>
  );
}
