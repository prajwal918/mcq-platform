"use client";

export function TopologicalSortDiagram() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowtopo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Topological Sort: DAG with Valid Ordering
      </text>

      <g transform="translate(0, 40)">
        {/* Nodes */}
        <circle cx="60" cy="40" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="60" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">0</text>

        <circle cx="200" cy="40" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="200" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">1</text>

        <circle cx="340" cy="40" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="340" y="45" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">3</text>

        <circle cx="130" cy="120" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="130" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">2</text>

        <circle cx="270" cy="120" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="270" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">4</text>

        {/* Edges */}
        <line x1="78" y1="45" x2="182" y2="45" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />
        <line x1="218" y1="45" x2="322" y2="45" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />
        <line x1="75" y1="55" x2="115" y2="105" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />
        <line x1="200" y1="58" x2="145" y2="105" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />
        <line x1="340" y1="58" x2="285" y2="105" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />
        <line x1="148" y1="120" x2="252" y2="120" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowtopo)" />

        {/* Topological Order */}
        <g transform="translate(0, 170)">
          <text x="200" y="15" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">
            Valid Topological Order: 0 → 3 → 1 → 4 → 2
          </text>
          <text x="200" y="35" textAnchor="middle" fill="#64748b" fontSize="11">
            (Multiple valid orderings may exist)
          </text>
        </g>
      </g>
    </svg>
  );
}
