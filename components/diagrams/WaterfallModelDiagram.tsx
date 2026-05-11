"use client";

export default function WaterfallModelDiagram() {
  const phases = [
    { label: "Requirements", color: "#3b82f6", y: 40 },
    { label: "Design", color: "#8b5cf6", y: 100 },
    { label: "Coding", color: "#10b981", y: 160 },
    { label: "Testing", color: "#f59e0b", y: 220 },
    { label: "Maintenance", color: "#ef4444", y: 280 },
  ];

  return (
    <svg viewBox="0 0 500 340" className="w-full h-auto max-w-lg mx-auto">
      {phases.map((phase, i) => (
        <g key={phase.label}>
          <rect x={60} y={phase.y} width={140} height={44} rx={6} fill={phase.color} opacity="0.15" stroke={phase.color} strokeWidth="2" />
          <text x={130} y={phase.y + 28} textAnchor="middle" fontSize="14" fill={phase.color} fontWeight="600">{phase.label}</text>
          {i < phases.length - 1 && (
            <>
              <line x1={200} y1={phase.y + 22} x2={340} y2={phases[i+1].y + 22} stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" />
              <polygon points="335,17 350,22 335,27" fill="#94a3b8" transform={`translate(0, ${phases[i+1].y - phases[i].y - 5})`} />
            </>
          )}
        </g>
      ))}
      <text x={280} y={20} textAnchor="middle" fontSize="12" fill="#64748b" fontStyle="italic">Sequential Flow</text>
      <text x={280} y={325} textAnchor="middle" fontSize="12" fill="#64748b">No going back easily</text>
    </svg>
  );
}
