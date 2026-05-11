"use client";

export default function BPlusTreeDiagram() {
  return (
    <svg
      viewBox="0 0 640 340"
      className="w-full max-w-[640px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Title */}
      <text x="320" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">
        B+ Tree Structure
      </text>

      {/* Root Node */}
      <rect x="260" y="40" width="120" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="280" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">30</text>
      <text x="320" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">60</text>
      <text x="360" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">90</text>

      {/* Internal Level */}
      <rect x="80" y="120" width="100" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="100" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">10</text>
      <text x="130" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">20</text>
      <text x="160" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">25</text>

      <rect x="240" y="120" width="100" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="260" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">40</text>
      <text x="290" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">50</text>
      <text x="320" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">55</text>

      <rect x="400" y="120" width="100" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="420" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">70</text>
      <text x="450" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">80</text>
      <text x="480" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">85</text>

      <rect x="520" y="120" width="80" height="40" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="545" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">100</text>
      <text x="575" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">110</text>

      {/* Leaf Level */}
      <rect x="20" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="55" y="240" textAnchor="middle" fontSize="10" fill="#166534">1, 5, 8</text>
      <text x="55" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="100" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="135" y="240" textAnchor="middle" fontSize="10" fill="#166534">12, 15, 18</text>
      <text x="135" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="180" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="215" y="240" textAnchor="middle" fontSize="10" fill="#166534">22, 24, 28</text>
      <text x="215" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="260" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="295" y="240" textAnchor="middle" fontSize="10" fill="#166534">35, 38, 42</text>
      <text x="295" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="340" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="375" y="240" textAnchor="middle" fontSize="10" fill="#166534">48, 52, 58</text>
      <text x="375" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="420" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="455" y="240" textAnchor="middle" fontSize="10" fill="#166534">65, 72, 78</text>
      <text x="455" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="500" y="220" width="70" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="535" y="240" textAnchor="middle" fontSize="10" fill="#166534">82, 88</text>
      <text x="535" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      <rect x="580" y="220" width="55" height="45" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="607" y="240" textAnchor="middle" fontSize="10" fill="#166534">95, 99</text>
      <text x="607" y="255" textAnchor="middle" fontSize="9" fill="#22c55e">Data Ptrs</text>

      {/* Linked leaf pointers */}
      <line x1="90" y1="242" x2="100" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="170" y1="242" x2="180" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="250" y1="242" x2="260" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="330" y1="242" x2="340" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="410" y1="242" x2="420" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="490" y1="242" x2="500" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />
      <line x1="570" y1="242" x2="580" y2="242" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#leafArrow)" />

      {/* Root to internal lines */}
      <line x1="280" y1="80" x2="130" y2="120" stroke="#64748b" strokeWidth="1.5" />
      <line x1="300" y1="80" x2="290" y2="120" stroke="#64748b" strokeWidth="1.5" />
      <line x1="330" y1="80" x2="450" y2="120" stroke="#64748b" strokeWidth="1.5" />
      <line x1="350" y1="80" x2="560" y2="120" stroke="#64748b" strokeWidth="1.5" />

      {/* Internal to leaf lines */}
      <line x1="100" y1="160" x2="55" y2="220" stroke="#64748b" strokeWidth="1.5" />
      <line x1="120" y1="160" x2="135" y2="220" stroke="#64748b" strokeWidth="1.5" />
      <line x1="150" y1="160" x2="215" y2="220" stroke="#64748b" strokeWidth="1.5" />

      <line x1="270" y1="160" x2="295" y2="220" stroke="#64748b" strokeWidth="1.5" />
      <line x1="290" y1="160" x2="375" y2="220" stroke="#64748b" strokeWidth="1.5" />

      <line x1="430" y1="160" x2="455" y2="220" stroke="#64748b" strokeWidth="1.5" />
      <line x1="460" y1="160" x2="535" y2="220" stroke="#64748b" strokeWidth="1.5" />
      <line x1="490" y1="160" x2="607" y2="220" stroke="#64748b" strokeWidth="1.5" />

      {/* Legend */}
      <rect x="20" y="290" width="12" height="12" rx="2" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="38" y="301" fontSize="10" fill="#64748b">Root/Internal</text>

      <rect x="130" y="290" width="12" height="12" rx="2" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
      <text x="148" y="301" fontSize="10" fill="#64748b">Internal Node</text>

      <rect x="240" y="290" width="12" height="12" rx="2" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
      <text x="258" y="301" fontSize="10" fill="#64748b">Leaf Node (linked)</text>

      {/* Arrow marker */}
      <defs>
        <marker id="leafArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#22c55e" />
        </marker>
      </defs>
    </svg>
  );
}
