"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ70() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">T(x, y) = (0, y)</p>
      <MatrixSVG rows={2} cols={2} entries={[
        [{ value: "0" }, { value: "0" }],
        [{ value: "0" }, { value: "1" }],
      ]} />
    </div>
  );
}
