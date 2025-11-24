export const loopsContent = {
  title: "Python Looping Constructs",
  introduction: "Loops are used to execute a block of code repeatedly.",

  types: [
    {
      name: "for Loop",
      description: "'for' loop is used for iterating over a sequence (like a list, tuple, string, or range).",
      examples: [
        {
          title: "Loop through a list",
          code: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)`,
          output: `apple
banana
cherry`
        },
        {
          title: "Exit loop with break",
          description: "Exit the loop when x is 'banana':",
          code: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
    if x == "banana":
        break`,
          output: `apple
banana`
        },
        {
          title: "Break before print",
          description: "Exit the loop when x is 'banana', but this time the break comes before the print:",
          code: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        break
    print(x)`,
          output: `apple`
        },
        {
          title: "Continue statement",
          description: "Skip the current iteration and continue with the next:",
          code: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)`,
          output: `apple
cherry`
        }
      ]
    },
    {
      name: "while Loop",
      description: "With the while loop we can execute a set of statements as long as a condition is true.",
      examples: [
        {
          title: "Basic while loop",
          description: "Print i as long as i is less than 6:",
          code: `i = 1
while i < 6:
    print(i)
    i += 1`,
          output: `1
2
3
4
5`
        },
        {
          title: "while with break",
          description: "Exit the loop when i is 3:",
          code: `i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1`,
          output: `1
2
3`
        },
        {
          title: "while with continue",
          description: "Continue to the next iteration if i is 3:",
          code: `i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)`,
          output: `1
2
4
5
6`
        }
      ]
    }
  ],

  exercises: [
    {
      id: "loop-ex-1",
      question: "Print numbers from 1 to 5 using a for loop.",
      solution: `for i in range(1, 6):
    print(i)`
    },
    {
      id: "loop-ex-2",
      question: "Print squares of numbers from 1 to 5.",
      solution: `for i in range(1, 6):
    print(i ** 2)`
    },
    {
      id: "loop-ex-3",
      question: "Print each letter in the word 'Python'.",
      solution: `for letter in "Python":
    print(letter)`
    },
    {
      id: "loop-ex-4",
      question: "Print numbers from 1 to 10 but skip number 5.",
      solution: `for i in range(1, 11):
    if i == 5:
        continue
    print(i)`
    },
    {
      id: "loop-ex-5",
      question: "Print numbers from 1 to 5 using a while loop.",
      solution: `i = 1
while i <= 5:
    print(i)
    i += 1`
    },
    {
      id: "loop-ex-6",
      question: "Countdown from 5 to 1.",
      solution: `i = 5
while i >= 1:
    print(i)
    i -= 1`
    },
    {
      id: "loop-ex-7",
      question: "Print even numbers from 2 to 10.",
      solution: `for i in range(2, 11, 2):
    print(i)`
    },
    {
      id: "loop-ex-8",
      question: "Print all fruits except 'banana' from the list ['apple', 'banana', 'cherry'].",
      solution: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    if fruit == "banana":
        continue
    print(fruit)`
    },
    {
      id: "loop-ex-9",
      question: "Calculate and print the factorial of 5 using a for loop.",
      solution: `factorial = 1
for i in range(1, 6):
    factorial *= i
print(factorial)  # 120`
    },
    {
      id: "loop-ex-10",
      question: "Print all numbers divisible by 5 between 5 and 30.",
      solution: `for i in range(5, 31):
    if i % 5 == 0:
        print(i)`
    }
  ]
};
