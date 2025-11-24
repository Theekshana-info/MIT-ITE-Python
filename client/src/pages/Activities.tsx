import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivitiesProps {
  searchQuery: string;
}

export default function Activities({ searchQuery }: ActivitiesProps) {
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

  const topics = [
    { name: "Data Types Quiz", description: "Test your knowledge of Python data types", icon: Star, color: "text-blue-600" },
    { name: "Operators Quiz", description: "Master arithmetic, comparison, and logical operators", icon: Star, color: "text-purple-600" },
    { name: "Conditionals Quiz", description: "Practice if, elif, else, and match statements", icon: Star, color: "text-green-600" },
    { name: "Loops Quiz", description: "Challenge yourself with for and while loop questions", icon: Star, color: "text-orange-600" },
    { name: "Functions Quiz", description: "Test function parameters, return values, and more", icon: Star, color: "text-pink-600" },
    { name: "Arrays Quiz", description: "Practice list operations and methods", icon: Star, color: "text-teal-600" },
    { name: "NumPy Quiz", description: "Explore array manipulation and matrix operations", icon: Star, color: "text-indigo-600" },
    { name: "Flowcharts Quiz", description: "Identify flowchart symbols and their uses", icon: Star, color: "text-cyan-600" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground flex items-center gap-3" data-testid="text-page-title">
          <Trophy className="h-10 w-10 text-primary" />
          {highlightText("Activities & Practice")}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-page-description">
          Test your Python knowledge with interactive quizzes and exercises for each topic!
        </p>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Coming Soon: Interactive Quizzes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground mb-4">
            Interactive quizzes with instant feedback, score tracking, and detailed explanations are being prepared for you!
            Each quiz will include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Multiple choice questions for each topic</li>
            <li>Instant feedback with green (correct) and red (wrong) indicators</li>
            <li>Score tracking and progress indicators</li>
            <li>Detailed explanations for each answer</li>
            <li>Encouraging messages to keep you motivated</li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, idx) => (
          <Card key={idx} className="hover-elevate transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <topic.icon className={`h-5 w-5 ${topic.color}`} />
                    {highlightText(topic.name)}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {highlightText(topic.description)}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Big Mixed Quiz</CardTitle>
          <CardDescription>Test your knowledge across all Python topics!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground">
            The Big Mixed Quiz combines questions from all topics you've learned. It's the ultimate
            challenge to see how well you understand Python fundamentals!
          </p>
          <Button variant="default" size="lg" disabled>
            Start Big Quiz (Coming Soon)
          </Button>
        </CardContent>
      </Card>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          Need a quick reference?{" "}
          <a href="/summary" className="text-primary hover:underline font-semibold" data-testid="link-next-section">
            Check out the Summary
          </a>
        </p>
      </div>
    </div>
  );
}
