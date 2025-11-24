import { Search, Home, Database, Calculator, GitBranch, RefreshCw, Code, ListOrdered, Grid3x3, GitGraph, Trophy, BookOpen, Menu } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  { title: "Activities", url: "/activities", icon: Trophy, testId: "nav-activities" },
  { title: "Summary", url: "/summary", icon: BookOpen, testId: "nav-summary" },
];

interface AppSidebarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  currentPath: string;
}

export function AppSidebar({ onSearch, searchQuery, currentPath }: AppSidebarProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setLocalSearch("");
    onSearch("");
  };

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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tutorials..."
            value={localSearch}
            onChange={handleSearchChange}
            className="pl-9"
            data-testid="input-search"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2 text-xs"
              data-testid="button-clear-search"
            >
              Clear
            </Button>
          )}
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
