"use client";

export default function AgileManifestoDiagram() {
  const items = [
    { left: "Individuals & interactions", right: "Processes & tools", y: 90 },
    { left: "Working software", right: "Comprehensive documentation", y: 125 },
    { left: "Customer collaboration", right: "Contract negotiation", y: 160 },
    { left: "Responding to change", right: "Following a plan", y: 195 },
  ];

  return (
    <svg viewBox="0 0 500 280" className="w-full h-auto max-w-lg mx-auto">
      <rect x={40} y={30} width={420} height={220} rx={12} fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
      <text x={250} y={60} textAnchor="middle" fontSize={16} fontWeight="700" fill="#065f46">Agile Manifesto</text>

      {items.map((item) => (
        <g key={item.left}>
          <text x={120} y={item.y} textAnchor="middle" fontSize={12} fontWeight="600" fill="#047857">{item.left}</text>
          <text x={250} y={item.y} textAnchor="middle" fontSize={14} fontWeight="700" fill="#059669">over</text>
          <text x={380} y={item.y} textAnchor="middle" fontSize={12} fill="#6b7280">{item.right}</text>
        </g>
      ))}

      <text x={250} y={245} textAnchor="middle" fontSize={11} fill="#6b7280" fontStyle="italic">While there is value in the items on the right, we value the left more.</text>
    </svg>
  );
}
