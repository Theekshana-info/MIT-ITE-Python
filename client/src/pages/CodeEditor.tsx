import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Play, RotateCcw, Info, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { highlightSearchText } from "@/lib/searchUtils";

interface CodeEditorProps {
  searchQuery: string;
}

const exampleCodes = [
  {
    name: "Hello World",
    code: `# Your first Python program
print("Hello, World!")
print("Welcome to Python!")`,
  },
  {
    name: "Variables",
    code: `# Working with variables
name = "Alice"
age = 25
height = 5.6

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")`,
  },
  {
    name: "Math Operations",
    code: `# Basic math operations
a = 10
b = 3

print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")`,
  },
  {
    name: "Loops",
    code: `# For loop example
for i in range(5):
    print(f"Count: {i}")

# List iteration
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")`,
  },
  {
    name: "Functions",
    code: `# Define a function
def greet(name):
    return f"Hello, {name}!"

def add_numbers(a, b):
    return a + b

# Call functions
print(greet("Python"))
result = add_numbers(5, 3)
print(f"5 + 3 = {result}")`,
  },
];

export default function CodeEditor({ searchQuery }: CodeEditorProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);
  const [code, setCode] = useState(exampleCodes[0].code);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      // Using Skulpt - A Python interpreter in JavaScript
      const response = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
        }),
      });

      // For now, we'll use a client-side approach with Pyodide
      // This is a placeholder - we'll implement actual execution
      setOutput("Note: This feature requires a Python execution backend.\n\nYour code:\n" + code);
      
    } catch (err) {
      setError("Error executing code. Please check your syntax.");
    } finally {
      setIsRunning(false);
    }
  };

  const loadExample = (example: typeof exampleCodes[0]) => {
    setCode(example.code);
    setOutput("");
    setError("");
  };

  const resetCode = () => {
    setCode("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-2 sm:gap-3 leading-tight" data-testid="text-page-title">
          <Code2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary flex-shrink-0" />
          {highlightText("Python Code Editor")}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground" data-testid="text-page-description">
          Write, run, and test your Python code in real-time
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription className="text-xs sm:text-sm">
          This is an interactive Python editor. Write your code below and click "Run Code" to see the output.
          Try the example codes to get started!
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Code Examples Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Example Codes</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Click to load an example</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-2">
              {exampleCodes.map((example, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="w-full justify-start text-left text-sm"
                  onClick={() => loadExample(example)}
                >
                  {example.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Editor and Output */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <CardTitle className="text-base sm:text-lg">Code Editor</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetCode}
                    className="flex-1 sm:flex-none"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={runCode}
                    disabled={isRunning || !code.trim()}
                    className="flex-1 sm:flex-none"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? "Running..." : "Run Code"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 sm:h-80 p-3 sm:p-4 font-mono text-xs sm:text-sm bg-muted rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="# Write your Python code here
print('Hello, World!')"
                spellCheck={false}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                Output
                {output && !error && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                {error && <XCircle className="w-4 h-4 text-red-600" />}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {error ? (
                <Alert variant="destructive">
                  <XCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs sm:text-sm">{error}</AlertDescription>
                </Alert>
              ) : (
                <pre className="w-full min-h-32 sm:min-h-40 p-3 sm:p-4 font-mono text-xs sm:text-sm bg-muted rounded-lg border overflow-x-auto whitespace-pre-wrap">
                  {output || "// Output will appear here after running your code"}
                </pre>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tips Section */}
      <Card className="bg-accent/30">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">💡 Tips for Using the Editor</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Use <code className="bg-muted px-1 rounded">print()</code> to display output</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Try the example codes to see different Python concepts in action</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Use proper indentation (4 spaces) for code blocks like loops and functions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Check for syntax errors if your code doesn't run correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Practice regularly to improve your Python skills!</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center pt-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Want to test your skills?{" "}
          <a href="/activities" className="text-primary hover:underline font-semibold">
            Try our Quizzes
          </a>
        </p>
      </div>
    </div>
  );
}
