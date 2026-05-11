"use client";

export default function TestingLevelsDiagram() {
  const levels = [
    { name: "Unit Testing", color: "#3b82f6", y: 240, desc: "Individual components" },
    { name: "Integration Testing", color: "#8b5cf6", y: 180, desc: "Combined modules" },
    { name: "System Testing", color: "#f59e0b", y: 120, desc: "Complete system" },
    { name: "Acceptance Testing", color: "#10b981", y: 60, desc: "Customer validation" },
  ];

  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto max-w-lg mx-auto">
      {/* Pyramid */}
      <polygon points="250,40 80,280 420,280" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

      {levels.map((level) => (
        <g key={level.name}>
          <rect x={160} y={level.y} width={180} height={44} rx={6} fill={level.color} opacity="0.15" stroke={level.color} strokeWidth="2" />
          <text x={250} y={level.y + 20} textAnchor="middle" fontSize={13} fontWeight="700" fill={level.color}>{level.name}</text>
          <text x={250} y={level.y + 36} textAnchor="middle" fontSize={10} fill="#64748b">{level.desc}</text>
        </g>
      ))}

      <text x={250} y={310} textAnchor="middle" fontSize={12} fill="#64748b" fontStyle="italic">Software Testing Levels Pyramid</text>
    </svg>
  );
}
