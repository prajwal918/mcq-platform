"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ56() {
  return (
    <div className="my-2 flex flex-wrap items-center justify-center gap-4">
      <MatrixSVG label="u" rows={2} cols={1} entries={[[{value:"1"}],[{value:"2"}]]} />
      <MatrixSVG label="v" rows={2} cols={1} entries={[[{value:"-5"}],[{value:"7"}]]} />
    </div>
  );
}
