"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ76() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">T(x, y) = (x, y) — Identity</p>
      <MatrixSVG rows={2} cols={2} entries={[
        [{ value: "1" }, { value: "0" }],
        [{ value: "0" }, { value: "1" }],
      ]} />
    </div>
  );
}
