"use client";

export default function UMLClassDiagram() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-auto max-w-lg mx-auto">
      {/* Class A */}
      <rect x={50} y={40} width={140} height={100} rx={4} fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x={120} y={65} textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e40af">Student</text>
      <line x1={50} y1={75} x2={190} y2={75} stroke="#3b82f6" strokeWidth="1" />
      <text x={60} y={92} fontSize="11" fill="#374151">- name: String</text>
      <text x={60} y={108} fontSize="11" fill="#374151">- id: int</text>
      <line x1={50} y1={115} x2={190} y2={115} stroke="#3b82f6" strokeWidth="1" />
      <text x={60} y={132} fontSize="11" fill="#374151">+ enroll()</text>

      {/* Class B */}
      <rect x={300} y={40} width={140} height={100} rx={4} fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
      <text x={370} y={65} textAnchor="middle" fontSize="14" fontWeight="700" fill="#065f46">Course</text>
      <line x1={300} y1={75} x2={440} y2={75} stroke="#10b981" strokeWidth="1" />
      <text x={310} y={92} fontSize="11" fill="#374151">- title: String</text>
      <text x={310} y={108} fontSize="11" fill="#374151">- code: String</text>
      <line x1={300} y1={115} x2={440} y2={115} stroke="#10b981" strokeWidth="1" />
      <text x={310} y={132} fontSize="11" fill="#374151">+ addStudent()</text>

      {/* Association */}
      <line x1={190} y1={90} x2={300} y2={90} stroke="#6b7280" strokeWidth="2" />
      <text x={245} y={82} textAnchor="middle" fontSize="10" fill="#6b7280">enrolls in</text>
      <text x={200} y={82} fontSize="10" fill="#6b7280">1</text>
      <text x={290} y={82} fontSize="10" fill="#6b7280">*</text>

      {/* Inheritance example below */}
      <rect x={80} y={180} width={120} height={70} rx={4} fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x={140} y={205} textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">Person</text>
      <line x1={80} y1={215} x2={200} y2={215} stroke="#f59e0b" strokeWidth="1" />
      <text x={90} y={232} fontSize="11" fill="#374151">+ getName()</text>

      <line x1={140} y1={180} x2={140} y2={160} stroke="#6b7280" strokeWidth="2" />
      <polygon points="135,165 145,165 140,155" fill="#6b7280" />

      <rect x={80} y={90} width={120} height={50} rx={4} fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <text x={140} y={115} textAnchor="middle" fontSize="13" fontWeight="700" fill="#c2410c">Professor</text>
      <text x={90} y={132} fontSize="11" fill="#374151">+ teach()</text>

      <text x={250} y={270} textAnchor="middle" fontSize="12" fill="#64748b" fontStyle="italic">UML Class Diagram Structure</text>
    </svg>
  );
}
