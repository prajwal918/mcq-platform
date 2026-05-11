export function ArduinoPinsDiagram() {
  return (
    <svg viewBox="0 0 400 280" className="w-full max-w-md">
      <text
        x="200"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        Arduino Uno Pinout — Analog Inputs
      </text>

      <rect
        x="80"
        y="35"
        width="240"
        height="200"
        rx="8"
        fill="#0ea5e9"
        stroke="#0369a1"
        strokeWidth="2"
      />
      <rect
        x="90"
        y="45"
        width="220"
        height="180"
        rx="4"
        fill="#e0f2fe"
        stroke="#7dd3fc"
        strokeWidth="1"
      />

      <rect
        x="90"
        y="50"
        width="60"
        height="20"
        rx="2"
        fill="#f1f5f9"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      <text
        x="120"
        y="63"
        textAnchor="middle"
        className="fill-slate-600 text-[8px]"
      >
        USB/PWR
      </text>

      <text
        x="200"
        y="75"
        textAnchor="middle"
        className="fill-slate-700 text-[10px] font-bold"
      >
        DIGITAL PINS (D0-D13)
      </text>
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={`d-top-${i}`}>
          <rect
            x={110 + i * 22}
            y={85}
            width="18"
            height="14"
            rx="2"
            fill="#f8fafc"
            stroke="#94a3b8"
            strokeWidth="1"
          />
          <text
            x={119 + i * 22}
            y={95}
            textAnchor="middle"
            className="fill-slate-600 text-[7px]"
          >
            D{i}
          </text>
        </g>
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={`d-bot-${i}`}>
          <rect
            x={110 + i * 22}
            y={102}
            width="18"
            height="14"
            rx="2"
            fill="#f8fafc"
            stroke="#94a3b8"
            strokeWidth="1"
          />
          <text
            x={119 + i * 22}
            y={112}
            textAnchor="middle"
            className="fill-slate-600 text-[7px]"
          >
            D{i + 7}
          </text>
        </g>
      ))}

      <text
        x="200"
        y="140"
        textAnchor="middle"
        className="fill-slate-700 text-[10px] font-bold"
      >
        ANALOG INPUT PINS
      </text>
      {["A0", "A1", "A2", "A3", "A4", "A5"].map((pin, i) => (
        <g key={pin}>
          <rect
            x={125 + i * 28}
            y={150}
            width="24"
            height="22"
            rx="3"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="2"
          />
          <text
            x={137 + i * 28}
            y="165"
            textAnchor="middle"
            className="fill-white text-[9px] font-bold"
          >
            {pin}
          </text>
        </g>
      ))}

      <text
        x="200"
        y="195"
        textAnchor="middle"
        className="fill-slate-600 text-[9px]"
      >
        PWM (~): D3, D5, D6, D9, D10, D11
      </text>

      <rect
        x="90"
        y="210"
        width="220"
        height="20"
        rx="2"
        fill="#fef3c7"
        stroke="#d97706"
        strokeWidth="1"
      />
      <text
        x="200"
        y="223"
        textAnchor="middle"
        className="fill-amber-800 text-[9px] font-semibold"
      >
        Analog Input Range: A0 to A5 (10-bit ADC on Uno)
      </text>

      <path d="M340 160 L360 160" stroke="#16a34a" strokeWidth="1.5" />
      <text x="365" y="163" className="fill-green-700 text-[9px]">
        Analog
      </text>
      <text x="365" y="173" className="fill-green-700 text-[9px]">
        Inputs
      </text>
    </svg>
  );
}
