import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "cs3005-unit3-q1",
    text: "If MN/MX is low the 8086 operates in ______ mode",
    options: [
      { id: "a", text: "Minimum" },
      { id: "b", text: "Maximum" },
      { id: "c", text: "Minimum and Maximum" },
      { id: "d", text: "Medium" },
    ],
    correctOptionId: "b",
    explanation:
      "The MN/MX pin (Minimum/Maximum mode) determines the operating mode of the 8086. When MN/MX is LOW, the 8086 operates in Maximum mode, which supports multiprocessor configurations with coprocessors like the 8087 math coprocessor. When HIGH, it operates in Minimum mode for single-processor systems.",
  },
  {
    id: "cs3005-unit3-q2",
    text: "Which pin is used in both minimum and maximum modes to latch the address from the multiplexed address/data lines?",
    options: [
      { id: "a", text: "MN/MX" },
      { id: "b", text: "ALE" },
      { id: "c", text: "HLDA" },
      { id: "d", text: "INTA" },
    ],
    correctOptionId: "b",
    explanation:
      "ALE (Address Latch Enable) is active in both minimum and maximum modes. It is used to demultiplex the AD0-AD15 lines by latching the address during T1 state of the bus cycle, allowing external latches (like 8282/8283) to capture the address before the lines switch to data transfer.",
  },
  {
    id: "cs3005-unit3-q3",
    text: "Which pin is used exclusively in maximum mode to indicate that the processor has granted a bus request?",
    options: [
      { id: "a", text: "MN/MX" },
      { id: "b", text: "INTR" },
      { id: "c", text: "HLDA" },
      { id: "d", text: "ALE" },
    ],
    correctOptionId: "c",
    explanation:
      "HLDA (Hold Acknowledge) is used exclusively in maximum mode. When another bus master (like a DMA controller) asserts HOLD to request bus access, the 8086 completes its current bus cycle and then asserts HLDA to indicate it has relinquished control of the system bus.",
  },
  {
    id: "cs3005-unit3-q4",
    text: "Which of the following pins is common to both minimum and maximum modes for external interrupt requests?",
    options: [
      { id: "a", text: "HLDA" },
      { id: "b", text: "MN/MX" },
      { id: "c", text: "INTR" },
      { id: "d", text: "S1" },
    ],
    correctOptionId: "c",
    explanation:
      "INTR (Interrupt Request) is a maskable interrupt input that is active in both minimum and maximum modes. It is level-triggered and can be masked by clearing the IF (Interrupt Flag) in the FLAGS register. When active and unmasked, the 8086 responds with two INTA pulses to fetch the interrupt type number.",
  },
  {
    id: "cs3005-unit3-q5",
    text: "Which pin is used by the 8086 to indicate that an external device is ready to exchange data?",
    options: [
      { id: "a", text: "READY" },
      { id: "b", text: "INTR" },
      { id: "c", text: "ALE" },
      { id: "d", text: "HLDA" },
    ],
    correctOptionId: "a",
    explanation:
      "The READY pin is an input used by slow peripheral devices to insert wait states (Tw) into the bus cycle. When READY is LOW, the 8086 inserts wait states until the device asserts READY HIGH, indicating it is ready to complete the data transfer. This allows interfacing with slow memory or I/O devices.",
  },
  {
    id: "cs3005-unit3-q6",
    text: "The pin of minimum mode AD0-AD15 has ______ data bus",
    options: [
      { id: "a", text: "16 bit" },
      { id: "b", text: "20 bit" },
      { id: "c", text: "32 bit" },
      { id: "d", text: "4 bit" },
    ],
    correctOptionId: "a",
    explanation:
      "AD0-AD15 are 16 multiplexed address/data lines. During T1 of a bus cycle, they carry the lower 16 bits of the 20-bit address. During T2-T4, they carry 16-bit data. This multiplexing reduces pin count but requires external latches (driven by ALE) to capture the address.",
  },
  {
    id: "cs3005-unit3-q7",
    text: "During a read cycle, when are the address lines present on the multiplexed bus?",
    options: [
      { id: "a", text: "After the data is transferred" },
      { id: "b", text: "During the WR signal activation" },
      { id: "c", text: "When the ALE signal is active" },
      { id: "d", text: "When the HLDA signal is active" },
    ],
    correctOptionId: "c",
    explanation:
      "During a read cycle, the address is present on the multiplexed AD0-AD15 lines during T1 state when ALE (Address Latch Enable) is active (HIGH). The external address latch captures the address on the falling edge of ALE. After T1, the lines switch to data transfer during T2-T4.",
  },
  {
    id: "cs3005-unit3-q8",
    text: "In register-to-register MOV instructions, which field within the machine code identifies the destination register?",
    options: [
      { id: "a", text: "MOD field" },
      { id: "b", text: "REG field" },
      { id: "c", text: "R/M field" },
      { id: "d", text: "Direction bit" },
    ],
    correctOptionId: "b",
    explanation:
      "In the Mod R/M byte of the 8086 instruction encoding, the REG field (bits 3-5) identifies the register operand. For register-to-register MOV instructions, the REG field specifies one register while the R/M field specifies the other. The D (direction) bit determines which is source and which is destination.",
  },
  {
    id: "cs3005-unit3-q9",
    text: "In 8086 MOV instruction encoding, what does the 'MOD' field within the Mod R/M byte represent?",
    options: [
      { id: "a", text: "The specific register used" },
      { id: "b", text: "The addressing mode for the memory operand" },
      { id: "c", text: "The data size (byte/word)" },
      { id: "d", text: "The immediate value provided" },
    ],
    correctOptionId: "b",
    explanation:
      "The MOD field (bits 6-7) in the Mod R/M byte specifies the addressing mode for memory operands: 00 = no displacement (except when R/M=110, then 16-bit displacement), 01 = 8-bit displacement, 10 = 16-bit displacement, 11 = register mode (no memory operand).",
  },
  {
    id: "cs3005-unit3-q10",
    text: "When encoding a MOV instruction that involves a memory operand, which additional byte is typically required?",
    options: [
      { id: "a", text: "Immediate operand byte" },
      { id: "b", text: "Function code byte" },
      { id: "c", text: "Status byte" },
      { id: "d", text: "Displacement byte" },
    ],
    correctOptionId: "d",
    explanation:
      "When a MOV instruction references a memory operand using indexed or based addressing, a displacement byte (or bytes) follows the Mod R/M byte. The MOD field determines if the displacement is 8-bit (MOD=01) or 16-bit (MOD=10). This provides the offset from the base/index register to the actual memory location.",
  },
  {
    id: "cs3005-unit3-q11",
    text: "Which bit in the MOV instruction encodings specifies whether the data transfer is of a byte or a word?",
    options: [
      { id: "a", text: "D (direction) bit" },
      { id: "b", text: "MOD field bit" },
      { id: "c", text: "W (word) bit" },
      { id: "d", text: "REG field bit" },
    ],
    correctOptionId: "c",
    explanation:
      "The W (word) bit in the MOV opcode byte specifies the operand size: W=0 indicates a byte transfer (8 bits), while W=1 indicates a word transfer (16 bits). This bit affects which registers are selected and how memory operands are accessed.",
  },
  {
    id: "cs3005-unit3-q12",
    text: "Which instruction is used to generate a software interrupt in the 8086?",
    options: [
      { id: "a", text: "INT" },
      { id: "b", text: "INTA" },
      { id: "c", text: "IRET" },
      { id: "d", text: "PUSHF" },
    ],
    correctOptionId: "a",
    explanation:
      "The INT instruction generates a software interrupt. It takes an immediate operand (0-255) specifying the interrupt type number. The processor pushes FLAGS, CS, and IP onto the stack, clears IF and TF, and loads the new CS:IP from the Interrupt Vector Table at address type×4.",
  },
  {
    id: "cs3005-unit3-q13",
    text: "Which pin does the 8086 use to acknowledge an external interrupt request?",
    options: [
      { id: "a", text: "INTR" },
      { id: "b", text: "NMI" },
      { id: "c", text: "INTA" },
      { id: "d", text: "HOLD" },
    ],
    correctOptionId: "c",
    explanation:
      "INTA (Interrupt Acknowledge) is an output pin used by the 8086 to acknowledge an INTR request. The 8086 generates two consecutive INTA pulses. During the second INTA, the interrupting device places the interrupt type number on the lower 8 bits of the data bus, which the 8086 reads to index into the IVT.",
  },
  {
    id: "cs3005-unit3-q14",
    text: "Which type of interrupt in the 8086 cannot be disabled by software?",
    options: [
      { id: "a", text: "Software interrupt" },
      { id: "b", text: "Maskable interrupt" },
      { id: "c", text: "Non-maskable interrupt" },
      { id: "d", text: "Timer interrupt" },
    ],
    correctOptionId: "c",
    explanation:
      "NMI (Non-Maskable Interrupt) cannot be disabled by software. It is edge-triggered and has higher priority than INTR. NMI is typically used for critical events like power failure, memory parity errors, or emergency shutdowns. Unlike INTR, it does not require INTA acknowledgment and always uses interrupt type 2.",
  },
  {
    id: "cs3005-unit3-q15",
    text: "Which instruction is used to return from an interrupt service routine in the 8086?",
    options: [
      { id: "a", text: "RET" },
      { id: "b", text: "IRET" },
      { id: "c", text: "JMP" },
      { id: "d", text: "CALL" },
    ],
    correctOptionId: "b",
    explanation:
      "IRET (Interrupt Return) is used to return from an interrupt service routine. It pops IP, CS, and FLAGS from the stack in reverse order of the interrupt response, restoring the processor state exactly as it was before the interrupt occurred. RET is used for normal subroutine returns and does not restore FLAGS.",
  },
  {
    id: "cs3005-unit3-q16",
    text: "During an interrupt response, which register is the first to be pushed onto the stack by the 8086?",
    options: [
      { id: "a", text: "CS (Code Segment)" },
      { id: "b", text: "IP (Instruction Pointer)" },
      { id: "c", text: "FLAGS" },
      { id: "d", text: "DS (Data Segment)" },
    ],
    correctOptionId: "c",
    explanation:
      "During an interrupt response, the 8086 pushes registers onto the stack in this order: (1) FLAGS is pushed first and IF/TF are cleared, (2) CS is pushed, (3) IP is pushed. Then the new CS:IP is loaded from the IVT to transfer control to the ISR. DS is not automatically pushed by the hardware.",
  },
  {
    id: "cs3005-unit3-q17",
    text: "Example of an external interrupt is",
    options: [
      { id: "a", text: "Divide by zero interrupt" },
      { id: "b", text: "Keyboard interrupt" },
      { id: "c", text: "Overflow interrupt" },
      { id: "d", text: "Type2 interrupt" },
    ],
    correctOptionId: "b",
    explanation:
      "A keyboard interrupt is an external (hardware) interrupt triggered by an external device. Divide by zero (Type 0) and Overflow (Type 4) are internal interrupts generated by the CPU during instruction execution. Type 2 is NMI, which while external, is a specific dedicated interrupt type.",
  },
  {
    id: "cs3005-unit3-q18",
    text: "What is the primary function of the 8086 interrupt vector table?",
    options: [
      { id: "a", text: "Store operands" },
      { id: "b", text: "Hold interrupt service routine (ISR) addresses" },
      { id: "c", text: "List I/O addresses" },
      { id: "d", text: "Track cycles" },
    ],
    correctOptionId: "b",
    explanation:
      "The Interrupt Vector Table (IVT) holds the starting addresses (CS:IP) of all 256 possible interrupt service routines. Each entry is 4 bytes (2 bytes for IP offset, 2 bytes for CS segment). When an interrupt occurs, the processor uses the interrupt type number as an index into this table to locate and jump to the appropriate ISR.",
  },
  {
    id: "cs3005-unit3-q19",
    text: "How many entries are contained in the 8086 interrupt vector table?",
    options: [
      { id: "a", text: "64 entries" },
      { id: "b", text: "128 entries" },
      { id: "c", text: "256 entries" },
      { id: "d", text: "512 entries" },
    ],
    correctOptionId: "c",
    explanation:
      "The 8086 IVT contains 256 entries, corresponding to interrupt types 0 through 255 (00h to FFh). Each entry is 4 bytes, so the total table size is 1KB (1024 bytes). Types 0-31 are reserved by Intel for predefined functions, while types 32-255 are available for user-defined interrupts.",
  },
  {
    id: "cs3005-unit3-q20",
    text: "Where is the 8086 interrupt vector table located in memory?",
    options: [
      { id: "a", text: "In the high memory area (above 1 MB)" },
      { id: "b", text: "In a dedicated register within the CPU" },
      { id: "c", text: "In the data segment pointed by DS" },
      { id: "d", text: "At a fixed location starting at 0000h" },
    ],
    correctOptionId: "d",
    explanation:
      "The 8086 IVT is located at a fixed memory address starting at physical address 00000h (segment 0000h, offset 0000h) and occupies the first 1KB of memory (00000h to 003FFh). This fixed location allows the processor to quickly access ISR addresses without any configuration or pointer registers.",
  },
];
