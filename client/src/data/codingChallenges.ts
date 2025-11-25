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
  // ==================== OPERATORS CHALLENGES ====================
  {
    id: "op-1",
    title: "Basic arithmetic operators",
    description:
      "Create two variables x = 10 and y = 3. Print the result of x+y, x-y, x*y, x/y, x%y, and x**y using arithmetic operators.",
    starterCode: `x = 10
y = 3
# Write your code here
`,
    solutionCode: `x = 10
y = 3

print("x + y =", x + y)
print("x - y =", x - y)
print("x * y =", x * y)
print("x / y =", x / y)
print("x % y =", x % y)
print("x ** y =", x ** y)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-2",
    title: "Assignment operator",
    description:
      "Start with x = 5. Use x += 3 to add 3. Then print x. After that subtract 2 using x -= 2 and print x.",
    starterCode: `x = 5
# Apply assignment operators here
`,
    solutionCode: `x = 5
x += 3  # x = x + 3
print(x)
x -= 2  # x = x - 2
print(x)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-3",
    title: "Comparison operators",
    description:
      "Create x = 15 and y = 20. Print the result of x == y, x != y, x > y, x < y, x >= y, x <= y.",
    starterCode: `x = 15
y = 20
`,
    solutionCode: `x = 15
y = 20

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-4",
    title: "Logical operators",
    description:
      "Set a = True and b = False. Use logical operators and, or, not to print results of a and b, a or b, and not a.",
    starterCode: `a = True
b = False
`,
    solutionCode: `a = True
b = False

print(a and b)
print(a or b)
print(not a)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-5",
    title: "Identity operators",
    description:
      'Create a list a = [1,2,3] and b = [1,2,3]. Also set c = a. Print a is b, a is c, and a == b.',
    starterCode: `a = [1, 2, 3]
b = [1, 2, 3]
c = a
`,
    solutionCode: `a = [1, 2, 3]
b = [1, 2, 3]
c = a

print("a is b:", a is b)
print("a is c:", a is c)
print("a == b:", a == b)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-6",
    title: "Membership operator",
    description:
      'Create a list fruits = ["apple", "banana", "mango"]. Check if "banana" is in the list and if "grapes" is not in the list.',
    starterCode: `fruits = ["apple", "banana", "mango"]
`,
    solutionCode: `fruits = ["apple", "banana", "mango"]

print("banana" in fruits)
print("grapes" not in fruits)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-7",
    title: "Chained assignment",
    description:
      "Write code to assign 10 to x, y, and z in one line. Then print all values.",
    starterCode: `# Write chained assignment here
`,
    solutionCode: `x = y = z = 10
print(x, y, z)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-8",
    title: "Multiple operations in one line",
    description:
      "Create x = 5 and y = 2. Print (x + y) * 3 using operators inside parentheses.",
    starterCode: `x = 5
y = 2
`,
    solutionCode: `x = 5
y = 2

print((x + y) * 3)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-9",
    title: "Floor division",
    description:
      "Create x = 17 and y = 3. Print x // y. Explain that // removes the decimal part.",
    starterCode: `x = 17
y = 3
`,
    solutionCode: `x = 17
y = 3

print(x // y)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-10",
    title: "Check even using modulus",
    description:
      "Create x = 42. Print x % 2 and explain that if the result is 0, the number is even.",
    starterCode: `x = 42
`,
    solutionCode: `x = 42
print(x % 2)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-11",
    title: "Operator precedence",
    description:
      "Write print(5 + 2 * 3) and print((5 + 2) * 3). Observe different outputs due to precedence.",
    starterCode: `# Write both prints here
`,
    solutionCode: `print(5 + 2 * 3)      # multiplication first
print((5 + 2) * 3)    # parentheses first`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-12",
    title: "Use += to build a string",
    description:
      "Start with msg = 'Hello'. Use msg += ' World' to add text. Then print msg.",
    starterCode: `msg = "Hello"
`,
    solutionCode: `msg = "Hello"
msg += " World"
print(msg)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-13",
    title: "Logical operator with numbers",
    description:
      "Set x = 5 and y = 10. Print (x < 10 and y > 5) and (x > 10 or y > 5).",
    starterCode: `x = 5
y = 10
`,
    solutionCode: `x = 5
y = 10

print(x < 10 and y > 5)
print(x > 10 or y > 5)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-14",
    title: "Testing identity with integers",
    description:
      "Create x = 5, y = 5. Print x is y and x == y. Show that small integers may share memory.",
    starterCode: `x = 5
y = 5
`,
    solutionCode: `x = 5
y = 5

print(x is y)
print(x == y)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-15",
    title: "Not operator usage",
    description:
      "Create ok = False. Print not ok. Then set ok = True and print not ok again.",
    starterCode: `ok = False
`,
    solutionCode: `ok = False
print(not ok)
ok = True
print(not ok)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-16",
    title: "Exponent operator",
    description:
      "Create base = 2 and power = 5. Use ** to calculate 2 to the power 5. Print result.",
    starterCode: `base = 2
power = 5
`,
    solutionCode: `base = 2
power = 5

print(base ** power)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-17",
    title: "Combined arithmetic",
    description:
      "Create x = 50, y = 8. Print (x + y) / (x - y).",
    starterCode: `x = 50
y = 8
`,
    solutionCode: `x = 50
y = 8
print((x + y) / (x - y))`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-18",
    title: "Calculate average",
    description:
      "Create marks = 85 and total = 100. Print marks / total * 100 to get percentage.",
    starterCode: `marks = 85
total = 100
`,
    solutionCode: `marks = 85
total = 100

print(marks / total * 100)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-19",
    title: "Swap values using operators",
    description:
      "Create x = 10, y = 20. Use temp = x; x = y; y = temp to swap values. Print x and y.",
    starterCode: `x = 10
y = 20
`,
    solutionCode: `x = 10
y = 20

temp = x
x = y
y = temp

print(x, y)`,
    topicTag: "operators",
    level: "easy",
  },
  {
    id: "op-20",
    title: "Simple calculator",
    description:
      "Create num1 = 8 and num2 = 4. Print sum, subtraction, multiplication, division, modulus, and power using operators.",
    starterCode: `num1 = 8
num2 = 4
`,
    solutionCode: `num1 = 8
num2 = 4

print("Sum:", num1 + num2)
print("Sub:", num1 - num2)
print("Mul:", num1 * num2)
print("Div:", num1 / num2)
print("Mod:", num1 % num2)
print("Pow:", num1 ** num2)`,
    topicTag: "operators",
    level: "easy",
  },

  // ==================== CONDITIONALS CHALLENGES ====================
  {
    id: "cond-1",
    title: "Check greater number",
    description:
      "Create two numbers x = 10 and y = 15. Use an if statement to check which number is greater and print a message.",
    starterCode: `x = 10
y = 15
# Write code using if statement
`,
    solutionCode: `x = 10
y = 15

if x > y:
    print("x is greater")
else:
    print("y is greater")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-2",
    title: "Age category using if-elif-else",
    description:
      "Ask user for their age (use input()). If age is less than 13 print 'Child'. If between 13 and 19 print 'Teenager'. Otherwise print 'Adult'.",
    starterCode: `age = int(input("Enter age: "))
`,
    solutionCode: `age = int(input("Enter age: "))

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-3",
    title: "Find even or odd",
    description:
      "Ask the user for a number. If the number is divisible by 2 print 'Even'. Otherwise print 'Odd'.",
    starterCode: `num = int(input("Enter a number: "))
`,
    solutionCode: `num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-4",
    title: "Check positive, negative or zero",
    description:
      "Create a variable num = -5. Use if-elif-else to check if it is positive, negative, or zero.",
    starterCode: `num = -5
`,
    solutionCode: `num = -5

if num > 0:
    print("Positive")
elif num == 0:
    print("Zero")
else:
    print("Negative")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-5",
    title: "Find largest of three numbers",
    description:
      "Create x = 10, y = 25, z = 15. Use if-elif-else to find the largest number.",
    starterCode: `x = 10
y = 25
z = 15
`,
    solutionCode: `x = 10
y = 25
z = 15

if x > y and x > z:
    print(x)
elif y > z:
    print(y)
else:
    print(z)`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-6",
    title: "Check password",
    description:
      'Create passcode = "python123". Ask user to enter password. If user input matches, print "Access granted". Else, print "Wrong password".',
    starterCode: `passcode = "python123"
user_input = input("Enter password: ")
`,
    solutionCode: `passcode = "python123"
user_input = input("Enter password: ")

if user_input == passcode:
    print("Access granted")
else:
    print("Wrong password")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-7",
    title: "Grade evaluation using if-elif",
    description:
      "Ask the user to enter marks (0–100). If 75 or more print 'A'. If 50 or more print 'B'. Else print 'C'.",
    starterCode: `marks = int(input("Enter marks: "))
`,
    solutionCode: `marks = int(input("Enter marks: "))

if marks >= 75:
    print("A")
elif marks >= 50:
    print("B")
else:
    print("C")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-8",
    title: "Check login",
    description:
      "Create username = 'admin' and password = '1234'. Ask user input for both. If both match print 'Login success'. Otherwise print 'Login failed'.",
    starterCode: `username = "admin"
password = "1234"
user_u = input("Enter username: ")
user_p = input("Enter password: ")
`,
    solutionCode: `username = "admin"
password = "1234"

user_u = input("Enter username: ")
user_p = input("Enter password: ")

if user_u == username and user_p == password:
    print("Login success")
else:
    print("Login failed")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-9",
    title: "Using single line if",
    description:
      "Create x = 50 and print 'High' if x > 30 else print 'Low' in one line.",
    starterCode: `x = 50
`,
    solutionCode: `x = 50
print("High") if x > 30 else print("Low")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-10",
    title: "Check temperature",
    description:
      "Ask user to enter temperature. If less than 15 print 'Cold'. If 15 to 25 print 'Warm'. Else print 'Hot'.",
    starterCode: `temp = int(input("Enter temperature: "))
`,
    solutionCode: `temp = int(input("Enter temperature: "))

if temp < 15:
    print("Cold")
elif temp <= 25:
    print("Warm")
else:
    print("Hot")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-11",
    title: "Match case - weekday",
    description:
      "Create day = 4. Use match case to print the day name (1=Monday, 2=Tuesday, etc).",
    starterCode: `day = 4
`,
    solutionCode: `day = 4

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")
    case _:
        print("Invalid day")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-12",
    title: "Match using groups",
    description:
      "Use match case with day = 4. If 1 to 5 print 'Weekday'. If 6 or 7 print 'Weekend'.",
    starterCode: `day = 4
`,
    solutionCode: `day = 4

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")
    case 6 | 7:
        print("Weekend")
    case _:
        print("Invalid")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-13",
    title: "Check number in range",
    description:
      "Ask user for a number. If number between 1 and 10 (inclusive) print 'Valid'. Otherwise print 'Out of range'.",
    starterCode: `num = int(input("Enter number: "))
`,
    solutionCode: `num = int(input("Enter number: "))

if 1 <= num <= 10:
    print("Valid")
else:
    print("Out of range")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-14",
    title: "Check voter eligibility",
    description:
      "Ask age from user. If age >= 18 print 'Eligible to vote'. Otherwise print 'Not eligible'.",
    starterCode: `age = int(input("Enter age: "))
`,
    solutionCode: `age = int(input("Enter age: "))

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-15",
    title: "Check if string is empty",
    description:
      'Create text = "". Use if to check if text is empty. If empty print "No text". Else print the text.',
    starterCode: `text = ""
`,
    solutionCode: `text = ""

if text == "":
    print("No text")
else:
    print(text)`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-16",
    title: "Check divisible by both numbers",
    description:
      "Ask user for a number. If divisible by both 3 and 5 print 'Divisible by both'. Otherwise print 'No'.",
    starterCode: `num = int(input("Enter number: "))
`,
    solutionCode: `num = int(input("Enter number: "))

if num % 3 == 0 and num % 5 == 0:
    print("Divisible by both")
else:
    print("No")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-17",
    title: "Check uppercase or lowercase",
    description:
      'Create text = "Hello". If text is uppercase print "Upper". Else print "Not upper". Use isupper().',
    starterCode: `text = "Hello"
`,
    solutionCode: `text = "Hello"

if text.isupper():
    print("Upper")
else:
    print("Not upper")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-18",
    title: "Match - check month",
    description:
      'Create month = 4. Use match case. If 4 print "April". For 1-12 assign correct names. If outside print "Invalid".',
    starterCode: `month = 4
`,
    solutionCode: `month = 4

match month:
    case 1:
        print("January")
    case 2:
        print("February")
    case 3:
        print("March")
    case 4:
        print("April")
    case 5:
        print("May")
    case 6:
        print("June")
    case 7:
        print("July")
    case 8:
        print("August")
    case 9:
        print("September")
    case 10:
        print("October")
    case 11:
        print("November")
    case 12:
        print("December")
    case _:
        print("Invalid")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-19",
    title: "Check login with only username",
    description:
      'Create correct_username = "admin". Ask user for username. If matches print "Welcome admin". Else "Invalid user".',
    starterCode: `correct_username = "admin"
user_input = input("Enter username: ")
`,
    solutionCode: `correct_username = "admin"
user_input = input("Enter username: ")

if user_input == correct_username:
    print("Welcome admin")
else:
    print("Invalid user")`,
    topicTag: "conditionals",
    level: "easy",
  },
  {
    id: "cond-20",
    title: "Nested if example",
    description:
      "Ask for age and nationality. If age >= 18, then check nationality is 'Sri Lankan'. If both yes print 'Eligible for voting'. Else print 'Not eligible'.",
    starterCode: `age = int(input("Enter age: "))
nationality = input("Enter nationality: ")
`,
    solutionCode: `age = int(input("Enter age: "))
nationality = input("Enter nationality: ")

if age >= 18:
    if nationality == "Sri Lankan":
        print("Eligible for voting")
    else:
        print("Not eligible")
else:
    print("Not eligible")`,
    topicTag: "conditionals",
    level: "easy",
  },

  // ==================== LOOPS CHALLENGES ====================
  {
    id: "loop-1",
    title: "Print numbers 1 to 5 with for",
    description:
      "Use a for loop to print the numbers from 1 to 5. Each number should be printed on a new line.",
    starterCode: `# Print numbers 1 to 5 using a for loop
`,
    solutionCode: `for i in range(1, 6):
    print(i)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-2",
    title: "Print numbers 1 to 5 with while",
    description:
      "Use a while loop to print the numbers from 1 to 5. Start from 1 and increase the value until 5.",
    starterCode: `# Print numbers 1 to 5 using a while loop
`,
    solutionCode: `i = 1
while i <= 5:
    print(i)
    i += 1`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-3",
    title: "Print each fruit in a list",
    description:
      'You have a list of fruits. Use a for loop to print each fruit. The list is ["apple", "banana", "cherry"].',
    starterCode: `fruits = ["apple", "banana", "cherry"]
# Use a for loop to print each fruit
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-4",
    title: "Print letters in a word",
    description:
      'Create a string text = "Python". Use a for loop to print each letter on a new line.',
    starterCode: `text = "Python"
# Use a for loop to print each letter
`,
    solutionCode: `text = "Python"

for ch in text:
    print(ch)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-5",
    title: "Sum numbers 1 to 10",
    description:
      "Use a for loop to find the sum of numbers from 1 to 10. Print the final sum at the end.",
    starterCode: `# Find the sum of numbers 1 to 10
`,
    solutionCode: `total = 0
for i in range(1, 11):
    total += i

print(total)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-6",
    title: "Print even numbers 2 to 10",
    description:
      "Use a for loop and range() to print even numbers from 2 to 10 (2, 4, 6, 8, 10).",
    starterCode: `# Print even numbers from 2 to 10
`,
    solutionCode: `for i in range(2, 11, 2):
    print(i)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-7",
    title: "Countdown using while",
    description:
      "Use a while loop to print a countdown from 5 to 1. After printing 1, stop the loop.",
    starterCode: `# Countdown from 5 to 1 using while
`,
    solutionCode: `i = 5
while i >= 1:
    print(i)
    i -= 1`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-8",
    title: "Skip a value with continue",
    description:
      "Use a for loop to print numbers from 1 to 5. Use continue to skip printing the number 3.",
    starterCode: `# Print numbers 1 to 5 but skip 3
`,
    solutionCode: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-9",
    title: "Stop loop early with break",
    description:
      "Use a for loop to print numbers from 1 upward. Stop the loop using break when the number becomes 4.",
    starterCode: `# Use break to stop when i is 4
`,
    solutionCode: `for i in range(1, 11):
    if i == 4:
        break
    print(i)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-10",
    title: "Print numbers from a list with while",
    description:
      "You have a list numbers = [10, 20, 30, 40]. Use a while loop and an index to print each value.",
    starterCode: `numbers = [10, 20, 30, 40]
# Use a while loop with index
`,
    solutionCode: `numbers = [10, 20, 30, 40]

i = 0
while i < len(numbers):
    print(numbers[i])
    i += 1`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-11",
    title: "Print squares of numbers",
    description:
      "Use a for loop to print the square of each number from 1 to 5. For example, print 1, 4, 9, 16, 25.",
    starterCode: `# Print squares of numbers 1 to 5
`,
    solutionCode: `for i in range(1, 6):
    print(i * i)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-12",
    title: "Sum of even numbers 1 to 20",
    description:
      "Use a for loop to find the sum of all even numbers from 1 to 20. Print the final sum.",
    starterCode: `# Sum even numbers from 1 to 20
`,
    solutionCode: `total = 0
for i in range(1, 21):
    if i % 2 == 0:
        total += i

print(total)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-13",
    title: "Count items in a list",
    description:
      'You have a list fruits = ["apple", "banana", "apple", "mango"]. Use a for loop to count how many times "apple" appears.',
    starterCode: `fruits = ["apple", "banana", "apple", "mango"]
# Count how many times "apple" appears
`,
    solutionCode: `fruits = ["apple", "banana", "apple", "mango"]

count = 0
for f in fruits:
    if f == "apple":
        count += 1

print(count)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-14",
    title: "Loop until user enters 0",
    description:
      "Use a while loop that keeps asking the user to enter a number. Stop the loop when the user enters 0.",
    starterCode: `# Loop until the user enters 0
`,
    solutionCode: `num = int(input("Enter a number (0 to stop): "))

while num != 0:
    print("You entered:", num)
    num = int(input("Enter a number (0 to stop): "))

print("Loop ended")`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-15",
    title: "Print characters until space",
    description:
      'Create text = "Hello World". Use a for loop to print characters one by one. Stop when you see a space character using break.',
    starterCode: `text = "Hello World"
# Print characters until a space appears
`,
    solutionCode: `text = "Hello World"

for ch in text:
    if ch == " ":
        break
    print(ch)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-16",
    title: "Nested loop for pattern",
    description:
      "Use nested for loops to print a simple pattern of stars. For example, 3 rows where each row has 3 stars.",
    starterCode: `# Use nested loops to print 3x3 stars
`,
    solutionCode: `for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-17",
    title: "Multiply all numbers in a list",
    description:
      "Create numbers = [2, 3, 4]. Use a for loop to multiply all numbers and print the result (2*3*4).",
    starterCode: `numbers = [2, 3, 4]
# Multiply all numbers using a for loop
`,
    solutionCode: `numbers = [2, 3, 4]

result = 1
for n in numbers:
    result *= n

print(result)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-18",
    title: "Sum digits of a number",
    description:
      "Create num = 1234. Use a while loop to find the sum of its digits (1+2+3+4). Hint: use % 10 and // 10.",
    starterCode: `num = 1234
# Use while loop to sum digits
`,
    solutionCode: `num = 1234
total = 0

while num > 0:
    digit = num % 10
    total += digit
    num //= 10

print(total)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-19",
    title: "Reverse a string using loop",
    description:
      'Create text = "Python". Use a for loop to build a new string in reverse order and print it.',
    starterCode: `text = "Python"
# Build reverse string using a loop
`,
    solutionCode: `text = "Python"
rev = ""

for ch in text:
    rev = ch + rev

print(rev)`,
    topicTag: "loops",
    level: "easy",
  },
  {
    id: "loop-20",
    title: "Filter positive numbers",
    description:
      "You have numbers = [-2, 5, 0, -7, 10]. Use a for loop to create a new list that only has the positive numbers. Then print the new list.",
    starterCode: `numbers = [-2, 5, 0, -7, 10]
# Create a new list with only positive numbers
`,
    solutionCode: `numbers = [-2, 5, 0, -7, 10]
positives = []

for n in numbers:
    if n > 0:
        positives.append(n)

print(positives)`,
    topicTag: "loops",
    level: "easy",
  },

  // ==================== FUNCTIONS CHALLENGES ====================
  {
    id: "func-1",
    title: "Create a simple function",
    description:
      "Write a function called greet() that prints 'Hello, world!'. Then call the function.",
    starterCode: `# Write the function greet()
`,
    solutionCode: `def greet():
    print("Hello, world!")

greet()`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-2",
    title: "Function with a parameter",
    description:
      "Write a function called welcome(name) that prints 'Welcome <name>'. Call it with your name.",
    starterCode: `# Define welcome(name)
`,
    solutionCode: `def welcome(name):
    print("Welcome", name)

welcome("Theekshana")`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-3",
    title: "Function with two parameters",
    description:
      "Write a function called add(x, y). It should print the sum of x and y. Call it with two numbers.",
    starterCode: `# Define add(x, y)
`,
    solutionCode: `def add(x, y):
    print(x + y)

add(5, 3)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-4",
    title: "Return value from function",
    description:
      "Write a function multiply(a, b) that returns a * b. Store the result in a variable and print it.",
    starterCode: `# Return value from multiply(a, b)
`,
    solutionCode: `def multiply(a, b):
    return a * b

result = multiply(4, 3)
print(result)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-5",
    title: "Function with default parameter",
    description:
      "Write a function greet(name='Student') that prints 'Hello <name>'. Call greet() without passing a value.",
    starterCode: `# Define greet(name="Student")
`,
    solutionCode: `def greet(name="Student"):
    print("Hello", name)

greet()`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-6",
    title: "Square of a number",
    description:
      "Write a function square(n) that returns the square of n. Call it with 5 and print the result.",
    starterCode: `# Write square(n)
`,
    solutionCode: `def square(n):
    return n * n

print(square(5))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-7",
    title: "Pass list to function",
    description:
      "Write a function showList(items) that prints each item in the list. Call it with ['A', 'B', 'C'].",
    starterCode: `# Write showList(items)
`,
    solutionCode: `def showList(items):
    for i in items:
        print(i)

showList(["A", "B", "C"])`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-8",
    title: "Count even numbers",
    description:
      "Write a function countEven(numbers) that returns how many even numbers are in the list. Call it with [2, 5, 8, 11].",
    starterCode: `# Write countEven(numbers)
`,
    solutionCode: `def countEven(numbers):
    count = 0
    for n in numbers:
        if n % 2 == 0:
            count += 1
    return count

print(countEven([2, 5, 8, 11]))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-9",
    title: "Simple calculator using function",
    description:
      "Write a function calculator(x, y, op) where op can be '+', '-', '*', or '/'. Return the correct result based on op.",
    starterCode: `# Write calculator(x, y, op)
`,
    solutionCode: `def calculator(x, y, op):
    if op == "+":
        return x + y
    elif op == "-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        return x / y

print(calculator(6, 2, "*"))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-10",
    title: "Function with loop inside",
    description:
      "Write a function printNumbers(n) that prints numbers from 1 to n using a for loop.",
    starterCode: `# Write printNumbers(n)
`,
    solutionCode: `def printNumbers(n):
    for i in range(1, n + 1):
        print(i)

printNumbers(5)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-11",
    title: "Lambda function for square",
    description:
      "Create a lambda function that returns the square of a number. Call it with 6 and print the result.",
    starterCode: `# Create lambda function
`,
    solutionCode: `square = lambda x: x * x
print(square(6))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-12",
    title: "Use lambda with filter()",
    description:
      "Use filter() with a lambda function to take only even numbers from [1, 2, 3, 4, 5, 6]. Convert the result to a list and print it.",
    starterCode: `# Use filter with lambda
`,
    solutionCode: `nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-13",
    title: "Use lambda with map()",
    description:
      "Use map() with a lambda function to return the square of each number in [2, 4, 6]. Convert to list and print.",
    starterCode: `# Use map with lambda
`,
    solutionCode: `nums = [2, 4, 6]
squares = list(map(lambda x: x * x, nums))
print(squares)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-14",
    title: "Factorial with loop",
    description:
      "Write factorial(n) that uses a loop to return factorial of n (e.g., factorial(5) = 120). Call the function.",
    starterCode: `# Write factorial(n)
`,
    solutionCode: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-15",
    title: "Function inside loop",
    description:
      "Write a function repeat(text, n) that prints text n times. Call it with repeat('Hello', 3).",
    starterCode: `# Write repeat(text, n)
`,
    solutionCode: `def repeat(text, n):
    for i in range(n):
        print(text)

repeat("Hello", 3)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-16",
    title: "Return multiple values",
    description:
      "Write a function stats(x, y) that returns the sum, difference, and product. Call it and print all returned values.",
    starterCode: `# Write stats(x, y)
`,
    solutionCode: `def stats(x, y):
    return x + y, x - y, x * y

a, b, c = stats(10, 5)
print(a, b, c)`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-17",
    title: "Check leap year",
    description:
      "Write function isLeapYear(year) that returns True if year divisible by 4. Test with 2024.",
    starterCode: `# Write isLeapYear(year)
`,
    solutionCode: `def isLeapYear(year):
    return year % 4 == 0

print(isLeapYear(2024))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-18",
    title: "Default parameter with age",
    description:
      "Write function showAge(age=18) that prints 'Age is <age>'. Call showAge() without passing anything.",
    starterCode: `# Define showAge(age=18)
`,
    solutionCode: `def showAge(age=18):
    print("Age is", age)

showAge()`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-19",
    title: "Function to reverse string",
    description:
      'Write reverse(text) that returns the reversed string. Call it with "Python".',
    starterCode: `# Write reverse(text)
`,
    solutionCode: `def reverse(text):
    return text[::-1]

print(reverse("Python"))`,
    topicTag: "functions",
    level: "easy",
  },
  {
    id: "func-20",
    title: "Find maximum in a list",
    description:
      "Write maxValue(numbers) that returns the largest value in a list. Call with [5, 10, 3, 8].",
    starterCode: `# Write maxValue(numbers)
`,
    solutionCode: `def maxValue(numbers):
    maxVal = numbers[0]
    for n in numbers:
        if n > maxVal:
            maxVal = n
    return maxVal

print(maxValue([5, 10, 3, 8]))`,
    topicTag: "functions",
    level: "easy",
  },

  // ==================== LISTS & ARRAYS CHALLENGES ====================
  {
    id: "la-1",
    title: "Create and print a list",
    description:
      'Create a list called fruits with values "apple", "banana", "cherry". Print the whole list.',
    starterCode: `# Create a fruits list and print it
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]
print(fruits)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-2",
    title: "Access first and last item in a list",
    description:
      'Use the list fruits = ["apple", "banana", "cherry", "mango"]. Print the first item and the last item using index and negative index.',
    starterCode: `fruits = ["apple", "banana", "cherry", "mango"]
# Print first and last item
`,
    solutionCode: `fruits = ["apple", "banana", "cherry", "mango"]

print("First:", fruits[0])
print("Last:", fruits[-1])`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-3",
    title: "Change a list item",
    description:
      'You have fruits = ["apple", "banana", "cherry"]. Change "banana" to "mango" and print the updated list.',
    starterCode: `fruits = ["apple", "banana", "cherry"]
# Change banana to mango
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]

