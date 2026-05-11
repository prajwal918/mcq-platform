"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ62() {
  return (
    <div className="my-2 flex flex-wrap items-center justify-center gap-4">
      <MatrixSVG label="u" rows={3} cols={1} entries={[[{value:"2"}],[{value:"3"}],[{value:"-5"}]]} />
      <MatrixSVG label="v" rows={3} cols={1} entries={[[{value:"2"}],[{value:"0"}],[{value:"-3"}]]} />
    </div>
  );
}
