"use client";

export function BellmanFordDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowbell" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Bellman-Ford: Edge Relaxation
      </text>

      <g transform="translate(0, 40)">
        {/* Before Relaxation */}
        <g transform="translate(0, 0)">
          <text x="100" y="15" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold">Before Relaxation</text>

          {/* Node U */}
          <circle cx="60" cy="60" r="22" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="66" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">U</text>
          <text x="60" y="95" textAnchor="middle" fill="#f59e0b" fontSize="11">dist[U] = 5</text>

          {/* Edge U→V with weight -2 */}
          <line x1="82" y1="60" x2="158" y2="60" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowbell)" />
          <text x="120" y="52" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">-2</text>
          <text x="120" y="80" textAnchor="middle" fill="#64748b" fontSize="10">(negative weight)</text>

          {/* Node V */}
          <circle cx="180" cy="60" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="180" y="66" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">V</text>
          <text x="180" y="95" textAnchor="middle" fill="#ef4444" fontSize="11">dist[V] = ∞</text>
        </g>

        {/* Arrow */}
        <text x="200" y="75" textAnchor="middle" fill="#64748b" fontSize="20">→</text>

        {/* After Relaxation */}
        <g transform="translate(200, 0)">
          <text x="100" y="15" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">After Relaxation</text>

          {/* Node U */}
          <circle cx="60" cy="60" r="22" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="66" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">U</text>
          <text x="60" y="95" textAnchor="middle" fill="#f59e0b" fontSize="11">dist[U] = 5</text>

          {/* Edge U→V */}
          <line x1="82" y1="60" x2="158" y2="60" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowbell)" />
          <text x="120" y="52" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">-2</text>

          {/* Node V - UPDATED */}
          <circle cx="180" cy="60" r="22" fill="#10b981" stroke="#10b981" strokeWidth="3" />
          <text x="180" y="66" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">V</text>
          <text x="180" y="95" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">dist[V] = 3</text>
          <text x="180" y="110" textAnchor="middle" fill="#64748b" fontSize="9">(5 + (-2) = 3)</text>
        </g>
      </g>

      <g transform="translate(0, 170)">
        <text x="200" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12">
          If dist[V] &gt; dist[U] + weight(U,V), update dist[V]
        </text>
        <text x="200" y="35" textAnchor="middle" fill="#64748b" fontSize="11">
          This is the core relaxation step repeated V-1 times
        </text>
      </g>
    </svg>
  );
}
