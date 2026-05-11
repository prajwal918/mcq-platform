"use client";
import { AugmentedMatrixSVG } from "./MatrixSVG";

export default function DiagramQ5() {
  return (
    <div className="my-2">
      <AugmentedMatrixSVG
        label="A"
        leftEntries={[
          [{ value: "k" }, { value: "2" }, { value: "3" }, { value: "-1" }],
          [{ value: "0" }, { value: "1" }, { value: "3" }, { value: "-1" }],
          [{ value: "0" }, { value: "0" }, { value: "3" }, { value: "-6" }],
        ]}
        rightEntries={["5", "-1", "5"]}
      />
    </div>
  );
}
