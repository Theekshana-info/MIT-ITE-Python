export const dataTypesContent = {
  title: "Built-in Data Types",
  introduction: "In programming, data type is an important concept. Variables can store data of different types, and different types can do different things.",
  
  types: [
    { category: "Text Type", name: "str", description: "String - text data" },
    { category: "Numeric Types", name: "int", description: "Integer - whole numbers" },
    { category: "Numeric Types", name: "float", description: "Float - decimal numbers" },
    { category: "Numeric Types", name: "complex", description: "Complex numbers" },
    { category: "Sequence Types", name: "list", description: "List - ordered, changeable collection" },
    { category: "Sequence Types", name: "tuple", description: "Tuple - ordered, unchangeable collection" },
    { category: "Sequence Types", name: "range", description: "Range - sequence of numbers" },
    { category: "Mapping Type", name: "dict", description: "Dictionary - key-value pairs" },
    { category: "Set Types", name: "set", description: "Set - unordered, unique elements" },
    { category: "Boolean Type", name: "bool", description: "Boolean - True or False" },
  ],

  examples: [
    {
      title: "Getting the Data Type",
      description: "You can get the data type of any object by using the type() function:",
      code: `x = 5
print(type(x))`,
      output: `<class 'int'>`
    },
    {
      title: "Setting Data Types",
      description: "In Python, the data type is set when you assign a value to a variable:",
      items: [
        { code: `x = "Hello World"`, type: "str" },
        { code: `x = 20`, type: "int" },
        { code: `x = 20.5`, type: "float" },
        { code: `x = 1j`, type: "complex" },
        { code: `x = ["apple", "banana", "cherry"]`, type: "list" },
        { code: `x = ("apple", "banana", "cherry")`, type: "tuple" },
        { code: `x = range(6)`, type: "range" },
        { code: `x = {"name" : "John", "age" : 36}`, type: "dict" },
        { code: `x = {"apple", "banana", "cherry"}`, type: "set" },
        { code: `x = True`, type: "bool" },
      ]
    },
    {
      title: "Using Constructor Functions",
      description: "If you want to specify the data type, you can use constructor functions:",
      items: [
        { code: `x = str("Hello World")`, type: "str" },
        { code: `x = int(20)`, type: "int" },
        { code: `x = float(20.5)`, type: "float" },
        { code: `x = complex(1j)`, type: "complex" },
        { code: `x = list(("apple", "banana", "cherry"))`, type: "list" },
        { code: `x = tuple(("apple", "banana", "cherry"))`, type: "tuple" },
        { code: `x = range(6)`, type: "range" },
        { code: `x = dict(name="John", age=36)`, type: "dict" },
        { code: `x = set(("apple", "banana", "cherry"))`, type: "set" },
        { code: `x = bool(5)`, type: "bool" },
      ]
    }
  ],

  collections: {
    title: "Collection Data Types",
    description: "There are four collection data types in Python:",
    types: [
      {
        name: "List",
        properties: "Ordered, changeable, allows duplicate members",
        example: `fruits = ["apple", "banana", "cherry"]`
      },
      {
        name: "Tuple",
        properties: "Ordered, unchangeable, allows duplicate members",
        example: `fruits = ("apple", "banana", "cherry")`
      },
      {
        name: "Set",
        properties: "Unordered, unchangeable (but you can remove items and add new items), unindexed, no duplicate members",
        example: `fruits = {"apple", "banana", "cherry"}`
      },
      {
        name: "Dictionary",
        properties: "Ordered, changeable, no duplicate members",
        example: `person = {"name": "John", "age": 36}`
      }
    ],
    note: "When choosing a collection type, it is useful to understand the properties of that type. Choosing the right type for a particular data set could mean retention of meaning, and it could mean an increase in efficiency or security."
  }
};
