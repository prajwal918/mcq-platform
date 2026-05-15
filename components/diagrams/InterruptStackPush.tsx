"use client";

export default function InterruptStackPush() {
  return (
    <svg viewBox="0 0 500 350" className="h-auto w-full max-w-lg">
      <rect width="500" height="350" fill="#0f172a" rx="8"/>
      <text x="250" y="25" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="monospace">
        8086 Interrupt Response - Stack Push Sequence
      </text>
      <text x="30" y="60" fill="#64748b" fontSize="10" fontFamily="monospace">SS:SP</text>
      <rect x="100" y="50" width="200" height="280" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
      <text x="200" y="70" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">STACK</text>
      <rect x="110" y="80" width="180" height="50" rx="4" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
      <text x="200" y="105" textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="bold" fontFamily="monospace">FLAGS</text>
      <text x="200" y="122" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">Pushed FIRST (Step 1)</text>
      <path d="M 320 105 L 360 105" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowhead1)"/>
      <defs>
        <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24"/>
        </marker>
      </defs>
      <text x="390" y="100" fill="#fbbf24" fontSize="10" fontFamily="monospace">1. Push FLAGS</text>
      <text x="390" y="115" fill="#94a3b8" fontSize="9" fontFamily="monospace">Clear IF & TF</text>
      <rect x="110" y="140" width="180" height="50" rx="4" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="2"/>
      <text x="200" y="165" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold" fontFamily="monospace">CS</text>
      <text x="200" y="182" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">Pushed SECOND (Step 2)</text>
      <path d="M 320 165 L 360 165" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#60a5fa"/>
        </marker>
      </defs>
      <text x="390" y="160" fill="#93c5fd" fontSize="10" fontFamily="monospace">2. Push CS</text>
      <rect x="110" y="200" width="180" height="50" rx="4" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2"/>
      <text x="200" y="225" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="bold" fontFamily="monospace">IP</text>
      <text x="200" y="242" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">Pushed THIRD (Step 3)</text>
      <path d="M 320 225 L 360 225" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowhead3)"/>
      <defs>
        <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399"/>
        </marker>
      </defs>
      <text x="390" y="220" fill="#6ee7b7" fontSize="10" fontFamily="monospace">3. Push IP</text>
      <rect x="110" y="270" width="180" height="50" rx="4" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2"/>
      <text x="200" y="295" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontFamily="monospace">Load new CS:IP from IVT</text>
      <text x="200" y="312" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace">-&gt; Jump to ISR</text>
    </svg>
  );
}
