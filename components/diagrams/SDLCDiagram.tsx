"use client";

export default function SDLCDiagram() {
  const phases = [
    "Planning", "Requirements", "Design", "Coding", "Testing", "Deployment", "Maintenance"
  ];

  return (
    <svg viewBox="0 0 700 120" className="w-full h-auto max-w-2xl mx-auto">
      {phases.map((phase, i) => (
        <g key={phase}>
          <rect x={i * 95 + 10} y={30} width={85} height={50} rx={6} fill={`hsl(${220 + i * 25}, 70%, 93%)`} stroke={`hsl(${220 + i * 25}, 70%, 45%)`} strokeWidth="2" />
          <text x={i * 95 + 52} y={60} textAnchor="middle" fontSize="11" fill={`hsl(${220 + i * 25}, 70%, 35%)`} fontWeight="600">{phase}</text>
          {i < phases.length - 1 && (
            <line x1={i * 95 + 95} y1={55} x2={i * 95 + 105} y2={55} stroke="#94a3b8" strokeWidth="2" />
          )}
        </g>
      ))}
      <text x={350} y={105} textAnchor="middle" fontSize="12" fill="#64748b" fontStyle="italic">Software Development Life Cycle</text>
    </svg>
  );
}
