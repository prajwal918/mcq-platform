"use client";
import { MatrixSVG } from "./MatrixSVG";

export default function DiagramQ21() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <MatrixSVG
        label="A"
        rows={3}
        cols={3}
        entries={[
          [{ value: "2" }, { value: "1" }, { value: "1" }],
          [{ value: "1" }, { value: "2" }, { value: "1" }],
          [{ value: "0" }, { value: "0" }, { value: "1" }],
        ]}
      />
    </div>
  );
}
