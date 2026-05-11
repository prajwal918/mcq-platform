"use client";
import { MatrixSVG } from "./MatrixSVG";
export default function DiagramQ49() {
  return (
    <div className="my-2 flex flex-col items-center gap-2">
      <p className="text-sm text-muted-foreground">Vectors in R³:</p>
      <MatrixSVG rows={3} cols={3} entries={[
        [{ value: "2" }, { value: "5" }, { value: "1" }],
        [{ value: "0" }, { value: "2" }, { value: "2" }],
        [{ value: "1" }, { value: "1" }, { value: "-1" }],
      ]} />
    </div>
  );
}
