export const flowchartsContent = {
  title: "Flowcharts",

  introduction: {
    title: "What is a Flowchart?",
    description: "A flowchart is a visual diagram that shows the step-by-step flow of a process or algorithm using symbols and arrows. It helps in problem-solving, designing algorithms and communicating ideas clearly."
  },

  symbols: [
    {
      name: "Start/End",
      shape: "oval",
      description: "Beginning or end of a process",
      symbol: "⬭"
    },
    {
      name: "Process",
      shape: "rectangle",
      description: "An action or instruction",
      symbol: "▭"
    },
    {
      name: "Decision",
      shape: "diamond",
      description: "A condition (Yes/No or True/False)",
      symbol: "◇"
    },
    {
      name: "Input / Output",
      shape: "parallelogram",
      description: "Data input or output",
      symbol: "▱"
    },
    {
      name: "Flow Line",
      shape: "arrow",
      description: "Direction of steps",
      symbol: "→"
    }
  ],

  examples: [
    {
      title: "Decision Flowchart (Checking Even or Odd Number)",
      steps: [
        "Start",
        "Input a number",
        "Check if the number is divisible by 2",
        "If YES → Print 'Even'",
        "If NO → Print 'Odd'",
        "End"
      ],
      flowchart: {
        nodes: [
          { id: 1, type: "oval", text: "Start" },
          { id: 2, type: "parallelogram", text: "Input number" },
          { id: 3, type: "diamond", text: "Number % 2 == 0" },
          { id: 4, type: "rectangle", text: "Print 'Even'" },
          { id: 5, type: "rectangle", text: "Print 'Odd'" },
          { id: 6, type: "oval", text: "End" }
        ],
        connections: [
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4, label: "Yes" },
          { from: 3, to: 5, label: "No" },
          { from: 4, to: 6 },
          { from: 5, to: 6 }
        ]
      }
    },
    {
      title: "Flowchart for Printing Numbers 1 to 5",
      steps: [
        "Start",
        "Set counter = 1",
        "Check if counter ≤ 5",
        "If YES → Print counter → Increase counter by 1 → Go back to step 3",
        "If NO → End"
      ],
      flowchart: {
        nodes: [
          { id: 1, type: "oval", text: "Start" },
          { id: 2, type: "rectangle", text: "i = 1" },
          { id: 3, type: "diamond", text: "i ≤ 5" },
          { id: 4, type: "rectangle", text: "Print i" },
          { id: 5, type: "rectangle", text: "i = i + 1" },
          { id: 6, type: "oval", text: "End" }
        ],
        connections: [
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4, label: "Yes" },
          { from: 4, to: 5 },
          { from: 5, to: 3 },
          { from: 3, to: 6, label: "No" }
        ]
      }
    }
  ],

  exercises: [
    {
      id: "flow-ex-1",
      question: "Draw a flowchart to add two numbers entered by the user and display the result."
    },
    {
      id: "flow-ex-2",
      question: "Draw a flowchart to find the largest of two numbers entered by the user."
    },
    {
      id: "flow-ex-3",
      question: "Draw a flowchart to print even numbers from 1 to 10."
    },
    {
      id: "flow-ex-4",
      question: "Draw a flowchart to calculate the sum of numbers from 1 to N."
    },
    {
      id: "flow-ex-5",
      question: "Draw a flowchart for a student grading system: If marks ≥ 75 → Grade A, If marks ≥ 50 but < 75 → Grade B, If marks < 50 → Grade C."
    }
  ]
};
