import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code2, Play, Info, Plus, Trash2, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { highlightSearchText } from "@/lib/searchUtils";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  searchQuery: string;
}

// Declare pyodide types
declare global {
  interface Window {
    loadPyodide: any;
  }
}

interface CodeCell {
  id: string;
  code: string;
  output: string;
  error: string;
  isRunning: boolean;
  executionCount: number | null;
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
  const [cells, setCells] = useState<CodeCell[]>([
    {
      id: Date.now().toString(),
      code: '',
      output: '',
      error: '',
      isRunning: false,
      executionCount: null,
    }
  ]);
  const [globalExecutionCount, setGlobalExecutionCount] = useState(0);
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load Pyodide on component mount
  useEffect(() => {
    const loadPyodideInstance = async () => {
      try {
        setIsLoading(true);
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
          });
          setPyodide(pyodideInstance);
          setIsLoading(false);
        };

        script.onerror = () => {
          setIsLoading(false);
          alert('Failed to load Python interpreter. Please refresh the page.');
        };
      } catch (error) {
        console.error('Error loading Pyodide:', error);
        setIsLoading(false);
      }
    };

    loadPyodideInstance();
  }, []);

  const runCell = async (cellId: string) => {
    if (!pyodide || isLoading) return;

    const cell = cells.find(c => c.id === cellId);
    if (!cell || !cell.code.trim()) return;

    // Update cell to running state
    setCells(prevCells => prevCells.map(c => 
      c.id === cellId 
        ? { ...c, isRunning: true, output: '', error: '' }
        : c
    ));

    try {
      // Capture stdout
      pyodide.setStdout({ batched: (msg: string) => {
        setCells(prevCells => prevCells.map(c =>
          c.id === cellId
            ? { ...c, output: c.output + msg }
            : c
        ));
      }});

      // Run the code
      await pyodide.runPythonAsync(cell.code);

      // Update execution count
      const newCount = globalExecutionCount + 1;
      setGlobalExecutionCount(newCount);

      setCells(prevCells => prevCells.map(c =>
        c.id === cellId
          ? { 
              ...c, 
              isRunning: false, 
              executionCount: newCount,
              output: c.output || "Code executed successfully (no output)"
            }
          : c
      ));
    } catch (error: any) {
      setCells(prevCells => prevCells.map(c =>
        c.id === cellId
          ? { 
              ...c, 
              isRunning: false, 
              error: error.message || "An error occurred while running the code" 
            }
          : c
      ));
    }
  };

  const addCell = (afterId?: string) => {
    const newCell: CodeCell = {
      id: Date.now().toString(),
      code: '',
      output: '',
      error: '',
      isRunning: false,
      executionCount: null,
    };

    if (afterId) {
      const index = cells.findIndex(c => c.id === afterId);
      const newCells = [...cells];
      newCells.splice(index + 1, 0, newCell);
      setCells(newCells);
    } else {
      setCells([...cells, newCell]);
    }
  };

  const deleteCell = (cellId: string) => {
    if (cells.length === 1) return; // Keep at least one cell
    setCells(cells.filter(c => c.id !== cellId));
  };

  const updateCellCode = (cellId: string, code: string) => {
    setCells(prevCells => prevCells.map(c =>
      c.id === cellId ? { ...c, code } : c
    ));
  };

  const loadExample = (example: typeof exampleCodes[0]) => {
    setCells([{
      id: Date.now().toString(),
      code: example.code,
      output: '',
      error: '',
      isRunning: false,
      executionCount: null,
    }]);
  };

  const runAllCells = async () => {
    for (const cell of cells) {
      if (cell.code.trim()) {
        await runCell(cell.id);
      }
    }
  };

  const clearAllOutputs = () => {
    setCells(prevCells => prevCells.map(c => ({
      ...c,
      output: '',
      error: '',
      executionCount: null,
    })));
    setGlobalExecutionCount(0);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-2 sm:gap-3 leading-tight">
          <Code2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary flex-shrink-0" />
          {highlightText("Python Code Editor")}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
          Write and execute Python code in notebook-style cells (like Google Colab)
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription className="text-xs sm:text-sm">
          {isLoading 
            ? "Loading Python interpreter... Please wait."
            : "Python interpreter ready! Click the play button to run individual cells, or use the toolbar to run all cells."
          }
        </AlertDescription>
      </Alert>

      {/* Toolbar */}
      <Card>
        <CardContent className="p-3 sm:p-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={runAllCells}
              disabled={isLoading}
            >
              <Play className="w-4 h-4 mr-2" />
              Run All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => addCell()}
              disabled={isLoading}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Cell
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllOutputs}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Clear Outputs
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Example Codes */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Quick Start Examples</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Click to load an example</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {exampleCodes.map((example, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => loadExample(example)}
              >
                {example.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Cells */}
      <div className="space-y-4">
        {cells.map((cell, index) => (
          <Card key={cell.id} className="border-l-4 border-l-primary">
            <CardContent className="p-0">
              {/* Cell Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    [{cell.executionCount ?? ' '}]
                  </span>
                  <span className="text-xs text-muted-foreground">Cell {index + 1}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => runCell(cell.id)}
                    disabled={cell.isRunning || !cell.code.trim() || isLoading}
                    className="h-8 px-2"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addCell(cell.id)}
                    disabled={isLoading}
                    className="h-8 px-2"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteCell(cell.id)}
                    disabled={cells.length === 1}
                    className="h-8 px-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="border-b">
                <Editor
                  height="150px"
                  defaultLanguage="python"
                  value={cell.code}
                  onChange={(value) => updateCellCode(cell.id, value || "")}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "off",
                    roundedSelection: true,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
                    wordWrap: "on",
                    padding: { top: 10, bottom: 10 },
                    scrollbar: {
                      vertical: 'auto',
                      horizontal: 'auto',
                      verticalScrollbarSize: 14,
                      horizontalScrollbarSize: 14,
                    },
                    quickSuggestions: false,
                    suggestOnTriggerCharacters: false,
                    acceptSuggestionOnEnter: "off",
                    tabCompletion: "off",
                    wordBasedSuggestions: "off",
                    parameterHints: { enabled: false },
                    autoClosingBrackets: "never",
                    autoClosingQuotes: "never",
                    formatOnPaste: false,
                    formatOnType: false,
                    selectOnLineNumbers: false,
                    glyphMargin: false,
                    folding: false,
                    lineDecorationsWidth: 0,
                    lineNumbersMinChars: 0,
                    renderLineHighlight: "none",
                    smoothScrolling: true,
                    cursorBlinking: "smooth",
                    cursorWidth: 2,
                    // Disable word highlighting
                    occurrencesHighlight: "off",
                    selectionHighlight: false,
                    renderWhitespace: "none",
                    matchBrackets: "never",
                  }}
                />
              </div>

              {/* Output */}
              {(cell.output || cell.error || cell.isRunning) && (
                <div className="p-4 bg-muted/50">
                  {cell.isRunning ? (
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                      Running...
                    </div>
                  ) : cell.error ? (
                    <Alert variant="destructive" className="border-none">
                      <XCircle className="h-4 w-4" />
                      <AlertDescription className="text-xs sm:text-sm break-words">
                        {cell.error}
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Output:
                      </div>
                      <pre className="font-mono text-xs sm:text-sm text-foreground whitespace-pre-wrap break-words">
                        {cell.output}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Section */}
      <Card className="bg-accent/30">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">💡 Tips for Using the Notebook</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Click the <Play className="w-3 h-3 inline" /> button to run individual cells</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Add new cells with the <Plus className="w-3 h-3 inline" /> button to organize your code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Variables defined in one cell are available in subsequent cells</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Run cells in order for best results - execution numbers show the run order</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Use <code className="bg-muted px-1 rounded">print()</code> to display output from your code</span>
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
