import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { flowchartsContent } from "@/data/flowcharts";

interface FlowchartsProps {
  searchQuery: string;
}

export default function Flowcharts({ searchQuery }: FlowchartsProps) {
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
          {highlightText(flowchartsContent.title)}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{highlightText(flowchartsContent.introduction.title)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{highlightText(flowchartsContent.introduction.description)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Flowchart Symbols</CardTitle>
          <CardDescription>Learn the standard symbols used in flowcharts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {flowchartsContent.symbols.map((symbol, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 border rounded-lg bg-card"
                data-testid={`symbol-${symbol.shape}`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-3xl text-primary">
                  {symbol.symbol}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{highlightText(symbol.name)}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{highlightText(symbol.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {flowchartsContent.examples.map((example, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{highlightText(example.title)}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                {example.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="text-sm text-foreground">
                    {highlightText(step)}
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Visual flowchart will be rendered here with interactive components
              </p>
              <div className="text-xs text-muted-foreground text-center italic">
                (Flowchart visualization coming in next section)
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
          Ready to test your knowledge?{" "}
          <a href="/activities" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Try Activities & Quizzes
          </a>
        </p>
      </div>
    </div>
  );
}
