export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Data Types Questions
  {
    id: "dt-q1",
    topic: "Data Types",
    question: "What data type is the value: 'Hello World'?",
    options: ["int", "str", "float", "bool"],
    correctAnswer: 1,
    explanation: "Strings (text) are represented by the 'str' data type in Python."
  },
  {
    id: "dt-q2",
    topic: "Data Types",
    question: "Which collection type is ordered and unchangeable?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    correctAnswer: 2,
    explanation: "Tuples are ordered and unchangeable (immutable) collections in Python."
  },
  {
    id: "dt-q3",
    topic: "Data Types",
    question: "What will type(20.5) return?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'complex'>"],
    correctAnswer: 1,
    explanation: "20.5 is a decimal number, so it's a float type."
  },
  {
    id: "dt-q4",
    topic: "Data Types",
    question: "Which collection does NOT allow duplicate members?",
    options: ["List", "Tuple", "Set", "Dictionary keys"],
    correctAnswer: 2,
    explanation: "Sets do not allow duplicate members. Each element must be unique."
  },
  {
    id: "dt-q5",
    topic: "Data Types",
    question: "What is True in Python?",
    options: ["A string", "An integer", "A boolean value", "A function"],
    correctAnswer: 2,
    explanation: "True is a boolean value in Python, representing logical truth."
  },

  // Operators Questions
  {
    id: "op-q1",
    topic: "Operators",
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "3.33"],
    correctAnswer: 1,
    explanation: "The modulus operator (%) returns the remainder. 10 divided by 3 leaves a remainder of 1."
  },
  {
    id: "op-q2",
    topic: "Operators",
    question: "What does the operator ** do?",
    options: ["Multiply", "Divide", "Exponentiation", "Modulus"],
    correctAnswer: 2,
    explanation: "The ** operator performs exponentiation. For example, 2 ** 3 equals 8."
  },
  {
    id: "op-q3",
    topic: "Operators",
    question: "What will 'x += 5' do?",
    options: ["Set x to 5", "Add 5 to x", "Subtract 5 from x", "Multiply x by 5"],
    correctAnswer: 1,
    explanation: "x += 5 is shorthand for x = x + 5, which adds 5 to the current value of x."
  },
  {
    id: "op-q4",
    topic: "Operators",
    question: "Which operator checks if two values are equal?",
    options: ["=", "==", "!=", "is"],
    correctAnswer: 1,
    explanation: "The == operator compares two values for equality. A single = is for assignment."
  },
  {
    id: "op-q5",
    topic: "Operators",
    question: "What does the 'in' operator do?",
    options: ["Import modules", "Check membership", "Assign values", "Compare identity"],
    correctAnswer: 1,
    explanation: "The 'in' operator checks if a value exists in a sequence (like a list or string)."
  },

  // Conditionals Questions
  {
    id: "cond-q1",
    topic: "Conditionals",
    question: "What keyword is used for 'else if' in Python?",
    options: ["elseif", "else if", "elif", "ei"],
    correctAnswer: 2,
    explanation: "Python uses 'elif' for else-if conditions."
  },
  {
    id: "cond-q2",
    topic: "Conditionals",
    question: "What will this print? a=5; print('Yes') if a > 3 else print('No')",
    options: ["Yes", "No", "Error", "Nothing"],
    correctAnswer: 0,
    explanation: "Since 5 > 3 is True, the ternary operator will execute print('Yes')."
  },
  {
    id: "cond-q3",
    topic: "Conditionals",
    question: "In a match statement, what does _ represent?",
    options: ["A variable", "Default case", "Error", "Nothing"],
    correctAnswer: 1,
    explanation: "The underscore _ in a match statement represents the default case, like 'else' in if statements."
  },
  {
    id: "cond-q4",
    topic: "Conditionals",
    question: "What happens if indentation is wrong in an if statement?",
    options: ["Warning only", "IndentationError", "Runs anyway", "Skips the block"],
    correctAnswer: 1,
    explanation: "Python requires proper indentation. Wrong indentation raises an IndentationError."
  },
  {
    id: "cond-q5",
    topic: "Conditionals",
    question: "What does | mean in a match case?",
    options: ["And", "Or", "Not", "Divide"],
    correctAnswer: 1,
    explanation: "The pipe | operator in match cases means 'or', allowing multiple values in one case."
  },

  // Loops Questions
  {
    id: "loop-q1",
    topic: "Loops",
    question: "What does 'break' do in a loop?",
    options: ["Skip current iteration", "Exit the loop", "Pause the loop", "Restart the loop"],
    correctAnswer: 1,
    explanation: "'break' exits the loop completely, stopping all further iterations."
  },
  {
    id: "loop-q2",
    topic: "Loops",
    question: "What does 'continue' do in a loop?",
    options: ["Exit the loop", "Skip to next iteration", "Restart from beginning", "Pause execution"],
    correctAnswer: 1,
    explanation: "'continue' skips the rest of the current iteration and moves to the next one."
  },
  {
    id: "loop-q3",
    topic: "Loops",
    question: "What will range(1, 6) generate?",
    options: ["1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "2, 3, 4, 5, 6"],
    correctAnswer: 0,
    explanation: "range(1, 6) generates numbers from 1 up to (but not including) 6: 1, 2, 3, 4, 5."
  },
  {
    id: "loop-q4",
    topic: "Loops",
    question: "How many times will this loop run? i=0; while i<3: print(i); i+=1",
    options: ["2 times", "3 times", "4 times", "Infinite"],
    correctAnswer: 1,
    explanation: "The loop runs while i<3: i=0, i=1, i=2 (3 times). When i=3, the condition is False."
  },
  {
    id: "loop-q5",
    topic: "Loops",
    question: "What's the output? for x in 'Hi': print(x)",
    options: ["Hi", "H i", "H\\ni", "Error"],
    correctAnswer: 2,
    explanation: "Looping through a string iterates over each character, printing 'H' then 'i' on separate lines."
  },

  // Functions Questions
  {
    id: "func-q1",
    topic: "Functions",
    question: "What keyword is used to define a function?",
    options: ["function", "def", "func", "define"],
    correctAnswer: 1,
    explanation: "Python uses the 'def' keyword to define functions."
  },
  {
    id: "func-q2",
    topic: "Functions",
    question: "What does 'return' do in a function?",
    options: ["Exit function", "Send value back", "Both exit and send value", "Print value"],
    correctAnswer: 2,
    explanation: "'return' both exits the function and sends a value back to the caller."
  },
  {
    id: "func-q3",
    topic: "Functions",
    question: "What will def func(x=5): print(x); func() print?",
    options: ["Error", "Nothing", "5", "None"],
    correctAnswer: 2,
    explanation: "If no argument is provided, the default parameter value (5) is used."
  },
  {
    id: "func-q4",
    topic: "Functions",
    question: "Can a function return multiple values?",
    options: ["Yes", "No", "Only in lists", "Only tuples"],
    correctAnswer: 0,
    explanation: "Python functions can return multiple values as a tuple: return a, b, c"
  },
  {
    id: "func-q5",
    topic: "Functions",
    question: "What are parameters?",
    options: ["Return values", "Function names", "Values passed to functions", "Local variables"],
    correctAnswer: 2,
    explanation: "Parameters are the values passed into a function when it's called."
  },

  // Arrays Questions
  {
    id: "arr-q1",
    topic: "Arrays",
    question: "What is the index of the first element in a list?",
    options: ["1", "0", "-1", "Depends"],
    correctAnswer: 1,
    explanation: "Python uses zero-based indexing, so the first element is at index 0."
  },
  {
    id: "arr-q2",
    topic: "Arrays",
    question: "What does append() do?",
    options: ["Remove element", "Add at end", "Add at beginning", "Sort list"],
    correctAnswer: 1,
    explanation: "append() adds an element to the end of the list."
  },
  {
    id: "arr-q3",
    topic: "Arrays",
    question: "What will [1,2,3].pop(1) return?",
    options: ["1", "2", "3", "[1,3]"],
    correctAnswer: 1,
    explanation: "pop(1) removes and returns the element at index 1, which is 2."
  },
  {
    id: "arr-q4",
    topic: "Arrays",
    question: "How to get the length of a list?",
    options: ["list.length", "len(list)", "list.size()", "length(list)"],
    correctAnswer: 1,
    explanation: "Use the built-in len() function to get the number of items in a list."
  },
  {
    id: "arr-q5",
    topic: "Arrays",
    question: "What does sort() do to a list?",
    options: ["Reverse it", "Remove duplicates", "Arrange in order", "Clear it"],
    correctAnswer: 2,
    explanation: "sort() arranges the list elements in ascending order."
  },

  // NumPy Questions
  {
    id: "numpy-q1",
    topic: "NumPy",
    question: "What module is used for multi-dimensional arrays?",
    options: ["array", "numpy", "math", "pandas"],
    correctAnswer: 1,
    explanation: "NumPy is specifically designed for multi-dimensional numerical arrays."
  },
  {
    id: "numpy-q2",
    topic: "NumPy",
    question: "What does .shape return for a 3x3 matrix?",
    options: ["9", "(3, 3)", "[3, 3]", "3"],
    correctAnswer: 1,
    explanation: ".shape returns a tuple representing dimensions: (rows, columns)."
  },
  {
    id: "numpy-q3",
    topic: "NumPy",
    question: "What's the difference between * and np.dot() for arrays?",
    options: ["No difference", "* is element-wise, dot is matrix product", "* is faster", "dot is deprecated"],
    correctAnswer: 1,
    explanation: "* performs element-wise multiplication, while np.dot() computes the matrix product."
  },
  {
    id: "numpy-q4",
    topic: "NumPy",
    question: "How to access element at row 1, column 2?",
    options: ["arr[1,2]", "arr[2,1]", "arr.get(1,2)", "arr(1,2)"],
    correctAnswer: 0,
    explanation: "Use arr[row, col] notation. arr[1,2] accesses row 1, column 2."
  },
  {
    id: "numpy-q5",
    topic: "NumPy",
    question: "What does array slicing arr[0:2, 1:3] mean?",
    options: ["All elements", "First 2 rows, columns 1-2", "Error", "First element"],
    correctAnswer: 1,
    explanation: "Slicing [0:2, 1:3] selects rows 0-1 and columns 1-2."
  },

  // Flowcharts Questions
  {
    id: "flow-q1",
    topic: "Flowcharts",
    question: "What shape represents Start/End?",
    options: ["Rectangle", "Diamond", "Oval", "Parallelogram"],
    correctAnswer: 2,
    explanation: "Oval (or rounded rectangle) shapes represent the start or end of a flowchart."
  },
  {
    id: "flow-q2",
    topic: "Flowcharts",
    question: "What shape is used for decisions?",
    options: ["Rectangle", "Diamond", "Oval", "Circle"],
    correctAnswer: 1,
    explanation: "Diamond shapes represent decision points with Yes/No or True/False branches."
  },
  {
    id: "flow-q3",
    topic: "Flowcharts",
    question: "What does a rectangle represent?",
    options: ["Decision", "Process/Action", "Input/Output", "End"],
    correctAnswer: 1,
    explanation: "Rectangles represent process steps or actions to be performed."
  },
  {
    id: "flow-q4",
    topic: "Flowcharts",
    question: "What shape is used for Input/Output?",
    options: ["Parallelogram", "Rectangle", "Diamond", "Circle"],
    correctAnswer: 0,
    explanation: "Parallelograms represent input or output operations."
  },
  {
    id: "flow-q5",
    topic: "Flowcharts",
    question: "What do arrows represent?",
    options: ["Data", "Decisions", "Flow direction", "Variables"],
    correctAnswer: 2,
    explanation: "Arrows (flow lines) show the direction and sequence of steps in the flowchart."
  }
];

// Big Mixed Quiz - combines questions from all topics
export const bigMixedQuiz: QuizQuestion[] = [
  quizQuestions[0], // Data Types
  quizQuestions[5], // Operators
  quizQuestions[10], // Conditionals
  quizQuestions[15], // Loops
  quizQuestions[20], // Functions
  quizQuestions[25], // Arrays
  quizQuestions[30], // NumPy
  quizQuestions[35], // Flowcharts
  quizQuestions[2], // Data Types
  quizQuestions[7], // Operators
  quizQuestions[12], // Conditionals
  quizQuestions[17], // Loops
  quizQuestions[22], // Functions
  quizQuestions[27], // Arrays
  quizQuestions[32], // NumPy
  quizQuestions[37], // Flowcharts
];
