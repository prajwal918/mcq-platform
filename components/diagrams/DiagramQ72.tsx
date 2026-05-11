"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ72() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">T(x1, x2, x3, x4) = (x2, x3, 0, 0)</p>
      <MatrixSVG rows={4} cols={4} entries={[
        [{ value: "0" }, { value: "1" }, { value: "0" }, { value: "0" }],
        [{ value: "0" }, { value: "0" }, { value: "1" }, { value: "0" }],
        [{ value: "0" }, { value: "0" }, { value: "0" }, { value: "0" }],
        [{ value: "0" }, { value: "0" }, { value: "0" }, { value: "0" }],
      ]} />
    </div>
  );
}
