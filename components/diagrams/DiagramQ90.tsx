"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ90() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <MatrixSVG label="A" rows={2} cols={2} entries={[
        [{ value: "1" }, { value: "0" }],
        [{ value: "0" }, { value: "-3" }],
      ]} />
    </div>
  );
}
