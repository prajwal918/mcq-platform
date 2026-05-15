"use client";

export default function InterruptVectorTable() {
  return (
    <svg viewBox="0 0 600 400" className="h-auto w-full max-w-2xl">
      <rect width="600" height="400" fill="#0f172a" rx="8"/>
      <text x="300" y="25" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="monospace">
        8086 Interrupt Vector Table (IVT)
      </text>
      <text x="50" y="55" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">0000:0000h</text>
      <text x="50" y="370" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">0000:03FFh</text>
      <rect x="100" y="45" width="400" height="330" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      <rect x="100" y="45" width="400" height="30" rx="6" fill="#334155"/>
      <text x="140" y="65" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="monospace">Vector #</text>
      <text x="240" y="65" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="monospace">Offset (IP)</text>
      <text x="340" y="65" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="monospace">Segment (CS)</text>
      <text x="440" y="65" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="monospace">ISR Address</text>
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 85 + i * 50;
        const isEven = i % 2 === 0;
        return (
          <g key={i}>
            <rect x="100" y={y} width="400" height="50" fill={isEven ? "#1e293b" : "#0f172a"} opacity="0.5"/>
            <line x1="100" y1={y} x2="500" y2={y} stroke="#334155" strokeWidth="0.5"/>
            <text x="140" y={y + 30} textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              {i === 0 ? "Type 0" : i === 1 ? "Type 1" : i === 2 ? "Type 2" : i === 3 ? "Type 3" : "Type 4"}
            </text>
            <text x="240" y={y + 30} textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="monospace">
              {i === 0 ? "0000h" : i === 1 ? "0004h" : "..."}
            </text>
            <text x="340" y={y + 30} textAnchor="middle" fill="#f87171" fontSize="10" fontFamily="monospace">
              {i === 0 ? "0002h" : i === 1 ? "0006h" : "..."}
            </text>
            <text x="440" y={y + 30} textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">
              CS:IP
            </text>
          </g>
        );
      })}
      <text x="300" y="350" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
        256 entries x 4 bytes = 1KB (0000h - 03FFh)
      </text>
      <rect x="520" y="45" width="60" height="330" rx="4" fill="#059669" opacity="0.1" stroke="#059669" strokeWidth="1" strokeDasharray="4 2"/>
      <text x="550" y="210" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace" transform="rotate(90, 550, 210)">
        1 KB Memory Block
      </text>
    </svg>
  );
}
