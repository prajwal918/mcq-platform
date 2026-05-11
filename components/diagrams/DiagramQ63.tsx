"use client";

export default function DiagramQ63() {
  return (
    <div className="my-2 flex flex-col items-center gap-3">
      <p className="text-sm text-muted-foreground">Sets to check orthogonality:</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded border p-2 text-center text-xs">a) {"[1;0], [0;2], [1;1]"}</div>
        <div className="rounded border p-2 text-center text-xs">b) {"[-2;1], [1;2]"}</div>
        <div className="rounded border p-2 text-center text-xs">c) {"[1;-1], [1;1]"}</div>
        <div className="rounded border p-2 text-center text-xs">d) {"[1;0], [1;1]"}</div>
      </div>
    </div>
  );
}
