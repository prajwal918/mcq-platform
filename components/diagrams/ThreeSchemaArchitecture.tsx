"use client";

export default function ThreeSchemaArchitecture() {
  return (
    <svg
      viewBox="0 0 560 320"
      className="w-full max-w-[560px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Title */}
      <text x="280" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">
        Three-Schema Architecture
      </text>

      {/* External Level */}
      <rect x="30" y="50" width="140" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="100" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">
        External Level
      </text>
      <text x="100" y="96" textAnchor="middle" fontSize="10" fill="#3b82f6">
        (User View)
      </text>

      {/* External Level 2 */}
      <rect x="190" y="50" width="140" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="260" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">
        External Level
      </text>
      <text x="260" y="96" textAnchor="middle" fontSize="10" fill="#3b82f6">
        (User View)
      </text>

      {/* External Level 3 */}
      <rect x="350" y="50" width="140" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="420" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">
        External Level
      </text>
      <text x="420" y="96" textAnchor="middle" fontSize="10" fill="#3b82f6">
        (User View)
      </text>

      {/* Arrows down */}
      <line x1="100" y1="120" x2="100" y2="140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="260" y1="120" x2="260" y2="140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="420" y1="120" x2="420" y2="140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Conceptual Level */}
      <rect x="80" y="150" width="400" height="70" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="280" y="178" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">
        Conceptual Level
      </text>
      <text x="280" y="198" textAnchor="middle" fontSize="10" fill="#d97706">
        (Logical Schema — describes structure & constraints)
      </text>

      {/* Arrow down */}
      <line x1="280" y1="220" x2="280" y2="240" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Internal Level */}
      <rect x="80" y="250" width="400" height="55" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="280" y="275" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">
        Internal Level
      </text>
      <text x="280" y="292" textAnchor="middle" fontSize="10" fill="#22c55e">
        (Physical Storage — indexes, file organization)
      </text>

      {/* Arrow marker */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
        </marker>
      </defs>
    </svg>
  );
}
