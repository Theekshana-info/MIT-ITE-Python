import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";
import { useState } from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { quizQuestions, bigMixedQuiz } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { highlightSearchText } from "@/lib/searchUtils";

interface ActivitiesProps {
  searchQuery: string;
}

export default function Activities({ searchQuery }: ActivitiesProps) {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  const topics = [
    { 
      id: "data-types", 
      name: "Data Types Quiz", 
      description: "Test your knowledge of Python data types", 
      icon: Star, 
      color: "text-blue-600",
      topic: "Data Types"
    },
    { 
      id: "operators", 
      name: "Operators Quiz", 
      description: "Master arithmetic, comparison, and logical operators", 
      icon: Star, 
      color: "text-purple-600",
      topic: "Operators"
    },
    { 
      id: "conditionals", 
      name: "Conditionals Quiz", 
      description: "Practice if, elif, else, and match statements", 
      icon: Star, 
      color: "text-green-600",
      topic: "Conditionals"
    },
    { 
      id: "loops", 
      name: "Loops Quiz", 
      description: "Challenge yourself with for and while loop questions", 
      icon: Star, 
      color: "text-orange-600",
      topic: "Loops"
    },
    { 
      id: "functions", 
      name: "Functions Quiz", 
      description: "Test function parameters, return values, and more", 
      icon: Star, 
      color: "text-pink-600",
      topic: "Functions"
    },
    { 
      id: "arrays", 
      name: "Arrays Quiz", 
      description: "Practice list operations and methods", 
      icon: Star, 
      color: "text-teal-600",
      topic: "Arrays"
    },
    { 
      id: "numpy", 
      name: "NumPy Quiz", 
      description: "Explore array manipulation and matrix operations", 
      icon: Star, 
      color: "text-indigo-600",
      topic: "NumPy"
    },
    { 
      id: "flowcharts", 
      name: "Flowcharts Quiz", 
      description: "Identify flowchart symbols and their uses", 
      icon: Star, 
      color: "text-cyan-600",
      topic: "Flowcharts"
    },
  ];

  if (activeQuiz === "big-mixed") {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-3" data-testid="text-page-title">
            <Trophy className="h-10 w-10 text-primary" />
            Big Mixed Quiz
          </h1>
          <Button 
            variant="outline" 
            onClick={() => setActiveQuiz(null)}
            data-testid="button-back-to-quizzes"
          >
            ← Back to All Quizzes
          </Button>
        </div>
        <QuizComponent
          title="Big Mixed Quiz"
          description="Test your knowledge across all Python topics!"
          questions={bigMixedQuiz}
        />
      </div>
    );
  }

  if (activeQuiz) {
    const topic = topics.find(t => t.id === activeQuiz);
    const topicQuestions = quizQuestions.filter(q => q.topic === topic?.topic);
    
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-3" data-testid="text-page-title">
            {topic && <topic.icon className={`h-10 w-10 ${topic.color}`} />}
            {topic?.name}
          </h1>
          <Button 
            variant="outline" 
            onClick={() => setActiveQuiz(null)}
            data-testid="button-back-to-quizzes"
          >
            ← Back to All Quizzes
          </Button>
        </div>
        <QuizComponent
          title={topic?.name || "Quiz"}
          description={topic?.description || ""}
          questions={topicQuestions}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground flex items-center gap-3" data-testid="text-page-title">
          <Trophy className="h-10 w-10 text-primary" />
          {highlightText("Activities & Practice")}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="text-page-description">
          Test your Python knowledge with interactive quizzes for each topic!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id} className="hover-elevate transition-all duration-200">
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
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => setActiveQuiz(topic.id)}
                data-testid={`button-start-${topic.id}`}
              >
                Start Quiz
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
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => setActiveQuiz("big-mixed")}
            data-testid="button-start-big-quiz"
          >
            Start Big Quiz
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
