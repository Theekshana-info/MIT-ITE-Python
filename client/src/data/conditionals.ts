export const conditionalsContent = {
  title: "Python Conditional Statements",
  introduction: "Conditional statements allow you to execute different code based on different conditions.",
  
  types: [
    {
      name: "if Statement",
      description: "An 'if statement' is written by using the if keyword.",
      examples: [
        {
          title: "Basic if statement",
          code: `a = 33
b = 200
if b > a:
    print("b is greater than a")`,
          output: `b is greater than a`
        },
        {
          title: "Indentation is Important!",
          description: "If statement without indentation will raise an error:",
          code: `a = 33
b = 200
if b > a:
print("b is greater than a")  # Error!`,
          output: `IndentationError: expected an indented block`,
          isError: true
        }
      ]
    },
    {
      name: "elif Statement",
      description: "The elif keyword is Python's way of saying 'if the previous conditions were not true, then try this condition'.",
      examples: [
        {
          code: `a = 33
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")`,
          output: `a and b are equal`
        },
        {
          code: `a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")`,
          output: `a is greater than b`
        }
      ]
    },
    {
      name: "else Statement",
      description: "The else keyword catches anything which isn't caught by the preceding conditions.",
      examples: [
        {
          code: `a = 200
b = 33
if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")`,
          output: `b is not greater than a`
        }
      ]
    },
    {
      name: "One-Line if",
      description: "You can write if statements on one line:",
      examples: [
        {
          code: `a = 200
b = 33
if a > b: print("a is greater than b")`,
          output: `a is greater than b`
        },
        {
          title: "Ternary Operator",
          code: `a = 2
b = 330
print("A") if a > b else print("B")`,
          output: `B`
        }
      ]
    },
    {
      name: "match Statement",
      description: "The match statement is used to perform different actions based on different conditions. The match expression is evaluated once, and the value is compared with each case.",
      examples: [
        {
          title: "Basic match",
          code: `day = 4
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
        print("Sunday")`,
          output: `Thursday`
        },
        {
          title: "Default case with underscore",
          description: "Use _ as the last case value for a default option:",
          code: `day = 4
match day:
    case 6:
        print("Today is Saturday")
    case 7:
        print("Today is Sunday")
    case _:
        print("Looking forward to the Weekend")`,
          output: `Looking forward to the Weekend`
        },
        {
          title: "Multiple values with pipe operator",
          description: "Use | as an or operator to check for more than one value:",
          code: `day = 4
match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Today is a weekday")
    case 6 | 7:
        print("I love weekends!")`,
          output: `Today is a weekday`
        }
      ]
    }
  ],

  exercises: [
    {
      id: "cond-ex-1",
      question: "Write a program that asks the user for their age. If the age is less than 13, print 'Child'. If it is between 13 and 19, print 'Teenager'. Otherwise, print 'Adult'.",
      hint: "Use if, elif, and else statements"
    },
    {
      id: "cond-ex-2",
      question: "Ask the user to enter the temperature in Celsius. If it is less than 15, print 'Cold'. If it is between 15 and 25, print 'Warm'. Otherwise, print 'Hot'.",
      hint: "Use comparison operators with if/elif/else"
    },
    {
      id: "cond-ex-3",
      question: "Write a program that asks for a numerical score (0-100) and uses match statement to determine the letter grade: 90-100→A, 80-89→B, 70-79→C, 60-69→D, Below 60→F",
      hint: "Use match statement with score ranges"
    }
  ]
};
