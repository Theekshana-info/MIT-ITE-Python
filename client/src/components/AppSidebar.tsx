import { Home, Database, Calculator, GitBranch, RefreshCw, Code, ListOrdered, Grid3x3, GitGraph, Trophy, BookOpen, Terminal, Code2 } from "lucide-react";
import { Link } from "wouter";

const menuItems = [
  { title: "Home", url: "/", icon: Home, testId: "nav-home" },
  { title: "Data Types", url: "/data-types", icon: Database, testId: "nav-data-types" },
  { title: "Coding Challenges", url: "/coding-challenges", icon: Code2, testId: "nav-coding-challenges" },
  { title: "Operators", url: "/operators", icon: Calculator, testId: "nav-operators" },
  { title: "Conditionals", url: "/conditionals", icon: GitBranch, testId: "nav-conditionals" },
  { title: "Loops", url: "/loops", icon: RefreshCw, testId: "nav-loops" },
  { title: "Functions", url: "/functions", icon: Code, testId: "nav-functions" },
  { title: "Arrays / Lists", url: "/arrays", icon: ListOrdered, testId: "nav-arrays" },
  { title: "NumPy", url: "/numpy", icon: Grid3x3, testId: "nav-numpy" },
  { title: "Flowcharts", url: "/flowcharts", icon: GitGraph, testId: "nav-flowcharts" },
  { title: "Code Editor", url: "/code-editor", icon: Terminal, testId: "nav-code-editor" },
  { title: "Activities", url: "/activities", icon: Trophy, testId: "nav-activities" },
  { title: "Summary", url: "/summary", icon: BookOpen, testId: "nav-summary" },
];

interface AppSidebarProps {
  currentPath: string;
}

export function AppSidebar({ currentPath }: AppSidebarProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:border-r lg:bg-background lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:z-30">
      {/* Sidebar Header */}
      <div className="p-6 border-b">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg">
              <Code2 className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">
                Python
              </h1>
              <p className="text-xs text-muted-foreground">
                MIT/ITE 1213
              </p>
            </div>
          </a>
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.url || 
              (item.url !== "/" && currentPath.startsWith(item.url));
            
            return (
              <Link key={item.title} href={item.url}>
                <a
                  data-testid={item.testId}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.title}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p>© 2025 MIT/ITE</p>
          <p>Fundamentals of Programming</p>
        </div>
      </div>
    </aside>
  );
}
