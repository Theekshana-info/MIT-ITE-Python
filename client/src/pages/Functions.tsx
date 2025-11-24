import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { functionsContent } from "@/data/functions";
import { highlightSearchText } from "@/lib/searchUtils";

interface FunctionsProps {
  searchQuery: string;
}

export default function Functions({ searchQuery }: FunctionsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(functionsContent.title)}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(functionsContent.introduction)}
        </p>
      </div>

      {functionsContent.concepts.map((concept, idx) => (
        <Card key={idx} data-testid={`card-${concept.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader>
            <CardTitle>{highlightText(concept.name)}</CardTitle>
            <CardDescription>{highlightText(concept.description)}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <code>{concept.code}</code>
            </pre>
            {concept.output && (
              <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                <p className="text-sm font-semibold mb-2">Output:</p>
                <pre className="font-mono text-sm whitespace-pre">
                  <code>{concept.output}</code>
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
          <CardDescription>Test your knowledge of Python functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {functionsContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-4 bg-card rounded-lg border space-y-2">
                <h4 className="font-semibold text-foreground">Exercise {idx + 1}</h4>
                <p className="text-sm text-foreground">{highlightText(exercise.question)}</p>
                {exercise.hint && (
                  <p className="text-xs text-muted-foreground italic">Hint: {highlightText(exercise.hint)}</p>
                )}
                {exercise.solution && (
                  <details className="mt-2">
                    <summary className="text-xs text-primary cursor-pointer hover:underline">
                      Show Solution
                    </summary>
                    <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-xs mt-2">
                      <code>{exercise.solution}</code>
                    </pre>
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
          <a href="/arrays" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Arrays / Lists
          </a>
        </p>
      </div>
    </div>
  );
}