fruits[1] = "mango"
print(fruits)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-4",
    title: "Length of a list",
    description:
      'Create a list numbers = [10, 20, 30, 40, 50]. Print how many items are in the list using len().',
    starterCode: `numbers = [10, 20, 30, 40, 50]
# Print length of list
`,
    solutionCode: `numbers = [10, 20, 30, 40, 50]
print(len(numbers))`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-5",
    title: "Loop through a list",
    description:
      'Use a for loop to print each item in fruits = ["apple", "banana", "cherry"].',
    starterCode: `fruits = ["apple", "banana", "cherry"]
# Loop and print each fruit
`,
    solutionCode: `fruits = ["apple", "banana", "cherry"]

for f in fruits:
    print(f)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-6",
    title: "Append and insert into list",
    description:
      'Start with fruits = ["apple", "banana"]. First append "cherry" to the end. Then insert "mango" at index 1. Print final list.',
    starterCode: `fruits = ["apple", "banana"]
# Append and insert items
`,
    solutionCode: `fruits = ["apple", "banana"]

fruits.append("cherry")
fruits.insert(1, "mango")

print(fruits)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-7",
    title: "Remove item by value and by index",
    description:
      'Start with numbers = [10, 20, 30, 40]. Remove the value 20 using remove(). Then remove the last item using pop(). Print the final list.',
    starterCode: `numbers = [10, 20, 30, 40]
# Remove 20 and then last item
`,
    solutionCode: `numbers = [10, 20, 30, 40]

numbers.remove(20)
numbers.pop()

print(numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-8",
    title: "Use list methods sort and reverse",
    description:
      "Create numbers = [5, 1, 4, 3, 2]. Sort the list in ascending order using sort(), then reverse the list using reverse(). Print the list after each step.",
    starterCode: `# Use sort() and reverse()
