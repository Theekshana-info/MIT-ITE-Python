export const functionsContent = {
  title: "Python Functions",
  introduction: "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.",

  concepts: [
    {
      name: "Creating a Function",
      description: "In Python a function is defined using the def keyword:",
      code: `def my_function():
    print("Hello from a function")`,
      output: null
    },
    {
      name: "Calling a Function",
      description: "To call a function, use the function name followed by parenthesis:",
      code: `def my_function():
    print("Hello from a function")

my_function()`,
      output: `Hello from a function`
    },
    {
      name: "Arguments",
      description: "Information can be passed into functions as arguments. Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.",
      code: `def my_function(fname):
    print(fname + " Perera")

my_function("Lalani")
my_function("Thamali")
my_function("Lahiru")`,
      output: `Lalani Perera
Thamali Perera
Lahiru Perera`
    },
    {
      name: "Default Parameter Value",
      description: "If we call the function without argument, it uses the default value:",
      code: `def my_function(country = "Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")`,
      output: `I am from Sweden
I am from India
I am from Norway
I am from Brazil`
    },
    {
      name: "Passing a List as an Argument",
      description: "You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.",
      code: `def my_function(food):
    for x in food:
        print(x)

fruits = ["apple", "banana", "cherry"]
my_function(fruits)`,
      output: `apple
banana
cherry`
    },
    {
      name: "Return Values",
      description: "To let a function return a value, use the return statement:",
      code: `def my_function(x):
    return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))`,
      output: `15
25
45`
    }
  ],

  exercises: [
    {
      id: "func-ex-1",
      question: "Write a function to sum all the numbers in a list.",
      hint: "Use a for loop to iterate through the list",
      solution: `def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_list([1, 2, 3, 4, 5]))  # 15`
    },
    {
      id: "func-ex-2",
      question: "Write a function to find the maximum number in a list.",
      hint: "Keep track of the largest number seen so far",
      solution: `def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

print(find_max([3, 7, 2, 9, 1]))  # 9`
    },
    {
      id: "func-ex-3",
      question: "Write a function to check whether a number is even or odd.",
      hint: "Use the modulus operator %",
      solution: `def is_even(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(is_even(4))  # Even
print(is_even(7))  # Odd`
    },
    {
      id: "func-ex-4",
      question: "Write a function to calculate the factorial of a number.",
      hint: "Use a loop to multiply numbers from 1 to n",
      solution: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # 120`
    },
    {
      id: "func-ex-5",
      question: "Write a function that takes two numbers and returns their product.",
      hint: "Simply multiply the two parameters",
      solution: `def multiply(a, b):
    return a * b

print(multiply(3, 4))  # 12`
    },
    {
      id: "func-ex-6",
      question: "Write a function to count the number of vowels in a string.",
      hint: "Check each character against a list of vowels",
      solution: `def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

print(count_vowels("Hello World"))  # 3`
    },
    {
      id: "func-ex-7",
      question: "Write a function to print all numbers divisible by 3 from 1 to 50.",
      hint: "Use range and modulus operator",
      solution: `def divisible_by_3():
    for i in range(1, 51):
        if i % 3 == 0:
            print(i)

divisible_by_3()`
    },
    {
      id: "func-ex-8",
      question: "Write a function that takes a list of numbers and returns a new list containing only the even numbers.",
      hint: "Use a loop and check if number % 2 == 0",
      solution: `def filter_even(numbers):
    even_nums = []
    for num in numbers:
        if num % 2 == 0:
            even_nums.append(num)
    return even_nums

print(filter_even([1, 2, 3, 4, 5, 6]))  # [2, 4, 6]`
    },
    {
      id: "func-ex-9",
      question: "Write a Python function that takes the radius of a circle as input and returns both the area and perimeter. (Area = πr², Perimeter = 2πr)",
      hint: "Use 3.14159 for π",
      solution: `def circle_properties(radius):
    pi = 3.14159
    area = pi * radius ** 2
    perimeter = 2 * pi * radius
    return area, perimeter

area, perimeter = circle_properties(5)
print(f"Area: {area}, Perimeter: {perimeter}")`
    },
    {
      id: "func-ex-10",
      question: "Write a function to input your age in years and display your age in days. (Age in days = Age in years × 365)",
      hint: "Multiply by 365",
      solution: `def age_in_days(years):
    days = years * 365
    return days

print(age_in_days(20))  # 7300`
    }
  ]
};
