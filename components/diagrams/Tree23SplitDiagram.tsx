"use client";

export function Tree23SplitDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrow23" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        2-3 Tree: Node Split on Insertion
      </text>

      <g transform="translate(0, 35)">
        {/* Before Split */}
        <g transform="translate(0, 0)">
          <text x="100" y="15" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Before Split (3-node full)</text>

          {/* Full 3-node: [10, 20, 30] */}
          <rect x="50" y="30" width="100" height="35" fill="#1e293b" stroke="#ef4444" strokeWidth="2" rx="4" />
          <line x1="83" y1="30" x2="83" y2="65" stroke="#ef4444" strokeWidth="1" />
          <line x1="117" y1="30" x2="117" y2="65" stroke="#ef4444" strokeWidth="1" />
          <text x="66" y="52" textAnchor="middle" fill="#e2e8f0" fontSize="14">10</text>
          <text x="100" y="52" textAnchor="middle" fill="#e2e8f0" fontSize="14">20</text>
          <text x="134" y="52" textAnchor="middle" fill="#e2e8f0" fontSize="14">30</text>

          {/* Children */}
          <line x1="66" y1="65" x2="40" y2="95" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow23)" />
          <line x1="100" y1="65" x2="100" y2="95" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow23)" />
          <line x1="134" y1="65" x2="160" y2="95" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow23)" />

          <rect x="20" y="100" width="40" height="25" fill="#1e293b" stroke="#64748b" strokeWidth="1" rx="3" />
          <text x="40" y="117" textAnchor="middle" fill="#94a3b8" fontSize="10">&lt;10</text>

          <rect x="80" y="100" width="40" height="25" fill="#1e293b" stroke="#64748b" strokeWidth="1" rx="3" />
          <text x="100" y="117" textAnchor="middle" fill="#94a3b8" fontSize="10">10-20</text>

          <rect x="140" y="100" width="40" height="25" fill="#1e293b" stroke="#64748b" strokeWidth="1" rx="3" />
          <text x="160" y="117" textAnchor="middle" fill="#94a3b8" fontSize="10">20-30</text>

          <text x="100" y="145" textAnchor="middle" fill="#ef4444" fontSize="11">Insert 25 → OVERFLOW!</text>
        </g>

        {/* Arrow */}
        <text x="200" y="90" textAnchor="middle" fill="#64748b" fontSize="20">→</text>

        {/* After Split */}
        <g transform="translate(200, 0)">
          <text x="100" y="15" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">After Split</text>

          {/* Parent gets middle key */}
          <rect x="85" y="30" width="30" height="35" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="4" />
          <text x="100" y="52" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">20</text>

          {/* Two new 2-nodes */}
          <line x1="92" y1="65" x2="60" y2="95" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow23)" />
          <line x1="108" y1="65" x2="140" y2="95" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow23)" />

          <rect x="40" y="100" width="40" height="30" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <text x="60" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">10</text>
          <text x="60" y="128" textAnchor="middle" fill="#64748b" fontSize="9">&lt;20</text>

          <rect x="120" y="100" width="50" height="30" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <text x="145" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="12">30</text>
          <text x="145" y="128" textAnchor="middle" fill="#64748b" fontSize="9">&gt;20</text>

          {/* New insertion point */}
          <line x1="145" y1="130" x2="145" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <text x="145" y="165" textAnchor="middle" fill="#f59e0b" fontSize="10">Insert 25 here</text>
        </g>
      </g>
    </svg>
  );
}
