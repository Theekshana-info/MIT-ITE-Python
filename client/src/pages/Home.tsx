import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, Calculator, GitBranch, RefreshCw, Code, ListOrdered, 
  Grid3x3, GitGraph, Trophy, BookOpen, ArrowRight, Play, Terminal,
  Sparkles, Users, Clock, CheckCircle2, Zap, Target, GraduationCap
} from "lucide-react";
import { highlightSearchText } from "@/lib/searchUtils";

interface HomeProps {
  searchQuery: string;
}

const learningTopics = [
  {
    title: "Data Types",
    description: "Master Python's built-in types: strings, integers, floats, lists, tuples, and dictionaries.",
    icon: Database,
    url: "/data-types",
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    lessons: 8,
  },
  {
    title: "Operators",
    description: "Learn arithmetic, comparison, logical, and membership operators.",
    icon: Calculator,
    url: "/operators",
    color: "bg-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    lessons: 6,
  },
  {
    title: "Conditionals",
    description: "Control program flow with if, elif, else, and match statements.",
    icon: GitBranch,
    url: "/conditionals",
    color: "bg-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    lessons: 5,
  },
  {
    title: "Loops",
    description: "Iterate with for and while loops, master break and continue.",
    icon: RefreshCw,
    url: "/loops",
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    lessons: 7,
  },
  {
    title: "Functions",
    description: "Create reusable code with parameters, returns, and defaults.",
    icon: Code,
    url: "/functions",
    color: "bg-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    lessons: 8,
  },
  {
    title: "Arrays & Lists",
    description: "Work with collections: access, modify, add, and remove elements.",
    icon: ListOrdered,
    url: "/arrays",
    color: "bg-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    lessons: 6,
  },
];

const advancedTopics = [
  {
    title: "NumPy",
    description: "Numerical computing with arrays and matrices.",
    icon: Grid3x3,
    url: "/numpy",
    color: "bg-indigo-500",
  },
  {
    title: "Flowcharts",
    description: "Visualize algorithms with diagrams.",
    icon: GitGraph,
    url: "/flowcharts",
    color: "bg-cyan-500",
  },
];

const quickActions = [
  {
    title: "Coding Challenges",
    description: "120+ practice problems",
    icon: Trophy,
    url: "/coding-challenges",
    color: "bg-yellow-500",
  },
  {
    title: "Code Editor",
    description: "Write and run Python code",
    icon: Terminal,
    url: "/code-editor",
    color: "bg-emerald-500",
  },
  {
    title: "Activities",
    description: "Interactive quizzes",
    icon: Target,
    url: "/activities",
    color: "bg-rose-500",
  },
  {
    title: "Summary",
    description: "Quick reference guide",
    icon: BookOpen,
    url: "/summary",
    color: "bg-slate-500",
  },
];

const stats = [
  { label: "Topics Covered", value: "8+", icon: GraduationCap },
  { label: "Coding Challenges", value: "120+", icon: Code },
  { label: "Interactive Quizzes", value: "50+", icon: CheckCircle2 },
];

export default function Home({ searchQuery }: HomeProps) {
  const filteredLearningTopics = searchQuery
    ? learningTopics.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : learningTopics;

  const highlightText = (text: string) => highlightSearchText(text, searchQuery);

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border p-6 sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            MIT/ITE - Fundamentals of Programming
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4" data-testid="text-page-title">
            Learn Python Programming
            <span className="text-primary block sm:inline"> from Scratch</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl" data-testid="text-page-description">
            Master Python through interactive lessons, hands-on coding challenges, and real-world examples. 
            Perfect for beginners starting their programming journey.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="/data-types">
                <Play className="h-4 w-4" />
                Start Learning
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/coding-challenges">
                <Trophy className="h-4 w-4" />
                Try Challenges
              </a>
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="relative z-10 mt-8 pt-8 border-t grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-primary">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h2 className="text-xl sm:text-2xl font-semibold">Quick Access</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickActions.map((action) => (
            <a 
              key={action.title} 
              href={action.url}
              className="group flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-all duration-200 hover:shadow-md"
            >
              <div className={`p-2.5 rounded-lg ${action.color} text-white shrink-0`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">{action.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Core Learning Topics */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl font-semibold">Core Python Topics</h2>
          </div>
          <Badge variant="outline" className="hidden sm:flex">
            {filteredLearningTopics.length} Topics
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredLearningTopics.map((topic, index) => (
            <Card 
              key={topic.title} 
              className={`group overflow-hidden hover:shadow-lg transition-all duration-300 ${topic.bgColor}`}
              data-testid={`card-topic-${topic.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <CardHeader className="p-4 sm:p-5 pb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl ${topic.color} text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    <topic.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">
                        {highlightText(topic.title)}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {topic.lessons} lessons
                      </Badge>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {highlightText(topic.description)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-0">
                <Button 
                  asChild 
                  variant="secondary" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  data-testid={`button-start-${topic.title.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <a href={topic.url} className="flex items-center justify-center gap-2">
                    Start Learning
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLearningTopics.length === 0 && (
          <Card className="p-8 sm:p-12 text-center">
            <p className="text-sm sm:text-base text-muted-foreground">No topics found matching "{searchQuery}"</p>
          </Card>
        )}
      </section>

      {/* Advanced Topics */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl sm:text-2xl font-semibold">Advanced Topics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advancedTopics.map((topic) => (
            <a 
              key={topic.title}
              href={topic.url}
              className="group flex items-center gap-4 p-5 rounded-xl border bg-card hover:bg-accent/50 transition-all duration-200 hover:shadow-md"
            >
              <div className={`p-3 rounded-xl ${topic.color} text-white shrink-0 group-hover:scale-110 transition-transform`}>
                <topic.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Why Python Section */}
      <section className="rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl sm:text-2xl font-semibold">Why Learn Python?</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Python is one of the world's most popular programming languages, known for its simplicity and readability.
          Whether you're interested in web development, data science, automation, or AI, Python is the perfect starting point.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              icon: Zap, 
              title: "Easy to Learn", 
              desc: "Clean syntax that reads like English",
              color: "text-yellow-500"
            },
            { 
              icon: Code, 
              title: "Versatile", 
              desc: "Web, data, AI, automation & more",
              color: "text-blue-500"
            },
            { 
              icon: Users, 
              title: "Large Community", 
              desc: "Extensive libraries and support",
              color: "text-green-500"
            },
            { 
              icon: Trophy, 
              title: "In-Demand", 
              desc: "Top skill sought by employers",
              color: "text-purple-500"
            },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-xl bg-background border hover:shadow-md transition-shadow">
              <item.icon className={`h-8 w-8 mb-3 ${item.color}`} />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8 px-6 rounded-2xl border bg-primary/5">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Start Coding?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Jump into our interactive code editor and start writing Python code right away. No setup required!
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href="/code-editor">
            <Terminal className="h-5 w-5" />
            Open Code Editor
          </a>
        </Button>
      </section>
    </div>
  );
}
