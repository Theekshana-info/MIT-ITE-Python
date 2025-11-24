import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { functionsContent } from "@/data/functions";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface FunctionsProps {
  searchQuery: string;
}

export default function Functions({ searchQuery }: FunctionsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          {highlightText(functionsContent.title)}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(functionsContent.introduction)}
        </p>
      </div>

      {functionsContent.concepts.map((concept, idx) => (
        <Card key={idx} data-testid={`card-${concept.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{highlightText(concept.name)}</CardTitle>
            <CardDescription className="text-sm">{highlightText(concept.description)}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
            <CodeBlock code={concept.code} showLineNumbers />
            {concept.output && (
              <div className="p-3 sm:p-4 rounded-lg border bg-primary/5 border-primary/20">
                <p className="text-xs sm:text-sm font-semibold mb-2">Output:</p>
                <CodeBlock code={concept.output} />
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card className="bg-accent/30">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Practice Exercises</CardTitle>
          <CardDescription className="text-sm">Test your knowledge of Python functions</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {functionsContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-3 sm:p-4 bg-card rounded-lg border space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-foreground">Exercise {idx + 1}</h4>
                <p className="text-xs sm:text-sm text-foreground">{highlightText(exercise.question)}</p>
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

      <div className="text-center pt-6 sm:pt-8">
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