numbers = [5, 1, 4, 3, 2]
`,
    solutionCode: `numbers = [5, 1, 4, 3, 2]

numbers.sort()
print("Sorted:", numbers)

numbers.reverse()
print("Reversed:", numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-9",
    title: "Copy and clear a list",
    description:
      'Create numbers = [1, 2, 3]. Make a copy of it named copy_numbers using copy(). Then clear the original list using clear(). Print both lists.',
    starterCode: `numbers = [1, 2, 3]
# Copy and clear list
`,
    solutionCode: `numbers = [1, 2, 3]

copy_numbers = numbers.copy()
numbers.clear()

print("Original after clear:", numbers)
print("Copy:", copy_numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-10",
    title: "Count and find index of an item",
    description:
      'Create names = ["Asha", "Nimal", "Asha", "Kamal"]. Use count() to find how many times "Asha" appears. Use index() to find the first index of "Kamal". Print both results.',
    starterCode: `names = ["Asha", "Nimal", "Asha", "Kamal"]
# Use count() and index()
`,
    solutionCode: `names = ["Asha", "Nimal", "Asha", "Kamal"]

print("Asha count:", names.count("Asha"))
print("Index of Kamal:", names.index("Kamal"))`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-11",
    title: "Extend a list",
    description:
      'Create list1 = [1, 2, 3] and list2 = [4, 5]. Use extend() to add all items from list2 into list1. Print list1.',
    starterCode: `list1 = [1, 2, 3]
list2 = [4, 5]
# Use extend()
`,
    solutionCode: `list1 = [1, 2, 3]
list2 = [4, 5]

list1.extend(list2)
print(list1)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-12",
    title: "Largest and smallest in a list (manual)",
    description:
      "Create numbers = [10, 3, 25, 7, 18]. Without using max() or min(), write code to find the largest and smallest values using a loop. Print both.",
    starterCode: `numbers = [10, 3, 25, 7, 18]
# Find largest and smallest manually
`,
    solutionCode: `numbers = [10, 3, 25, 7, 18]

largest = numbers[0]
smallest = numbers[0]

for n in numbers:
    if n > largest:
        largest = n
    if n < smallest:
        smallest = n

print("Largest:", largest)
print("Smallest:", smallest)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-13",
    title: "Sum of list values",
    description:
      "Create numbers = [5, 10, 15, 20]. Use a loop to find the sum of all numbers and print the total.",
    starterCode: `numbers = [5, 10, 15, 20]
# Find the sum using a loop
`,
    solutionCode: `numbers = [5, 10, 15, 20]

total = 0
for n in numbers:
    total += n

print("Sum:", total)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-14",
    title: "Filter even numbers into new list",
    description:
      "Create numbers = [1, 2, 3, 4, 5, 6]. Use a loop to make a new list that contains only the even numbers. Print the new list.",
    starterCode: `numbers = [1, 2, 3, 4, 5, 6]
# Build a new list with only even numbers
`,
    solutionCode: `numbers = [1, 2, 3, 4, 5, 6]
evens = []

for n in numbers:
    if n % 2 == 0:
        evens.append(n)

print(evens)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-15",
    title: "Create and print a simple array",
    description:
      "Use the array module to create an integer array with values [1, 2, 3, 4, 5]. Print the array.",
    starterCode: `import array
# Create an integer array and print it
`,
    solutionCode: `import array

numbers = array.array('i', [1, 2, 3, 4, 5])
print(numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-16",
    title: "Access and update array elements",
    description:
      "Create an integer array [10, 20, 30] using array module. Print the second element. Then change the second element to 99 and print the array.",
    starterCode: `import array
# Create array and update element
`,
    solutionCode: `import array

numbers = array.array('i', [10, 20, 30])

print("Second element:", numbers[1])

numbers[1] = 99
print(numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-17",
    title: "Append and remove in array",
    description:
      "Create an array [1, 2, 3] using array module. Append 4 to the array. Then remove the value 2 using remove(). Print the final array.",
    starterCode: `import array
# Append and remove items in array
`,
    solutionCode: `import array

numbers = array.array('i', [1, 2, 3])

numbers.append(4)
numbers.remove(2)

print(numbers)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-18",
    title: "Loop through an array",
    description:
      "Use array module to create numbers = [5, 10, 15]. Write a for loop to print each value in the array.",
    starterCode: `import array
# Loop and print each element in array
`,
    solutionCode: `import array

numbers = array.array('i', [5, 10, 15])

for n in numbers:
    print(n)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-19",
    title: "Create a NumPy 2D array",
    description:
      "Use NumPy to create a 3x3 matrix with values from 1 to 9. Print the matrix and its shape.",
    starterCode: `import numpy as np
# Create 3x3 matrix with values 1 to 9
`,
    solutionCode: `import numpy as np

matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix)
print("Shape:", matrix.shape)`,
    topicTag: "arrays",
    level: "easy",
  },
  {
    id: "la-20",
    title: "Basic NumPy slicing and operations",
    description:
      "Use the same 3x3 NumPy matrix from the previous question. Print the element at row 0, col 1. Then print a submatrix of first 2 rows and last 2 columns. Finally, create another 3x3 matrix and print their element-wise sum.",
    starterCode: `import numpy as np

matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
# Do indexing, slicing, and addition
`,
    solutionCode: `import numpy as np

matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print("Element row 0 col 1:", matrix[0, 1])

sub = matrix[0:2, 1:3]
print("Submatrix:\n", sub)

b = np.array([[9, 8, 7],
              [6, 5, 4],
              [3, 2, 1]])

print("Element-wise sum:\n", matrix + b)`,
    topicTag: "arrays",
    level: "easy",
  },
];