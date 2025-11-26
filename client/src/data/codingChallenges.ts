/**
 * Data Types Coding Challenges
 * 
 * This file contains all coding challenges for the Data Types topic.
 * 
 * To add a new challenge:
 * 1. Add a new object to the array below
 * 2. Fill in all required fields:
 *    - id: unique identifier (e.g., "dt-001", "dt-002")
 *    - title: short, descriptive title
 *    - description: clear explanation of what to do
 *    - starterCode: pre-filled code students see initially
 *    - solutionCode: complete, correct solution
 *    - topicTag: "data-types" (or other topic)
 *    - level: "easy" | "medium" | "hard"
 *    - hints: (optional) array of helpful hints
 *    - expectedOutput: (optional) what the output should look like
 * 
 * Example challenge structure is provided below.
 */

/**
 * Coding Challenges - All Topics
 * 
 * This file contains coding challenges for ALL topics:
 * - Data Types
 * - Operators
 * - Conditionals
 * - Loops
 * - Functions
 * - Arrays / Lists
 * - NumPy
 * - Flowcharts
 * 
 * Challenges are filtered by topicTag on the page.
 */

import type { CodingChallenge } from "@/types/challenges";

export const codingChallenges: CodingChallenge[] = [
  // ==================== DATA TYPES CHALLENGES ====================
  {
    id: "dt-1",
    title: "The Input Conversion Challenge",
    description:
      "Write a program that takes a birth year as a string. Convert it to an integer, subtract it from 2025 to calculate age, and print the result.",
    starterCode: `birth_year = "2000"  # Simulating user input
# Convert to integer and calculate age
`,
    solutionCode: `birth_year = "2000"  # Simulating user input
year_int = int(birth_year)  # Casting string to int
age = 2025 - year_int
print(age)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Use int() to convert a string to an integer", "Subtract the birth year from 2025"],
    expectedOutput: "25",
  },
  {
    id: "dt-2",
    title: "Float vs Integer Division",
    description:
      "Create two variables, a = 10 and b = 4. Perform standard division (/) and floor division (//) on them. Print both results to see the difference in Data Types.",
    starterCode: `a = 10
b = 4
# Perform both types of division
`,
    solutionCode: `a = 10
b = 4
print(a / b)   # Float division
print(a // b)  # Floor division (Integer)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["/ gives float result", "// gives integer result (floor division)"],
    expectedOutput: "2.5\\n2",
  },
  {
    id: "dt-3",
    title: "The Complex Number Type",
    description:
      "Python has a 'complex' numeric type. Create a variable x assigned to 3 + 5j. Use the type() function to print its data type.",
    starterCode: `# Create a complex number and print its type
`,
    solutionCode: `x = 3 + 5j
print(type(x))`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Complex numbers use 'j' for the imaginary part", "Use type() to check the data type"],
    expectedOutput: "<class 'complex'>",
  },
  {
    id: "dt-4",
    title: "String Slicing Logic",
    description:
      "Create a string variable text = 'Programming'. Write code to print only the letters 'gram' by using positive index slicing.",
    starterCode: `text = "Programming"
# Use slicing to extract "gram"
`,
    solutionCode: `text = "Programming"
# P(0) r(1) o(2) g(3) r(4) a(5) m(6) m(7)...
print(text[3:7])`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Remember: index starts at 0", "Slicing syntax: string[start:end]", "End index is exclusive"],
    expectedOutput: "gram",
  },
  {
    id: "dt-5",
    title: "Boolean Truth Values",
    description:
      "In Python, numbers can be treated as Booleans. Write code that prints bool(1) and bool(0). This tests if you know which number represents 'False'.",
    starterCode: `# Print bool(1) and bool(0)
`,
    solutionCode: `print(bool(1))
print(bool(0))`,
    topicTag: "data-types",
    level: "easy",
    hints: ["0 is considered False", "Any non-zero number is True"],
    expectedOutput: "True\\nFalse",
  },
  {
    id: "dt-6",
    title: "Modifying a Mutable List",
    description:
      "Lists are 'changeable' (mutable). Create a list colors = ['Red', 'Green', 'Blue']. Change the second item ('Green') to 'Yellow' using its index, then print the full list.",
    starterCode: `colors = ["Red", "Green", "Blue"]
# Change "Green" to "Yellow"
`,
    solutionCode: `colors = ["Red", "Green", "Blue"]
colors[1] = "Yellow"
print(colors)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["List indices start at 0", "Second item has index 1", "Assign new value using colors[index] = new_value"],
    expectedOutput: "['Red', 'Yellow', 'Blue']",
  },
  {
    id: "dt-7",
    title: "Append vs Insert",
    description:
      "Create a list nums = [10, 20]. First, use append() to add 30 to the end. Second, use insert() to add 15 at index 1. Print the final list.",
    starterCode: `nums = [10, 20]
# Use append() and insert()
`,
    solutionCode: `nums = [10, 20]
nums.append(30)      # Adds to end
nums.insert(1, 15)   # Adds at specific index
print(nums)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["append() adds to the end", "insert(index, value) adds at specific position"],
    expectedOutput: "[10, 15, 20, 30]",
  },
  {
    id: "dt-8",
    title: "Pop vs Remove",
    description:
      "Create a list items = ['A', 'B', 'C', 'B']. First, use remove('B') to remove by value. Then use pop(0) to remove by index. Print the result.",
    starterCode: `items = ["A", "B", "C", "B"]
# Use remove() and pop()
`,
    solutionCode: `items = ["A", "B", "C", "B"]
items.remove("B")  # Removes the FIRST "B" it finds
items.pop(0)       # Removes the item at index 0 ("A")
print(items)`,
    topicTag: "data-types",
    level: "medium",
    hints: ["remove() removes first occurrence of value", "pop(index) removes item at specific index"],
    expectedOutput: "['C', 'B']",
  },
  {
    id: "dt-9",
    title: "List Sorting",
    description:
      "Create a list scores = [5, 1, 9, 3]. Use the .sort() method to arrange them in ascending order. Then print the list.",
    starterCode: `scores = [5, 1, 9, 3]
# Sort the list
`,
    solutionCode: `scores = [5, 1, 9, 3]
scores.sort()
print(scores)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["sort() modifies the list in place", "Default sorting is ascending"],
    expectedOutput: "[1, 3, 5, 9]",
  },
  {
    id: "dt-10",
    title: "Clearing a List",
    description:
      "Create a list data = [100, 200, 300]. Use the .clear() method to empty the list. Print the list afterwards to show it is empty.",
    starterCode: `data = [100, 200, 300]
# Clear the list
`,
    solutionCode: `data = [100, 200, 300]
data.clear()
print(data)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["clear() removes all items from the list"],
    expectedOutput: "[]",
  },
  {
    id: "dt-11",
    title: "Tuple Immutability",
    description:
      "Tuples are 'unchangeable'. Create a tuple my_tuple = (10, 20). Try to change the first item to 99. This will cause an error. Catch the error using a try...except block and print 'Error Caught: Tuples cannot be changed'.",
    starterCode: `my_tuple = (10, 20)
# Try to modify and handle the error
`,
    solutionCode: `my_tuple = (10, 20)
try:
    my_tuple[0] = 99
except TypeError:
    print("Error Caught: Tuples cannot be changed")`,
    topicTag: "data-types",
    level: "medium",
    hints: ["Tuples cannot be modified after creation", "TypeError is raised when trying to modify a tuple"],
    expectedOutput: "Error Caught: Tuples cannot be changed",
  },
  {
    id: "dt-12",
    title: "The Single Item Tuple Trap",
    description:
      "Defining a tuple with one item requires a comma. Create variable a = (50) and b = (50,). Print the type() of both to show that a is an Integer and b is a Tuple.",
    starterCode: `# Create both variables and print their types
`,
    solutionCode: `a = (50)
b = (50,)
print(type(a))
print(type(b))`,
    topicTag: "data-types",
    level: "medium",
    hints: ["Without comma, (50) is just an integer in parentheses", "The trailing comma makes it a tuple"],
    expectedOutput: "<class 'int'>\\n<class 'tuple'>",
  },
  {
    id: "dt-13",
    title: "Set Uniqueness",
    description:
      "Sets do not allow duplicate members. Create a set numbers = {1, 2, 2, 3}. Print the set. You should see that the duplicate '2' has been removed automatically.",
    starterCode: `# Create a set with duplicates
`,
    solutionCode: `numbers = {1, 2, 2, 3}
print(numbers)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Sets automatically remove duplicates", "Set order may vary"],
    expectedOutput: "{1, 2, 3}",
  },
  {
    id: "dt-14",
    title: "Adding to a Set",
    description:
      "You cannot use index numbers with sets, but you can add items. Create a set fruits = {'Apple'}. Add 'Orange' to it using the add() method, then print the set.",
    starterCode: `fruits = {"Apple"}
# Add "Orange" to the set
`,
    solutionCode: `fruits = {"Apple"}
fruits.add("Orange")  # Note: Sets are unordered, order may vary
print(fruits)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Use add() method to add single items to a set", "Sets are unordered"],
    expectedOutput: "{'Orange', 'Apple'}",
  },
  {
    id: "dt-15",
    title: "Accessing Dictionary Values",
    description:
      "Create a dictionary person = {'name': 'Kamal', 'age': 25}. Write code to print only the value of the 'name' key.",
    starterCode: `person = {"name": "Kamal", "age": 25}
# Print the value of "name"
`,
    solutionCode: `person = {"name": "Kamal", "age": 25}
print(person["name"])`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Access dictionary values using dict[key]"],
    expectedOutput: "Kamal",
  },
  {
    id: "dt-16",
    title: "Adding a Key-Value Pair",
    description:
      "Start with car = {'brand': 'Ford'}. Write code to add a new key 'year' with the value 2020. Print the updated dictionary.",
    starterCode: `car = {"brand": "Ford"}
# Add "year": 2020
`,
    solutionCode: `car = {"brand": "Ford"}
car["year"] = 2020
print(car)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["Add new key-value pairs using dict[new_key] = value"],
    expectedOutput: "{'brand': 'Ford', 'year': 2020}",
  },
  {
    id: "dt-17",
    title: "Dictionary Constructor",
    description:
      "Create a dictionary using the dict() constructor function. Create a dictionary called 'data' using dict(day='Monday', temp=30) and print it.",
    starterCode: `# Create dictionary using dict() constructor
`,
    solutionCode: `data = dict(day="Monday", temp=30)
print(data)`,
    topicTag: "data-types",
    level: "easy",
    hints: ["dict() can create dictionaries using keyword arguments"],
    expectedOutput: "{'day': 'Monday', 'temp': 30}",
  },
  {
    id: "dt-18",
    title: "Python Standard Array",
    description:
      "Import the array module and create an array of integers using the typecode 'i' with values [1, 2, 3]. Print the array.",
    starterCode: `# Import array module and create an integer array
`,
    solutionCode: `import array
arr = array.array('i', [1, 2, 3])
print(arr)`,
    topicTag: "data-types",
    level: "medium",
    hints: ["Use 'import array' to import the module", "Typecode 'i' represents signed integers"],
    expectedOutput: "array('i', [1, 2, 3])",
  },
  {
    id: "dt-19",
    title: "Creating a NumPy Matrix",
    description:
      "Import numpy as np. Create a 2D array (matrix) named 'matrix' with values [[1, 2], [3, 4]]. Print the .shape of the array.",
    starterCode: `# Import numpy and create a 2D array
`,
    solutionCode: `import numpy as np
matrix = np.array([[1, 2], [3, 4]])
print(matrix.shape)`,
    topicTag: "data-types",
    level: "medium",
    hints: ["Use np.array() with nested lists for 2D arrays", ".shape returns dimensions as a tuple"],
    expectedOutput: "(2, 2)",
  },
  {
    id: "dt-20",
    title: "NumPy 2D Slicing",
    description:
      "Using the matrix m = np.array([[10, 20, 30], [40, 50, 60]]), write code to access the element in the 2nd row and 3rd column. Remember: index starts at 0.",
    starterCode: `import numpy as np
m = np.array([[10, 20, 30], 
              [40, 50, 60]])
# Access element at 2nd row, 3rd column
`,
    solutionCode: `import numpy as np
m = np.array([[10, 20, 30], 
              [40, 50, 60]])
# Row index 1 (2nd row), Column index 2 (3rd col)
print(m[1, 2])`,
    topicTag: "data-types",
    level: "medium",
    hints: ["2nd row = index 1", "3rd column = index 2", "Use m[row, column] syntax"],
    expectedOutput: "60",
  },
  // ==================== OPERATORS CHALLENGES ====================
  // Part 1: Arithmetic Operators (5 questions)
  {
    id: "op-1",
    title: "Understanding operator precedence",
    description:
      "Create x = 2, y = 3, z = 4. Print the result of x + y * z. Observe that multiplication happens before addition due to precedence.",
    starterCode: `x = 2
y = 3
z = 4
# Print x + y * z
`,
    solutionCode: `x = 2
y = 3
z = 4
print(x + y * z)  # Output: 14 (3*4=12, then 2+12=14)`,
    topicTag: "operators",
    level: "easy",
    hints: ["Multiplication has higher precedence than addition", "y * z is evaluated first", "Result is 2 + 12 = 14"],
    expectedOutput: "14",
  },
  {
    id: "op-2",
    title: "Using modulus to get remainder",
    description:
      "Create a = 17 and b = 5. Print a % b to get the remainder when a is divided by b.",
    starterCode: `a = 17
b = 5
# Print the remainder
`,
    solutionCode: `a = 17
b = 5
print(a % b)  # Output: 2`,
    topicTag: "operators",
    level: "easy",
    hints: ["% is the modulus operator", "17 divided by 5 = 3 remainder 2", "Use print(a % b)"],
    expectedOutput: "2",
  },
  {
    id: "op-3",
    title: "Floor division operator",
    description:
      "Create x = 15 and y = 4. Print x // y to see the result of floor division which removes the decimal part.",
    starterCode: `x = 15
y = 4
# Print floor division result
`,
    solutionCode: `x = 15
y = 4
print(x // y)  # Output: 3`,
    topicTag: "operators",
    level: "easy",
    hints: ["// is floor division", "15 / 4 = 3.75", "Floor removes decimal: 3"],
    expectedOutput: "3",
  },
  {
    id: "op-4",
    title: "Exponentiation (power)",
    description:
      "Create base = 3 and exp = 4. Use ** to calculate 3 raised to the power of 4. Print the result.",
    starterCode: `base = 3
exp = 4
# Calculate and print power
`,
    solutionCode: `base = 3
exp = 4
print(base ** exp)  # Output: 81`,
    topicTag: "operators",
    level: "easy",
    hints: ["** is the exponent operator", "3^4 = 3*3*3*3 = 81", "Use print(base ** exp)"],
    expectedOutput: "81",
  },
  {
    id: "op-5",
    title: "Using parentheses",
    description:
      "Create x = 6, y = 2. First print x + y * 2, then print (x + y) * 2. Observe the difference caused by parentheses.",
    starterCode: `x = 6
y = 2
# Print without parentheses
# Print with parentheses
`,
    solutionCode: `x = 6
y = 2
print(x + y * 2)    # Output: 10 (6 + 4)
print((x + y) * 2)  # Output: 16 (8 * 2)`,
    topicTag: "operators",
    level: "easy",
    hints: ["Without parentheses: y*2 first, then + x", "With parentheses: x+y first, then * 2", "Parentheses override precedence"],
    expectedOutput: "10\n16",
  },

  // Part 2: Assignment Operators (3 questions)
  {
    id: "op-6",
    title: "Add and assign (+=)",
    description:
      "Create x = 10. Use x += 5 to add 5 to x. Print x before and after the operation.",
    starterCode: `x = 10
# Print x
# Add 5 using +=
# Print x again
`,
    solutionCode: `x = 10
print(x)  # Output: 10
x += 5
print(x)  # Output: 15`,
    topicTag: "operators",
    level: "easy",
    hints: ["x += 5 is same as x = x + 5", "First print shows 10", "After += shows 15"],
    expectedOutput: "10\n15",
  },
  {
    id: "op-7",
    title: "Multiply and assign (*=)",
    description:
      "Create y = 4. Use y *= 3 to multiply y by 3. Print y before and after.",
    starterCode: `y = 4
# Print y
# Multiply by 3 using *=
# Print y again
`,
    solutionCode: `y = 4
print(y)  # Output: 4
y *= 3
print(y)  # Output: 12`,
    topicTag: "operators",
    level: "easy",
    hints: ["y *= 3 is same as y = y * 3", "4 * 3 = 12", "Print before and after"],
    expectedOutput: "4\n12",
  },
  {
    id: "op-8",
    title: "Subtract and assign (-=)",
    description:
      "Create z = 20. Use z -= 8 to subtract 8 from z. Print z before and after.",
    starterCode: `z = 20
# Print z
# Subtract 8 using -=
# Print z again
`,
    solutionCode: `z = 20
print(z)  # Output: 20
z -= 8
print(z)  # Output: 12`,
    topicTag: "operators",
    level: "easy",
    hints: ["z -= 8 is same as z = z - 8", "20 - 8 = 12", "Print before and after"],
    expectedOutput: "20\n12",
  },

  // Part 3: Comparison Operators (4 questions)
  {
    id: "op-9",
    title: "Check if equal (==)",
    description:
      "Create a = 5 and b = 5. Print a == b to check if they are equal.",
    starterCode: `a = 5
b = 5
# Check if a equals b
`,
    solutionCode: `a = 5
b = 5
print(a == b)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["== checks equality", "5 equals 5", "Result is True"],
    expectedOutput: "True",
  },
  {
    id: "op-10",
    title: "Check not equal (!=)",
    description:
      "Create x = 10 and y = 7. Print x != y to check if they are not equal.",
    starterCode: `x = 10
y = 7
# Check if x is not equal to y
`,
    solutionCode: `x = 10
y = 7
print(x != y)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["!= checks inequality", "10 is not equal to 7", "Result is True"],
    expectedOutput: "True",
  },
  {
    id: "op-11",
    title: "Greater than or equal (>=)",
    description:
      "Create age = 18. Print age >= 18 to check if age is 18 or more.",
    starterCode: `age = 18
# Check if age is >= 18
`,
    solutionCode: `age = 18
print(age >= 18)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: [">= checks greater than or equal", "18 >= 18 is True", "Equal values return True"],
    expectedOutput: "True",
  },
  {
    id: "op-12",
    title: "Compare strings",
    description:
      'Create s1 = "apple" and s2 = "banana". Print s1 < s2 to compare alphabetically.',
    starterCode: `s1 = "apple"
s2 = "banana"
# Compare strings alphabetically
`,
    solutionCode: `s1 = "apple"
s2 = "banana"
print(s1 < s2)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["Strings compare alphabetically", "'a' comes before 'b'", "apple < banana is True"],
    expectedOutput: "True",
  },

  // Part 4: Logical Operators (4 questions)
  {
    id: "op-13",
    title: "Using 'and' operator",
    description:
      "Create a = True and b = False. Print a and b to see if both are True.",
    starterCode: `a = True
b = False
# Print a and b
`,
    solutionCode: `a = True
b = False
print(a and b)  # Output: False`,
    topicTag: "operators",
    level: "easy",
    hints: ["'and' requires both to be True", "True and False = False", "Both must be True for True result"],
    expectedOutput: "False",
  },
  {
    id: "op-14",
    title: "Using 'or' operator",
    description:
      "Create x = True and y = False. Print x or y to see if at least one is True.",
    starterCode: `x = True
y = False
# Print x or y
`,
    solutionCode: `x = True
y = False
print(x or y)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["'or' needs at least one True", "True or False = True", "Only one True is enough"],
    expectedOutput: "True",
  },
  {
    id: "op-15",
    title: "Using 'not' operator",
    description:
      "Create flag = True. Print not flag to reverse the boolean value.",
    starterCode: `flag = True
# Print not flag
`,
    solutionCode: `flag = True
print(not flag)  # Output: False`,
    topicTag: "operators",
    level: "easy",
    hints: ["'not' reverses the value", "not True = False", "Negates the boolean"],
    expectedOutput: "False",
  },
  {
    id: "op-16",
    title: "Combined logical operators",
    description:
      "Create x = 5. Print (x > 2 and x < 10) to check if x is between 2 and 10.",
    starterCode: `x = 5
# Check if x is between 2 and 10
`,
    solutionCode: `x = 5
print(x > 2 and x < 10)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["5 > 2 is True", "5 < 10 is True", "True and True = True"],
    expectedOutput: "True",
  },

  // Part 5: Identity and Membership Operators (4 questions)
  {
    id: "op-17",
    title: "Membership with 'in'",
    description:
      'Create a list fruits = ["apple", "banana", "cherry"]. Print "banana" in fruits to check if it exists.',
    starterCode: `fruits = ["apple", "banana", "cherry"]
# Check if "banana" is in fruits
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["'in' checks membership", "banana is in the list", "Result is True"],
    expectedOutput: "True",
  },
  {
    id: "op-18",
    title: "Membership with 'not in'",
    description:
      'Create colors = ["red", "green", "blue"]. Print "yellow" not in colors to check absence.',
    starterCode: `colors = ["red", "green", "blue"]
# Check if "yellow" is not in colors
`,
    solutionCode: `colors = ["red", "green", "blue"]
print("yellow" not in colors)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["'not in' checks absence", "yellow is not in the list", "Result is True"],
    expectedOutput: "True",
  },
  {
    id: "op-19",
    title: "Identity with 'is'",
    description:
      "Create a = [1, 2] and b = a. Print a is b to check if they refer to the same object.",
    starterCode: `a = [1, 2]
b = a
# Check if a is b
`,
    solutionCode: `a = [1, 2]
b = a
print(a is b)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["b = a makes b refer to same object", "'is' checks identity, not equality", "Same memory location"],
    expectedOutput: "True",
  },
  {
    id: "op-20",
    title: "Identity with 'is not'",
    description:
      "Create x = [1, 2] and y = [1, 2]. Print x is not y to check if they are different objects.",
    starterCode: `x = [1, 2]
y = [1, 2]
# Check if x is not y
`,
    solutionCode: `x = [1, 2]
y = [1, 2]
print(x is not y)  # Output: True`,
    topicTag: "operators",
    level: "easy",
    hints: ["Same values but different objects", "Two separate lists in memory", "'is not' returns True"],
    expectedOutput: "True",
  },

  // ==================== CONDITIONALS CHALLENGES ====================
  // Part 1: The Basic if-else Structure (5 questions)
  {
    id: "cond-1",
    title: "The Basic if",
    description:
      "Write a simple if statement. Create a variable a = 33 and b = 200. If b is greater than a, print \"b is greater\".",
    starterCode: `a = 33
b = 200
# Write if statement here
`,
    solutionCode: `a = 33
b = 200
if b > a:
    print("b is greater")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Use > to compare values", "Indentation is important in Python", "if condition: then action"],
    expectedOutput: "b is greater",
  },
  {
    id: "cond-2",
    title: "Indentation Matters",
    description:
      "Python relies on indentation. Write the correct code to check if 5 > 2 and print \"Five is greater\". Remember to indent the print statement.",
    starterCode: `# Write if statement with proper indentation
`,
    solutionCode: `if 5 > 2:
    print("Five is greater")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Use 4 spaces or 1 tab for indentation", "The print must be inside the if block", "Indentation defines code blocks"],
    expectedOutput: "Five is greater",
  },
  {
    id: "cond-3",
    title: "The else Keyword",
    description:
      "The else block catches anything that isn't true. Write a program where a = 20 and b = 200. Check if b < a. Use else to print \"b is not less than a\" if the condition fails.",
    starterCode: `a = 20
b = 200
# Write if-else here
`,
    solutionCode: `a = 20
b = 200
if b < a:
    print("b is less")
else:
    print("b is not less than a")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["else runs when if is False", "b < a is False since 200 > 20", "else doesn't need a condition"],
    expectedOutput: "b is not less than a",
  },
  {
    id: "cond-4",
    title: "The elif (Else If) Logic",
    description:
      "Use elif to handle multiple conditions. a = 33, b = 33. First check if b > a. Then check elif a == b and print \"equal\". Finally use else.",
    starterCode: `a = 33
b = 33
# Write if-elif-else here
`,
    solutionCode: `a = 33
b = 33
if b > a:
    print("b is greater")
elif a == b:
    print("equal")
else:
    print("a is greater")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["elif checks another condition", "== checks equality", "Only one branch executes"],
    expectedOutput: "equal",
  },
  {
    id: "cond-5",
    title: "Short Hand if...else (Ternary)",
    description:
      "You can write a simple if-else in one line. Write a one-line code that prints \"A\" if a > b else print \"B\". Assume a = 2 and b = 330.",
    starterCode: `a = 2
b = 330
# Write one-line if-else
`,
    solutionCode: `a = 2
b = 330
print("A") if a > b else print("B")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Syntax: action1 if condition else action2", "This is called ternary operator", "2 > 330 is False"],
    expectedOutput: "B",
  },

  // Part 2: The match-case Statement (3 questions)
  {
    id: "cond-6",
    title: "Basic Match Case",
    description:
      "Write a match statement for day = 2. If case is 1 print \"Monday\", if case is 2 print \"Tuesday\".",
    starterCode: `day = 2
# Write match-case here
`,
    solutionCode: `day = 2
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["match variable: starts the block", "case value: checks equality", "Each case is indented"],
    expectedOutput: "Tuesday",
  },
  {
    id: "cond-7",
    title: "The Default Case (Underscore _)",
    description:
      "In a match statement, the _ (underscore) acts like else. Write a match block for day = 7 that checks for case 1 and case 2, and uses case _: to print \"Weekend/Other\" for anything else.",
    starterCode: `day = 7
# Write match-case with default
`,
    solutionCode: `day = 7
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case _:
        print("Weekend/Other")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["_ is the wildcard pattern", "It matches anything not matched above", "Like else in if-else"],
    expectedOutput: "Weekend/Other",
  },
  {
    id: "cond-8",
    title: "The Pipe | Operator (Multiple Matches)",
    description:
      "You can group cases using | (OR). Write a match statement for day = 3. If the case is 1 | 2 | 3 | 4 | 5, print \"Weekday\".",
    starterCode: `day = 3
# Write match-case with | operator
`,
    solutionCode: `day = 3
match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["| means OR in match-case", "Groups multiple values", "3 matches the pattern 1|2|3|4|5"],
    expectedOutput: "Weekday",
  },

  // Part 3: Logical Logic inside Conditionals (3 questions)
  {
    id: "cond-9",
    title: "Using 'and' in if",
    description:
      "Check if three numbers satisfy a condition. a = 200, b = 33, c = 500. If a > b AND c > a, print \"Both conditions are True\".",
    starterCode: `a = 200
b = 33
c = 500
# Write if with and
`,
    solutionCode: `a = 200
b = 33
c = 500
if a > b and c > a:
    print("Both conditions are True")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["and requires both conditions True", "200 > 33 is True", "500 > 200 is True"],
    expectedOutput: "Both conditions are True",
  },
  {
    id: "cond-10",
    title: "Using 'or' in if",
    description:
      "Check if a > b OR a > c. a = 200, b = 33, c = 500. Print \"At least one is True\".",
    starterCode: `a = 200
b = 33
c = 500
# Write if with or
`,
    solutionCode: `a = 200
b = 33
c = 500
if a > b or a > c:
    print("At least one is True")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["or needs at least one True", "200 > 33 is True", "200 > 500 is False, but or still works"],
    expectedOutput: "At least one is True",
  },
  {
    id: "cond-11",
    title: "Using 'not' Logic",
    description:
      "a = 33, b = 200. Check if not a > b. Print \"a is NOT greater than b\".",
    starterCode: `a = 33
b = 200
# Write if with not
`,
    solutionCode: `a = 33
b = 200
if not a > b:
    print("a is NOT greater than b")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["not reverses the boolean", "a > b is False", "not False = True"],
    expectedOutput: "a is NOT greater than b",
  },

  // Part 4: Applied Logic (Past Paper Scenarios) (4 questions)
  {
    id: "cond-12",
    title: "Even or Odd Number (Modulus)",
    description:
      "This is a classic exam question. Write code with number = 10. If number % 2 == 0, print \"Even\", else print \"Odd\".",
    starterCode: `number = 10
# Check even or odd
`,
    solutionCode: `number = 10
if number % 2 == 0:
    print("Even")
else:
    print("Odd")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["% gives remainder", "10 % 2 = 0", "0 remainder means even"],
    expectedOutput: "Even",
  },
  {
    id: "cond-13",
    title: "Age Categorization",
    description:
      "Create a variable age = 15. If age < 13 print \"Child\". If age is between 13 and 19 (inclusive), print \"Teenager\". Else print \"Adult\".",
    starterCode: `age = 15
# Categorize age
`,
    solutionCode: `age = 15
if age < 13:
    print("Child")
elif 13 <= age <= 19:
    print("Teenager")
else:
    print("Adult")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Use chained comparison 13 <= age <= 19", "15 is between 13 and 19", "elif for multiple conditions"],
    expectedOutput: "Teenager",
  },
  {
    id: "cond-14",
    title: "Grading System (Range Check)",
    description:
      "Implement grading logic: marks = 72. 75 and above: \"Grade A\", 50 to 74: \"Grade B\", Below 50: \"Grade C\".",
    starterCode: `marks = 72
# Implement grading
`,
    solutionCode: `marks = 72
if marks >= 75:
    print("Grade A")
elif marks >= 50:
    print("Grade B")
else:
    print("Grade C")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Check highest grade first", "72 >= 75 is False", "72 >= 50 is True"],
    expectedOutput: "Grade B",
  },
  {
    id: "cond-15",
    title: "Temperature Check",
    description:
      "temp = 20. If temp < 15 print \"Cold\". If 15 <= temp <= 25 print \"Warm\". Else print \"Hot\".",
    starterCode: `temp = 20
# Check temperature
`,
    solutionCode: `temp = 20
if temp < 15:
    print("Cold")
elif 15 <= temp <= 25:
    print("Warm")
else:
    print("Hot")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Use chained comparison", "20 is between 15 and 25", "Python allows 15 <= temp <= 25"],
    expectedOutput: "Warm",
  },

  // Part 5: Common Traps & Nested Logic (5 questions)
  {
    id: "cond-16",
    title: "The Equality Trap (= vs ==)",
    description:
      "A common mistake is using = inside an if. Write the correct way to check if x equals 10. x = 10. if x == 10: print(\"Correct\").",
    starterCode: `x = 10
# Use == not = for comparison
`,
    solutionCode: `x = 10
if x == 10:
    print("Correct")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["= is assignment", "== is comparison", "if x = 10 would be an error"],
    expectedOutput: "Correct",
  },
  {
    id: "cond-17",
    title: "Nested if Statements",
    description:
      "You can put an if inside an if. x = 41. First check if x > 10. Inside that, check if x > 20. Print \"Above 20\" if both are true.",
    starterCode: `x = 41
# Write nested if
`,
    solutionCode: `x = 41
if x > 10:
    if x > 20:
        print("Above 20")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["Inner if is indented more", "Both conditions must be True", "41 > 10 and 41 > 20"],
    expectedOutput: "Above 20",
  },
  {
    id: "cond-18",
    title: "Checking for 'Not Equal'",
    description:
      "Write code using !=. If password is NOT equal to \"1234\", print \"Access Denied\". Assume password = \"0000\".",
    starterCode: `password = "0000"
# Check if not equal to "1234"
`,
    solutionCode: `password = "0000"
if password != "1234":
    print("Access Denied")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["!= means not equal", "\"0000\" != \"1234\" is True", "Strings are compared character by character"],
    expectedOutput: "Access Denied",
  },
  {
    id: "cond-19",
    title: "User Input Handling",
    description:
      "input() returns a string. To check if a number is positive, you must cast it. Write code that takes val = \"-5\" (as string), converts to int, and checks if val < 0 to print \"Negative\".",
    starterCode: `val = "-5"
# Convert to int and check
`,
    solutionCode: `val = "-5"
num = int(val)
if num < 0:
    print("Negative")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["int() converts string to integer", "-5 < 0 is True", "Always convert input for math"],
    expectedOutput: "Negative",
  },
  {
    id: "cond-20",
    title: "Match Case with String",
    description:
      "Match case works with Strings too. Write a match for grade = \"B\". Case \"A\" prints \"Excellent\", Case \"B\" prints \"Good\".",
    starterCode: `grade = "B"
# Write match-case with strings
`,
    solutionCode: `grade = "B"
match grade:
    case "A":
        print("Excellent")
    case "B":
        print("Good")`,
    topicTag: "conditionals",
    level: "easy",
    hints: ["match works with any type", "Strings must be in quotes", "\"B\" matches case \"B\""],
    expectedOutput: "Good",
  },

  // ==================== LOOPS CHALLENGES ====================
  // Part 1: The for Loop Basics (4 questions)
  {
    id: "loop-1",
    title: "Iterating a List",
    description:
      "Create a list fruits = [\"Apple\", \"Banana\", \"Cherry\"]. Write a for loop that prints each fruit name on a new line.",
    starterCode: `fruits = ["Apple", "Banana", "Cherry"]
# Write a for loop to print each fruit
`,
    solutionCode: `fruits = ["Apple", "Banana", "Cherry"]
for x in fruits:
    print(x)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Use for x in list_name:", "x takes each value in the list", "Indentation matters"],
    expectedOutput: "Apple\nBanana\nCherry",
  },
  {
    id: "loop-2",
    title: "The range() Function (0 to N-1)",
    description:
      "The range(x) function generates numbers starting from 0 up to (but not including) x. Write a loop for x in range(3) and print x.",
    starterCode: `# Write a for loop using range(3)
`,
    solutionCode: `for x in range(3):
    print(x)`,
    topicTag: "loops",
    level: "easy",
    hints: ["range(3) gives 0, 1, 2", "Does not include 3", "Starts from 0 by default"],
    expectedOutput: "0\n1\n2",
  },
  {
    id: "loop-3",
    title: "Range with Start and Stop",
    description:
      "To print numbers from 1 to 5 (inclusive), you must set the stop value to 6. Write a loop using range(1, 6) and print the numbers.",
    starterCode: `# Print numbers 1 to 5 using range(1, 6)
`,
    solutionCode: `for i in range(1, 6):
    print(i)`,
    topicTag: "loops",
    level: "easy",
    hints: ["range(start, stop)", "stop is exclusive", "range(1, 6) gives 1,2,3,4,5"],
    expectedOutput: "1\n2\n3\n4\n5",
  },
  {
    id: "loop-4",
    title: "Looping Through a String",
    description:
      "Strings are sequences too. Write a loop that prints every letter in the word \"Python\" individually.",
    starterCode: `word = "Python"
# Print each letter
`,
    solutionCode: `word = "Python"
for letter in word:
    print(letter)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Strings are iterable", "for letter in string:", "Each character is printed"],
    expectedOutput: "P\ny\nt\nh\no\nn",
  },

  // Part 2: The while Loop (2 questions)
  {
    id: "loop-5",
    title: "Basic while Loop",
    description:
      "A while loop runs as long as a condition is True. Set i = 1. Write a loop that prints i as long as i < 4. Crucial: Don't forget to increment i inside the loop.",
    starterCode: `i = 1
# Write while loop
`,
    solutionCode: `i = 1
while i < 4:
    print(i)
    i += 1`,
    topicTag: "loops",
    level: "easy",
    hints: ["while condition:", "Increment i to avoid infinite loop", "i += 1 is same as i = i + 1"],
    expectedOutput: "1\n2\n3",
  },
  {
    id: "loop-6",
    title: "The \"Infinite Loop\" Trap",
    description:
      "If you forget to increment the counter, the loop runs forever. Write a correct loop that prints \"Run\" 3 times using a counter count = 0 and stops when count == 3.",
    starterCode: `count = 0
# Write while loop to print "Run" 3 times
`,
    solutionCode: `count = 0
while count < 3:
    print("Run")
    count += 1`,
    topicTag: "loops",
    level: "easy",
    hints: ["Start count at 0", "Loop while count < 3", "Always increment count"],
    expectedOutput: "Run\nRun\nRun",
  },

  // Part 3: Control Flow (break & continue) (4 questions)
  {
    id: "loop-7",
    title: "The break Statement",
    description:
      "break stops the loop immediately. Loop through [\"A\", \"B\", \"C\"]. If the item is \"B\", break. Print the items before the break occurs.",
    starterCode: `letters = ["A", "B", "C"]
# Loop and break when "B" is found
`,
    solutionCode: `letters = ["A", "B", "C"]
for x in letters:
    if x == "B":
        break
    print(x)`,
    topicTag: "loops",
    level: "easy",
    hints: ["break exits the loop", "Check condition before print", "Only 'A' prints"],
    expectedOutput: "A",
  },
  {
    id: "loop-8",
    title: "break in while loops",
    description:
      "Set i = 1. Run a while i < 6 loop. If i == 3, break the loop. Print i and increment it at every step.",
    starterCode: `i = 1
# Write while loop with break at i == 3
`,
    solutionCode: `i = 1
while i < 6:
    if i == 3:
        break
    print(i)
    i += 1`,
    topicTag: "loops",
    level: "easy",
    hints: ["Check for break before print", "Only 1 and 2 are printed", "Loop stops at i == 3"],
    expectedOutput: "1\n2",
  },
  {
    id: "loop-9",
    title: "The continue Statement",
    description:
      "continue skips the current iteration and jumps to the next one. Loop through numbers 1 to 5. If the number is 3, continue (skip it). Print the others.",
    starterCode: `# Loop 1 to 5, skip 3 using continue
`,
    solutionCode: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,
    topicTag: "loops",
    level: "easy",
    hints: ["continue skips to next iteration", "3 is skipped", "1,2,4,5 are printed"],
    expectedOutput: "1\n2\n4\n5",
  },
  {
    id: "loop-10",
    title: "Skipping Specific Items in a List",
    description:
      "Given fruits = [\"apple\", \"banana\", \"cherry\"]. Loop through them. If the fruit is \"banana\", skip it using continue. Print the rest.",
    starterCode: `fruits = ["apple", "banana", "cherry"]
# Skip "banana" using continue
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Check if x == 'banana'", "continue skips that iteration", "apple and cherry print"],
    expectedOutput: "apple\ncherry",
  },

  // Part 4: Mathematical Logic in Loops (5 questions)
  {
    id: "loop-11",
    title: "The Accumulator (Summing Numbers)",
    description:
      "This is a classic exam pattern. Create a variable total = 0. Use a for loop to add numbers from 1 to 5 to total. Print the final total.",
    starterCode: `total = 0
# Sum numbers 1 to 5
`,
    solutionCode: `total = 0
for i in range(1, 6):
    total = total + i
print(total)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Start total at 0", "Add each i to total", "1+2+3+4+5 = 15"],
    expectedOutput: "15",
  },
  {
    id: "loop-12",
    title: "Calculating Factorial",
    description:
      "To find the factorial of 5 (1 × 2 × 3 × 4 × 5), use a loop. Start with fact = 1 and multiply it by numbers 1 to 5.",
    starterCode: `fact = 1
# Calculate factorial of 5
`,
    solutionCode: `fact = 1
for i in range(1, 6):
    fact = fact * i
print(fact)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Start fact at 1 (not 0)", "Multiply each i", "5! = 120"],
    expectedOutput: "120",
  },
  {
    id: "loop-13",
    title: "Range with Step (Even Numbers)",
    description:
      "range(start, stop, step) can skip numbers. Write a loop range(2, 11, 2) to print even numbers from 2 to 10.",
    starterCode: `# Print even numbers 2 to 10 using step
`,
    solutionCode: `for i in range(2, 11, 2):
    print(i)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Step of 2 skips odd numbers", "range(2, 11, 2)", "Prints 2,4,6,8,10"],
    expectedOutput: "2\n4\n6\n8\n10",
  },
  {
    id: "loop-14",
    title: "Reverse Countdown",
    description:
      "Use a negative step in range to count down. Write a loop range(5, 0, -1) to print 5 down to 1.",
    starterCode: `# Countdown from 5 to 1
`,
    solutionCode: `for i in range(5, 0, -1):
    print(i)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Negative step counts down", "Start at 5, stop before 0", "Step -1 decrements"],
    expectedOutput: "5\n4\n3\n2\n1",
  },
  {
    id: "loop-15",
    title: "Finding the Maximum (Manual Logic)",
    description:
      "Given nums = [10, 50, 20]. Find the largest number without using max(). Set largest = 0, loop through the list, and update largest if the current number is bigger.",
    starterCode: `nums = [10, 50, 20]
largest = 0
# Find the largest number
`,
    solutionCode: `nums = [10, 50, 20]
largest = 0
for x in nums:
    if x > largest:
        largest = x
print(largest)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Compare each x with largest", "Update if x is bigger", "Result is 50"],
    expectedOutput: "50",
  },

  // Part 5: Nested Loops & Advanced Logic (5 questions)
  {
    id: "loop-16",
    title: "Nested Loops (Row & Column)",
    description:
      "A \"loop inside a loop\". Write a code with an outer loop for i in range(2) and an inner loop for j in range(2). Print i and j together.",
    starterCode: `# Write nested loops
`,
    solutionCode: `for i in range(2):
    for j in range(2):
        print(i, j)`,
    topicTag: "loops",
    level: "easy",
    hints: ["Outer loop runs first", "Inner loop completes for each outer", "4 combinations total"],
    expectedOutput: "0 0\n0 1\n1 0\n1 1",
  },
  {
    id: "loop-17",
    title: "List Access by Index",
    description:
      "Sometimes you need the index and the value. Use range(len(cars)) to loop through cars = [\"Ford\", \"BMW\"] using their index numbers 0 and 1.",
    starterCode: `cars = ["Ford", "BMW"]
# Loop using index
`,
    solutionCode: `cars = ["Ford", "BMW"]
for i in range(len(cars)):
    print(i, cars[i])`,
    topicTag: "loops",
    level: "easy",
    hints: ["len(cars) gives 2", "range(2) gives 0, 1", "Access cars[i]"],
    expectedOutput: "0 Ford\n1 BMW",
  },
  {
    id: "loop-18",
    title: "Iterating Dictionary Keys",
    description:
      "Loops work on dictionaries too. Given data = {\"name\": \"A\", \"age\": 20}. Write a loop for k in data: to print the keys.",
    starterCode: `data = {"name": "A", "age": 20}
# Print dictionary keys
`,
    solutionCode: `data = {"name": "A", "age": 20}
for k in data:
    print(k)`,
    topicTag: "loops",
    level: "easy",
    hints: ["for k in dict iterates keys", "Keys are 'name' and 'age'", "Values need data[k]"],
    expectedOutput: "name\nage",
  },
  {
    id: "loop-19",
    title: "Conditional Print Logic",
    description:
      "Loop through numbers 1 to 10. Print the number ONLY if it is greater than 7.",
    starterCode: `# Print numbers > 7 from 1 to 10
`,
    solutionCode: `for i in range(1, 11):
    if i > 7:
        print(i)`,
    topicTag: "loops",
    level: "easy",
    hints: ["range(1, 11) gives 1-10", "Only print if i > 7", "8, 9, 10 are printed"],
    expectedOutput: "8\n9\n10",
  },
  {
    id: "loop-20",
    title: "The \"Square\" of Numbers",
    description:
      "Loop through numbers 1 to 3. Inside the loop, calculate the square (x²) and print it.",
    starterCode: `# Print squares of 1, 2, 3
`,
    solutionCode: `for x in range(1, 4):
    print(x ** 2)`,
    topicTag: "loops",
    level: "easy",
    hints: ["** is exponent operator", "1² = 1, 2² = 4, 3² = 9", "range(1, 4) gives 1,2,3"],
    expectedOutput: "1\n4\n9",
  },

  // ==================== FUNCTIONS CHALLENGES ====================
  // Part 1: Defining and Calling Functions (4 questions)
  {
    id: "func-1",
    title: "The def Keyword",
    description:
      "Functions must be defined before they are used. Write a simple function named say_hello() that prints \"Hello Python\". Note: Define only, don't call.",
    starterCode: `# Define the function say_hello()
`,
    solutionCode: `def say_hello():
    print("Hello Python")`,
    topicTag: "functions",
    level: "easy",
    hints: ["Use def keyword", "Function name followed by ()", "Indent the body"],
    expectedOutput: "",
  },
  {
    id: "func-2",
    title: "Calling a Function",
    description:
      "Defining a function does nothing until you \"call\" it. Write code to define greet() which prints \"Hi\", and then call it immediately.",
    starterCode: `# Define greet() and call it
`,
    solutionCode: `def greet():
    print("Hi")

greet()`,
    topicTag: "functions",
    level: "easy",
    hints: ["Define with def greet():", "Call by writing greet()", "Function runs when called"],
    expectedOutput: "Hi",
  },
  {
    id: "func-3",
    title: "Single Argument",
    description:
      "Functions can accept data (arguments). Write a function welcome(name) that takes a name and prints \"Welcome [name]\". Call it with \"Amal\".",
    starterCode: `# Define welcome(name) and call it
`,
    solutionCode: `def welcome(name):
    print("Welcome " + name)

welcome("Amal")`,
    topicTag: "functions",
    level: "easy",
    hints: ["Parameter goes inside ()", "Use + to concatenate", "Pass 'Amal' as argument"],
    expectedOutput: "Welcome Amal",
  },
  {
    id: "func-4",
    title: "Multiple Arguments",
    description:
      "You can pass more than one piece of data. Write a function add_nums(a, b) that adds two numbers and prints the result. Call it with 5 and 10.",
    starterCode: `# Define add_nums(a, b) and call it
`,
    solutionCode: `def add_nums(a, b):
    print(a + b)

add_nums(5, 10)`,
    topicTag: "functions",
    level: "easy",
    hints: ["Separate parameters with comma", "print(a + b) inside function", "Call with two numbers"],
    expectedOutput: "15",
  },

  // Part 2: Return Values (4 questions)
  {
    id: "func-5",
    title: "The return Statement",
    description:
      "Usually, functions send data back instead of printing. Write a function get_five() that simply returns the number 5. Print the result of the function call.",
    starterCode: `# Define get_five() with return
`,
    solutionCode: `def get_five():
    return 5

print(get_five())`,
    topicTag: "functions",
    level: "easy",
    hints: ["return sends value back", "print() the function call", "No print inside function"],
    expectedOutput: "5",
  },
  {
    id: "func-6",
    title: "Calculating and Returning",
    description:
      "Write a function square(x) that returns x * x. Call it with 4 and print the result.",
    starterCode: `# Define square(x) with return
`,
    solutionCode: `def square(x):
    return x * x

print(square(4))`,
    topicTag: "functions",
    level: "easy",
    hints: ["return x * x", "4 * 4 = 16", "print the function call"],
    expectedOutput: "16",
  },
  {
    id: "func-7",
    title: "Saving the Return Value",
    description:
      "You can store the returned value in a variable. Define square(x), call square(3), save the result in a variable named result, and then print result.",
    starterCode: `# Define square, save result, print it
`,
    solutionCode: `def square(x):
    return x * x

result = square(3)
print(result)`,
    topicTag: "functions",
    level: "easy",
    hints: ["result = square(3)", "Store returned value", "Then print result"],
    expectedOutput: "9",
  },
  {
    id: "func-8",
    title: "Return Product (Exercise)",
    description:
      "Write a function that takes two numbers, x and y, and returns their product (multiplication). Print the result of multiplying 6 by 7.",
    starterCode: `# Define multiply(x, y) and test it
`,
    solutionCode: `def multiply(x, y):
    return x * y

print(multiply(6, 7))`,
    topicTag: "functions",
    level: "easy",
    hints: ["return x * y", "6 * 7 = 42", "Print the function call"],
    expectedOutput: "42",
  },

  // Part 3: Default Parameters (2 questions)
  {
    id: "func-9",
    title: "Default Value Syntax",
    description:
      "Write a function my_country(country = \"Sri Lanka\"). Inside, print \"I am from \" + country. Call the function without any arguments.",
    starterCode: `# Define my_country with default value
`,
    solutionCode: `def my_country(country = "Sri Lanka"):
    print("I am from " + country)

my_country()`,
    topicTag: "functions",
    level: "easy",
    hints: ["Default: country = 'Sri Lanka'", "Call with empty ()", "Uses default value"],
    expectedOutput: "I am from Sri Lanka",
  },
  {
    id: "func-10",
    title: "Overriding Defaults",
    description:
      "Using the same function my_country(country = \"Sri Lanka\"), call it with the argument \"Japan\". This should replace the default value.",
    starterCode: `# Define my_country and override default
`,
    solutionCode: `def my_country(country = "Sri Lanka"):
    print("I am from " + country)

my_country("Japan")`,
    topicTag: "functions",
    level: "easy",
    hints: ["Pass 'Japan' as argument", "Overrides default", "Prints Japan instead"],
    expectedOutput: "I am from Japan",
  },

  // Part 4: Lists and Logic inside Functions (4 questions)
  {
    id: "func-11",
    title: "Passing a List",
    description:
      "You can pass a list into a function. Write print_list(items) that takes a list and uses a for loop to print each item. Call it with [\"A\", \"B\"].",
    starterCode: `# Define print_list(items)
`,
    solutionCode: `def print_list(items):
    for x in items:
        print(x)

print_list(["A", "B"])`,
    topicTag: "functions",
    level: "easy",
    hints: ["for x in items:", "Print x in loop", "Pass list as argument"],
    expectedOutput: "A\nB",
  },
  {
    id: "func-12",
    title: "Sum of List (Exercise)",
    description:
      "Write a function sum_list(numbers) that calculates the total of a list of numbers and returns it. Use a loop and a total variable. Test with [10, 20, 30].",
    starterCode: `# Define sum_list(numbers)
`,
    solutionCode: `def sum_list(numbers):
    total = 0
    for x in numbers:
        total = total + x
    return total

print(sum_list([10, 20, 30]))`,
    topicTag: "functions",
    level: "easy",
    hints: ["Start total = 0", "Add each x to total", "Return total at end"],
    expectedOutput: "60",
  },
  {
    id: "func-13",
    title: "Find Maximum (Exercise)",
    description:
      "Write a function find_max(nums) that returns the largest number in a list [5, 1, 10] without using the built-in max() function. Use a loop and if.",
    starterCode: `# Define find_max(nums)
`,
    solutionCode: `def find_max(nums):
    largest = nums[0]
    for x in nums:
        if x > largest:
            largest = x
    return largest

print(find_max([5, 1, 10]))`,
    topicTag: "functions",
    level: "easy",
    hints: ["Start with nums[0]", "Update if x > largest", "Return largest"],
    expectedOutput: "10",
  },
  {
    id: "func-14",
    title: "Extract Even Numbers (Exercise)",
    description:
      "Write a function get_evens(nums) that takes a list [1, 2, 3, 4, 5] and prints only the even numbers.",
    starterCode: `# Define get_evens(nums)
`,
    solutionCode: `def get_evens(nums):
    for x in nums:
        if x % 2 == 0:
            print(x)

get_evens([1, 2, 3, 4, 5])`,
    topicTag: "functions",
    level: "easy",
    hints: ["x % 2 == 0 checks even", "Print inside if", "Loop through all nums"],
    expectedOutput: "2\n4",
  },

  // Part 5: Mathematical Logic & Exercises (6 questions)
  {
    id: "func-15",
    title: "Check Even or Odd",
    description:
      "Write a function check_num(n). If n is even, return \"Even\". If n is odd, return \"Odd\". Test with the number 7.",
    starterCode: `# Define check_num(n)
`,
    solutionCode: `def check_num(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_num(7))`,
    topicTag: "functions",
    level: "easy",
    hints: ["n % 2 == 0 means even", "Use if-else", "7 is odd"],
    expectedOutput: "Odd",
  },
  {
    id: "func-16",
    title: "Factorial Function",
    description:
      "Write a function to calculate the factorial of a number (e.g., 5). Factorial of 5 is 1*2*3*4*5. Return the result.",
    starterCode: `# Define factorial(n)
`,
    solutionCode: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result

print(factorial(5))`,
    topicTag: "functions",
    level: "easy",
    hints: ["Start result = 1", "Multiply by each i", "5! = 120"],
    expectedOutput: "120",
  },
  {
    id: "func-17",
    title: "Area of a Circle",
    description:
      "Write a function circle_area(radius) that calculates area using formula πr². Use 3.14 for π. Return the area. Test with radius 10.",
    starterCode: `# Define circle_area(radius)
`,
    solutionCode: `def circle_area(radius):
    pi = 3.14
    area = pi * (radius ** 2)
    return area

print(circle_area(10))`,
    topicTag: "functions",
    level: "easy",
    hints: ["pi = 3.14", "area = pi * radius²", "** is power operator"],
    expectedOutput: "314.0",
  },
  {
    id: "func-18",
    title: "Perimeter of a Circle",
    description:
      "Write a function circle_perimeter(radius) using formula 2πr. Return the result. Test with radius 10.",
    starterCode: `# Define circle_perimeter(radius)
`,
    solutionCode: `def circle_perimeter(radius):
    pi = 3.14
    return 2 * pi * radius

print(circle_perimeter(10))`,
    topicTag: "functions",
    level: "easy",
    hints: ["2 * pi * radius", "pi = 3.14", "Result is 62.8"],
    expectedOutput: "62.800000000000004",
  },
  {
    id: "func-19",
    title: "Age Conversion (Years to Days)",
    description:
      "Write a function age_in_days(years) that takes an age in years and returns the age in days (multiply by 365). Test with 20 years.",
    starterCode: `# Define age_in_days(years)
`,
    solutionCode: `def age_in_days(years):
    return years * 365

print(age_in_days(20))`,
    topicTag: "functions",
    level: "easy",
    hints: ["years * 365", "20 * 365 = 7300", "Return the calculation"],
    expectedOutput: "7300",
  },
  {
    id: "func-20",
    title: "Count Vowels",
    description:
      "Write a function count_vowels(text) that counts how many times \"a\", \"e\", \"i\", \"o\", or \"u\" appear in the string \"hello\".",
    starterCode: `# Define count_vowels(text)
`,
    solutionCode: `def count_vowels(text):
    count = 0
    vowels = "aeiou"
    for char in text:
        if char in vowels:
            count += 1
    return count

print(count_vowels("hello"))`,
    topicTag: "functions",
    level: "easy",
    hints: ["vowels = 'aeiou'", "Check if char in vowels", "'hello' has e and o = 2"],
    expectedOutput: "2",
  },

  // ==================== LISTS & ARRAYS CHALLENGES ====================
  // Part 1: List Basics (Creation & Access) (4 questions)
  {
    id: "la-1",
    title: "Creating a List",
    description:
      "Create a list named cars with three items: \"Ford\", \"Volvo\", \"BMW\". Print the entire list.",
    starterCode: `# Create a list named cars
`,
    solutionCode: `cars = ["Ford", "Volvo", "BMW"]
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["Use square brackets []", "Items separated by commas", "Strings in quotes"],
    expectedOutput: "['Ford', 'Volvo', 'BMW']",
  },
  {
    id: "la-2",
    title: "Accessing by Index",
    description:
      "Lists start at index 0. Print the second item in cars = [\"Ford\", \"Volvo\", \"BMW\"].",
    starterCode: `cars = ["Ford", "Volvo", "BMW"]
# Print the second item
`,
    solutionCode: `cars = ["Ford", "Volvo", "BMW"]
print(cars[1])`,
    topicTag: "arrays",
    level: "easy",
    hints: ["Index starts at 0", "Second item is index 1", "Use cars[1]"],
    expectedOutput: "Volvo",
  },
  {
    id: "la-3",
    title: "Negative Indexing",
    description:
      "Negative numbers count from the end. Print the last item in fruits = [\"Apple\", \"Banana\", \"Cherry\"] using index -1.",
    starterCode: `fruits = ["Apple", "Banana", "Cherry"]
# Print last item using -1
`,
    solutionCode: `fruits = ["Apple", "Banana", "Cherry"]
print(fruits[-1])`,
    topicTag: "arrays",
    level: "easy",
    hints: ["-1 is last item", "-2 is second to last", "No need to know length"],
    expectedOutput: "Cherry",
  },
  {
    id: "la-4",
    title: "Changing Items",
    description:
      "Lists are mutable (changeable). Change \"Volvo\" to \"Toyota\" in cars = [\"Ford\", \"Volvo\", \"BMW\"] using index assignment. Print the list.",
    starterCode: `cars = ["Ford", "Volvo", "BMW"]
# Change Volvo to Toyota
`,
    solutionCode: `cars = ["Ford", "Volvo", "BMW"]
cars[1] = "Toyota"
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["Volvo is at index 1", "cars[1] = 'Toyota'", "Lists can be modified"],
    expectedOutput: "['Ford', 'Toyota', 'BMW']",
  },

  // Part 2: Adding & Removing Elements (4 questions)
  {
    id: "la-5",
    title: "Append (Add to End)",
    description:
      "Use .append() to add \"Honda\" to the end of cars = [\"Ford\", \"BMW\"]. Print the list.",
    starterCode: `cars = ["Ford", "BMW"]
# Append Honda
`,
    solutionCode: `cars = ["Ford", "BMW"]
cars.append("Honda")
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["append() adds to end", "cars.append('Honda')", "No index needed"],
    expectedOutput: "['Ford', 'BMW', 'Honda']",
  },
  {
    id: "la-6",
    title: "Insert (Add to Specific Spot)",
    description:
      "Use .insert() to add \"Audi\" at index 1 in cars = [\"Ford\", \"BMW\"]. Print the list.",
    starterCode: `cars = ["Ford", "BMW"]
# Insert Audi at index 1
`,
    solutionCode: `cars = ["Ford", "BMW"]
cars.insert(1, "Audi")
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["insert(index, value)", "index 1 is second position", "Shifts other items"],
    expectedOutput: "['Ford', 'Audi', 'BMW']",
  },
  {
    id: "la-7",
    title: "Remove by Value",
    description:
      "Use .remove() to delete \"Volvo\" from cars = [\"Ford\", \"Volvo\", \"BMW\"]. Print the list.",
    starterCode: `cars = ["Ford", "Volvo", "BMW"]
# Remove Volvo
`,
    solutionCode: `cars = ["Ford", "Volvo", "BMW"]
cars.remove("Volvo")
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["remove() takes the value", "Not the index", "Removes first occurrence"],
    expectedOutput: "['Ford', 'BMW']",
  },
  {
    id: "la-8",
    title: "Pop (Remove by Index)",
    description:
      "Use .pop() to remove the item at index 1 from cars = [\"Ford\", \"Volvo\", \"BMW\"]. Print the list.",
    starterCode: `cars = ["Ford", "Volvo", "BMW"]
# Pop item at index 1
`,
    solutionCode: `cars = ["Ford", "Volvo", "BMW"]
cars.pop(1)
print(cars)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["pop(index) removes by position", "Index 1 is Volvo", "Returns removed item"],
    expectedOutput: "['Ford', 'BMW']",
  },

  // Part 3: List Methods & Logic (7 questions)
  {
    id: "la-9",
    title: "List Length",
    description:
      "Use len() to find out how many items are in data = [10, 20, 30, 40].",
    starterCode: `data = [10, 20, 30, 40]
# Print the length
`,
    solutionCode: `data = [10, 20, 30, 40]
print(len(data))`,
    topicTag: "arrays",
    level: "easy",
    hints: ["len() returns count", "4 items in list", "Works on any sequence"],
    expectedOutput: "4",
  },
  {
    id: "la-10",
    title: "Count Occurrences",
    description:
      "Use .count() to find how many times \"BMW\" appears in [\"BMW\", \"Ford\", \"BMW\"].",
    starterCode: `cars = ["BMW", "Ford", "BMW"]
# Count BMW
`,
    solutionCode: `cars = ["BMW", "Ford", "BMW"]
print(cars.count("BMW"))`,
    topicTag: "arrays",
    level: "easy",
    hints: ["count() counts occurrences", "BMW appears 2 times", "Case sensitive"],
    expectedOutput: "2",
  },
  {
    id: "la-11",
    title: "Sorting a List",
    description:
      "Use .sort() to arrange nums = [5, 1, 8, 3] from smallest to largest. Print the result.",
    starterCode: `nums = [5, 1, 8, 3]
# Sort the list
`,
    solutionCode: `nums = [5, 1, 8, 3]
nums.sort()
print(nums)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["sort() modifies in place", "Ascending by default", "No return value"],
    expectedOutput: "[1, 3, 5, 8]",
  },
  {
    id: "la-12",
    title: "Reversing a List",
    description:
      "Use .reverse() to flip the order of nums = [1, 2, 3]. It should become [3, 2, 1].",
    starterCode: `nums = [1, 2, 3]
# Reverse the list
`,
    solutionCode: `nums = [1, 2, 3]
nums.reverse()
print(nums)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["reverse() modifies in place", "Flips the order", "[1,2,3] becomes [3,2,1]"],
    expectedOutput: "[3, 2, 1]",
  },
  {
    id: "la-13",
    title: "Clearing a List",
    description:
      "Use .clear() to remove all items from data = [1, 2, 3]. Print the result.",
    starterCode: `data = [1, 2, 3]
# Clear the list
`,
    solutionCode: `data = [1, 2, 3]
data.clear()
print(data)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["clear() empties the list", "Result is []", "List still exists"],
    expectedOutput: "[]",
  },
  {
    id: "la-14",
    title: "Slicing a Range",
    description:
      "Print a subset of a list. Given letters = [\"a\", \"b\", \"c\", \"d\", \"e\"]. Print ['b', 'c', 'd'] using slicing [start:end]. (Remember end is excluded).",
    starterCode: `letters = ["a", "b", "c", "d", "e"]
# Print slice b, c, d
`,
    solutionCode: `letters = ["a", "b", "c", "d", "e"]
print(letters[1:4])`,
    topicTag: "arrays",
    level: "easy",
    hints: ["[start:end] excludes end", "Index 1 is 'b'", "Index 4 excluded, stops at 3"],
    expectedOutput: "['b', 'c', 'd']",
  },
  {
    id: "la-15",
    title: "Check Item Existence",
    description:
      "Write an if statement to check if \"Apple\" is in fruits = [\"Apple\", \"Banana\"]. If yes, print \"Found\".",
    starterCode: `fruits = ["Apple", "Banana"]
# Check if Apple is in list
`,
    solutionCode: `fruits = ["Apple", "Banana"]
if "Apple" in fruits:
    print("Found")`,
    topicTag: "arrays",
    level: "easy",
    hints: ["'in' checks membership", "Returns True/False", "Case sensitive"],
    expectedOutput: "Found",
  },

  // Part 4: Python Arrays (Module) (2 questions)
  {
    id: "la-16",
    title: "Creating an Array",
    description:
      "Import the array module. Create an integer array nums using typecode 'i' and values [1, 2, 3]. Print it.",
    starterCode: `# Import array and create integer array
`,
    solutionCode: `import array
nums = array.array('i', [1, 2, 3])
print(nums)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["import array", "typecode 'i' for integers", "array.array(type, values)"],
    expectedOutput: "array('i', [1, 2, 3])",
  },
  {
    id: "la-17",
    title: "Accessing Array Elements",
    description:
      "Access the third element (index 2) of the array nums = array.array('i', [1, 2, 3]).",
    starterCode: `import array
nums = array.array('i', [1, 2, 3])
# Print third element
`,
    solutionCode: `import array
nums = array.array('i', [1, 2, 3])
print(nums[2])`,
    topicTag: "arrays",
    level: "easy",
    hints: ["Same indexing as lists", "Index 2 is third item", "nums[2] = 3"],
    expectedOutput: "3",
  },

  // Part 5: NumPy Arrays (Matrices) (3 questions)
  {
    id: "la-18",
    title: "Creating a 2D Matrix",
    description:
      "Import numpy. Create a 2D matrix with 2 rows and 3 columns: [[1, 2, 3], [4, 5, 6]]. Print it.",
    starterCode: `# Import numpy and create 2D matrix
`,
    solutionCode: `import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix)`,
    topicTag: "arrays",
    level: "easy",
    hints: ["import numpy as np", "np.array() creates array", "Nested lists for 2D"],
    expectedOutput: "[[1 2 3]\n [4 5 6]]",
  },
  {
    id: "la-19",
    title: "Checking Shape",
    description:
      "Use the .shape property to find the dimensions of the matrix [[1, 2, 3], [4, 5, 6]]. It should return (2, 3).",
    starterCode: `import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6]])
# Print shape
`,
    solutionCode: `import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)`,
    topicTag: "arrays",
    level: "easy",
    hints: [".shape is a property", "Returns (rows, cols)", "2 rows, 3 columns"],
    expectedOutput: "(2, 3)",
  },
  {
    id: "la-20",
    title: "Slicing 2D Arrays",
    description:
      "Access the element in the 1st row and 2nd column (index [0, 1]) of the matrix [[1, 2, 3], [4, 5, 6]].",
    starterCode: `import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6]])
# Access element at row 0, col 1
`,
    solutionCode: `import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix[0, 1])`,
    topicTag: "arrays",
    level: "easy",
    hints: ["matrix[row, col]", "Row 0, Col 1 = 2", "NumPy uses comma notation"],
    expectedOutput: "2",
  },
];