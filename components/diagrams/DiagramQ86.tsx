"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ86() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">4x1x2 + 6x1x3 - 8x2x3</p>
      <MatrixSVG rows={3} cols={3} entries={[
        [{ value: "0" }, { value: "2" }, { value: "3" }],
        [{ value: "2" }, { value: "0" }, { value: "-4" }],
        [{ value: "3" }, { value: "-4" }, { value: "0" }],
      ]} />
    </div>
  );
}
