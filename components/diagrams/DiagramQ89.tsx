"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ89() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <div className="flex gap-4 items-center">
        <MatrixSVG label="A" rows={2} cols={2} entries={[
          [{ value: "4" }, { value: "0" }],
          [{ value: "0" }, { value: "3" }],
        ]} />
        <MatrixSVG label="x" rows={2} cols={1} entries={[[{value:"x1"}],[{value:"x2"}]]} />
      </div>
    </div>
  );
}
