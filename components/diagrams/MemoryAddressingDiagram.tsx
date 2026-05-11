export function MemoryAddressingDiagram() {
  return (
    <svg viewBox="0 0 500 240" className="w-full max-w-lg">
      <text
        x="250"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        Memory Addressing: DS:SI for Array Access
      </text>

      <rect
        x="30"
        y="40"
        width="80"
        height="40"
        rx="4"
        fill="#e0e7ff"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <text
        x="70"
        y="55"
        textAnchor="middle"
        className="fill-indigo-900 text-xs font-bold"
      >
        DS Register
      </text>
      <text
        x="70"
        y="72"
        textAnchor="middle"
        className="fill-indigo-700 font-mono text-[10px]"
      >
        2000H
      </text>

      <rect
        x="30"
        y="100"
        width="80"
        height="40"
        rx="4"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="2"
      />
      <text
        x="70"
        y="115"
        textAnchor="middle"
        className="fill-green-900 text-xs font-bold"
      >
        SI Register
      </text>
      <text
        x="70"
        y="132"
        textAnchor="middle"
        className="fill-green-700 font-mono text-[10px]"
      >
        0100H
      </text>

      <path
        d="M110 60 L180 60 L180 120 L220 120"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
      />
      <path d="M110 120 L180 120" fill="none" stroke="#64748b" strokeWidth="1.5" />
      <text
        x="155"
        y="55"
        textAnchor="middle"
        className="fill-slate-600 text-[10px]"
      >
        Segment Base
      </text>
      <text
        x="145"
        y="115"
        textAnchor="middle"
        className="fill-slate-600 text-[10px]"
      >
        Offset
      </text>

      <rect
        x="220"
        y="40"
        width="120"
        height="160"
        rx="4"
        fill="#f1f5f9"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="58"
        textAnchor="middle"
        className="fill-slate-700 text-xs font-bold"
      >
        Data Segment
      </text>

      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="235"
            y={70 + i * 24}
            width="90"
            height="20"
            rx="2"
            fill={i === 0 ? "#bfdbfe" : "#ffffff"}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          <text
            x="280"
            y={84 + i * 24}
            textAnchor="middle"
            className={`font-mono text-[10px] ${i === 0 ? "fill-blue-800 font-bold" : "fill-slate-600"}`}
          >
            {`Array[${i}]`}
          </text>
        </g>
      ))}

      <rect
        x="360"
        y="90"
        width="130"
        height="60"
        rx="4"
        fill="#fef3c7"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <text
        x="425"
        y="110"
        textAnchor="middle"
        className="fill-amber-900 text-[10px] font-bold"
      >
        Effective Address
      </text>
      <text
        x="425"
        y="130"
        textAnchor="middle"
        className="fill-amber-800 font-mono text-xs"
      >
        20100H
      </text>
      <text
        x="425"
        y="145"
        textAnchor="middle"
        className="fill-amber-700 text-[9px]"
      >
        DS×10H + SI
      </text>

      <path d="M355 120 L360 120" stroke="#d97706" strokeWidth="1.5" />
    </svg>
  );
}
