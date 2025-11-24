export const numpyContent = {
  title: "Arrays and NumPy",

  singleDimensional: {
    title: "Single-Dimensional Arrays",
    description: "Python has several ways to work with collections of data. For numerical work, arrays are efficient compared to lists. Python provides the 'array' module for simple 1D arrays.",
    examples: [
      {
        title: "Creating and Using Arrays",
        code: `import array

# Create an integer array
numbers = array.array('i', [1, 2, 3, 4, 5])
print("Initial array:", numbers)

# Access an element
print("Third element:", numbers[2])  # 3

# Update an element
numbers[2] = 99
print("After updating 3rd element:", numbers)

# Append a new element
numbers.append(6)
print("After appending 6:", numbers)

# Remove an element
numbers.remove(1)
print("After removing 1:", numbers)`,
        output: `Initial array: array('i', [1, 2, 3, 4, 5])
Third element: 3
After updating 3rd element: array('i', [1, 2, 99, 4, 5])
After appending 6: array('i', [1, 2, 99, 4, 5, 6])
After removing 1: array('i', [2, 99, 4, 5, 6])`
      },
      {
        title: "Iterating Through Arrays",
        code: `for num in numbers:
    print(num)`,
        output: `2
99
4
5
6`
      }
    ]
  },

  multiDimensional: {
    title: "Multidimensional Arrays",
    description: "For multi-dimensional arrays, Python's built-in array isn't enough. Instead, we use NumPy, which is designed for numerical computing.",
    
    basics: {
      title: "NumPy Basics",
      code: `import numpy as np

# Create a 2D array (matrix)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix)
print("Shape:", matrix.shape)  # (3, 3)`,
      output: `[[1 2 3]
 [4 5 6]
 [7 8 9]]
Shape: (3, 3)`
    },

    accessing: {
      title: "Accessing Elements",
      code: `print("Element at row 0, col 1:", matrix[0][1])  # 2
print("Element at row 2, col 2:", matrix[2, 2])    # 9`,
      output: `Element at row 0, col 1: 2
Element at row 2, col 2: 9`
    },

    slicing: {
      title: "Slicing",
      code: `print("Submatrix (first 2 rows, last 2 cols):")
print(matrix[0:2, 1:3])`,
      output: `Submatrix (first 2 rows, last 2 cols):
[[2 3]
 [5 6]]`
    },

    operations: {
      title: "Matrix Operations",
      code: `a = np.array([[1, 2],
              [3, 4]])

b = np.array([[5, 6],
              [7, 8]])

print("Addition:\\n", a + b)
print("Element-wise Multiplication:\\n", a * b)
print("Matrix Product:\\n", np.dot(a, b))  # Or a @ b`,
      output: `Addition:
 [[ 6  8]
 [10 12]]
Element-wise Multiplication:
 [[ 5 12]
 [21 32]]
Matrix Product:
 [[19 22]
 [43 50]]`
    }
  },

  exercises: [
    {
      id: "numpy-ex-1",
      question: "Create an integer array with numbers from 1 to 10. Remove all even numbers.",
      hint: "Use array.remove() in a loop"
    },
    {
      id: "numpy-ex-2",
      question: "Create an array [5, 10, 15, 20, 25]. Insert 100 at index 2.",
      hint: "Use array.insert(index, value)"
    },
    {
      id: "numpy-ex-3",
      question: "Write a program to check if a given number exists in the array.",
      hint: "Use 'in' operator"
    },
    {
      id: "numpy-ex-4",
      question: "Given an array [2, 4, 6, 8, 10], compute the maximum and minimum manually (without using max() or min()).",
      hint: "Loop through and keep track of largest and smallest"
    },
    {
      id: "numpy-ex-5",
      question: "Create a 4×4 NumPy array filled with zeros, and set the diagonal elements to 1.",
      hint: "Use np.zeros() and loop through diagonal indices"
    },
    {
      id: "numpy-ex-6",
      question: "Create a 3×3 matrix, and calculate the sum of each row and sum of each column separately.",
      hint: "Use np.sum() with axis parameter"
    },
    {
      id: "numpy-ex-7",
      question: "Create two 3×3 arrays and check if they are equal element-wise.",
      hint: "Use np.array_equal() or == operator"
    },
    {
      id: "numpy-ex-8",
      question: "Write a function that takes a list [2, 3, 5, 7] and returns a new NumPy array with each element cubed.",
      hint: "Use np.array() and ** operator"
    }
  ]
};
