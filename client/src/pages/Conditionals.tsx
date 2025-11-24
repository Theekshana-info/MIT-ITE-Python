import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { conditionalsContent } from "@/data/conditionals";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface ConditionalsProps {
  searchQuery: string;
}

export default function Conditionals({ searchQuery }: ConditionalsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          {highlightText(conditionalsContent.title)}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(conditionalsContent.introduction)}
        </p>
      </div>

      {conditionalsContent.types.map((type, idx) => (
        <Card key={idx} data-testid={`card-${type.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{highlightText(type.name)}</CardTitle>
            <CardDescription className="text-sm">{highlightText(type.description)}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {type.examples.map((example, exIdx) => (
              <div key={exIdx} className="space-y-2 sm:space-y-3">
                {example.title && (
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{highlightText(example.title)}</h3>
                )}
                {"description" in example && example.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground">{highlightText((example as any).description)}</p>
                )}
                <div className="space-y-2">
                  <CodeBlock code={example.code} showLineNumbers />
                  {example.output && (
                    <div className={`p-3 sm:p-4 rounded-lg border ${(example as any).isError ? 'bg-destructive/10 border-destructive' : 'bg-primary/5 border-primary/20'}`}>
                      <p className="text-xs sm:text-sm font-semibold mb-2">Output:</p>
                      <CodeBlock code={example.output} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <Card className="bg-accent/30">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Practice Exercises</CardTitle>
          <CardDescription className="text-sm">Try these exercises to test your understanding</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {conditionalsContent.exercises.map((exercise, idx) => (
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
          <a href="/loops" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Loops
          </a>
        </p>
      </div>
    </div>
  );
}
