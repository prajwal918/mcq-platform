export function KeypadMatrixDiagram() {
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-xs">
      <text
        x="150"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        4×4 Keypad Matrix
      </text>

      {Array.from({ length: 4 }).map((_, row) => (
        <g key={`row-${row}`}>
          <text
            x="25"
            y={55 + row * 40}
            textAnchor="middle"
            className="fill-slate-600 text-[10px] font-semibold"
          >
            R{row}
          </text>
          <line
            x1="40"
            y1={50 + row * 40}
            x2="260"
            y2={50 + row * 40}
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
        </g>
      ))}

      {Array.from({ length: 4 }).map((_, col) => (
        <g key={`col-${col}`}>
          <text
            x={65 + col * 55}
            y="45"
            textAnchor="middle"
            className="fill-slate-600 text-[10px] font-semibold"
          >
            C{col}
          </text>
          <line
            x1={65 + col * 55}
            y1="50"
            x2={65 + col * 55}
            y2="210"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
        </g>
      ))}

      {[
        ["1", "2", "3", "A"],
        ["4", "5", "6", "B"],
        ["7", "8", "9", "C"],
        ["*", "0", "#", "D"],
      ].map((rowArr, row) =>
        rowArr.map((label, col) => (
          <g key={`btn-${row}-${col}`}>
            <circle
              cx={65 + col * 55}
              cy={50 + row * 40}
              r="14"
              fill="#e0e7ff"
              stroke="#4f46e5"
              strokeWidth="1.5"
            />
            <text
              x={65 + col * 55}
              y={55 + row * 40}
              textAnchor="middle"
              className="fill-indigo-900 text-xs font-bold"
            >
              {label}
            </text>
          </g>
        ))
      )}

      <text
        x="150"
        y="235"
        textAnchor="middle"
        className="fill-slate-600 text-xs"
      >
        Row-Column Scanning Interface
      </text>
      <text
        x="150"
        y="250"
        textAnchor="middle"
        className="fill-slate-500 text-[10px]"
      >
        8 pins required for 16 keys (4×4 matrix)
      </text>
    </svg>
  );
}
