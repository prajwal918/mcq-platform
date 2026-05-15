"use client";

export default function MovInstructionEncoding() {
  return (
    <svg viewBox="0 0 700 280" className="h-auto w-full max-w-3xl">
      <rect width="700" height="280" fill="#0f172a" rx="8"/>
      <text x="350" y="25" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="monospace">
        8086 MOV Instruction Encoding Format
      </text>
      <rect x="40" y="50" width="140" height="50" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      <text x="110" y="75" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="monospace">OPCODE</text>
      <text x="110" y="92" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">7 bits + D/W</text>
      <rect x="42" y="52" width="30" height="20" rx="2" fill="#3b82f6" opacity="0.3"/>
      <text x="57" y="66" textAnchor="middle" fill="#bfdbfe" fontSize="8" fontFamily="monospace">D</text>
      <rect x="74" y="52" width="30" height="20" rx="2" fill="#3b82f6" opacity="0.3"/>
      <text x="89" y="66" textAnchor="middle" fill="#bfdbfe" fontSize="8" fontFamily="monospace">W</text>
      <rect x="200" y="50" width="180" height="50" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      <text x="290" y="75" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="monospace">Mod R/M</text>
      <text x="290" y="92" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">MOD | REG | R/M</text>
      <rect x="202" y="52" width="50" height="20" rx="2" fill="#f59e0b" opacity="0.3"/>
      <text x="227" y="66" textAnchor="middle" fill="#fcd34d" fontSize="8" fontFamily="monospace">MOD</text>
      <rect x="254" y="52" width="50" height="20" rx="2" fill="#10b981" opacity="0.3"/>
      <text x="279" y="66" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">REG</text>
      <rect x="306" y="52" width="50" height="20" rx="2" fill="#8b5cf6" opacity="0.3"/>
      <text x="331" y="66" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">R/M</text>
      <rect x="400" y="50" width="180" height="50" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2"/>
      <text x="490" y="75" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="monospace">DISP / IMM</text>
      <text x="490" y="92" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">Optional (0-2 bytes)</text>
      <rect x="40" y="130" width="620" height="130" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      <text x="60" y="155" fill="#94a3b8" fontSize="12" fontWeight="bold" fontFamily="monospace">Field Legend:</text>
      <text x="60" y="180" fill="#fcd34d" fontSize="11" fontFamily="monospace">- MOD (2 bits): Addressing mode for memory operand</text>
      <text x="60" y="200" fill="#6ee7b7" fontSize="11" fontFamily="monospace">- REG (3 bits): Register identifier (source/destination)</text>
      <text x="60" y="220" fill="#c4b5fd" fontSize="11" fontFamily="monospace">- R/M (3 bits): Register/Memory operand specifier</text>
      <text x="60" y="240" fill="#93c5fd" fontSize="11" fontFamily="monospace">- D bit: Direction (0=reg to rm, 1=rm to reg)</text>
      <text x="60" y="260" fill="#93c5fd" fontSize="11" fontFamily="monospace">- W bit: Word/Byte (0=byte, 1=word)</text>
    </svg>
  );
}
