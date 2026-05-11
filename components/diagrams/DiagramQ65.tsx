"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ65() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <MatrixSVG label="v" rows={4} cols={1} entries={[[{value:"1"}],[{value:"1"}],[{value:"1"}],[{value:"-1"}]]} />
    </div>
  );
}
