export function BitRotationRCLDiagram() {
  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-xl">
      <text
        x="300"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        RCL AX, 1 — Rotate Left Through Carry
      </text>

      <text
        x="80"
        y="45"
        textAnchor="middle"
        className="fill-slate-600 text-xs font-semibold"
      >
        Before
      </text>

      <rect
        x="10"
        y="55"
        width="140"
        height="30"
        rx="3"
        fill="#e2e8f0"
        stroke="#64748b"
        strokeWidth="1"
      />
      <text
        x="80"
        y="74"
        textAnchor="middle"
        className="fill-slate-800 font-mono text-[10px]"
      >
        1001 0110 1010 1100
      </text>

      <circle
        cx="170"
        cy="70"
        r="14"
        fill="#fecaca"
        stroke="#dc2626"
        strokeWidth="1.5"
      />
      <text
        x="170"
        y="74"
        textAnchor="middle"
        className="fill-red-800 text-[10px] font-bold"
      >
        CF=1
      </text>

      <path d="M80 85 L80 100" stroke="#94a3b8" strokeWidth="1.5" />

      <text
        x="80"
        y="125"
        textAnchor="middle"
        className="fill-slate-600 text-xs font-semibold"
      >
        After RCL AX,1
      </text>

      <rect
        x="10"
        y="135"
        width="140"
        height="30"
        rx="3"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="1"
      />
      <text
        x="80"
        y="154"
        textAnchor="middle"
        className="fill-green-900 font-mono text-[10px]"
      >
        0010 1101 0101 1001
      </text>

      <circle
        cx="170"
        cy="150"
        r="14"
        fill="#bfdbfe"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <text
        x="170"
        y="154"
        textAnchor="middle"
        className="fill-blue-800 text-[10px] font-bold"
      >
        CF=1
      </text>

      <path
        d="M155 70 L130 70"
        stroke="#dc2626"
        strokeWidth="1"
        strokeDasharray="3"
      />
      <text x="200" y="74" className="fill-slate-500 text-[9px]">
        Old CF enters LSB
      </text>

      <path
        d="M10 70 L-5 70 L-5 150 L10 150"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1"
        strokeDasharray="3"
      />
      <text x="200" y="154" className="fill-slate-500 text-[9px]">
        Old MSB (1) → New CF
      </text>

      <text x="10" y="180" className="fill-slate-400 text-[8px]">
        MSB
      </text>
      <text
        x="130"
        y="180"
        textAnchor="end"
        className="fill-slate-400 text-[8px]"
      >
        LSB
      </text>
    </svg>
  );
}
