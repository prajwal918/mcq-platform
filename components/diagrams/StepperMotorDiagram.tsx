export function StepperMotorDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-md">
      <text
        x="200"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        Stepper Motor vs DC Motor
      </text>

      <text
        x="100"
        y="45"
        textAnchor="middle"
        className="fill-slate-600 text-xs font-semibold"
      >
        DC Motor
      </text>
      <circle
        cx="100"
        cy="100"
        r="35"
        fill="#e2e8f0"
        stroke="#64748b"
        strokeWidth="2"
      />
      <text
        x="100"
        y="95"
        textAnchor="middle"
        className="fill-slate-700 text-[10px] font-bold"
      >
        Continuous
      </text>
      <text
        x="100"
        y="108"
        textAnchor="middle"
        className="fill-slate-600 text-[9px]"
      >
        Rotation
      </text>

      <path
        d="M70 70 A 35 35 0 0 1 130 70"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="3"
      />
      <polygon points="130,70 125,65 125,75" fill="#94a3b8" />

      <text
        x="300"
        y="45"
        textAnchor="middle"
        className="fill-slate-600 text-xs font-semibold"
      >
        Stepper Motor
      </text>
      <circle
        cx="300"
        cy="100"
        r="35"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="2"
      />
      <text
        x="300"
        y="95"
        textAnchor="middle"
        className="fill-green-800 text-[10px] font-bold"
      >
        Discrete
      </text>
      <text
        x="300"
        y="108"
        textAnchor="middle"
        className="fill-green-700 text-[9px]"
      >
        Steps
      </text>

      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const x = 300 + 45 * Math.cos(angle);
        const y = 100 + 45 * Math.sin(angle);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="#16a34a" />
            <text
              x={x}
              y={y + 1}
              textAnchor="middle"
              className="fill-white text-[7px] font-bold"
            >
              {i + 1}
            </text>
          </g>
        );
      })}

      <rect
        x="50"
        y="150"
        width="300"
        height="55"
        rx="4"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      <text
        x="200"
        y="168"
        textAnchor="middle"
        className="fill-slate-700 text-xs font-semibold"
      >
        Key Difference
      </text>
      <text
        x="200"
        y="188"
        textAnchor="middle"
        className="fill-slate-600 text-[10px]"
      >
        Stepper: Precise angular position control via discrete steps
      </text>
      <text
        x="200"
        y="200"
        textAnchor="middle"
        className="fill-slate-500 text-[9px]"
      >
        DC: Continuous rotation, speed controlled by voltage
      </text>
    </svg>
  );
}
