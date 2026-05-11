"use client";
import { AugmentedMatrixSVG } from "./MatrixSVG";

export default function DiagramQ38() {
  return (
    <div className="my-2">
      <AugmentedMatrixSVG
        leftEntries={[
          [{ value: "7" }, { value: "2" }, { value: "3" }],
          [{ value: "5" }, { value: "1" }, { value: "-1" }],
          [{ value: "0" }, { value: "0" }, { value: "h", highlight: "amber" }],
        ]}
        rightEntries={["", "", ""]}
      />
    </div>
  );
}
