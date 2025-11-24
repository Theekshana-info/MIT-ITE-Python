import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { arraysContent } from "@/data/arrays";
import { highlightSearchText } from "@/lib/searchUtils";

interface ArraysProps {
  searchQuery: string;
}

export default function Arrays({ searchQuery }: ArraysProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(arraysContent.title)}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{highlightText(arraysContent.introduction.title)}</CardTitle>
          <CardDescription>{highlightText(arraysContent.introduction.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">{arraysContent.introduction.withoutArrays.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {highlightText(arraysContent.introduction.withoutArrays.description)}
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <code>{arraysContent.introduction.withoutArrays.code}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{arraysContent.introduction.withArrays.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {highlightText(arraysContent.introduction.withArrays.description)}
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <code>{arraysContent.introduction.withArrays.code}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {arraysContent.operations.map((operation, idx) => (
        <Card key={idx} data-testid={`card-${operation.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader>
            <CardTitle>{highlightText(operation.name)}</CardTitle>
            {operation.description && <CardDescription>{highlightText(operation.description)}</CardDescription>}
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <code>{operation.code}</code>
            </pre>
            {operation.output && (
              <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                <p className="text-sm font-semibold mb-2">Output:</p>
                <pre className="font-mono text-sm whitespace-pre">
                  <code>{operation.output}</code>
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>{highlightText(arraysContent.methods.title)}</CardTitle>
          <CardDescription>{highlightText(arraysContent.methods.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left font-semibold">Method</th>
                  <th className="border p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {arraysContent.methods.list.map((method, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="border p-3">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
                        {method.method}
                      </code>
                    </td>
                    <td className="border p-3">{highlightText(method.description)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Example Usage:</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <code>{arraysContent.methods.example.code}</code>
            </pre>
            <div className="p-4 rounded-lg border bg-primary/5 border-primary/20 mt-2">
              <p className="text-sm font-semibold mb-2">Output:</p>
              <pre className="font-mono text-sm whitespace-pre">
                <code>{arraysContent.methods.example.output}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
          <CardDescription>Test your array manipulation skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {arraysContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-3 bg-card rounded-lg border">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{idx + 1}.</span> {highlightText(exercise.question)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Continue to the next section to learn about{" "}
          <a href="/numpy" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            NumPy
          </a>
        </p>
      </div>
    </div>
  );
}
