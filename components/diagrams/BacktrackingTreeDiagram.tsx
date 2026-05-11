"use client";

export function BacktrackingTreeDiagram() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowback" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Backtracking: State Space Tree with Pruning
      </text>

      <g transform="translate(0, 35)">
        {/* Root */}
        <circle cx="200" cy="30" r="18" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="200" y="35" textAnchor="middle" fill="#8b5cf6" fontSize="10">Root</text>

        {/* Level 1 */}
        <line x1="190" y1="46" x2="130" y2="75" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />
        <line x1="210" y1="46" x2="270" y2="75" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />

        <circle cx="120" cy="85" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="120" y="89" textAnchor="middle" fill="#e2e8f0" fontSize="10">A₁</text>

        <circle cx="280" cy="85" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="280" y="89" textAnchor="middle" fill="#e2e8f0" fontSize="10">A₂</text>

        {/* Level 2 - Left Branch */}
        <line x1="110" y1="99" x2="80" y2="125" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />
        <line x1="130" y1="99" x2="160" y2="125" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />

        <circle cx="75" cy="135" r="14" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="75" y="139" textAnchor="middle" fill="#e2e8f0" fontSize="9">B₁</text>

        <circle cx="165" cy="135" r="14" fill="#1e293b" stroke="#ef4444" strokeWidth="2" strokeDasharray="3" />
        <text x="165" y="139" textAnchor="middle" fill="#ef4444" fontSize="9">B₂</text>
        <text x="165" y="158" textAnchor="middle" fill="#ef4444" fontSize="8">PRUNED</text>

        {/* Level 2 - Right Branch */}
        <line x1="270" y1="99" x2="240" y2="125" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />
        <line x1="290" y1="99" x2="320" y2="125" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />

        <circle cx="235" cy="135" r="14" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="235" y="139" textAnchor="middle" fill="#e2e8f0" fontSize="9">C₁</text>

        <circle cx="325" cy="135" r="14" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <text x="325" y="139" textAnchor="middle" fill="#e2e8f0" fontSize="9">C₂</text>

        {/* Level 3 - Solutions */}
        <line x1="68" y1="147" x2="55" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />
        <line x1="82" y1="147" x2="95" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />

        <circle cx="50" cy="180" r="12" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="50" y="184" textAnchor="middle" fill="#fff" fontSize="8">S₁</text>

        <circle cx="100" cy="180" r="12" fill="#1e293b" stroke="#ef4444" strokeWidth="2" strokeDasharray="2" />
        <text x="100" y="184" textAnchor="middle" fill="#ef4444" fontSize="8">X</text>

        <line x1="228" y1="147" x2="215" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />
        <line x1="242" y1="147" x2="255" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowback)" />

        <circle cx="210" cy="180" r="12" fill="#1e293b" stroke="#ef4444" strokeWidth="2" strokeDasharray="2" />
        <text x="210" y="184" textAnchor="middle" fill="#ef4444" fontSize="8">X</text>

        <circle cx="260" cy="180" r="12" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="260" y="184" textAnchor="middle" fill="#fff" fontSize="8">S₂</text>

        {/* Legend */}
        <g transform="translate(0, 210)">
          <circle cx="20" cy="10" r="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="35" y="14" fill="#94a3b8" fontSize="10">Partial Solution</text>

          <circle cx="140" cy="10" r="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" strokeDasharray="2" />
          <text x="155" y="14" fill="#94a3b8" fontSize="10">Pruned Branch</text>

          <circle cx="260" cy="10" r="8" fill="#10b981" stroke="#10b981" strokeWidth="2" />
          <text x="275" y="14" fill="#94a3b8" fontSize="10">Valid Solution</text>
        </g>
      </g>
    </svg>
  );
}
