import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "cs3005-unit1-q1",
    text: "8086 can access up to?",
    options: [
      { id: "A", text: "512KB" },
      { id: "B", text: "2Mb" },
      { id: "C", text: "1Mb" },
      { id: "D", text: "256KB" },
    ],
    correctOptionId: "C",
    explanation:
      "The 8086 has a 20-bit address bus, allowing it to address 2^20 = 1,048,576 bytes = 1 MB of memory.",
  },
  {
    id: "cs3005-unit1-q2",
    text: "8086 has ___ address bus",
    options: [
      { id: "A", text: "20 bit" },
      { id: "B", text: "8 bit" },
      { id: "C", text: "16 bit" },
      { id: "D", text: "24 bit" },
    ],
    correctOptionId: "A",
    explanation:
      "The 8086 microprocessor features a 20-bit address bus and a 16-bit data bus.",
  },
  {
    id: "cs3005-unit1-q3",
    text: "Which flag is set to 1 when the result of arithmetic or logical operation is zero else it is set to 0?",
    options: [
      { id: "A", text: "Trap flag" },
      { id: "B", text: "Zero flag" },
      { id: "C", text: "Sign flag" },
      { id: "D", text: "Over flow flag" },
    ],
    correctOptionId: "B",
    explanation:
      "The Zero Flag (ZF) is set to 1 if the result of an operation is zero; otherwise it is cleared to 0.",
  },
  {
    id: "cs3005-unit1-q4",
    text: "Which index register in the 8086 is primarily used for operations involving string processing?",
    options: [
      { id: "A", text: "BP, SP" },
      { id: "B", text: "DH, DL" },
      { id: "C", text: "BH, BL" },
      { id: "D", text: "SI, DI" },
    ],
    correctOptionId: "D",
    explanation:
      "SI (Source Index) and DI (Destination Index) are the dedicated index registers used for string manipulation operations.",
  },
  {
    id: "cs3005-unit1-q5",
    text: "The different ways in which a source operand is denoted in an instruction is known as",
    options: [
      { id: "A", text: "Instruction Set" },
      { id: "B", text: "Interrupts" },
      { id: "C", text: "8086 Configuration" },
      { id: "D", text: "Addressing Modes" },
    ],
    correctOptionId: "D",
    explanation:
      "Addressing modes define how the operand is specified in an instruction, determining how the CPU accesses the data.",
  },
  {
    id: "cs3005-unit1-q6",
    text: "The 16 bit flag of 8086 microprocessor is responsible to indicate ___________",
    options: [
      { id: "A", text: "the condition of result of ALU operation" },
      { id: "B", text: "the condition of memory" },
      { id: "C", text: "the result of addition" },
      { id: "D", text: "the result of subtraction" },
    ],
    correctOptionId: "A",
    explanation:
      "The 16-bit FLAGS register indicates the status and control conditions resulting from ALU operations, such as zero, sign, carry, and overflow.",
  },
  {
    id: "cs3005-unit1-q7",
    text: "The 1 MB byte of memory can be divided into ______ segment",
    options: [
      { id: "A", text: "1 Kbyte" },
      { id: "B", text: "64 Kbyte" },
      { id: "C", text: "34 Kbyte" },
      { id: "D", text: "256 Kbyte" },
    ],
    correctOptionId: "B",
    explanation:
      "The 8086 divides 1 MB of memory into segments of up to 64 KB each, as offsets are 16-bit (2^16 = 64 KB).",
  },
  {
    id: "cs3005-unit1-q8",
    text: "The SS is called as ________",
    options: [
      { id: "A", text: "stack segment" },
      { id: "B", text: "random stack" },
      { id: "C", text: "single stack" },
      { id: "D", text: "sequence stack" },
    ],
    correctOptionId: "A",
    explanation:
      "SS stands for Stack Segment register, which points to the memory segment containing the program stack.",
  },
  {
    id: "cs3005-unit1-q9",
    text: "The BIU contains FIFO/ INSTRUCTION QUEUE register of size __________ bytes",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "6" },
      { id: "C", text: "4" },
      { id: "D", text: "12" },
    ],
    correctOptionId: "B",
    explanation:
      "The Bus Interface Unit (BIU) of the 8086 contains a 6-byte instruction prefetch queue.",
  },
  {
    id: "cs3005-unit1-q10",
    text: "The instruction, MOV AX, 0005H belongs to the address mode",
    options: [
      { id: "A", text: "register" },
      { id: "B", text: "direct" },
      { id: "C", text: "immediate" },
      { id: "D", text: "register indirect" },
    ],
    correctOptionId: "C",
    explanation:
      "In immediate addressing, the operand (0005H) is specified directly in the instruction itself.",
  },
  {
    id: "cs3005-unit1-q11",
    text: "The instruction, MOV AX, [2500H] is an example of",
    options: [
      { id: "A", text: "immediate addressing mode" },
      { id: "B", text: "direct addressing mode" },
      { id: "C", text: "indirect addressing mode" },
      { id: "D", text: "register addressing mode" },
    ],
    correctOptionId: "B",
    explanation:
      "Direct addressing mode uses a constant memory address (2500H) enclosed in brackets to access data directly.",
  },
  {
    id: "cs3005-unit1-q12",
    text: "The instruction, MOV AX,[BX] is an example of",
    options: [
      { id: "A", text: "direct addressing mode" },
      { id: "B", text: "register addressing mode" },
      { id: "C", text: "register relative addressing mode" },
      { id: "D", text: "register indirect addressing mode" },
    ],
    correctOptionId: "D",
    explanation:
      "Register indirect addressing uses a register (BX) to hold the memory address of the operand.",
  },
  {
    id: "cs3005-unit1-q13",
    text: "If the location to which the control is to be transferred lies in a different segment other than the current one, then the mode is called",
    options: [
      { id: "A", text: "intrasegment mode" },
      { id: "B", text: "intersegment direct mode" },
      { id: "C", text: "intersegment direct and indirect mode" },
      { id: "D", text: "intersegment indirect mode" },
    ],
    correctOptionId: "C",
    explanation:
      "When control transfers to a different segment, it is called intersegment addressing, which can be direct or indirect.",
  },
  {
    id: "cs3005-unit1-q14",
    text: "If [CS]=348AH, [IP]=4214H, then the 20-bit physical address from which the code is accessed will be",
    options: [
      { id: "A", text: "455CAH" },
      { id: "B", text: "0769EH" },
      { id: "C", text: "390B4H" },
      { id: "D", text: "38AB4H" },
    ],
    correctOptionId: "D",
    explanation:
      "Physical Address = CS × 10H + IP = 348A0H + 4214H = 38AB4H.",
  },
  {
    id: "cs3005-unit1-q15",
    text: "Setting of direction flag in 8086 causes,",
    options: [
      { id: "A", text: "The microprocessor to operate in single stepping mode" },
      { id: "B", text: "The microprocessor to operate in break point mode" },
      { id: "C", text: "The microprocessor string operations in auto increment mode" },
      { id: "D", text: "The microprocessor string operations in auto decrement mode" },
    ],
    correctOptionId: "D",
    explanation:
      "When DF=1, string operations automatically decrement SI/DI (auto-decrement). When DF=0, they increment (auto-increment).",
  },
  {
    id: "cs3005-unit1-q16",
    text: "In the 8086 microprocessor, if a program execution requires accessing an array stored in memory with an offset stored in SI (Source Index), which combination of registers would typically be used for addressing?",
    options: [
      { id: "A", text: "CS:SI (Code Segment with Source Index)" },
      { id: "B", text: "DS:SI (Data Segment with Source Index)" },
      { id: "C", text: "SS:SI (Stack Segment with Source Index)" },
      { id: "D", text: "ES:SI (Extra Segment with Source Index)" },
    ],
    correctOptionId: "B",
    explanation:
      "Data segments are accessed using DS (Data Segment) combined with an offset register like SI.",
  },
  {
    id: "cs3005-unit1-q17",
    text: "The size of ALU in 8086 is",
    options: [
      { id: "A", text: "8 bit" },
      { id: "B", text: "16 bit" },
      { id: "C", text: "32 bit" },
      { id: "D", text: "64 bit" },
    ],
    correctOptionId: "B",
    explanation:
      "The 8086 has a 16-bit ALU capable of performing arithmetic and logical operations on 16-bit data.",
  },
  {
    id: "cs3005-unit1-q18",
    text: "The directive used to inform the assembler, the names of the logical segments to be assumed for different segments used in the program is",
    options: [
      { id: "A", text: "ASSUME" },
      { id: "B", text: "SEGMENT" },
      { id: "C", text: "SHORT" },
      { id: "D", text: "DB" },
    ],
    correctOptionId: "A",
    explanation:
      "The ASSUME directive tells the assembler which logical segments correspond to the physical segment registers (CS, DS, SS, ES).",
  },
  {
    id: "cs3005-unit1-q19",
    text: "Match the following a) DB 1) used to direct the assembler to reserve only 10-bytes b) DT 2) used to direct the assembler to reserve only 4 words c) DW 3) used to direct the assembler to reserve byte or bytes d) DQ 4) used to direct the assembler to reserve words",
    options: [
      { id: "A", text: "a-3, b-2, c-4, d-1" },
      { id: "B", text: "a-2, b-3, c-1, d-4" },
      { id: "C", text: "a-3, b-1, c-2, d-4" },
      { id: "D", text: "a-3, b-1, c-4, d-2" },
    ],
    correctOptionId: "D",
    explanation:
      "DB=Define Byte, DT=Define Ten Bytes, DW=Define Word (2 bytes), DQ=Define Quadword (4 words/8 bytes). Thus a-3, b-1, c-4, d-2.",
  },
  {
    id: "cs3005-unit1-q20",
    text: "The directive that marks the end of a logical segment is",
    options: [
      { id: "A", text: "ENDS" },
      { id: "B", text: "END" },
      { id: "C", text: "ENDS & END" },
      { id: "D", text: "ENDD" },
    ],
    correctOptionId: "A",
    explanation:
      "ENDS (End Segment) marks the end of a logical segment, while END marks the end of the entire program.",
  },
  {
    id: "cs3005-unit1-q21",
    text: "The instruction that is invalid among the following is",
    options: [
      { id: "A", text: "MOV AX, BX" },
      { id: "B", text: "MOV AX, [BX]" },
      { id: "C", text: "MOV 55H, BL" },
      { id: "D", text: "MOV AL, 55H" },
    ],
    correctOptionId: "C",
    explanation:
      "An immediate value (55H) cannot be used as a destination operand in the MOV instruction.",
  },
  {
    id: "cs3005-unit1-q22",
    text: "What does the RCR instruction do?",
    options: [
      { id: "A", text: "Rotates bits to the right including the Carry Flag" },
      { id: "B", text: "Rotates bits to the left excluding the Carry Flag" },
      { id: "C", text: "Shifts bits to the right" },
      { id: "D", text: "Performs logical AND operation" },
    ],
    correctOptionId: "A",
    explanation:
      "RCR (Rotate Right Through Carry) rotates all bits to the right, including the Carry Flag in the rotation.",
  },
  {
    id: "cs3005-unit1-q23",
    text: "The JS is called as",
    options: [
      { id: "A", text: "jump signed bit" },
      { id: "B", text: "jump single bit" },
      { id: "C", text: "jump simple bit" },
      { id: "D", text: "jump signal it" },
    ],
    correctOptionId: "A",
    explanation:
      "JS stands for Jump if Sign; it jumps if the Sign Flag (SF) is set to 1, indicating a negative result.",
  },
  {
    id: "cs3005-unit1-q24",
    text: "The expansion of DAA is",
    options: [
      { id: "A", text: "decimal adjust after addition" },
      { id: "B", text: "decimal adjust before addition" },
      { id: "C", text: "decimal adjust accumulator" },
      { id: "D", text: "decimal adjust auxiliary" },
    ],
    correctOptionId: "A",
    explanation:
      "DAA stands for Decimal Adjust After Addition, used to correct the result of adding two packed BCD numbers.",
  },
  {
    id: "cs3005-unit1-q25",
    text: "Which group of instructions do not affect the flags?",
    options: [
      { id: "A", text: "Arithmetic operations" },
      { id: "B", text: "Logic operations" },
      { id: "C", text: "Data transfer operations" },
      { id: "D", text: "Branch operations" },
    ],
    correctOptionId: "C",
    explanation:
      "Data transfer instructions (MOV, PUSH, POP, etc.) generally do not modify the processor flags.",
  },
  {
    id: "cs3005-unit1-q26",
    text: "The LOOP instruction in 8086:",
    options: [
      { id: "A", text: "Jumps if CX is zero" },
      { id: "B", text: "Decrements CX and jumps if CX ≠ 0" },
      { id: "C", text: "Increments CX and jumps" },
      { id: "D", text: "Decrements CX and jumps if CX = 0" },
    ],
    correctOptionId: "B",
    explanation:
      "LOOP first decrements CX and then jumps to the specified label if CX is not zero.",
  },
  {
    id: "cs3005-unit1-q27",
    text: "The instruction RET is used to:",
    options: [
      { id: "A", text: "Return from subroutine" },
      { id: "B", text: "Jump to a memory address" },
      { id: "C", text: "Load a segment register" },
      { id: "D", text: "Move to the next instruction" },
    ],
    correctOptionId: "A",
    explanation:
      "RET (Return) pops the return address from the stack and transfers control back to the calling procedure.",
  },
  {
    id: "cs3005-unit1-q28",
    text: "The JMP instruction is used to:",
    options: [
      { id: "A", text: "Jump to a specified location" },
      { id: "B", text: "Call a subroutine" },
      { id: "C", text: "Return from subroutine" },
      { id: "D", text: "Interrupt execution" },
    ],
    correctOptionId: "A",
    explanation:
      "JMP unconditionally transfers control to the specified target address without saving a return address.",
  },
  {
    id: "cs3005-unit1-q29",
    text: "What is the effect of CMP AX, BX?",
    options: [
      { id: "A", text: "Adds AX and BX" },
      { id: "B", text: "Subtracts BX from AX" },
      { id: "C", text: "Moves BX to AX" },
      { id: "D", text: "Subtracts AX from BX" },
    ],
    correctOptionId: "B",
    explanation:
      "CMP compares two operands by subtracting the source (BX) from the destination (AX) and setting flags without storing the result.",
  },
  {
    id: "cs3005-unit1-q30",
    text: "What does PUSH AX do in 8086?",
    options: [
      { id: "A", text: "Moves AX into memory" },
      { id: "B", text: "Moves AX onto the stack" },
      { id: "C", text: "Moves AX into the instruction pointer" },
      { id: "D", text: "Moves AX to an I/O port" },
    ],
    correctOptionId: "B",
    explanation:
      "PUSH AX decrements SP by 2 and copies the contents of AX onto the stack.",
  },
  {
    id: "cs3005-unit1-q31",
    text: "If AX = 36H and AAM is executed, what will be the values of AH and AL?",
    options: [
      { id: "A", text: "AH = 03H, AL = 06H" },
      { id: "B", text: "AH = 06H, AL = 03H" },
      { id: "C", text: "AH = 02H, AL = 08H" },
      { id: "D", text: "AH = 04H, AL = 06H" },
    ],
    correctOptionId: "A",
    explanation:
      "AAM divides AL by 10; for packed BCD representation 36H, it splits into AH=03 (tens) and AL=06 (units).",
  },
  {
    id: "cs3005-unit1-q32",
    text: "The instruction SAR BX, 1 does what?",
    options: [
      { id: "A", text: "Shifts right with zero fill" },
      { id: "B", text: "Shifts right and maintains the sign bit" },
      { id: "C", text: "Shifts left" },
      { id: "D", text: "Rotates right" },
    ],
    correctOptionId: "B",
    explanation:
      "SAR (Shift Arithmetic Right) shifts bits right while preserving the sign bit (MSB) for signed arithmetic.",
  },
  {
    id: "cs3005-unit1-q33",
    text: "The instruction PUSHF is used to:",
    options: [
      { id: "A", text: "Push a register onto the stack" },
      { id: "B", text: "Push the flag register onto the stack" },
      { id: "C", text: "Pop a register from the stack" },
      { id: "D", text: "Load a segment register" },
    ],
    correctOptionId: "B",
    explanation:
      "PUSHF pushes the 16-bit FLAGS register onto the stack.",
  },
  {
    id: "cs3005-unit1-q34",
    text: "The IN AL, DX instruction:",
    options: [
      { id: "A", text: "Inputs a byte from a port address in DX into AL" },
      { id: "B", text: "Inputs a word from memory into AL" },
      { id: "C", text: "Moves a byte from AL to DX" },
      { id: "D", text: "Outputs a byte to a port" },
    ],
    correctOptionId: "A",
    explanation:
      "IN AL, DX reads one byte from the I/O port whose address is stored in DX into the AL register.",
  },
  {
    id: "cs3005-unit1-q35",
    text: "If AL = 05H, what will be the result of executing NEG AL?",
    options: [
      { id: "A", text: "FAH" },
      { id: "B", text: "FBH" },
      { id: "C", text: "FCH" },
      { id: "D", text: "FDH" },
    ],
    correctOptionId: "B",
    explanation:
      "NEG performs two's complement negation. 05H = 00000101B. Two's complement = 11111011B = FBH.",
  },
  {
    id: "cs3005-unit1-q36",
    text: "If the DIV instruction is used on an 8-bit operand, which register stores the quotient?",
    options: [
      { id: "A", text: "AX" },
      { id: "B", text: "AL" },
      { id: "C", text: "AH" },
      { id: "D", text: "DX" },
    ],
    correctOptionId: "B",
    explanation:
      "For 8-bit division, the quotient is stored in AL and the remainder in AH.",
  },
  {
    id: "cs3005-unit1-q37",
    text: "If AL = 27H and ADD AL, 48H is executed, what will be the result after DAA?",
    options: [
      { id: "A", text: "75H and CF=1" },
      { id: "B", text: "6FH and AF = 1" },
      { id: "C", text: "75H and AF = 1" },
      { id: "D", text: "6FH and CF = 1" },
    ],
    correctOptionId: "C",
    explanation:
      "27H + 48H = 6FH. DAA adjusts since lower nibble F > 9, adding 6 gives 75H with AF=1.",
  },
  {
    id: "cs3005-unit1-q38",
    text: "The instruction SHL AX, 1 performs:",
    options: [
      { id: "A", text: "Divides AX by 2" },
      { id: "B", text: "Multiplies AX by 2" },
      { id: "C", text: "Rotates AX left" },
      { id: "D", text: "Exchanges upper and lower bytes of AX" },
    ],
    correctOptionId: "B",
    explanation:
      "SHL (Shift Logical Left) by 1 bit is equivalent to multiplying the operand by 2.",
  },
  {
    id: "cs3005-unit1-q39",
    text: "If AX = 1001 0110 1010 1100B and CF = 1, what will be the result of RCL AX, 1?",
    options: [
      { id: "A", text: "0010 1101 0101 1001B, CF = 1" },
      { id: "B", text: "0010 1101 0101 1000B, CF = 1" },
      { id: "C", text: "0010 1101 0101 1001B, CF = 0" },
      { id: "D", text: "1001 0110 1010 1101B, CF = 1" },
    ],
    correctOptionId: "A",
    explanation:
      "RCL rotates left through carry. The MSB (1) moves to CF, and old CF (1) enters the LSB, producing 0010 1101 0101 1001 with CF=1.",
  },
  {
    id: "cs3005-unit1-q40",
    text: "The AAM instruction operates on which register?",
    options: [
      { id: "A", text: "AL" },
      { id: "B", text: "AX" },
      { id: "C", text: "AH" },
      { id: "D", text: "DX" },
    ],
    correctOptionId: "B",
    explanation:
      "AAM divides AL by 10, storing the quotient in AH and remainder in AL, thus affecting the full AX register.",
  },
];
