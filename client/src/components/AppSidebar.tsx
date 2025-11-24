import { Home, Database, Calculator, GitBranch, RefreshCw, Code, ListOrdered, Grid3x3, GitGraph, Trophy, BookOpen, Terminal } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home, testId: "nav-home" },
  { title: "Data Types", url: "/data-types", icon: Database, testId: "nav-data-types" },
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
    <Sidebar>
      <SidebarHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
        <div className="space-y-2">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary leading-tight" data-testid="text-app-title">
            MIT/ITE-Fundamentals of Programming
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground" data-testid="text-app-subtitle">
            MIT/ITE 1213
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tutorials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={currentPath === item.url}>
                    <a href={item.url} data-testid={item.testId}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
