import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "cs3005-unit2-q1",
    text: "What is the purpose of the RET instruction in modular programming?",
    options: [
      { id: "A", text: "Loads a value into a register" },
      { id: "B", text: "Returns control to the calling procedure" },
      { id: "C", text: "Halts the execution of the program" },
      { id: "D", text: "Calls another procedure" },
    ],
    correctOptionId: "B",
    explanation:
      "RET pops the return address and resumes execution in the calling procedure.",
  },
  {
    id: "cs3005-unit2-q2",
    text: "Which of the following is NOT an advantage of modular programming?",
    options: [
      { id: "A", text: "Code reusability" },
      { id: "B", text: "Easier debugging" },
      { id: "C", text: "Increased execution time" },
      { id: "D", text: "Better program organization" },
    ],
    correctOptionId: "C",
    explanation:
      "Modular programming improves organization and reusability; increased execution time is not an advantage.",
  },
  {
    id: "cs3005-unit2-q3",
    text: "Which of the following statements about the CALL instruction is true?",
    options: [
      { id: "A", text: "CALL pushes the return address onto the stack" },
      { id: "B", text: "CALL cannot be used to call subroutines" },
      { id: "C", text: "CALL directly modifies the IP register" },
      { id: "D", text: "CALL clears the stack" },
    ],
    correctOptionId: "A",
    explanation:
      "CALL pushes the address of the next instruction onto the stack before jumping to the subroutine.",
  },
  {
    id: "cs3005-unit2-q4",
    text: "Which instruction saves the current value of the flags register before calling a procedure?",
    options: [
      { id: "A", text: "PUSH AX" },
      { id: "B", text: "PUSHF" },
      { id: "C", text: "POPF" },
      { id: "D", text: "MOV FLAGS, AX" },
    ],
    correctOptionId: "B",
    explanation:
      "PUSHF pushes the FLAGS register onto the stack to preserve flag states.",
  },
  {
    id: "cs3005-unit2-q5",
    text: "Which instruction is used to extend a signed byte into a word?",
    options: [
      { id: "A", text: "CBW (Convert Byte to Word)" },
      { id: "B", text: "CWD (Convert Word to Doubleword)" },
      { id: "C", text: "DAA (Decimal Adjust after Addition)" },
      { id: "D", text: "AAA (ASCII Adjust after Addition)" },
    ],
    correctOptionId: "A",
    explanation:
      "CBW sign-extends the byte in AL into the word in AX.",
  },
  {
    id: "cs3005-unit2-q6",
    text: "Which BIOS interrupt is used to read a key from the keyboard buffer?",
    options: [
      { id: "A", text: "INT 10H" },
      { id: "B", text: "INT 16H, AH = 00H" },
      { id: "C", text: "INT 21H, AH = 01H" },
      { id: "D", text: "INT 13H" },
    ],
    correctOptionId: "B",
    explanation:
      "INT 16H with AH=00H waits for and reads the next keystroke from the keyboard buffer.",
  },
  {
    id: "cs3005-unit2-q7",
    text: "To move the cursor position on the screen, which BIOS interrupt is used?",
    options: [
      { id: "A", text: "INT 10H, AH = 02H" },
      { id: "B", text: "INT 21H, AH = 02H" },
      { id: "C", text: "INT 16H, AH = 00H" },
      { id: "D", text: "INT 13H" },
    ],
    correctOptionId: "A",
    explanation:
      "INT 10H, AH=02H sets the cursor position using DH (row) and DL (column).",
  },
  {
    id: "cs3005-unit2-q8",
    text: "Which function of INT 16H checks if a key is available?",
    options: [
      { id: "A", text: "AH = 00H" },
      { id: "B", text: "AH = 01H" },
      { id: "C", text: "AH = 02H" },
      { id: "D", text: "AH = 10H" },
    ],
    correctOptionId: "B",
    explanation:
      "INT 16H, AH=01H checks the keyboard buffer status without removing the key; ZF indicates availability.",
  },
  {
    id: "cs3005-unit2-q9",
    text: "Which interrupt is used to set video mode in 8086?",
    options: [
      { id: "A", text: "INT 10H, AH = 00H" },
      { id: "B", text: "INT 16H, AH = 00H" },
      { id: "C", text: "INT 21H, AH = 01H" },
      { id: "D", text: "INT 13H" },
    ],
    correctOptionId: "A",
    explanation:
      "INT 10H with AH=00H sets the video display mode specified in AL.",
  },
  {
    id: "cs3005-unit2-q10",
    text: "Which instruction is commonly used to convert a hexadecimal digit to its ASCII representation in the 8086 microprocessors?",
    options: [
      { id: "A", text: "MOV" },
      { id: "B", text: "ADD" },
      { id: "C", text: "OR" },
      { id: "D", text: "AND" },
    ],
    correctOptionId: "B",
    explanation:
      "ADD AL, 30H converts hex digits 0-9 to ASCII. For A-F, ADD AL, 37H is used.",
  },
  {
    id: "cs3005-unit2-q11",
    text: "What is the ASCII value of the hexadecimal digit 0x9?",
    options: [
      { id: "A", text: "0x39" },
      { id: "B", text: "0x49" },
      { id: "C", text: "0x09" },
      { id: "D", text: "0x1001" },
    ],
    correctOptionId: "A",
    explanation:
      "The ASCII code for the character '9' is 0x39 (57 decimal).",
  },
  {
    id: "cs3005-unit2-q12",
    text: "If the ASCII value 0x41 (character 'A') is stored in the AL register, what will be the hexadecimal value after conversion?",
    options: [
      { id: "A", text: "0x1" },
      { id: "B", text: "0xA" },
      { id: "C", text: "0x41" },
      { id: "D", text: "0x4A" },
    ],
    correctOptionId: "B",
    explanation:
      "Converting ASCII 'A' (0x41) to its hex numeric value yields 0x0A (decimal 10).",
  },
  {
    id: "cs3005-unit2-q13",
    text: "What is the hexadecimal value of the ASCII character 0x35 (character '5')?",
    options: [
      { id: "A", text: "0x5" },
      { id: "B", text: "0x35" },
      { id: "C", text: "0x0101" },
      { id: "D", text: "0x15" },
    ],
    correctOptionId: "A",
    explanation:
      "ASCII 0x35 represents the character '5'; its hex digit value is 0x5.",
  },
  {
    id: "cs3005-unit2-q14",
    text: "Which DOS intrupt is used to create sub directory",
    options: [
      { id: "A", text: "AH=39h, INT21H" },
      { id: "B", text: "AH=39h, INT16H" },
      { id: "C", text: "AH=30h, INT 21H" },
      { id: "D", text: "INT 21H" },
    ],
    correctOptionId: "A",
    explanation:
      "DOS INT 21H with AH=39H creates a new subdirectory (MKDIR).",
  },
  {
    id: "cs3005-unit2-q15",
    text: "Set time interrupt from DOS interrupt will store th hour information inn which register",
    options: [
      { id: "A", text: "CH" },
      { id: "B", text: "CL" },
      { id: "C", text: "DH" },
      { id: "D", text: "DL" },
    ],
    correctOptionId: "A",
    explanation:
      "INT 21H, AH=2DH sets time with CH=hours, CL=minutes, DH=seconds.",
  },
  {
    id: "cs3005-unit2-q16",
    text: "What is the use of AAM instruction in Hexa to ASCII conversion",
    options: [
      { id: "A", text: "ASCII multiplication" },
      { id: "B", text: "Convert packed BCD to unpacked BCD number" },
      { id: "C", text: "Convert unpacked to packed" },
      { id: "D", text: "Ascii adjust after multiplication" },
    ],
    correctOptionId: "B",
    explanation:
      "AAM splits a binary number in AL into unpacked BCD digits in AH (tens) and AL (units), useful for ASCII conversion.",
  },
  {
    id: "cs3005-unit2-q17",
    text: "BIOS interrupt to set the cursor on the monitor",
    options: [
      { id: "A", text: "AH=02H, INT 10H" },
      { id: "B", text: "AH=02H, INT 16H" },
      { id: "C", text: "AH=02H, INT 21H" },
      { id: "D", text: "AH=01H, INT 10H" },
    ],
    correctOptionId: "A",
    explanation:
      "INT 10H with AH=02H positions the cursor on the display.",
  },
  {
    id: "cs3005-unit2-q18",
    text: "In a program, a Macro is being called 'n' times. Then how many times is the machine code generated for the same?",
    options: [
      { id: "A", text: "1 time" },
      { id: "B", text: "'n' times" },
      { id: "C", text: "'n-1' times" },
      { id: "D", text: "'n+1' times" },
    ],
    correctOptionId: "B",
    explanation:
      "Macros are expanded inline by the assembler; calling a macro n times generates its machine code n times.",
  },
  {
    id: "cs3005-unit2-q19",
    text: "The process of assigning a label or macroname to the string is called",
    options: [
      { id: "A", text: "initializing macro" },
      { id: "B", text: "initializing string macro" },
      { id: "C", text: "defining a string macro" },
      { id: "D", text: "defining a macro" },
    ],
    correctOptionId: "D",
    explanation:
      "Defining a macro assigns a name to a sequence of instructions or a string.",
  },
  {
    id: "cs3005-unit2-q20",
    text: "Which directive is used to define a procedure in 8086 assembly language?",
    options: [
      { id: "A", text: "FUNC" },
      { id: "B", text: "PROC" },
      { id: "C", text: "DEF" },
      { id: "D", text: "CALL" },
    ],
    correctOptionId: "B",
    explanation:
      "The PROC directive marks the beginning of a procedure, paired with ENDP.",
  },
  {
    id: "cs3005-unit2-q21",
    text: "What is the primary design philosophy of ARM embedded systems?",
    options: [
      { id: "A", text: "Complex Instruction Set Computing (CISC)" },
      { id: "B", text: "Reduced Instruction Set Computing (RISC)" },
      { id: "C", text: "Very Long Instruction Word (VLIW)" },
      { id: "D", text: "Superscalar Processing" },
    ],
    correctOptionId: "B",
    explanation:
      "ARM processors are based on the RISC philosophy, emphasizing a smaller, optimized instruction set.",
  },
  {
    id: "cs3005-unit2-q22",
    text: "Which of the following is a feature of the ARM processor?",
    options: [
      { id: "A", text: "Symmetric multiprocessing" },
      { id: "B", text: "Harvard architecture" },
      { id: "C", text: "High power consumption" },
      { id: "D", text: "Scalar data types only" },
    ],
    correctOptionId: "B",
    explanation:
      "ARM processors commonly employ Harvard or modified Harvard architecture with separate instruction and data caches.",
  },
  {
    id: "cs3005-unit2-q23",
    text: "Which register in ARM holds the flags indicating the status of the processor?",
    options: [
      { id: "A", text: "General-purpose register" },
      { id: "B", text: "Program Counter (PC)" },
      { id: "C", text: "Stack Pointer (SP)" },
      { id: "D", text: "Program Status Register (PSR)" },
    ],
    correctOptionId: "D",
    explanation:
      "The PSR (or CPSR/SPSR) contains condition flags and control bits reflecting processor status.",
  },
  {
    id: "cs3005-unit2-q24",
    text: "What is the function of the pinMode() function in Embedded C programming?",
    options: [
      { id: "A", text: "Initializes serial communication" },
      { id: "B", text: "Sets a digital pin as input or output" },
      { id: "C", text: "Creates a delay in execution" },
      { id: "D", text: "Reads analog input" },
    ],
    correctOptionId: "B",
    explanation:
      "pinMode(pin, mode) configures a digital pin as INPUT, OUTPUT, or INPUT_PULLUP.",
  },
  {
    id: "cs3005-unit2-q25",
    text: "Which IDE is commonly used for programming Arduino microcontrollers?",
    options: [
      { id: "A", text: "Keil uVision" },
      { id: "B", text: "Arduino IDE" },
      { id: "C", text: "MPLAB X" },
      { id: "D", text: "Eclipse" },
    ],
    correctOptionId: "B",
    explanation:
      "The official Arduino IDE is the standard development environment for Arduino boards.",
  },
  {
    id: "cs3005-unit2-q26",
    text: "What is the size of the general-purpose registers in ARM processors?",
    options: [
      { id: "A", text: "8 bits" },
      { id: "B", text: "16 bits" },
      { id: "C", text: "32 bits" },
      { id: "D", text: "64 bits" },
    ],
    correctOptionId: "C",
    explanation:
      "Standard ARM processors (ARMv7 and earlier) use 32-bit general-purpose registers.",
  },
  {
    id: "cs3005-unit2-q27",
    text: "Which function is used to generate a delay in Embedded C?",
    options: [
      { id: "A", text: "pinMode()" },
      { id: "B", text: "delay()" },
      { id: "C", text: "digitalWrite()" },
      { id: "D", text: "Serial.begin()" },
    ],
    correctOptionId: "B",
    explanation:
      "delay(ms) pauses program execution for the specified number of milliseconds.",
  },
  {
    id: "cs3005-unit2-q28",
    text: "How does the 7-segment display represent numbers?",
    options: [
      { id: "A", text: "Using rows and columns of LEDs" },
      { id: "B", text: "By turning on specific segments of LEDs" },
      { id: "C", text: "Through alphanumeric LCD cells" },
      { id: "D", text: "By activating relays" },
    ],
    correctOptionId: "B",
    explanation:
      "A 7-segment display forms digits by illuminating specific combinations of its seven LED segments.",
  },
  {
    id: "cs3005-unit2-q29",
    text: "Which of the following peripherals can be interfaced with a microcontroller?",
    options: [
      { id: "A", text: "LED" },
      { id: "B", text: "Registers" },
      { id: "C", text: "Segment" },
      { id: "D", text: "diode" },
    ],
    correctOptionId: "A",
    explanation:
      "LEDs are common output peripherals directly interfaced with microcontroller GPIO pins.",
  },
  {
    id: "cs3005-unit2-q30",
    text: "What is the main purpose of the Arduino Due microcontroller board?",
    options: [
      { id: "A", text: "High-performance desktop computing" },
      { id: "B", text: "General-purpose embedded applications" },
      { id: "C", text: "High-speed graphics rendering" },
      { id: "D", text: "Quantum computing" },
    ],
    correctOptionId: "B",
    explanation:
      "The Arduino Due is designed for general embedded applications featuring an ARM Cortex-M3 processor.",
  },
  {
    id: "cs3005-unit2-q31",
    text: "Which of the following is the primary advantage of using ARM-based microcontrollers in embedded systems?",
    options: [
      { id: "A", text: "High power consumption" },
      { id: "B", text: "Support for only digital peripherals" },
      { id: "C", text: "Low power consumption with high performance" },
      { id: "D", text: "Configures PWM on a pin" },
    ],
    correctOptionId: "C",
    explanation:
      "ARM microcontrollers excel at delivering high computational performance with minimal power consumption.",
  },
  {
    id: "cs3005-unit2-q32",
    text: "Which built-in Arduino function is used for serial communication?",
    options: [
      { id: "A", text: "digitalWrite()" },
      { id: "B", text: "Serial.begin()" },
      { id: "C", text: "analogRead()" },
      { id: "D", text: "pinMode()" },
    ],
    correctOptionId: "B",
    explanation:
      "Serial.begin(baudRate) initializes the UART serial port for communication.",
  },
  {
    id: "cs3005-unit2-q33",
    text: "What is the typical clock speed of an ARM Cortex-M microcontroller?",
    options: [
      { id: "A", text: "1MHz" },
      { id: "B", text: "50 to 100 MHz" },
      { id: "C", text: "1.5GHz" },
      { id: "D", text: "1 GHz" },
    ],
    correctOptionId: "B",
    explanation:
      "ARM Cortex-M microcontrollers typically operate in the range of tens to low hundreds of MHz.",
  },
  {
    id: "cs3005-unit2-q34",
    text: "In Embedded C, what does the function digitalWrite() do?",
    options: [
      { id: "A", text: "Sets a digital pin as input" },
      { id: "B", text: "Reads the state of a digital pin" },
      { id: "C", text: "Writes a HIGH or LOW value to a digital pin" },
    ],
    correctOptionId: "C",
    explanation:
      "digitalWrite(pin, value) outputs a HIGH (5V/3.3V) or LOW (0V) signal to the specified pin.",
  },
  {
    id: "cs3005-unit2-q35",
    text: "What is the resolution of the ADC on the Arduino Due?",
    options: [
      { id: "A", text: "8-bit" },
      { id: "B", text: "10-bit" },
      { id: "C", text: "12-bit" },
      { id: "D", text: "16-bit" },
    ],
    correctOptionId: "C",
    explanation:
      "The Arduino Due features a 12-bit ADC, providing 4096 discrete levels (2^12).",
  },
  {
    id: "cs3005-unit2-q36",
    text: "Which of the following displays supports scrolling and flickering?",
    options: [
      { id: "A", text: "Seven-segment display" },
      { id: "B", text: "16x2 LCD" },
      { id: "C", text: "OLED" },
      { id: "D", text: "VGA monitor" },
    ],
    correctOptionId: "B",
    explanation:
      "The 16x2 LCD character display commonly supports scrolling text and may exhibit flickering during updates.",
  },
  {
    id: "cs3005-unit2-q37",
    text: "How does a stepper motor differ from a DC motor?",
    options: [
      { id: "A", text: "It operates on AC power" },
      { id: "B", text: "It moves in discrete steps" },
      { id: "C", text: "It has no rotor" },
      { id: "D", text: "It cannot reverse direction" },
    ],
    correctOptionId: "B",
    explanation:
      "Stepper motors rotate in precise discrete steps, enabling accurate position control unlike continuous DC motors.",
  },
  {
    id: "cs3005-unit2-q38",
    text: "Which Arduino board pin is used for analog input?",
    options: [
      { id: "A", text: "D0-D7" },
      { id: "B", text: "A0-A5" },
      { id: "C", text: "PWM" },
      { id: "D", text: "Vin" },
    ],
    correctOptionId: "B",
    explanation:
      "Arduino boards provide dedicated analog input pins labeled A0 through A5 (and beyond on some models).",
  },
  {
    id: "cs3005-unit2-q39",
    text: "What is the typical use of a 4x4 keypad in embedded systems?",
    options: [
      { id: "A", text: "Memorystorage" },
      { id: "B", text: "Input device for user interaction" },
      { id: "C", text: "Powerregulation" },
      { id: "D", text: "Debugging tool" },
    ],
    correctOptionId: "B",
    explanation:
      "A 4x4 keypad serves as a compact input device for user interaction in embedded projects.",
  },
  {
    id: "cs3005-unit2-q40",
    text: "Which ARM instruction type is most commonly used for data transfer?",
    options: [
      { id: "A", text: "Branch instructions" },
      { id: "B", text: "Load/Store instructions" },
      { id: "C", text: "Arithmeticinstructions" },
      { id: "D", text: "Logical instructions" },
    ],
    correctOptionId: "B",
    explanation:
      "ARM uses Load/Store architecture where data must be loaded into registers before processing and stored back afterward.",
  },
];
