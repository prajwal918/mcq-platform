export function SevenSegmentDiagram() {
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-xs">
      <text
        x="150"
        y="20"
        textAnchor="middle"
        className="fill-slate-800 text-sm font-bold dark:fill-slate-200"
      >
        7-Segment Display
      </text>

      <polygon
        points="70,40 80,30 120,30 130,40 120,50 80,50"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="100"
        y="45"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        a
      </text>

      <polygon
        points="135,45 145,55 145,95 135,105 125,95 125,55"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="135"
        y="78"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        b
      </text>

      <polygon
        points="135,115 145,125 145,165 135,175 125,165 125,125"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="135"
        y="148"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        c
      </text>

      <polygon
        points="70,180 80,170 120,170 130,180 120,190 80,190"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="100"
        y="185"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        d
      </text>

      <polygon
        points="65,115 75,125 75,165 65,175 55,165 55,125"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="65"
        y="148"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        e
      </text>

      <polygon
        points="65,45 75,55 75,95 65,105 55,95 55,55"
        fill="#ef4444"
        stroke="#991b1b"
        strokeWidth="2"
      />
      <text
        x="65"
        y="78"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        f
      </text>

      <polygon
        points="70,110 80,100 120,100 130,110 120,120 80,120"
        fill="#22c55e"
        stroke="#15803d"
        strokeWidth="2"
      />
      <text
        x="100"
        y="115"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        g
      </text>

      <circle cx="160" cy="175" r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
      <text
        x="160"
        y="195"
        textAnchor="middle"
        className="fill-slate-500 text-[9px]"
      >
        DP
      </text>

      <text
        x="150"
        y="230"
        textAnchor="middle"
        className="fill-slate-600 text-xs dark:fill-slate-400"
      >
        Active segments display digits 0-9
      </text>
      <text
        x="150"
        y="248"
        textAnchor="middle"
        className="fill-slate-500 text-[10px]"
      >
        Example: segments a,b,c,d,e,f ON = 0
      </text>
    </svg>
  );
}
