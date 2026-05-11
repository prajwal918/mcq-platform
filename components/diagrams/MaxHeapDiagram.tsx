"use client";

export function MaxHeapDiagram() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowheap" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Max-Heap: Array [3, 9, 2, 1, 4, 8]
      </text>

      {/* Tree Structure */}
      <g transform="translate(0, 30)">
        {/* Root: 9 */}
        <circle cx="200" cy="50" r="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="3" />
        <text x="200" y="56" textAnchor="middle" fill="#f59e0b" fontSize="18" fontWeight="bold">9</text>
        <text x="230" y="40" fill="#f59e0b" fontSize="10">Root</text>

        {/* Level 1 */}
        <line x1="180" y1="70" x2="120" y2="110" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowheap)" />
        <line x1="220" y1="70" x2="280" y2="110" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowheap)" />

        {/* Left Child: 4 */}
        <circle cx="100" cy="120" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="100" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="14">4</text>

        {/* Right Child: 8 */}
        <circle cx="300" cy="120" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="300" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="14">8</text>

        {/* Level 2 */}
        <line x1="85" y1="135" x2="55" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowheap)" />
        <line x1="115" y1="135" x2="145" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowheap)" />
        <line x1="285" y1="135" x2="255" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowheap)" />

        {/* Left-Left: 1 */}
        <circle cx="45" cy="180" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="45" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="12">1</text>

        {/* Left-Right: 3 */}
        <circle cx="155" cy="180" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="155" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="12">3</text>

        {/* Right-Left: 2 */}
        <circle cx="245" cy="180" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="245" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="12">2</text>
      </g>

      {/* Array Representation */}
      <g transform="translate(50, 230)">
        <text x="0" y="15" fill="#64748b" fontSize="11">Array Index:</text>
        {[0,1,2,3,4,5].map((i) => (
          <g key={i} transform={`translate(${i * 50 + 80}, 0)`}>
            <rect x="0" y="0" width="40" height="30" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />
            <text x="20" y="20" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">
              {[9,4,8,1,3,2][i]}
            </text>
            <text x="20" y="42" textAnchor="middle" fill="#64748b" fontSize="10">[{i}]</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
