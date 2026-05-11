"use client";

export function PrimsAlgorithmDiagram() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowprim" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Prim's Algorithm: Initialize with Single Vertex
      </text>

      {/* Graph Nodes */}
      <g transform="translate(0, 40)">
        {/* Node A */}
        <circle cx="80" cy="80" r="22" fill="#10b981" stroke="#059669" strokeWidth="3" />
        <text x="80" y="86" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">A</text>
        <text x="80" y="55" textAnchor="middle" fill="#10b981" fontSize="10">Start</text>

        {/* Node B */}
        <circle cx="200" cy="40" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="200" y="46" textAnchor="middle" fill="#e2e8f0" fontSize="14">B</text>

        {/* Node C */}
        <circle cx="320" cy="80" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="320" y="86" textAnchor="middle" fill="#e2e8f0" fontSize="14">C</text>

        {/* Node D */}
        <circle cx="140" cy="160" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="140" y="166" textAnchor="middle" fill="#e2e8f0" fontSize="14">D</text>

        {/* Node E */}
        <circle cx="260" cy="160" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="260" y="166" textAnchor="middle" fill="#e2e8f0" fontSize="14">E</text>

        {/* Node F */}
        <circle cx="200" cy="220" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="200" y="226" textAnchor="middle" fill="#e2e8f0" fontSize="14">F</text>

        {/* Edges with Weights */}
        {/* A-B: 4 */}
        <line x1="98" y1="72" x2="182" y2="52" stroke="#64748b" strokeWidth="2" />
        <text x="140" y="55" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">4</text>

        {/* A-D: 2 */}
        <line x1="90" y1="98" x2="128" y2="142" stroke="#10b981" strokeWidth="3" />
        <text x="100" y="125" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">2</text>

        {/* B-C: 1 */}
        <line x1="220" y1="48" x2="302" y2="72" stroke="#64748b" strokeWidth="2" />
        <text x="265" y="52" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">1</text>

        {/* B-D: 3 */}
        <line x1="186" y1="56" x2="154" y2="142" stroke="#64748b" strokeWidth="2" />
        <text x="160" y="95" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">3</text>

        {/* C-E: 5 */}
        <line x1="304" y1="96" x2="276" y2="142" stroke="#64748b" strokeWidth="2" />
        <text x="295" y="125" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">5</text>

        {/* D-E: 2 */}
        <line x1="160" y1="160" x2="242" y2="160" stroke="#64748b" strokeWidth="2" />
        <text x="200" y="152" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">2</text>

        {/* D-F: 4 */}
        <line x1="152" y1="178" x2="188" y2="202" stroke="#64748b" strokeWidth="2" />
        <text x="165" y="195" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">4</text>

        {/* E-F: 1 */}
        <line x1="248" y1="178" x2="212" y2="202" stroke="#64748b" strokeWidth="2" />
        <text x="235" y="195" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">1</text>
      </g>

      {/* Legend */}
      <g transform="translate(0, 270)">
        <circle cx="20" cy="10" r="8" fill="#10b981" />
        <text x="35" y="14" fill="#94a3b8" fontSize="11">MST Vertex (Start)</text>
        <circle cx="180" cy="10" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <text x="195" y="14" fill="#94a3b8" fontSize="11">Unvisited Vertex</text>
        <line x1="300" y1="10" x2="320" y2="10" stroke="#10b981" strokeWidth="3" />
        <text x="330" y="14" fill="#94a3b8" fontSize="11">Selected Edge</text>
      </g>
    </svg>
  );
}
