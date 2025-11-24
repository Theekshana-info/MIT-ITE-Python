import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { conditionalsContent } from "@/data/conditionals";
import { highlightSearchText } from "@/lib/searchUtils";

interface ConditionalsProps {
  searchQuery: string;
}

export default function Conditionals({ searchQuery }: ConditionalsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(conditionalsContent.title)}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(conditionalsContent.introduction)}
        </p>
      </div>

      {conditionalsContent.types.map((type, idx) => (
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
                    <div className={`p-4 rounded-lg border ${example.isError ? 'bg-destructive/10 border-destructive' : 'bg-primary/5 border-primary/20'}`}>
                      <p className="text-sm font-semibold mb-2">Output:</p>
                      <pre className="font-mono text-sm">
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
          <CardDescription>Try these exercises to test your understanding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conditionalsContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-4 bg-card rounded-lg border space-y-2">
                <h4 className="font-semibold text-foreground">Exercise {idx + 1}</h4>
                <p className="text-sm text-foreground">{highlightText(exercise.question)}</p>
                {exercise.hint && (
                  <p className="text-xs text-muted-foreground italic">Hint: {highlightText(exercise.hint)}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Continue to the next section to learn about{" "}
          <a href="/loops" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Loops
          </a>
        </p>
      </div>
    </div>
  );
}
