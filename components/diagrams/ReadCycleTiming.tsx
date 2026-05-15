"use client";

export default function ReadCycleTiming() {
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full max-w-2xl">
      <rect width="600" height="300" fill="#0f172a" rx="8"/>
      <text x="300" y="25" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="monospace">
        8086 Read Cycle Timing Diagram
      </text>
      <text x="20" y="65" fill="#64748b" fontSize="11" fontFamily="monospace">CLK</text>
      <polyline points="80,60 120,60 120,80 160,80 160,60 200,60 200,80 240,80 240,60 280,60 280,80 320,80 320,60 360,60 360,80 400,80 400,60 440,60 440,80 480,80 480,60 520,60" fill="none" stroke="#60a5fa" strokeWidth="2"/>
      <text x="20" y="115" fill="#64748b" fontSize="11" fontFamily="monospace">ALE</text>
      <polyline points="80,130 140,130 140,110 200,110 200,130 520,130" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <text x="160" y="105" fill="#fbbf24" fontSize="9" fontFamily="monospace">Address Latch Enable</text>
      <text x="20" y="165" fill="#64748b" fontSize="11" fontFamily="monospace">AD0-AD15</text>
      <rect x="80" y="150" width="120" height="20" rx="2" fill="#334155" opacity="0.5"/>
      <text x="140" y="164" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">ADDRESS</text>
      <rect x="220" y="150" width="180" height="20" rx="2" fill="#334155" opacity="0.3"/>
      <text x="310" y="164" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">DATA</text>
      <text x="20" y="215" fill="#64748b" fontSize="11" fontFamily="monospace">RD̄</text>
      <polyline points="80,230 220,230 220,210 380,210 380,230 520,230" fill="none" stroke="#f87171" strokeWidth="2"/>
      <text x="20" y="265" fill="#64748b" fontSize="11" fontFamily="monospace">READY</text>
      <polyline points="80,280 340,280 340,260 400,260 400,280 520,280" fill="none" stroke="#34d399" strokeWidth="2"/>
      <text x="140" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">T1</text>
      <text x="260" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">T2</text>
      <text x="380" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">T3</text>
      <text x="460" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">T4</text>
      <rect x="135" y="100" width="70" height="190" rx="4" fill="#fbbf24" opacity="0.08" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 2"/>
      <text x="170" y="98" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="monospace">ALE ACTIVE → Address present</text>
    </svg>
  );
}
