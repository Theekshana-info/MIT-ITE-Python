import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { numpyContent } from "@/data/numpy";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface NumPyProps {
  searchQuery: string;
}

export default function NumPy({ searchQuery }: NumPyProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(numpyContent.title)}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{highlightText(numpyContent.singleDimensional.title)}</CardTitle>
          <CardDescription>{highlightText(numpyContent.singleDimensional.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {numpyContent.singleDimensional.examples.map((example, idx) => (
            <div key={idx} className="space-y-3">
              {example.title && (
                <h3 className="text-lg font-semibold text-foreground">{highlightText(example.title)}</h3>
              )}
              <CodeBlock code={example.code} showLineNumbers />
              {example.output && (
                <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                  <p className="text-sm font-semibold mb-2">Output:</p>
                  <CodeBlock code={example.output} />
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{highlightText(numpyContent.multiDimensional.title)}</CardTitle>
          <CardDescription>{highlightText(numpyContent.multiDimensional.description)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{numpyContent.multiDimensional.basics.title}</h3>
            <CodeBlock code={numpyContent.multiDimensional.basics.code} showLineNumbers />
            <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
              <p className="text-sm font-semibold mb-2">Output:</p>
              <CodeBlock code={numpyContent.multiDimensional.basics.output} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{numpyContent.multiDimensional.accessing.title}</h3>
            <CodeBlock code={numpyContent.multiDimensional.accessing.code} showLineNumbers />
            <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
              <p className="text-sm font-semibold mb-2">Output:</p>
              <CodeBlock code={numpyContent.multiDimensional.accessing.output} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{numpyContent.multiDimensional.slicing.title}</h3>
            <CodeBlock code={numpyContent.multiDimensional.slicing.code} showLineNumbers />
            <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
              <p className="text-sm font-semibold mb-2">Output:</p>
              <CodeBlock code={numpyContent.multiDimensional.slicing.output} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{numpyContent.multiDimensional.operations.title}</h3>
            <CodeBlock code={numpyContent.multiDimensional.operations.code} showLineNumbers />
            <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
              <p className="text-sm font-semibold mb-2">Output:</p>
              <CodeBlock code={numpyContent.multiDimensional.operations.output} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
          <CardDescription>Challenge yourself with NumPy arrays</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {numpyContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-3 bg-card rounded-lg border space-y-2">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{idx + 1}.</span> {highlightText(exercise.question)}
                </p>
                {exercise.hint && (
                  <p className="text-xs text-muted-foreground italic">Hint: {highlightText(exercise.hint)}</p>
                )}
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
          <a href="/flowcharts" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Flowcharts
          </a>
        </p>
      </div>
    </div>
  );
}
