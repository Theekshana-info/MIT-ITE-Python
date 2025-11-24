import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { arraysContent } from "@/data/arrays";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface ArraysProps {
  searchQuery: string;
}

export default function Arrays({ searchQuery }: ArraysProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          {highlightText(arraysContent.title)}
        </h1>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{highlightText(arraysContent.introduction.title)}</CardTitle>
          <CardDescription className="text-sm">{highlightText(arraysContent.introduction.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-2">{arraysContent.introduction.withoutArrays.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              {highlightText(arraysContent.introduction.withoutArrays.description)}
            </p>
            <CodeBlock code={arraysContent.introduction.withoutArrays.code} showLineNumbers />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-2">{arraysContent.introduction.withArrays.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              {highlightText(arraysContent.introduction.withArrays.description)}
            </p>
            <CodeBlock code={arraysContent.introduction.withArrays.code} showLineNumbers />
          </div>
        </CardContent>
      </Card>

      {arraysContent.operations.map((operation, idx) => (
        <Card key={idx} data-testid={`card-${operation.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{highlightText(operation.name)}</CardTitle>
            {operation.description && <CardDescription className="text-sm">{highlightText(operation.description)}</CardDescription>}
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
            <CodeBlock code={operation.code} showLineNumbers />
            {operation.output && (
              <div className="p-3 sm:p-4 rounded-lg border bg-primary/5 border-primary/20">
                <p className="text-xs sm:text-sm font-semibold mb-2">Output:</p>
                <CodeBlock code={operation.output} />
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{highlightText(arraysContent.methods.title)}</CardTitle>
          <CardDescription className="text-sm">{highlightText(arraysContent.methods.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-0 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Method</th>
                  <th className="border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Description</th>
                </tr>
              </thead>
              <tbody>
                {arraysContent.methods.list.map((method, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="border p-2 sm:p-3">
                      <code className="bg-muted px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm font-mono text-primary">
                        {method.method}
                      </code>
                    </td>
                    <td className="border p-2 sm:p-3 text-xs sm:text-sm">{highlightText(method.description)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 sm:px-0">
            <h3 className="text-sm sm:text-base font-semibold mb-3">Example Usage:</h3>
            <CodeBlock code={arraysContent.methods.example.code} showLineNumbers />
            <div className="p-3 sm:p-4 rounded-lg border bg-primary/5 border-primary/20 mt-2">
              <p className="text-xs sm:text-sm font-semibold mb-2">Output:</p>
              <CodeBlock code={arraysContent.methods.example.output} />
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
              <div key={exercise.id} className="p-3 bg-card rounded-lg border space-y-2">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{idx + 1}.</span> {highlightText(exercise.question)}
                </p>
                {exercise.solution && (
                  <details className="mt-1">
                    <summary className="text-xs text-primary cursor-pointer hover:underline">
                      Show Solution
                    </summary>
                    <CodeBlock code={exercise.solution} showLineNumbers className="mt-2" />
                  </details>
                )}
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
