export function SegmentOffsetDiagram() {
  return (
    <svg viewBox="0 0 500 220" className="w-full max-w-lg">
      <text
        x="250"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        8086 Physical Address Calculation
      </text>

      <rect
        x="50"
        y="40"
        width="100"
        height="40"
        rx="4"
        fill="#e0e7ff"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <text
        x="100"
        y="65"
        textAnchor="middle"
        className="fill-indigo-900 text-xs font-semibold"
      >
        CS = 348AH
      </text>

      <rect
        x="200"
        y="40"
        width="100"
        height="40"
        rx="4"
        fill="#e0e7ff"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <text
        x="250"
        y="65"
        textAnchor="middle"
        className="fill-indigo-900 text-xs font-semibold"
      >
        IP = 4214H
      </text>

      <path
        d="M100 80 L100 100 L200 100 L200 80"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeDasharray="4"
      />
      <text
        x="150"
        y="95"
        textAnchor="middle"
        className="fill-slate-600 text-[10px]"
      >
        × 10H (shift left 4 bits)
      </text>

      <rect
        x="50"
        y="110"
        width="160"
        height="35"
        rx="4"
        fill="#fef3c7"
        stroke="#d97706"
        strokeWidth="2"
      />
      <text
        x="130"
        y="132"
        textAnchor="middle"
        className="fill-amber-900 font-mono text-xs"
      >
        348A0H
      </text>

      <text
        x="225"
        y="132"
        textAnchor="middle"
        className="fill-slate-700 text-lg font-bold"
      >
        +
      </text>

      <rect
        x="260"
        y="110"
        width="100"
        height="35"
        rx="4"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="2"
      />
      <text
        x="310"
        y="132"
        textAnchor="middle"
        className="fill-green-900 font-mono text-xs"
      >
        4214H
      </text>

      <text
        x="390"
        y="132"
        textAnchor="middle"
        className="fill-slate-700 text-lg font-bold"
      >
        =
      </text>

      <rect
        x="410"
        y="110"
        width="100"
        height="35"
        rx="4"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="2"
      />
      <text
        x="460"
        y="132"
        textAnchor="middle"
        className="fill-blue-900 font-mono text-xs font-bold"
      >
        38AB4H
      </text>

      <text
        x="250"
        y="180"
        textAnchor="middle"
        className="fill-slate-600 text-xs dark:fill-slate-400"
      >
        Physical Address = (CS × 10H) + IP
      </text>
      <text
        x="250"
        y="200"
        textAnchor="middle"
        className="fill-slate-500 text-[10px]"
      >
        20-bit address = Segment (16-bit) + Offset (16-bit)
      </text>
    </svg>
  );
}
