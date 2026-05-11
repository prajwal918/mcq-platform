"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ78() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">Q(X) = 5x1² + 5x2² - 4x1x2</p>
      <MatrixSVG rows={2} cols={2} entries={[
        [{ value: "5" }, { value: "-2" }],
        [{ value: "-2" }, { value: "5" }],
      ]} />
    </div>
  );
}
