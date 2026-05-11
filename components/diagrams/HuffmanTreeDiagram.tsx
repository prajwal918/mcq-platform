"use client";

export function HuffmanTreeDiagram() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-auto max-h-64">
      <defs>
        <marker id="arrowhuff" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
        </marker>
      </defs>

      <text x="200" y="20" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">
        Huffman Coding Tree: Data at Leaves
      </text>

      <g transform="translate(0, 30)">
        {/* Root: 100 */}
        <circle cx="200" cy="40" r="20" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="200" y="45" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">100</text>
        <text x="225" y="35" fill="#64748b" fontSize="9">Internal</text>

        {/* Level 1 */}
        <line x1="185" y1="55" x2="140" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="155" y="68" fill="#64748b" fontSize="10">0</text>

        <line x1="215" y1="55" x2="260" y2="90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="245" y="68" fill="#64748b" fontSize="10">1</text>

        {/* Left Internal: 45 */}
        <circle cx="130" cy="100" r="18" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="130" y="104" textAnchor="middle" fill="#8b5cf6" fontSize="11">45</text>

        {/* Right Internal: 55 */}
        <circle cx="270" cy="100" r="18" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="270" y="104" textAnchor="middle" fill="#8b5cf6" fontSize="11">55</text>

        {/* Level 2 - Left Branch */}
        <line x1="118" y1="113" x2="95" y2="145" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="100" y="125" fill="#64748b" fontSize="10">0</text>

        <line x1="142" y1="113" x2="165" y2="145" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="160" y="125" fill="#64748b" fontSize="10">1</text>

        {/* Leaf f: 45 */}
        <circle cx="85" cy="155" r="16" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="85" y="159" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">f</text>
        <text x="85" y="180" textAnchor="middle" fill="#10b981" fontSize="10">45</text>
        <text x="85" y="192" textAnchor="middle" fill="#f59e0b" fontSize="10">Code: 0</text>

        {/* Internal 30 */}
        <circle cx="170" cy="155" r="16" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="170" y="159" textAnchor="middle" fill="#8b5cf6" fontSize="10">30</text>

        {/* Level 3 */}
        <line x1="160" y1="168" x2="145" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="148" y="178" fill="#64748b" fontSize="9">0</text>

        <line x1="180" y1="168" x2="195" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="192" y="178" fill="#64748b" fontSize="9">1</text>

        {/* Leaf c: 12 */}
        <circle cx="135" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="135" y="209" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">c</text>
        <text x="135" y="225" textAnchor="middle" fill="#10b981" fontSize="9">12</text>

        {/* Leaf e: 16 */}
        <circle cx="200" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="200" y="209" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">e</text>
        <text x="200" y="225" textAnchor="middle" fill="#10b981" fontSize="9">16</text>

        {/* Level 2 - Right Branch */}
        <line x1="258" y1="113" x2="235" y2="145" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="240" y="125" fill="#64748b" fontSize="10">0</text>

        <line x1="282" y1="113" x2="305" y2="145" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <text x="300" y="125" fill="#64748b" fontSize="10">1</text>

        {/* Internal 25 */}
        <circle cx="225" cy="155" r="16" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="225" y="159" textAnchor="middle" fill="#8b5cf6" fontSize="10">25</text>

        {/* Internal 30 */}
        <circle cx="310" cy="155" r="16" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="310" y="159" textAnchor="middle" fill="#8b5cf6" fontSize="10">30</text>

        {/* Level 3 - Right */}
        <line x1="215" y1="168" x2="200" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <line x1="235" y1="168" x2="250" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />

        {/* Leaf d: 13 */}
        <circle cx="190" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="190" y="209" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">d</text>
        <text x="190" y="225" textAnchor="middle" fill="#10b981" fontSize="9">13</text>

        {/* Leaf a: 5 */}
        <circle cx="255" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="255" y="209" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">a</text>
        <text x="255" y="225" textAnchor="middle" fill="#10b981" fontSize="9">5</text>

        <line x1="298" y1="168" x2="285" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />
        <line x1="322" y1="168" x2="335" y2="195" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhuff)" />

        {/* Leaf b: 9 */}
        <circle cx="275" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="275" y="209" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">b</text>
        <text x="275" y="225" textAnchor="middle" fill="#10b981" fontSize="9">9</text>

        {/* Leaf (internal 14) */}
        <circle cx="340" cy="205" r="14" fill="#10b981" stroke="#10b981" strokeWidth="2" />
        <text x="340" y="209" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">14</text>
      </g>

      <g transform="translate(0, 255)">
        <circle cx="20" cy="10" r="8" fill="#10b981" />
        <text x="35" y="14" fill="#94a3b8" fontSize="11">Leaf (Data)</text>
        <circle cx="140" cy="10" r="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="155" y="14" fill="#94a3b8" fontSize="11">Internal Node</text>
      </g>
    </svg>
  );
}
