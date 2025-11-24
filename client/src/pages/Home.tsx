import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Calculator, GitBranch, RefreshCw, Code, ListOrdered, Grid3x3, GitGraph, Trophy, BookOpen, ArrowRight } from "lucide-react";
import { highlightSearchText } from "@/lib/searchUtils";

interface HomeProps {
  searchQuery: string;
}

const topics = [
  {
    title: "Data Types",
    description: "Learn about built-in data types: str, int, float, lists, tuples, dictionaries, and more.",
    icon: Database,
    url: "/data-types",
    color: "text-blue-600",
  },
  {
    title: "Operators",
    description: "Master arithmetic, comparison, logical, and membership operators in Python.",
    icon: Calculator,
    url: "/operators",
    color: "text-purple-600",
  },
  {
    title: "Conditionals",
    description: "Control program flow with if, elif, else, and match statements.",
    icon: GitBranch,
    url: "/conditionals",
    color: "text-green-600",
  },
  {
    title: "Loops",
    description: "Iterate with for and while loops, use break and continue statements.",
    icon: RefreshCw,
    url: "/loops",
    color: "text-orange-600",
  },
  {
    title: "Functions",
    description: "Create reusable code blocks with parameters, return values, and default arguments.",
    icon: Code,
    url: "/functions",
    color: "text-pink-600",
  },
  {
    title: "Arrays / Lists",
    description: "Work with collections: accessing, modifying, adding, and removing elements.",
    icon: ListOrdered,
    url: "/arrays",
    color: "text-teal-600",
  },
  {
    title: "NumPy",
    description: "Explore numerical computing with arrays, matrices, and mathematical operations.",
    icon: Grid3x3,
    url: "/numpy",
    color: "text-indigo-600",
  },
  {
    title: "Flowcharts",
    description: "Visualize algorithms with flowchart symbols and step-by-step diagrams.",
    icon: GitGraph,
    url: "/flowcharts",
    color: "text-cyan-600",
  },
  {
    title: "Activities",
    description: "Test your knowledge with interactive exercises and quizzes for all topics.",
    icon: Trophy,
    url: "/activities",
    color: "text-yellow-600",
  },
  {
    title: "Summary",
    description: "Quick reference cheat sheet for all Python concepts covered.",
    icon: BookOpen,
    url: "/summary",
    color: "text-red-600",
  },
];

export default function Home({ searchQuery }: HomeProps) {
  const filteredTopics = searchQuery
    ? topics.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : topics;

  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight" data-testid="text-page-title">
          Welcome to MIT/ITE-Fundamentals of Programming
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground" data-testid="text-page-description">
          Master Python programming through simple explanations, practical examples, and interactive exercises.
          Choose a topic below to begin your learning journey!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredTopics.map((topic) => (
          <Card key={topic.title} className="hover-elevate transition-all duration-200" data-testid={`card-topic-${topic.title.toLowerCase().replace(/\s/g, '-')}`}>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <topic.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${topic.color}`} />
                    {highlightText(topic.title)}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm">
                    {highlightText(topic.description)}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <Button asChild variant="default" size="sm" className="w-full sm:w-auto" data-testid={`button-start-${topic.title.toLowerCase().replace(/\s/g, '-')}`}>
                <a href={topic.url} className="flex items-center justify-center gap-1">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <Card className="p-8 sm:p-12 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">No topics found matching "{searchQuery}"</p>
        </Card>
      )}

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Why Learn Python?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
          <p className="text-sm sm:text-base text-foreground">
            Python is one of the most popular programming languages in the world, known for its simplicity and readability.
            Whether you're interested in web development, data science, automation, or artificial intelligence,
            Python is an excellent language to start with.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4">
            <div className="p-3 sm:p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Easy to Learn</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Simple syntax that reads like English</p>
            </div>
            <div className="p-3 sm:p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Versatile</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Used in web, data, AI, automation, and more</p>
            </div>
            <div className="p-3 sm:p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">In-Demand</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Top skill sought by employers worldwide</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
