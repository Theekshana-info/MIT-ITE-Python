import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { operatorsContent } from "@/data/operators";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface OperatorsProps {
  searchQuery: string;
}

export default function Operators({ searchQuery }: OperatorsProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          {highlightText(operatorsContent.title)}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(operatorsContent.introduction)}
        </p>
      </div>

      {operatorsContent.categories.map((category, idx) => (
        <Card key={idx} data-testid={`card-${category.name.toLowerCase().replace(/\s/g, '-')}`}>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{highlightText(category.name)}</CardTitle>
            <CardDescription className="text-sm">{highlightText(category.description)}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">Operator</th>
                    <th className="border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">
                      {category.name === "Assignment Operators" ? "Example" : "Name / Description"}
                    </th>
                    <th className="border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">
                      {category.name === "Assignment Operators" ? "Same As" : "Example"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.operators.map((op, opIdx) => (
                    <tr key={opIdx} className={opIdx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="border p-2 sm:p-3">
                        <code className="bg-muted px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm font-mono text-primary font-bold">
                          {op.operator}
                        </code>
                      </td>
                      <td className="border p-2 sm:p-3 text-xs sm:text-sm">
                        {'name' in op ? highlightText(op.name) : ''}
                        {'description' in op ? highlightText(op.description) : ''}
                        {'sameAs' in op ? <code className="font-mono text-xs sm:text-sm">{op.example}</code> : ''}
                      </td>
                      <td className="border p-2 sm:p-3">
                        <code className="font-mono text-xs sm:text-sm">
                          {'sameAs' in op ? op.sameAs : op.example}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {category.exampleBlock && (
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 px-4 sm:px-0" data-testid={`example-${category.name.toLowerCase().replace(/\s/g, '-')}`}>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground">Example Code</h4>
                <CodeBlock
                  code={category.exampleBlock.codeLines.map(l => l.text).join("\n")}
                  showLineNumbers
                />
                <div className="bg-primary/5 border border-primary/30 rounded-md p-2 sm:p-3 text-xs sm:text-sm font-mono">
                  <div className="font-semibold mb-1 text-primary">Output</div>
                  {category.exampleBlock.output.map((out, i) => (
                    <div key={i} className="text-emerald-600">{out}</div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="text-center pt-6 sm:pt-8">
        <p className="text-sm text-muted-foreground">
          Continue to the next section to learn about{" "}
          <a href="/conditionals" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Conditional Statements
          </a>
        </p>
      </div>
    </div>
  );
}
