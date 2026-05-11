"use client";

export default function ERDiagramSymbols() {
  return (
    <svg
      viewBox="0 0 600 280"
      className="w-full max-w-[600px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Title */}
      <text x="300" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">
        ER Diagram Symbols
      </text>

      {/* Entity - Rectangle */}
      <rect x="40" y="60" width="100" height="50" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      <text x="90" y="88" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">
        Entity
      </text>
      <text x="90" y="135" textAnchor="middle" fontSize="11" fill="#64748b">
        Rectangle
      </text>

      {/* Attribute - Ellipse */}
      <ellipse cx="260" cy="85" rx="55" ry="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="260" y="90" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="600">
        Attribute
      </text>
      <text x="260" y="135" textAnchor="middle" fontSize="11" fill="#64748b">
        Ellipse
      </text>

      {/* Multi-valued - Double Ellipse */}
      <ellipse cx="420" cy="85" rx="58" ry="30" fill="none" stroke="#8b5cf6" strokeWidth="2" />
      <ellipse cx="420" cy="85" rx="52" ry="26" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
      <text x="420" y="90" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="600">
        Multi-valued
      </text>
      <text x="420" y="135" textAnchor="middle" fontSize="11" fill="#64748b">
        Double Ellipse
      </text>

      {/* Relationship - Diamond */}
      <polygon points="300,180 360,210 300,240 240,210" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="300" y="215" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="600">
        Relationship
      </text>
      <text x="300" y="265" textAnchor="middle" fontSize="11" fill="#64748b">
        Diamond
      </text>

      {/* Weak Entity - Double Rectangle */}
      <rect x="40" y="170" width="100" height="50" rx="4" fill="none" stroke="#475569" strokeWidth="2" />
      <rect x="44" y="174" width="92" height="42" rx="3" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
      <text x="90" y="200" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="600">
        Weak Entity
      </text>
      <text x="90" y="245" textAnchor="middle" fontSize="11" fill="#64748b">
        Double Rectangle
      </text>

      {/* Derived - Dashed Ellipse */}
      <ellipse cx="480" cy="195" rx="55" ry="28" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" strokeDasharray="6,4" />
      <text x="480" y="200" textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="600">
        Derived
      </text>
      <text x="480" y="245" textAnchor="middle" fontSize="11" fill="#64748b">
        Dashed Ellipse
      </text>
    </svg>
  );
}
