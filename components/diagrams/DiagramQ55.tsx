"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ55() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">T(1,0) = (3, 2, -1) and T(0,1) = (2, 3, 1)</p>
      <div className="flex gap-4">
        <MatrixSVG label="T(1,0)" rows={3} cols={1} entries={[[{value:"3"}],[{value:"2"}],[{value:"-1"}]]} />
        <MatrixSVG label="T(0,1)" rows={3} cols={1} entries={[[{value:"2"}],[{value:"3"}],[{value:"1"}]]} />
      </div>
    </div>
  );
}
