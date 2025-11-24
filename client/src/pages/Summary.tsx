import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface SummaryProps {
  searchQuery: string;
}

export default function Summary({ searchQuery }: SummaryProps) {
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="search-highlight">{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground flex items-center gap-3" data-testid="text-page-title">
          <BookOpen className="h-10 w-10 text-primary" />
          {highlightText("Python Cheat Sheet")}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-page-description">
          Quick reference guide for all Python concepts covered in this tutorial
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">str</code>
              <span className="text-sm text-muted-foreground ml-2">- Text/String</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">int</code>
              <span className="text-sm text-muted-foreground ml-2">- Integer</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">float</code>
              <span className="text-sm text-muted-foreground ml-2">- Decimal number</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">bool</code>
              <span className="text-sm text-muted-foreground ml-2">- True/False</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">list</code>
              <span className="text-sm text-muted-foreground ml-2">- Ordered, changeable</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">tuple</code>
              <span className="text-sm text-muted-foreground ml-2">- Ordered, unchangeable</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">dict</code>
              <span className="text-sm text-muted-foreground ml-2">- Key-value pairs</span>
            </div>
            <div className="space-y-2">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">set</code>
              <span className="text-sm text-muted-foreground ml-2">- Unique elements</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Operators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Arithmetic</h4>
            <p className="text-sm font-mono text-muted-foreground">
              + - * / % ** //
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Comparison</h4>
            <p className="text-sm font-mono text-muted-foreground">
              == != &gt; &lt; &gt;= &lt;=
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Logical</h4>
            <p className="text-sm font-mono text-muted-foreground">
              and or not
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Membership</h4>
            <p className="text-sm font-mono text-muted-foreground">
              in not in
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Control Flow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Conditionals</h4>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
{`if condition:
    # code
elif another_condition:
    # code
else:
    # code`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Loops</h4>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
{`for item in sequence:
    # code

while condition:
    # code`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Loop Control</h4>
            <p className="text-sm text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded font-mono">break</code> - Exit loop
              <br />
              <code className="bg-muted px-2 py-1 rounded font-mono">continue</code> - Skip to next iteration
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Functions</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
{`def function_name(param1, param2=default):
    # code
    return value`}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>List Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">append(item)</code>
              <span className="text-muted-foreground ml-2">- Add to end</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">insert(i, item)</code>
              <span className="text-muted-foreground ml-2">- Insert at index</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">remove(item)</code>
              <span className="text-muted-foreground ml-2">- Remove by value</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">pop(i)</code>
              <span className="text-muted-foreground ml-2">- Remove by index</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">sort()</code>
              <span className="text-muted-foreground ml-2">- Sort in place</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">reverse()</code>
              <span className="text-muted-foreground ml-2">- Reverse order</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">len(list)</code>
              <span className="text-muted-foreground ml-2">- Get length</span>
            </div>
            <div>
              <code className="font-mono bg-muted px-2 py-1 rounded">count(item)</code>
              <span className="text-muted-foreground ml-2">- Count occurrences</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>NumPy Basics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
{`import numpy as np

# Create array
arr = np.array([1, 2, 3])

# 2D array
matrix = np.array([[1,2], [3,4]])

# Operations
arr1 + arr2  # Addition
arr1 * arr2  # Element-wise multiply
np.dot(a, b)  # Matrix product`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Keep Learning!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            This cheat sheet covers the fundamental Python concepts from this tutorial.
            Practice regularly and build projects to solidify your understanding.
            Remember: the best way to learn programming is by doing!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
