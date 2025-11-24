import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dataTypesContent } from "@/data/dataTypes";
import { highlightSearchText } from "@/lib/searchUtils";
import CodeBlock from "@/components/ui/code-block";

interface DataTypesProps {
  searchQuery: string;
}

export default function DataTypes({ searchQuery }: DataTypesProps) {
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground" data-testid="text-page-title">
          {highlightText(dataTypesContent.title)}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-introduction">
          {highlightText(dataTypesContent.introduction)}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Built-in Data Types</CardTitle>
          <CardDescription>Python has the following data types built-in by default</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left font-semibold">Category</th>
                  <th className="border p-3 text-left font-semibold">Type</th>
                  <th className="border p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {dataTypesContent.types.map((type, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="border p-3 text-muted-foreground">{highlightText(type.category)}</td>
                    <td className="border p-3">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
                        {highlightText(type.name)}
                      </code>
                    </td>
                    <td className="border p-3">{highlightText(type.description)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples for Each Data Type</CardTitle>
          <CardDescription>Short Python snippets that show typical usage and how to check the type.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataTypesContent.typeExamples?.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg bg-card space-y-2"
                data-testid={`card-type-example-${ex.name}`}
              >
                <h3 className="text-lg font-semibold text-primary">{highlightText(ex.title)}</h3>
                <CodeBlock code={ex.code} showLineNumbers />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional general examples section */}
      <Card>
        <CardHeader>
          <CardTitle>Working with Data Types</CardTitle>
          <CardDescription>Detecting and creating values using literals and constructor functions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {dataTypesContent.examples.map((ex, idx) => (
            <div key={idx} className="space-y-3" data-testid={`datatype-general-example-${idx}`}> 
              <h3 className="text-base font-semibold text-primary">{highlightText(ex.title)}</h3>
              <p className="text-sm text-muted-foreground">{highlightText(ex.description)}</p>
              {ex.code && <CodeBlock code={ex.code} showLineNumbers />}
              {ex.items && (
                <div className="grid md:grid-cols-2 gap-3">
                  {ex.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border rounded-md p-3 bg-card">
                      <CodeBlock code={item.code} />
                      <p className="text-xs mt-1 text-muted-foreground">Type: <code className="font-mono text-primary">{item.type}</code></p>
                    </div>
                  ))}
                </div>
              )}
              {ex.output && (
                <div className="bg-primary/5 border border-primary/30 rounded-md p-3 font-mono text-sm">
                  <span className="font-semibold text-primary">Output:</span>
                  <div className="mt-2"><CodeBlock code={ex.output} /></div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{dataTypesContent.collections.title}</CardTitle>
          <CardDescription>{dataTypesContent.collections.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {dataTypesContent.collections.types.map((collection, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg bg-card space-y-2"
                data-testid={`card-collection-${collection.name.toLowerCase()}`}
              >
                <h3 className="text-lg font-semibold text-primary">{highlightText(collection.name)}</h3>
                <p className="text-sm text-muted-foreground">{highlightText(collection.properties)}</p>
                <CodeBlock code={collection.example} />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
            {highlightText(dataTypesContent.collections.note)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples for Each Data Type (Interactive)</CardTitle>
          <CardDescription>Quick Python snippets demonstrating basic usage of each type.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {dataTypesContent.typeExamples?.map((ex, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-lg border bg-card" data-testid={`datatype-example-${ex.name}`}>
                <h3 className="text-sm font-semibold text-primary">{highlightText(ex.title)}</h3>
                <CodeBlock code={ex.code} showLineNumbers />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Continue to the next section to learn about{" "}
          <a href="/operators" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Operators
          </a>
        </p>
      </div>
    </div>
  );
}
