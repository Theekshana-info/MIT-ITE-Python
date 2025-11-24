import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { flowchartsContent } from "@/data/flowcharts";
import { highlightSearchText } from "@/lib/searchUtils";

interface FlowchartsProps {
  searchQuery: string;
}

export default function Flowcharts({ searchQuery }: FlowchartsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          {highlightText(flowchartsContent.title)}
        </h1>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{highlightText(flowchartsContent.introduction.title)}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-foreground">{highlightText(flowchartsContent.introduction.description)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Flowchart Symbols</CardTitle>
          <CardDescription className="text-sm">Learn the standard symbols used in flowcharts</CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
            {flowchartsContent.symbols.map((symbol, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-card"
                data-testid={`symbol-${symbol.shape}`}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl text-primary">
                  {symbol.symbol}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{highlightText(symbol.name)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{highlightText(symbol.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {flowchartsContent.examples.map((example, idx) => (
        <Card key={idx}>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{highlightText(example.title)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-3">Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                {example.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="text-xs sm:text-sm text-foreground">
                    {highlightText(step)}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-4">Visual Flowchart:</h3>
              <div className="overflow-hidden rounded-lg border bg-card flex justify-center p-3 sm:p-4">
                <img
                  src={example.imagePath}
                  alt={example.imageAlt ?? example.title}
                  className="mx-auto w-full max-w-xs h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Practice Exercises</CardTitle>
          <CardDescription>Create flowcharts for these scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {flowchartsContent.exercises.map((exercise, idx) => (
              <div key={exercise.id} className="p-3 bg-card rounded-lg border space-y-2">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{idx + 1}.</span> {highlightText(exercise.question)}
                </p>
                {exercise.solutionImage ? (
                  <details className="mt-1">
                    <summary className="text-xs text-primary cursor-pointer hover:underline">
                      Show Solution
                    </summary>
                    <div className="mt-3 overflow-hidden rounded-lg border bg-muted/30 flex justify-center p-4">
                      <img
                        src={exercise.solutionImage.path}
                        alt={exercise.solutionImage.alt}
                        className="mx-auto w-full max-w-xs h-auto"
                      />
                    </div>
                  </details>
                ) : null}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Ready to test your knowledge?{" "}
          <a href="/activities" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Try Activities & Quizzes
          </a>
        </p>
      </div>
    </div>
  );
}
