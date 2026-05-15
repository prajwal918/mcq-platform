"use client";

export default function PinoutAD0AD15() {
  return (
    <svg viewBox="0 0 400 600" className="h-auto w-full max-w-md">
      <rect x="120" y="20" width="160" height="560" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
      <circle cx="140" cy="40" r="6" fill="#334155"/>
      <text x="200" y="55" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="monospace">8086 CPU</text>
      <text x="200" y="75" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">DIP-40 Package</text>
      {[...Array(16)].map((_, i) => {
        const y = 110 + i * 26;
        return (
          <g key={`left-${i}`}>
            <rect x="80" y={y} width="40" height="18" rx="2" fill="#0f172a" stroke="#334155"/>
            <text x="100" y={y + 13} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">AD{i}</text>
            <line x1="120" y1={y + 9} x2="140" y2={y + 9} stroke="#475569" strokeWidth="1"/>
          </g>
        );
      })}
      {[...Array(16)].map((_, i) => {
        const y = 110 + i * 26;
        const pinNum = 39 - i;
        return (
          <g key={`right-${i}`}>
            <rect x="280" y={y} width="40" height="18" rx="2" fill="#0f172a" stroke="#334155"/>
            <text x="300" y={y + 13} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">
              {pinNum <= 31 ? `A${pinNum - 16}` : `VCC`}
            </text>
            <line x1="260" y1={y + 9} x2="280" y2={y + 9} stroke="#475569" strokeWidth="1"/>
          </g>
        );
      })}
      <rect x="150" y="540" width="100" height="24" rx="4" fill="#059669" opacity="0.2"/>
      <text x="200" y="556" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">
        AD0-AD15 = 16-bit
      </text>
    </svg>
  );
}
