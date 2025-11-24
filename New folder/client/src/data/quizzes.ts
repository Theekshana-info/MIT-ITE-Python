export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  // Optional code snippet to display (syntax highlighted)
  code?: string;
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
    question: "What will this code print?",
    code: `a = 5\nprint("Yes") if a > 3 else print("No")`,
    options: ["Yes", "No", "Error", "Nothing"],
    correctAnswer: 0,
    explanation: "Since 5 > 3 is True, the ternary operator will execute print('Yes')."
  },
  {
    id: "cond-q3",
    topic: "Conditionals",
    question: "In a match statement, what does _ represent?",
    code: `match value:\n    case _:\n        print("default")`,
    options: ["A variable", "Default case", "Error", "Nothing"],
    correctAnswer: 1,
    explanation: "The underscore _ in a match statement represents the default case, like 'else' in if statements."
  },
  {
    id: "cond-q4",
    topic: "Conditionals",
    question: "What happens if indentation is wrong in an if statement?",
    code: `price = 100\nif price < 50:\nprint("Cheap")  # IndentationError`,
    options: ["Warning only", "IndentationError", "Runs anyway", "Skips the block"],
    correctAnswer: 1,
    explanation: "Python requires proper indentation. Wrong indentation raises an IndentationError."
  },
  {
    id: "cond-q5",
    topic: "Conditionals",
    question: "What does | mean in a match case?",
    code: `match n:\n    case 1 | 2 | 3:\n        print("one of first three")`,
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
    question: "How many times will this loop run?",
    code: `i = 0\nwhile i < 3:\n    print(i)\n    i += 1`,
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
  // Additional Loops Questions (extended set)
  {
    id: "loop-q6",
    topic: "Loops",
    question: "What are the two main types of looping constructs available in Python?",
    options: ["do...while and for", "repeat and until", "for and while", "if and else"],
    correctAnswer: 2,
    explanation: "Python provides 'for' and 'while' as its two primary loop constructs." 
  },
  {
    id: "loop-q7",
    topic: "Loops",
    question: "Which loop is specifically used for iterating over a sequence?",
    options: ["while loop", "for loop", "switch loop", "infinite loop"],
    correctAnswer: 1,
    explanation: "A for loop iterates directly over the items of a sequence (like list, string, tuple)." 
  },
  {
    id: "loop-q8",
    topic: "Loops",
    question: "A while loop executes its body as long as what?",
    options: ["The loop counter is zero", "The condition is True", "The user presses a key", "The list is empty"],
    correctAnswer: 1,
    explanation: "A while loop continues while its condition evaluates to True." 
  },
  {
    id: "loop-q9",
    topic: "Loops",
    question: "What usually needs to happen inside a while loop to prevent it from running forever?",
    options: ["Use the pass keyword", "Print the variable", "Increment or change the condition variable", "Declare a new function"],
    correctAnswer: 2,
    explanation: "Updating the variable involved in the condition (e.g. i += 1) ensures eventual termination." 
  },
  {
    id: "loop-q10",
    topic: "Loops",
    question: "What is the output of this code?",
    code: `fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n    print(x)\n    if x == "banana":\n        break`,
    options: ["apple", "apple, banana", "apple, banana, cherry", "banana"],
    correctAnswer: 1,
    explanation: "'apple' prints, then 'banana' prints before break stops the loop." 
  },
  {
    id: "loop-q11",
    topic: "Loops",
    question: "What is the output of this code?",
    code: `fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n    if x == "banana":\n        break\n    print(x)`,
    options: ["apple", "apple, banana", "apple, banana, cherry", "banana"],
    correctAnswer: 0,
    explanation: "Loop breaks before printing 'banana', so only 'apple' prints." 
  },
  {
    id: "loop-q12",
    topic: "Loops",
    question: "Last number printed by this loop?",
    code: `i = 1\nwhile i < 6:\n    print(i)\n    i += 1`,
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Loop runs for i = 1..5; when i becomes 6 the condition fails and loop stops." 
  },
  {
    id: "loop-q13",
    topic: "Loops",
    question: "Looping through 'mango' with for prints what? for ch in 'mango': print(ch)",
    code: `for ch in "mango":\n    print(ch)`,
    options: ["mango", "Error", "m a n g o", "Each letter on its own line"],
    correctAnswer: 3,
    explanation: "Iterating a string yields each character; printed on separate lines." 
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
    question: "What will this code print?",
    code: `def func(x=5):\n    print(x)\n\nfunc()`,
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
  // Additional Functions Questions (extended set)
  {
    id: "func-q6",
    topic: "Functions",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "create", "define"],
    correctAnswer: 1,
    explanation: "Functions are declared with the 'def' keyword." 
  },
  {
    id: "func-q7",
    topic: "Functions",
    question: "Which best describes a function?",
    options: ["Runs automatically at start", "Stores multiple values", "Runs only when called", "Loop that runs forever"],
    correctAnswer: 2,
    explanation: "A function executes its code block only when invoked." 
  },
  {
    id: "func-q8",
    topic: "Functions",
    question: "What is correct syntax to call a function named my_function?",
    options: ["call my_function", "my_function", "my_function()", "def my_function()"],
    correctAnswer: 2,
    explanation: "You invoke a function by writing its name followed by parentheses: my_function()." 
  },
  {
    id: "func-q9",
    topic: "Functions",
    question: "Where are arguments specified in a function definition?",
    options: ["Inside {}", "After return", "Inside parentheses after the name", "Before the name"],
    correctAnswer: 2,
    explanation: "Parameters appear inside parentheses immediately after the function name." 
  },
  {
    id: "func-q10",
    topic: "Functions",
    question: "How do you separate multiple arguments in a function definition?",
    options: ["Semicolon ;", "Comma ,", "Space", "Period ."],
    correctAnswer: 1,
    explanation: "Parameters are separated by commas." 
  },
  {
    id: "func-q11",
    topic: "Functions",
    question: "What is the output of this default parameter example?",
    code: `def my_function(country = "Norway"):\n    print("I am from " + country)\n\nmy_function()`,
    options: ["I am from Sweden", "I am from Norway", "Error", "I am from"],
    correctAnswer: 1,
    explanation: "No argument passed so the default 'Norway' is used." 
  },
  {
    id: "func-q12",
    topic: "Functions",
    question: "Which keyword sends a value back from a function?",
    options: ["send", "output", "back", "return"],
    correctAnswer: 3,
    explanation: "The return keyword both exits the function and provides a value to the caller." 
  },
  {
    id: "func-q13",
    topic: "Functions",
    question: "If you pass a list to a function how is it treated?",
    options: ["Converted to string", "Error", "Treated as the same list type", "Converted to dict"],
    correctAnswer: 2,
    explanation: "Arguments preserve their data type; a list remains a list." 
  },
  {
    id: "func-q14",
    topic: "Functions",
    question: "Output of this code?",
    code: `def my_function(x):\n    return 5 * x\n\nprint(my_function(3))`,
    options: ["53", "8", "15", "3"],
    correctAnswer: 2,
    explanation: "5 * 3 evaluates to 15 and that's returned then printed." 
  },
  {
    id: "func-q15",
    topic: "Functions",
    question: "In this example what is fname?",
    code: `def my_function(fname):\n    print(fname + " Perera")`,
    options: ["Function name", "Parameter", "Return value", "Built-in keyword"],
    correctAnswer: 1,
    explanation: "fname is the parameter (argument name) used inside the function." 
  },
  {
    id: "func-q16",
    topic: "Functions",
    question: "Why do we use functions?",
    options: ["Make code longer", "Reuse code and pass data", "Slow program", "Delete variables"],
    correctAnswer: 1,
    explanation: "Functions enable code reuse and allow passing data via parameters." 
  },

  // Advanced Functions Questions
  {
    id: "func-q17",
    topic: "Functions",
    question: "What is the output?",
    code: `def combine(a, b):\n    return a, b\n\nx, y = combine(3, 4)\nprint(x + y)`,
    options: ["(3,4)", "34", "7", "Error"],
    correctAnswer: 2,
    explanation: "Return a, b creates a tuple (3,4) which is unpacked; x+y = 7." 
  },
  {
    id: "func-q18",
    topic: "Functions",
    question: "What does *args collect?",
    code: `def demo(*args):\n    return len(args)\n\nprint(demo(1,2,3))`,
    options: ["Keyword arguments into dict", "Positional arguments into a tuple", "Only integers", "All arguments into a list"],
    correctAnswer: 1,
    explanation: "*args packs positional arguments into a tuple; len((1,2,3)) = 3." 
  },
  {
    id: "func-q19",
    topic: "Functions",
    question: "What does **kwargs collect?",
    code: `def demo(**kwargs):\n    return sorted(kwargs.keys())\n\nprint(demo(a=1,b=2))`,
    options: ["Positional args", "Keyword args into a dict", "Only strings", "Nothing"],
    correctAnswer: 1,
    explanation: "**kwargs packs keyword arguments into a dictionary: keys ['a','b']." 
  },
  {
    id: "func-q20",
    topic: "Functions",
    question: "Result of this recursion?",
    code: `def fact(n):\n    if n == 0:\n        return 1\n    return n * fact(n-1)\n\nprint(fact(3))`,
    options: ["3", "6", "9", "1"],
    correctAnswer: 1,
    explanation: "3! = 3*2*1 = 6." 
  },
  {
    id: "func-q21",
    topic: "Functions",
    question: "What is printed?",
    code: `x = 10\n\ndef show():\n    x = 5\n    print(x)\n\nshow()\nprint(x)`,
    options: ["5 then 10", "10 then 5", "5 then 5", "10 then 10"],
    correctAnswer: 0,
    explanation: "Inner x is local (5). Outer x remains 10." 
  },
  {
    id: "func-q22",
    topic: "Functions",
    question: "What is printed by this lambda?",
    code: `add = lambda a, b: a + b\nprint(add(2,3))`,
    options: ["'2+3'", "23", "5", "Error"],
    correctAnswer: 2,
    explanation: "Lambda returns 2+3 = 5." 
  },
  {
    id: "func-q23",
    topic: "Functions",
    question: "What's wrong with this default?",
    code: `def append_item(x, items=[]):\n    items.append(x)\n    return items\n\nprint(append_item(1))\nprint(append_item(2))`,
    options: ["Syntax error", "Default list reused across calls", "List converts to tuple", "Nothing"],
    correctAnswer: 1,
    explanation: "Mutable default persists; second call prints list with both items." 
  },
  {
    id: "func-q24",
    topic: "Functions",
    question: "What is printed?",
    code: `def outer():\n    msg = "Hi"\n    def inner():\n        return msg\n    return inner\n\nf = outer()\nprint(f())`,
    options: ["Hi", "Error", "None", "outer"],
    correctAnswer: 0,
    explanation: "Closure captures msg; inner returns 'Hi'." 
  },
  {
    id: "func-q25",
    topic: "Functions",
    question: "What keyword makes this a generator?",
    code: `def gen():\n    yield 1\n    yield 2\n\nprint(list(gen()))`,
    options: ["return", "yield", "async", "next"],
    correctAnswer: 1,
    explanation: "'yield' produces a generator; list(gen()) -> [1,2]." 
  },
  {
    id: "func-q26",
    topic: "Functions",
    question: "Output of map with lambda?",
    code: `nums = [1,2,3]\nprint(list(map(lambda x: x*2, nums)))`,
    options: ["[1,2,3]", "[2,4,6]", "[1,4,9]", "Error"],
    correctAnswer: 1,
    explanation: "Each element doubled: [2,4,6]." 
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
  // Additional NumPy / array module Questions
  {
    id: "numpy-q6",
    topic: "NumPy",
    question: "Which Python module creates simple 1D arrays (efficient numeric storage)?",
    options: ["list", "numpy", "array", "collection"],
    correctAnswer: 2,
    explanation: "The built-in 'array' module provides basic 1D typed arrays; NumPy offers more features." 
  },
  {
    id: "numpy-q7",
    topic: "NumPy",
    question: "In numbers = array.array('i', [1,2,3]), what does 'i' represent?",
    code: `import array\nnumbers = array.array('i', [1, 2, 3])`,
    options: ["Index", "Infinite", "Integer type code", "Input"],
    correctAnswer: 2,
    explanation: "'i' is the type code specifying signed integers in array.array." 
  },
  {
    id: "numpy-q8",
    topic: "NumPy",
    question: "What does numbers[2] return?",
    code: `import array\nnumbers = array.array('i', [1,2,3,4,5])\nprint(numbers[2])`,
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Index 2 is the third element: 3." 
  },
  {
    id: "numpy-q9",
    topic: "NumPy",
    question: "Method to add new element to end of an array?",
    code: `numbers.append(6)`,
    options: ["add()", "insert()", "push()", "append()"],
    correctAnswer: 3,
    explanation: "append() adds a single element to the end of an array or list." 
  },
  {
    id: "numpy-q10",
    topic: "NumPy",
    question: "Remove specific value 1 from array?",
    code: `numbers.remove(1)`,
    options: ["numbers.delete(1)", "numbers.remove(1)", "numbers.pop(1)", "numbers.clear(1)"],
    correctAnswer: 1,
    explanation: "remove(value) deletes the first matching value from the array." 
  },
  {
    id: "numpy-q11",
    topic: "NumPy",
    question: "Why use NumPy instead of array module?",
    options: ["Always installed", "Supports multidimensional numerical arrays", "Less memory for strings", "Easier to spell"],
    correctAnswer: 1,
    explanation: "NumPy offers powerful multi-dimensional arrays and vectorized operations." 
  },
  {
    id: "numpy-q12",
    topic: "NumPy",
    question: "Standard import for NumPy?",
    code: `import numpy as np`,
    options: ["import numpy as np", "import numpy as num", "from numpy import *", "include numpy"],
    correctAnswer: 0,
    explanation: "import numpy as np is the conventional alias." 
  },
  {
    id: "numpy-q13",
    topic: "NumPy",
    question: "Which attribute returns matrix dimensions?",
    code: `matrix = np.array([[1,2,3],[4,5,6]])\nprint(matrix.shape)`,
    options: [".size", ".shape", ".dim", ".length"],
    correctAnswer: 1,
    explanation: "shape gives (rows, columns)." 
  },
  {
    id: "numpy-q14",
    topic: "NumPy",
    question: "Access element '6' in 3x3 matrix?",
    code: `matrix = np.array([[1,2,3],[4,5,6],[7,8,9]])\nprint(matrix[1][2])`,
    options: ["matrix[1][2]", "matrix[2][1]", "matrix[1][1]", "matrix[2][3]"],
    correctAnswer: 0,
    explanation: "Row index 1, column index 2 yields 6." 
  },
  {
    id: "numpy-q15",
    topic: "NumPy",
    question: "a * b between NumPy arrays performs?",
    options: ["Matrix product", "Element-wise multiplication", "Division", "Concatenation"],
    correctAnswer: 1,
    explanation: "* multiplies corresponding elements." 
  },
  {
    id: "numpy-q16",
    topic: "NumPy",
    question: "Function for matrix (dot) product?",
    options: ["np.multiply(a,b)", "np.prod(a,b)", "np.dot(a,b)", "np.cross(a,b)"],
    correctAnswer: 2,
    explanation: "np.dot computes the dot product (matrix multiplication)." 
  },
  {
    id: "numpy-q17",
    topic: "NumPy",
    question: "Operator alternative to np.dot for matrix product?",
    options: ["*", "&", "%", "@"],
    correctAnswer: 3,
    explanation: "@ performs matrix multiplication (PEP 465)." 
  },
  {
    id: "numpy-q18",
    topic: "NumPy",
    question: "Create 2D array (matrix) in NumPy?",
    code: `m = np.array([[1,2],[3,4]])`,
    options: ["np.matrix([1,2],[3,4])", "np.array([[1,2],[3,4]])", "np.2darray([1,2,3,4])", "np.list([[1,2],[3,4]])"],
    correctAnswer: 1,
    explanation: "np.array with nested lists creates a 2D array." 
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
  },
  // Extended Flowcharts Questions
  {
    id: "flow-q6",
    topic: "Flowcharts",
    question: "What is a flowchart?",
    options: ["Computer code in Python", "Visual diagram of process flow", "Database system", "Hardware component"],
    correctAnswer: 1,
    explanation: "A flowchart visually maps the sequential steps of a process or algorithm." 
  },
  {
    id: "flow-q7",
    topic: "Flowcharts",
    question: "Which is NOT a primary use of flowcharts in the tutorial?",
    options: ["Problem-solving", "Designing algorithms", "Communicating ideas", "Compiling to machine language"],
    correctAnswer: 3,
    explanation: "Flowcharts aid problem-solving, algorithm design and communication—not compilation." 
  },
  {
    id: "flow-q8",
    topic: "Flowcharts",
    question: "Which symbol represents a Decision?",
    options: ["Rectangle", "Diamond", "Oval", "Circle"],
    correctAnswer: 1,
    explanation: "Diamond shape denotes branching based on a condition." 
  },
  {
    id: "flow-q9",
    topic: "Flowcharts",
    question: "Which symbol represents an Action/Instruction?",
    options: ["Input/Output", "Flow Line", "Process", "Start/End"],
    correctAnswer: 2,
    explanation: "Process steps use rectangles." 
  },
  {
    id: "flow-q10",
    topic: "Flowcharts",
    question: "Which symbol marks the beginning or end of a process?",
    options: ["Process", "Decision", "Start/End", "Flow Line"],
    correctAnswer: 2,
    explanation: "Rounded terminal (oval) indicates start or end." 
  },
  {
    id: "flow-q11",
    topic: "Flowcharts",
    question: "Function of the Input/Output symbol?",
    options: ["Shows direction", "Performs calculation", "Handles data input or output", "Stops program"],
    correctAnswer: 2,
    explanation: "Parallelogram handles data entering and leaving the process." 
  },
  {
    id: "flow-q12",
    topic: "Flowcharts",
    question: "What does a Flow Line indicate?",
    options: ["Variable type", "Direction of steps", "Error message", "End of page"],
    correctAnswer: 1,
    explanation: "Arrows show directional sequence." 
  },
  {
    id: "flow-q13",
    topic: "Flowcharts",
    question: "Even/Odd chart: if Number % 2 == 0 is True, what happens?",
    options: ["Print 'Odd'", "Print 'Even'", "End immediately", "Ask again"],
    correctAnswer: 1,
    explanation: "True branch prints 'Even'." 
  },
  {
    id: "flow-q14",
    topic: "Flowcharts",
    question: "Loop example: what does i = i + 1 do?",
    options: ["Resets counter", "Increments counter", "Prints number", "Stops loop"],
    correctAnswer: 1,
    explanation: "It increases the loop counter to progress toward termination." 
  },
  {
    id: "flow-q15",
    topic: "Flowcharts",
    question: "Loop ends when? (i ≤ 5 condition) ",
    options: ["Counter < 5", "Counter == 1", "Condition becomes False", "Never ends"],
    correctAnswer: 2,
    explanation: "When i exceeds 5 the condition is False and flow proceeds to End." 
  },
  // Additional Data Types Questions (new). Duplicates of existing concepts (ordered unchangeable / no duplicates) intentionally skipped.
  {
    id: "dt-q6",
    topic: "Data Types",
    question: "Which of the following is classified as a 'Mapping Type' in Python?",
    options: ["list", "tuple", "dict", "set"],
    correctAnswer: 2,
    explanation: "'dict' is the built-in mapping type storing key-value pairs."
  },
  {
    id: "dt-q7",
    topic: "Data Types",
    question: "Which group represents the numeric types in Python?",
    options: ["int, float, char", "int, float, complex", "int, double, decimal", "short, long, byte"],
    correctAnswer: 1,
    explanation: "Python's numeric types are int, float, and complex."
  },
  {
    id: "dt-q8",
    topic: "Data Types",
    question: "What are the built-in sequence types in Python?",
    options: ["list, tuple, range", "list, set, dict", "array, vector, list", "tuple, map, set"],
    correctAnswer: 0,
    explanation: "Sequence types include list, tuple, and range." 
  },
  {
    id: "dt-q9",
    topic: "Data Types",
    question: "Which function is used to find the data type of an object?",
    options: ["typeof()", "gettype()", "type()", "class()"],
    correctAnswer: 2,
    explanation: "Use the built-in type() function to inspect an object's type." 
  },
  {
    id: "dt-q10",
    topic: "Data Types",
    question: "What is the correct syntax to define a list of fruits?",
    options: ["x = (\"apple\", \"banana\")", "x = {\"apple\", \"banana\"}", "x = [\"apple\", \"banana\"]", "x = <\"apple\", \"banana\">"],
    correctAnswer: 2,
    explanation: "Lists use square brackets: [ ... ]." 
  },
  {
    id: "dt-q11",
    topic: "Data Types",
    question: "Which statement correctly creates a tuple?",
    options: ["x = [\"apple\", \"banana\"]", "x = (\"apple\", \"banana\")", "x = {\"apple\", \"banana\"}", "x = range(\"apple\", \"banana\")"],
    correctAnswer: 1,
    explanation: "Tuples use parentheses: ( ... )." 
  },
  {
    id: "dt-q12",
    topic: "Data Types",
    question: "How is a dictionary defined in Python?",
    options: ["x = (\"name\": \"John\", \"age\": 36)", "x = [\"name\": \"John\", \"age\": 36]", "x = {\"name\", \"John\", \"age\", 36}", "x = {\"name\": \"John\", \"age\": 36}"],
    correctAnswer: 3,
    explanation: "Dictionaries use braces with key: value pairs: { 'name': 'John', 'age': 36 }." 
  },
  {
    id: "dt-q13",
    topic: "Data Types",
    question: "Which of the following represents a complex number literal?",
    options: ["x = 1j", "x = 1i", "x = complex(1, 2)", "x = 1c"],
    correctAnswer: 0,
    explanation: "Python uses 'j' for the imaginary unit; 1j is a complex number with real part 0 and imaginary part 1." 
  },
  {
    id: "dt-q14",
    topic: "Data Types",
    question: "Which constructor creates a float value?",
    options: ["x = int(20.5)", "x = float(20.5)", "x = double(20.5)", "x = real(20.5)"],
    correctAnswer: 1,
    explanation: "Use float(20.5) to explicitly construct a float." 
  },
  {
    id: "dt-q15",
    topic: "Data Types",
    question: "Which collection type is ordered and allows duplicate members?",
    options: ["Set", "Dictionary", "List", "Range"],
    correctAnswer: 2,
    explanation: "Lists preserve order and can contain duplicates." 
  },
  {
    id: "dt-q16",
    topic: "Data Types",
    question: "Which collection is described as unordered and unindexed?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    correctAnswer: 3,
    explanation: "Sets are unordered, unindexed collections of unique items." 
  },
  {
    id: "dt-q17",
    topic: "Data Types",
    question: "Why is choosing the right collection type important?",
    options: ["To make code look better", "To reduce file size only", "For meaning, efficiency, and security", "It is not important"],
    correctAnswer: 2,
    explanation: "Selecting an appropriate collection preserves semantic meaning and can improve efficiency and security." 
  }
  ,
  // Additional Operators Questions (new)
  {
    id: "op-q6",
    topic: "Operators",
    question: "What is the main function of operators in Python?",
    options: ["To store data values", "To perform operations on variables and values", "To define functions", "To create comments"],
    correctAnswer: 1,
    explanation: "Operators manipulate or evaluate variables and values (e.g., arithmetic, comparison)."
  },
  {
    id: "op-q7",
    topic: "Operators",
    question: "Which of the following is NOT a category of Python operators listed in the tutorial?",
    options: ["Arithmetic operators", "Logical operators", "Database operators", "Identity operators"],
    correctAnswer: 2,
    explanation: "Database operators are not a Python operator category."
  },
  {
    id: "op-q8",
    topic: "Operators",
    question: "Which operator is used for Modulus?",
    options: ["/", "#", "%", "//"],
    correctAnswer: 2,
    explanation: "The % operator returns the remainder of a division."
  },
  {
    id: "op-q9",
    topic: "Operators",
    question: "Which operator represents Exponentiation?",
    options: ["^", "**", "exp", "^^"],
    correctAnswer: 1,
    explanation: "Use ** for exponentiation (e.g., 2 ** 3 == 8)."
  },
  {
    id: "op-q10",
    topic: "Operators",
    question: "What does the expression x * y represent?",
    options: ["Addition", "Division", "Multiplication", "Subtraction"],
    correctAnswer: 2,
    explanation: "* multiplies the two operands." 
  },
  {
    id: "op-q11",
    topic: "Operators",
    question: "The statement x += 3 is the same as writing:",
    options: ["x = x * 3", "x = 3", "x = x + 3", "x + 3 = x"],
    correctAnswer: 2,
    explanation: "+= adds to the existing value: x += 3 == x = x + 3." 
  },
  {
    id: "op-q12",
    topic: "Operators",
    question: "Which statement is equivalent to x *= 3?",
    options: ["x = x * 3", "x = x / 3", "x = x + 3", "x = x ** 3"],
    correctAnswer: 0,
    explanation: "*= multiplies and assigns: x *= 3 == x = x * 3." 
  },
  {
    id: "op-q13",
    topic: "Operators",
    question: "How do you write x = x % 3 using an assignment operator?",
    options: ["x //= 3", "x %= 3", "x #= 3", "x mod 3"],
    correctAnswer: 1,
    explanation: "%= applies modulus and assigns the remainder." 
  },
  {
    id: "op-q14",
    topic: "Operators",
    question: "Which operator is used to check if two values are Not equal?",
    options: ["<>", "!=", "==", "><"],
    correctAnswer: 1,
    explanation: "!= compares inequality between two values." 
  },
  {
    id: "op-q15",
    topic: "Operators",
    question: "Which operator represents 'Greater than or equal to'?",
    options: ["=>", "<=", ">=", ">>"],
    correctAnswer: 2,
    explanation: ">= tests if left operand is greater than or equal to right." 
  },
  {
    id: "op-q16",
    topic: "Operators",
    question: "Which operator is used to check if a value is 'Less than' another?",
    options: [">", "<", "<<", "!="],
    correctAnswer: 1,
    explanation: "< compares order; returns True if left < right." 
  },
  {
    id: "op-q17",
    topic: "Operators",
    question: "The and operator returns True only if:",
    options: ["One of the statements is true", "Both statements are true", "Both statements are false", "The result is reversed"],
    correctAnswer: 1,
    explanation: "Logical AND requires both operands to be True." 
  },
  {
    id: "op-q18",
    topic: "Operators",
    question: "Which operator returns True if one of the statements is true?",
    options: ["and", "not", "xor", "or"],
    correctAnswer: 3,
    explanation: "Logical OR returns True when at least one operand is True." 
  },
  {
    id: "op-q19",
    topic: "Operators",
    question: "What does the not operator do?",
    options: ["Returns True if both statements are true", "Checks for equality", "Reverses the result (returns False if the result is true)", "Deletes the variable"],
    correctAnswer: 2,
    explanation: "not negates a boolean expression." 
  },
  {
    id: "op-q20",
    topic: "Operators",
    question: "Identity operators (is, is not) are used to compare:",
    options: ["If two objects have the same value only", "If two objects are actually the same object with the same memory location", "If one object is larger", "If an object is part of a list"],
    correctAnswer: 1,
    explanation: "is / is not test object identity (same memory reference)." 
  },
  {
    id: "op-q21",
    topic: "Operators",
    question: "Which operator checks if a sequence is presented in an object?",
    options: ["is", "on", "in", "at"],
    correctAnswer: 2,
    explanation: "in tests membership inside sequences / containers." 
  },
  {
    id: "op-q22",
    topic: "Operators",
    question: "Which statement returns True if x is not the same object as y?",
    options: ["x != y", "x is not y", "x not in y", "x <> y"],
    correctAnswer: 1,
    explanation: "'is not' checks identity difference; x != y checks value inequality." 
  }
  ,
  // Additional Conditionals Questions (new)
  {
    id: "cond-q6",
    topic: "Conditionals",
    question: "What is the output of this code?",
    code: `x = 10\nif x > 5:\n    print("Apple")\nelif x > 8:\n    print("Banana")\nelse:\n    print("Cherry")`,
    options: ["Apple Banana", "Banana", "Apple", "Apple Banana Cherry"],
    correctAnswer: 2,
    explanation: "The first if condition x > 5 is True so 'Apple' prints and the rest of the chain is skipped." 
  },
  {
    id: "cond-q7",
    topic: "Conditionals",
    question: "Which operator checks strict equality to 50?",
    code: `user_input = 50\nif user_input == 50:\n    print("Equal")`,
    options: ["user_input = 50", "user_input == 50", "user_input equals 50", "user_input != 50"],
    correctAnswer: 1,
    explanation: "== compares values; = assigns; != tests inequality." 
  },
  {
    id: "cond-q8",
    topic: "Conditionals",
    question: "Why does this code raise an error?",
    code: `price = 100\nif price < 50:\nprint("Cheap")  # Missing indentation`,
    options: ["price not defined properly", "The print line is not indented", "Condition needs brackets", "Double quotes invalid"],
    correctAnswer: 1,
    explanation: "Python requires indentation for the body of an if; missing indentation triggers IndentationError." 
  },
  {
    id: "cond-q9",
    topic: "Conditionals",
    question: "One-line version of: if a > b: res = 'High' else: res = 'Low'?",
    code: `# Multi-line\nif a > b:\n    res = "High"\nelse:\n    res = "Low"\n\n# One-line\nres = "High" if a > b else "Low"`,
    options: ["res = 'High' if a > b else 'Low'", "res = 'High' else 'Low' if a > b", "if a > b res = 'High' else res = 'Low'", "a > b ? 'High' : 'Low'"],
    correctAnswer: 0,
    explanation: "Python's ternary syntax is <true_expr> if <condition> else <false_expr>." 
  },
  {
    id: "cond-q10",
    topic: "Conditionals",
    question: "In a match statement how do you match 10, 11 OR 12?",
    code: `match n:\n    case 10 | 11 | 12:\n        print("Range hit")\n    case _:\n        print("Other")`,
    options: ["case 10, 11, 12:", "case 10 or 11 or 12:", "case 10 | 11 | 12:", "case 10 & 11 & 12:"],
    correctAnswer: 2,
    explanation: "Use the pattern alternation operator | to combine literal cases." 
  },
  {
    id: "cond-q11",
    topic: "Conditionals",
    question: "What does case _ represent in match/case?",
    code: `match status:\n    case _:\n        print("Default")`,
    options: ["Matches empty strings", "Syntax error", "Matches underscore only", "Default catch-all"],
    correctAnswer: 3,
    explanation: "_ is the wildcard default pattern (like else)." 
  },
  {
    id: "cond-q12",
    topic: "Conditionals",
    question: "Which Python version introduced match/case structural pattern matching?",
    code: `match command:\n    case "start":\n        ...\n    case _:\n        ...`,
    options: ["Python 2.7", "Python 3.0", "Python 3.10", "Python 3.5"],
    correctAnswer: 2,
    explanation: "Structural pattern matching (PEP 634) arrived in Python 3.10." 
  },
  {
    id: "cond-q13",
    topic: "Conditionals",
    question: "When will 'Access Granted' print?",
    code: `if username == "admin":\n    if password == "1234":\n        print("Access Granted")`,
    options: ["username == 'admin' OR password == '1234'", "username == 'admin' AND password == '1234'", "Whenever username == 'admin'", "Whenever password == '1234'"],
    correctAnswer: 1,
    explanation: "Both nested conditions must be True to reach the print statement." 
  },
  {
    id: "cond-q14",
    topic: "Conditionals",
    question: "Difference between = and ==?",
    code: `x = 5  # assignment\nif x == 5:  # comparison\n    print("Five")`,
    options: ["= comparison, == assignment", "Same", "= assignment, == comparison", "= temporary, == permanent"],
    correctAnswer: 2,
    explanation: "= assigns values; == compares for equality." 
  },
  {
    id: "cond-q15",
    topic: "Conditionals",
    question: "What is the output of this code?",
    code: `score = 75\nif score > 80:\n    print("A")\nelif score > 70:\n    print("B")\nelif score > 60:\n    print("C")`,
    options: ["B", "B and C", "A", "C"],
    correctAnswer: 0,
    explanation: "First true branch is score > 70 so only 'B' prints; chain stops afterward." 
  }
  ,
  // Additional Arrays Questions (extended)
  {
    id: "arr-q6",
    topic: "Arrays",
    question: "What is the main purpose of a list (array) in Python?",
    options: ["Store a single text value", "Store multiple values in one variable", "Create a DB connection", "Perform complex calculus"],
    correctAnswer: 1,
    explanation: "Lists group multiple values under one variable name." 
  },
  {
    id: "arr-q7",
    topic: "Arrays",
    question: "Which syntax defines a list of cars?",
    options: ["cars = (\"Ford\", \"Volvo\")", "cars = {\"Ford\", \"Volvo\"}", "cars = [\"Ford\", \"Volvo\"]", "cars = <\"Ford\", \"Volvo\">"],
    correctAnswer: 2,
    explanation: "Lists use square brackets: [item1, item2]." 
  },
  {
    id: "arr-q8",
    topic: "Arrays",
    question: "How do you access the first element of list cars?",
    options: ["cars[1]", "cars.first()", "cars[0]", "cars(0)"],
    correctAnswer: 2,
    explanation: "Lists are zero-indexed; first element is at index 0." 
  },
  {
    id: "arr-q9",
    topic: "Arrays",
    question: "Which function returns the number of items in a list?",
    options: ["size()", "count()", "len()", "length()"],
    correctAnswer: 2,
    explanation: "len(list) returns its length." 
  },
  {
    id: "arr-q10",
    topic: "Arrays",
    question: "Which method adds an element to the end of a list?",
    options: ["insert()", "add()", "push()", "append()"],
    correctAnswer: 3,
    explanation: "append() places a new element at the end." 
  },
  {
    id: "arr-q11",
    topic: "Arrays",
    question: "Which method adds an element at a specific index?",
    options: ["append()", "insert()", "put()", "add_at()"],
    correctAnswer: 1,
    explanation: "insert(index, value) inserts before that position." 
  },
  {
    id: "arr-q12",
    topic: "Arrays",
    question: "Change first element in cars to 'Toyota'?",
    options: ["cars[0] = 'Toyota'", "cars[1] = 'Toyota'", "cars.replace('Toyota')", "cars.update(0, 'Toyota')"],
    correctAnswer: 0,
    explanation: "Assign directly by index: cars[0] = 'Toyota'." 
  },
  {
    id: "arr-q13",
    topic: "Arrays",
    question: "What does extend() do?",
    options: ["Adds empty slots", "Adds another iterable's elements", "Doubles values", "Prints extended format"],
    correctAnswer: 1,
    explanation: "extend() iterates through the provided iterable and appends each element." 
  },
  {
    id: "arr-q14",
    topic: "Arrays",
    question: "Remove element by index?",
    options: ["delete()", "remove()", "pop()", "cut()"],
    correctAnswer: 2,
    explanation: "pop(index) removes and returns the item at that index (default last)." 
  },
  {
    id: "arr-q15",
    topic: "Arrays",
    question: "Remove first occurrence of a value?",
    options: ["pop()", "remove()", "delete()", "clear()"],
    correctAnswer: 1,
    explanation: "remove(value) deletes the first matching element." 
  },
  {
    id: "arr-q16",
    topic: "Arrays",
    question: "What does clear() do?",
    options: ["Removes last element", "Deletes variable", "Removes all elements", "Resets indices"],
    correctAnswer: 2,
    explanation: "clear() empties the list in place." 
  },
  {
    id: "arr-q17",
    topic: "Arrays",
    question: "Which method sorts ascending?",
    options: ["order()", "organize()", "sort()", "arrange()"],
    correctAnswer: 2,
    explanation: "sort() orders list items ascending by default." 
  },
  {
    id: "arr-q18",
    topic: "Arrays",
    question: "What does count(value) return?",
    options: ["Total items", "Occurrences of value", "Sum of numbers", "Index of value"],
    correctAnswer: 1,
    explanation: "count(value) returns how many times value appears." 
  },
  {
    id: "arr-q19",
    topic: "Arrays",
    question: "What does reverse() do?",
    options: ["Sort Z-A", "Swap ends", "Reverse current order", "Delete list"],
    correctAnswer: 2,
    explanation: "reverse() flips the list order in place without sorting." 
  },
  {
    id: "arr-q20",
    topic: "Arrays",
    question: "What does this code output?",
    code: `cars = ['BMW','BMW','Ford']\nprint(cars.count('BMW'))`,
    options: ["1", "2", "3", "BMW"],
    correctAnswer: 1,
    explanation: "There are two occurrences of 'BMW'." 
  }
];

// Big Mixed Quiz - includes every question from all topics
export const bigMixedQuiz: QuizQuestion[] = [...quizQuestions];
