export const operatorsContent = {
  title: "Python Operators",
  introduction: "Operators are used to perform operations on variables and values.",
  example: {
    description: "In the example below, we use the + operator to add together two values:",
    code: `print(10 + 5)`,
    output: `15`
  },

  categories: [
    {
      name: "Arithmetic Operators",
      description: "Used with numeric values to perform common mathematical operations",
      operators: [
        { operator: "+", name: "Addition", example: "x + y" },
        { operator: "-", name: "Subtraction", example: "x - y" },
        { operator: "*", name: "Multiplication", example: "x * y" },
        { operator: "/", name: "Division", example: "x / y" },
        { operator: "%", name: "Modulus", example: "x % y" },
        { operator: "**", name: "Exponentiation", example: "x ** y" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "x = 10", color: "text-blue-600" },
          { text: "y = 3", color: "text-blue-600" },
          { text: "print(x + y)   # 13", color: "text-purple-600" },
          { text: "print(x - y)   # 7", color: "text-purple-600" },
          { text: "print(x * y)   # 30", color: "text-purple-600" },
          { text: "print(x / y)   # 3.333...", color: "text-purple-600" },
          { text: "print(x % y)   # 1", color: "text-purple-600" },
          { text: "print(x ** y)  # 1000", color: "text-purple-600" },
        ],
        output: [
          "13",
          "7",
          "30",
          "3.3333333333333335",
          "1",
          "1000"
        ]
      }
    },
    {
      name: "Assignment Operators",
      description: "Used to assign values to variables",
      operators: [
        { operator: "=", example: "x = 5", sameAs: "x = 5" },
        { operator: "+=", example: "x += 3", sameAs: "x = x + 3" },
        { operator: "-=", example: "x -= 3", sameAs: "x = x - 3" },
        { operator: "*=", example: "x *= 3", sameAs: "x = x * 3" },
        { operator: "/=", example: "x /= 3", sameAs: "x = x / 3" },
        { operator: "%=", example: "x %= 3", sameAs: "x = x % 3" },
        { operator: "**=", example: "x **= 3", sameAs: "x = x ** 3" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "x = 5", color: "text-blue-600" },
          { text: "x += 3    # x = 8", color: "text-amber-600" },
          { text: "x -= 2    # x = 6", color: "text-amber-600" },
          { text: "x *= 4    # x = 24", color: "text-amber-600" },
          { text: "x /= 6    # x = 4.0", color: "text-amber-600" },
          { text: "x %= 3    # x = 1.0", color: "text-amber-600" },
          { text: "x **= 5   # x = 1.0", color: "text-amber-600" },
        ],
        output: ["Final x = 1.0"]
      }
    },
    {
      name: "Comparison Operators",
      description: "Used to compare two values",
      operators: [
        { operator: "==", name: "Equal", example: "x == y" },
        { operator: "!=", name: "Not equal", example: "x != y" },
        { operator: ">", name: "Greater than", example: "x > y" },
        { operator: "<", name: "Less than", example: "x < y" },
        { operator: ">=", name: "Greater than or equal to", example: "x >= y" },
        { operator: "<=", name: "Less than or equal to", example: "x <= y" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "x = 10", color: "text-blue-600" },
          { text: "y = 7", color: "text-blue-600" },
          { text: "print(x == y)   # False", color: "text-green-600" },
          { text: "print(x != y)   # True", color: "text-green-600" },
          { text: "print(x > y)    # True", color: "text-green-600" },
          { text: "print(x < y)    # False", color: "text-green-600" },
          { text: "print(x >= y)   # True", color: "text-green-600" },
          { text: "print(x <= y)   # False", color: "text-green-600" },
        ],
        output: ["False","True","True","False","True","False"]
      }
    },
    {
      name: "Logical Operators",
      description: "Used to combine conditional statements",
      operators: [
        { operator: "and", description: "Returns True if both statements are true", example: "x < 5 and x < 10" },
        { operator: "or", description: "Returns True if one of the statements is true", example: "x < 5 or x < 4" },
        { operator: "not", description: "Reverse the result, returns False if the result is true", example: "not(x < 5 and x < 10)" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "x = 7", color: "text-blue-600" },
          { text: "print(x > 5 and x < 10)   # True", color: "text-fuchsia-600" },
          { text: "print(x > 5 or x < 4)    # True", color: "text-fuchsia-600" },
          { text: "print(not(x > 5 and x < 10)) # False", color: "text-fuchsia-600" },
        ],
        output: ["True","True","False"]
      }
    },
    {
      name: "Identity Operators",
      description: "Used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location",
      operators: [
        { operator: "is", description: "Returns True if both variables are the same object", example: "x is y" },
        { operator: "is not", description: "Returns True if both variables are not the same object", example: "x is not y" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "a = [1,2,3]", color: "text-blue-600" },
          { text: "b = a", color: "text-blue-600" },
          { text: "c = [1,2,3]", color: "text-blue-600" },
          { text: "print(a is b)      # True", color: "text-cyan-600" },
          { text: "print(a is c)      # False", color: "text-cyan-600" },
          { text: "print(a == c)      # True (values equal)", color: "text-cyan-600" },
        ],
        output: ["True","False","True"]
      }
    },
    {
      name: "Membership Operators",
      description: "Used to test if a sequence is presented in an object",
      operators: [
        { operator: "in", description: "Returns True if a sequence with the specified value is present in the object", example: "x in y" },
        { operator: "not in", description: "Returns True if a sequence with the specified value is not present in the object", example: "x not in y" },
      ]
      , exampleBlock: {
        codeLines: [
          { text: "letters = ['a','b','c']", color: "text-blue-600" },
          { text: "print('a' in letters)      # True", color: "text-rose-600" },
          { text: "print('d' not in letters)  # True", color: "text-rose-600" },
        ],
        output: ["True","True"]
      }
    }
  ]
};
