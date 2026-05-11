"use client";

import React from "react";

interface MatrixEntry {
  value: string;
  highlight?: "green" | "red" | "blue" | "amber";
}

interface MatrixSVGProps {
  rows: number;
  cols: number;
  entries: (string | MatrixEntry)[][];
  label?: string;
  bracketStyle?: "square" | "paren" | "curly";
  cellWidth?: number;
  cellHeight?: number;
  fontSize?: number;
}

export function MatrixSVG({
  rows,
  cols,
  entries,
  label,
  bracketStyle = "square",
  cellWidth = 44,
  cellHeight = 36,
  fontSize = 15,
}: MatrixSVGProps) {
  const padding = 16;
  const labelWidth = label ? 40 : 0;
  const width = cols * cellWidth + padding * 2 + labelWidth + 8;
  const height = rows * cellHeight + padding * 2;

  const getEntry = (r: number, c: number): MatrixEntry => {
    const e = entries[r]?.[c];
    if (typeof e === "string") return { value: e };
    return e || { value: "" };
  };

  const bracketColor = "#334155";
  const strokeWidth = 2;

  const renderBrackets = () => {
    const leftX = label ? padding + labelWidth : padding;
    const rightX = width - padding;
    const topY = padding;
    const bottomY = height - padding;
    const ext = 6;

    if (bracketStyle === "square") {
      return (
        <g>
          <line x1={leftX} y1={topY - ext} x2={leftX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={strokeWidth} />
          <line x1={leftX} y1={topY - ext} x2={leftX + 8} y2={topY - ext} stroke={bracketColor} strokeWidth={strokeWidth} />
          <line x1={leftX} y1={bottomY + ext} x2={leftX + 8} y2={bottomY + ext} stroke={bracketColor} strokeWidth={strokeWidth} />
          <line x1={rightX} y1={topY - ext} x2={rightX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={strokeWidth} />
          <line x1={rightX - 8} y1={topY - ext} x2={rightX} y2={topY - ext} stroke={bracketColor} strokeWidth={strokeWidth} />
          <line x1={rightX - 8} y1={bottomY + ext} x2={rightX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={strokeWidth} />
        </g>
      );
    }
    if (bracketStyle === "paren") {
      return (
        <g>
          <path d={`M ${leftX + 10} ${topY - ext} Q ${leftX - 4} ${(topY + bottomY) / 2} ${leftX + 10} ${bottomY + ext}`} fill="none" stroke={bracketColor} strokeWidth={strokeWidth} />
          <path d={`M ${rightX - 10} ${topY - ext} Q ${rightX + 4} ${(topY + bottomY) / 2} ${rightX - 10} ${bottomY + ext}`} fill="none" stroke={bracketColor} strokeWidth={strokeWidth} />
        </g>
      );
    }
    return null;
  };

  const highlightColors: Record<string, string> = {
    green: "#dcfce7",
    red: "#fee2e2",
    blue: "#dbeafe",
    amber: "#fef3c7",
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto h-auto w-full max-w-md"
      style={{ maxHeight: 280 }}
    >
      {renderBrackets()}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const entry = getEntry(r, c);
          const cx = (label ? padding + labelWidth : padding) + 8 + c * cellWidth + cellWidth / 2;
          const cy = padding + r * cellHeight + cellHeight / 2;
          return (
            <g key={`${r}-${c}`}>
              {entry.highlight && (
                <rect
                  x={cx - cellWidth / 2 + 2}
                  y={cy - cellHeight / 2 + 2}
                  width={cellWidth - 4}
                  height={cellHeight - 4}
                  rx={4}
                  fill={highlightColors[entry.highlight]}
                />
              )}
              <text
                x={cx}
                y={cy + fontSize / 3}
                textAnchor="middle"
                fontSize={fontSize}
                fontFamily="'Times New Roman', serif"
                fill="#0f172a"
              >
                {entry.value}
              </text>
            </g>
          );
        })
      )}
      {label && (
        <text
          x={padding + 20}
          y={height / 2 + fontSize / 3}
          textAnchor="middle"
          fontSize={fontSize + 2}
          fontFamily="'Times New Roman', serif"
          fontStyle="italic"
          fill="#0f172a"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

export function AugmentedMatrixSVG({
  leftEntries,
  rightEntries,
  label,
}: {
  leftEntries: (string | MatrixEntry)[][];
  rightEntries: string[];
  label?: string;
}) {
  const rows = leftEntries.length;
  const leftCols = leftEntries[0]?.length || 0;
  const cellWidth = 44;
  const cellHeight = 36;
  const fontSize = 15;
  const padding = 16;
  const labelWidth = label ? 40 : 0;
  const gap = 12;
  const width = leftCols * cellWidth + cellWidth + gap + padding * 2 + labelWidth + 8;
  const height = rows * cellHeight + padding * 2;
  const bracketColor = "#334155";

  const getEntry = (r: number, c: number): MatrixEntry => {
    const e = leftEntries[r]?.[c];
    if (typeof e === "string") return { value: e };
    return e || { value: "" };
  };

  const leftX = label ? padding + labelWidth : padding;
  const rightX = width - padding;
  const topY = padding;
  const bottomY = height - padding;
  const ext = 6;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto h-auto w-full max-w-md"
      style={{ maxHeight: 280 }}
    >
      {/* Left bracket */}
      <line x1={leftX} y1={topY - ext} x2={leftX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={2} />
      <line x1={leftX} y1={topY - ext} x2={leftX + 8} y2={topY - ext} stroke={bracketColor} strokeWidth={2} />
      <line x1={leftX} y1={bottomY + ext} x2={leftX + 8} y2={bottomY + ext} stroke={bracketColor} strokeWidth={2} />
      {/* Right bracket */}
      <line x1={rightX} y1={topY - ext} x2={rightX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={2} />
      <line x1={rightX - 8} y1={topY - ext} x2={rightX} y2={topY - ext} stroke={bracketColor} strokeWidth={2} />
      <line x1={rightX - 8} y1={bottomY + ext} x2={rightX} y2={bottomY + ext} stroke={bracketColor} strokeWidth={2} />
      {/* Divider */}
      <line
        x1={leftX + 8 + leftCols * cellWidth + gap / 2}
        y1={topY - ext + 4}
        x2={leftX + 8 + leftCols * cellWidth + gap / 2}
        y2={bottomY + ext - 4}
        stroke={bracketColor}
        strokeWidth={1.5}
        strokeDasharray="4 2"
      />

      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: leftCols }).map((_, c) => {
          const entry = getEntry(r, c);
          const cx = leftX + 8 + c * cellWidth + cellWidth / 2;
          const cy = padding + r * cellHeight + cellHeight / 2;
          return (
            <g key={`l-${r}-${c}`}>
              {entry.highlight && (
                <rect
                  x={cx - cellWidth / 2 + 2}
                  y={cy - cellHeight / 2 + 2}
                  width={cellWidth - 4}
                  height={cellHeight - 4}
                  rx={4}
                  fill={entry.highlight === "green" ? "#dcfce7" : entry.highlight === "red" ? "#fee2e2" : "#dbeafe"}
                />
              )}
              <text x={cx} y={cy + fontSize / 3} textAnchor="middle" fontSize={fontSize} fontFamily="'Times New Roman', serif" fill="#0f172a">
                {entry.value}
              </text>
            </g>
          );
        })
      )}

      {rightEntries.map((val, r) => {
        const cx = leftX + 8 + leftCols * cellWidth + gap + cellWidth / 2;
        const cy = padding + r * cellHeight + cellHeight / 2;
        return (
          <text key={`r-${r}`} x={cx} y={cy + fontSize / 3} textAnchor="middle" fontSize={fontSize} fontFamily="'Times New Roman', serif" fill="#0f172a">
            {val}
          </text>
        );
      })}

      {label && (
        <text x={padding + 20} y={height / 2 + fontSize / 3} textAnchor="middle" fontSize={fontSize + 2} fontFamily="'Times New Roman', serif" fontStyle="italic" fill="#0f172a">
          {label}
        </text>
      )}
    </svg>
  );
}
