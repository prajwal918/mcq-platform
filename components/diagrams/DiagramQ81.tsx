"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ81() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">2x1² - 4x1x2 + x2²</p>
      <MatrixSVG rows={2} cols={2} entries={[
        [{ value: "2" }, { value: "-2" }],
        [{ value: "-2" }, { value: "1" }],
      ]} />
    </div>
  );
}
