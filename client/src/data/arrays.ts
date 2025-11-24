export const arraysContent = {
  title: "Python Arrays (Lists)",
  
  introduction: {
    title: "What is an Array?",
    description: "An array is a special variable that can hold more than one value at a time.",
    withoutArrays: {
      title: "Without Arrays",
      description: "This is fine for 3 cars, but what if you had 300 cars? That's why arrays are useful.",
      code: `car1 = "Ford"
car2 = "Volvo"
car3 = "BMW"`
    },
    withArrays: {
      title: "With Array",
      description: "Now all car names are stored in one single variable.",
      code: `cars = ["Ford", "Volvo", "BMW"]`
    }
  },

  operations: [
    {
      name: "Accessing Elements",
      description: "You can access elements in an array by their index number.",
      code: `cars = ["Ford", "Volvo", "BMW"]

print(cars[0])  # Ford
print(cars[1])  # Volvo
print(cars[2])  # BMW`,
      output: `Ford
Volvo
BMW`
    },
    {
      name: "Modify Elements",
      code: `cars = ["Ford", "Volvo", "BMW"]
cars[0] = "Toyota"
print(cars)`,
      output: `['Toyota', 'Volvo', 'BMW']`
    },
    {
      name: "Length of an Array",
      description: "Use the len() function to get the number of items in an array.",
      code: `cars = ["Ford", "Volvo", "BMW"]
print(len(cars))`,
      output: `3`
    },
    {
      name: "Looping Through an Array",
      description: "You can loop through all elements with a for loop.",
      code: `cars = ["Ford", "Volvo", "BMW"]
for x in cars:
    print(x)`,
      output: `Ford
Volvo
BMW`
    },
    {
      name: "Adding Elements - append()",
      description: "Use append() to add at the end.",
      code: `cars = ["Ford", "Volvo", "BMW"]
cars.append("Honda")
print(cars)`,
      output: `['Ford', 'Volvo', 'BMW', 'Honda']`
    },
    {
      name: "Adding Elements - insert()",
      description: "Use insert() to add at a specific position.",
      code: `cars = ["Ford", "Volvo", "BMW"]
cars.insert(1, "Audi")
print(cars)`,
      output: `['Ford', 'Audi', 'Volvo', 'BMW']`
    },
    {
      name: "Removing Elements - pop()",
      description: "Use pop() to remove by index.",
      code: `cars = ["Ford", "Volvo", "BMW"]
cars.pop(1)
print(cars)`,
      output: `['Ford', 'BMW']`
    },
    {
      name: "Removing Elements - remove()",
      description: "Use remove() to remove by value.",
      code: `cars = ["Ford", "Volvo", "BMW"]
cars.remove("Volvo")
print(cars)`,
      output: `['Ford', 'BMW']`
    }
  ],

  methods: {
    title: "Useful Array (List) Methods",
    description: "Here are some important methods you can use on lists (arrays):",
    list: [
      { method: "append()", description: "Adds an element at the end" },
      { method: "clear()", description: "Removes all elements" },
      { method: "copy()", description: "Returns a copy of the list" },
      { method: "count()", description: "Returns how many times a value appears" },
      { method: "extend()", description: "Adds another list (or iterable) to the current list" },
      { method: "index()", description: "Returns the index of a value" },
      { method: "insert()", description: "Adds an element at a specific position" },
      { method: "pop()", description: "Removes element at a position" },
      { method: "remove()", description: "Removes the first occurrence of a value" },
      { method: "reverse()", description: "Reverses the list order" },
      { method: "sort()", description: "Sorts the list" }
    ],
    example: {
      code: `cars = ["BMW", "Ford", "Volvo", "BMW"]

cars.sort()
print(cars)  # ['BMW', 'BMW', 'Ford', 'Volvo']

cars.reverse()
print(cars)  # ['Volvo', 'Ford', 'BMW', 'BMW']

print(cars.count("BMW"))  # 2

cars.clear()
print(cars)  # []`,
      output: `['BMW', 'BMW', 'Ford', 'Volvo']
['Volvo', 'Ford', 'BMW', 'BMW']
2
[]`
    }
  },

  exercises: [
    { id: "arr-ex-1", question: "Create an array of fruits: 'Apple', 'Banana', 'Cherry'. Print the array." },
    { id: "arr-ex-2", question: "Print the first and last fruit from the array." },
    { id: "arr-ex-3", question: "Change 'Banana' to 'Mango'." },
    { id: "arr-ex-4", question: "Find out how many fruits are in the array." },
    { id: "arr-ex-5", question: "Print each fruit one by one using a loop." },
    { id: "arr-ex-6", question: "Add 'Orange' to the array." },
    { id: "arr-ex-7", question: "Insert 'Grapes' at index 1." },
    { id: "arr-ex-8", question: "Create an array of numbers [10, 45, 2, 99, 7] and print the largest number." },
    { id: "arr-ex-9", question: "Find the sum of [5, 10, 15, 20]." },
    { id: "arr-ex-10", question: "Ask the user to enter a car name, and check if it exists in the array." },
    { id: "arr-ex-11", question: "Write a function print_numbers(nums) that prints each number in a list." },
    { id: "arr-ex-12", question: "Write a function add_all(nums) that adds all numbers in a list and prints the total." },
    { id: "arr-ex-13", question: "Write a function first_last(items) that prints the first and last elements of a list." },
    { id: "arr-ex-14", question: "Write a function greet(names) that prints 'Hello <name>' for each name in the list." },
    { id: "arr-ex-15", question: "Create a list of your 3 favorite foods and print them one by one." }
  ]
};
