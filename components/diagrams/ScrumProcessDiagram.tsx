"use client";

export default function ScrumProcessDiagram() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto max-w-lg mx-auto">
      {/* Outer cycle */}
      <ellipse cx={250} cy={160} rx={200} ry={120} fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8,4" />

      {/* Sprint box */}
      <rect x={170} y={120} width={160} height={80} rx={8} fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x={250} y={150} textAnchor="middle" fontSize={16} fontWeight="700" fill="#1e40af">Sprint</text>
      <text x={250} y={170} textAnchor="middle" fontSize={12} fill="#3b82f6">2-4 Weeks</text>
      <text x={250} y={188} textAnchor="middle" fontSize={11} fill="#64748b">Daily Stand-ups</text>

      {/* Arrows around */}
      <text x={250} y={60} textAnchor="middle" fontSize={13} fontWeight="600" fill="#065f46">Sprint Planning</text>
      <polygon points="250,70 245,85 255,85" fill="#065f46" />

      <text x={250} y={280} textAnchor="middle" fontSize={13} fontWeight="600" fill="#92400e">Sprint Review & Retro</text>
      <polygon points="250,270 245,255 255,255" fill="#92400e" />

      <text x={80} y={165} textAnchor="middle" fontSize={12} fontWeight="600" fill="#991b1b">Product Backlog</text>
      <polygon points="90,160 110,155 110,165" fill="#991b1b" />

      <text x={420} y={165} textAnchor="middle" fontSize={12} fontWeight="600" fill="#7c3aed">Increment</text>
      <polygon points="410,160 390,155 390,165" fill="#7c3aed" />

      {/* Roles */}
      <rect x={30} y={240} width={100} height={36} rx={4} fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" />
      <text x={80} y={263} textAnchor="middle" fontSize={11} fill="#be185d" fontWeight="600">Scrum Master</text>

      <rect x={370} y={240} width={100} height={36} rx={4} fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.5" />
      <text x={420} y={263} textAnchor="middle" fontSize={11} fill="#7e22ce" fontWeight="600">Product Owner</text>

      <rect x={200} y={20} width={100} height={36} rx={4} fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
      <text x={250} y={43} textAnchor="middle" fontSize={11} fill="#047857" fontWeight="600">Dev Team</text>
    </svg>
  );
}
