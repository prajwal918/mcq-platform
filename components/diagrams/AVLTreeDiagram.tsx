"use client";

export function AVLTreeDiagram() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
        </marker>
      </defs>

      {/* Title */}
      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        AVL Tree Balance Factor
      </text>

      {/* Balanced AVL Tree */}
      <g transform="translate(0, 30)">
        <text x="100" y="15" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Balanced (BF = +1)</text>

        {/* Root: 30 */}
        <circle cx="100" cy="50" r="20" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="100" y="55" textAnchor="middle" fill="#e2e8f0" fontSize="14">30</text>
        <text x="125" y="45" fill="#10b981" fontSize="10">+1</text>

        {/* Left: 20 */}
        <line x1="85" y1="65" x2="60" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="50" cy="110" r="18" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="50" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">20</text>
        <text x="72" y="105" fill="#10b981" fontSize="9">0</text>

        {/* Right: 40 */}
        <line x1="115" y1="65" x2="140" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="150" cy="110" r="18" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="150" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">40</text>
        <text x="172" y="105" fill="#10b981" fontSize="9">0</text>

        {/* Left-Left: 10 */}
        <line x1="40" y1="125" x2="25" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="20" cy="165" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="20" y="169" textAnchor="middle" fill="#e2e8f0" fontSize="11">10</text>

        {/* Left-Right: 25 */}
        <line x1="60" y1="125" x2="75" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="80" cy="165" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="80" y="169" textAnchor="middle" fill="#e2e8f0" fontSize="11">25</text>

        {/* Right-Right: 50 */}
        <line x1="160" y1="125" x2="175" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="180" cy="165" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="180" y="169" textAnchor="middle" fill="#e2e8f0" fontSize="11">50</text>
      </g>

      {/* Unbalanced Tree (NOT AVL) */}
      <g transform="translate(200, 30)">
        <text x="100" y="15" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Unbalanced (BF = +2)</text>

        {/* Root: 30 */}
        <circle cx="100" cy="50" r="20" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <text x="100" y="55" textAnchor="middle" fill="#e2e8f0" fontSize="14">30</text>
        <text x="125" y="45" fill="#ef4444" fontSize="10">+2</text>

        {/* Left: 20 */}
        <line x1="85" y1="65" x2="60" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="50" cy="110" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <text x="50" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">20</text>
        <text x="72" y="105" fill="#ef4444" fontSize="9">+1</text>

        {/* Right: 40 */}
        <line x1="115" y1="65" x2="140" y2="100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="150" cy="110" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="150" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">40</text>
        <text x="172" y="105" fill="#64748b" fontSize="9">0</text>

        {/* Left-Left: 10 */}
        <line x1="40" y1="125" x2="25" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="20" cy="165" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <text x="20" y="169" textAnchor="middle" fill="#e2e8f0" fontSize="11">10</text>

        {/* Left-Left-Left: 5 */}
        <line x1="12" y1="180" x2="5" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="5" cy="210" r="14" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <text x="5" y="214" textAnchor="middle" fill="#e2e8f0" fontSize="10">5</text>

        {/* Left-Right: 25 */}
        <line x1="60" y1="125" x2="75" y2="155" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <circle cx="80" cy="165" r="16" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="80" y="169" textAnchor="middle" fill="#e2e8f0" fontSize="11">25</text>
      </g>

      {/* Legend */}
      <g transform="translate(0, 260)">
        <text x="200" y="15" textAnchor="middle" fill="#64748b" fontSize="11">
          Balance Factor = |Left Height - Right Height| ≤ 1 for AVL
        </text>
      </g>
    </svg>
  );
}
