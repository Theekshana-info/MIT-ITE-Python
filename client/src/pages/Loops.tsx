import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { loopsContent } from "@/data/loops";

interface LoopsProps {
  searchQuery: string;
}

export default function Loops({ searchQuery }: LoopsProps) {
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
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(loopsContent.title)}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(loopsContent.introduction)}
        </p>
      </div>

      {loopsContent.types.map((type, idx) => (
        <Card key={idx} data-testid={`card-${type.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader>
            <CardTitle>{highlightText(type.name)}</CardTitle>
            <CardDescription>{highlightText(type.description)}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {type.examples.map((example, exIdx) => (
              <div key={exIdx} className="space-y-3">
                {example.title && (
                  <h3 className="text-lg font-semibold text-foreground">{highlightText(example.title)}</h3>
                )}
                {example.description && (
                  <p className="text-sm text-muted-foreground">{highlightText(example.description)}</p>
                )}
                <div className="space-y-2">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
                    <code>{example.code}</code>
                  </pre>
                  {example.output && (
                    <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                      <p className="text-sm font-semibold mb-2">Output:</p>
                      <pre className="font-mono text-sm whitespace-pre">
                        <code>{example.output}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
          <CardDescription>Try these exercises to master loops</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loopsContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-4 bg-card rounded-lg border space-y-2">
                <h4 className="font-semibold text-foreground">Exercise {idx + 1}</h4>
                <p className="text-sm text-foreground">{highlightText(exercise.question)}</p>
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
          <a href="/functions" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Functions
          </a>
        </p>
      </div>
    </div>
  );
}
