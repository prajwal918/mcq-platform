"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ79() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">Q(x) = x1² - 8x1x2 - 5x2²</p>
      <MatrixSVG rows={2} cols={2} entries={[
        [{ value: "1" }, { value: "-4" }],
        [{ value: "-4" }, { value: "-5" }],
      ]} />
    </div>
  );
}
