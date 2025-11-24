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
    },
    {
      name: "Logical Operators",
      description: "Used to combine conditional statements",
      operators: [
        { operator: "and", description: "Returns True if both statements are true", example: "x < 5 and x < 10" },
        { operator: "or", description: "Returns True if one of the statements is true", example: "x < 5 or x < 4" },
        { operator: "not", description: "Reverse the result, returns False if the result is true", example: "not(x < 5 and x < 10)" },
      ]
    },
    {
      name: "Identity Operators",
      description: "Used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location",
      operators: [
        { operator: "is", description: "Returns True if both variables are the same object", example: "x is y" },
        { operator: "is not", description: "Returns True if both variables are not the same object", example: "x is not y" },
      ]
    },
    {
      name: "Membership Operators",
      description: "Used to test if a sequence is presented in an object",
      operators: [
        { operator: "in", description: "Returns True if a sequence with the specified value is present in the object", example: "x in y" },
        { operator: "not in", description: "Returns True if a sequence with the specified value is not present in the object", example: "x not in y" },
      ]
    }
  ]
};
