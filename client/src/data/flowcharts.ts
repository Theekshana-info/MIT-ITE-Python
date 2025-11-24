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
      imagePath: "/CheckEvenOdd.png",
      imageAlt: "Flowchart describing an even or odd number decision"
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
      imagePath: "/PrintingNumbers1to5.png",
      imageAlt: "Flowchart illustrating printing numbers from one to five"
    }
  ],

  exercises: [
    {
      id: "flow-ex-1",
      question: "Draw a flowchart to add two numbers entered by the user and display the result.",
      solutionImage: {
        path: "/Question1.png",
        alt: "Flowchart showing steps to add two user-input numbers and display the result"
      }
    },
    {
      id: "flow-ex-2",
      question: "Draw a flowchart to find the largest of two numbers entered by the user.",
      solutionImage: {
        path: "/Question2.png",
        alt: "Flowchart illustrating comparison of two numbers to determine the largest"
      }
    },
    {
      id: "flow-ex-3",
      question: "Draw a flowchart to print even numbers from 1 to 10.",
      solutionImage: {
        path: "/Question3.png",
        alt: "Flowchart depicting loop logic for printing even numbers from one to ten"
      }
    },
    {
      id: "flow-ex-4",
      question: "Draw a flowchart to calculate the sum of numbers from 1 to N.",
      solutionImage: {
        path: "/Question4.png",
        alt: "Flowchart showing accumulation of numbers from one to N"
      }
    },
    {
      id: "flow-ex-5",
      question: "Draw a flowchart for a student grading system: If marks ≥ 75 → Grade A, If marks ≥ 50 but < 75 → Grade B, If marks < 50 → Grade C.",
      solutionImage: {
        path: "/Question5.png",
        alt: "Flowchart outlining conditional grading logic for student marks"
      }
    }
  ]
};
