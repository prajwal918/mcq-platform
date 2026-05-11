"use client";

export default function SpiralModelDiagram() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md mx-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>
      {/* Spiral quadrants */}
      <path d="M 200 200 Q 200 100 300 100 Q 350 100 350 150" fill="none" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M 350 150 Q 350 250 300 300 Q 250 350 200 350" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M 200 350 Q 150 350 100 300 Q 50 250 50 200" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M 50 200 Q 50 150 100 100 Q 150 50 200 50" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)" />

      {/* Second loop */}
      <path d="M 200 50 Q 250 50 280 80 Q 310 110 310 150" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M 310 150 Q 310 200 280 230" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />

      {/* Labels */}
      <rect x="260" y="60" width="100" height="28" rx="4" fill="#dbeafe" />
      <text x="310" y="79" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="600">Planning</text>

      <rect x="300" y="260" width="110" height="28" rx="4" fill="#d1fae5" />
      <text x="355" y="279" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="600">Risk Analysis</text>

      <rect x="30" y="260" width="110" height="28" rx="4" fill="#fef3c7" />
      <text x="85" y="279" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="600">Engineering</text>

      <rect x="30" y="60" width="140" height="28" rx="4" fill="#fee2e2" />
      <text x="100" y="79" textAnchor="middle" fontSize="12" fill="#991b1b" fontWeight="600">Customer Eval</text>

      <circle cx="200" cy="200" r="6" fill="#1f2937" />
      <text x="200" y="220" textAnchor="middle" fontSize="11" fill="#6b7280">Start</text>
    </svg>
  );
}
