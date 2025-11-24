import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import DataTypes from "@/pages/DataTypes";
import Operators from "@/pages/Operators";
import Conditionals from "@/pages/Conditionals";
import Loops from "@/pages/Loops";
import Functions from "@/pages/Functions";
import Arrays from "@/pages/Arrays";
import NumPy from "@/pages/NumPy";
import Flowcharts from "@/pages/Flowcharts";
import Activities from "@/pages/Activities";
import Summary from "@/pages/Summary";
import CodeEditor from "@/pages/CodeEditor";
import NotFound from "@/pages/not-found";

function Router({ searchQuery }: { searchQuery: string }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home searchQuery={searchQuery} />} />
      <Route path="/data-types" component={() => <DataTypes searchQuery={searchQuery} />} />
      <Route path="/operators" component={() => <Operators searchQuery={searchQuery} />} />
      <Route path="/conditionals" component={() => <Conditionals searchQuery={searchQuery} />} />
      <Route path="/loops" component={() => <Loops searchQuery={searchQuery} />} />
      <Route path="/functions" component={() => <Functions searchQuery={searchQuery} />} />
      <Route path="/arrays" component={() => <Arrays searchQuery={searchQuery} />} />
      <Route path="/numpy" component={() => <NumPy searchQuery={searchQuery} />} />
      <Route path="/flowcharts" component={() => <Flowcharts searchQuery={searchQuery} />} />
      <Route path="/activities" component={() => <Activities searchQuery={searchQuery} />} />
      <Route path="/summary" component={() => <Summary searchQuery={searchQuery} />} />
      <Route path="/code-editor" component={() => <CodeEditor searchQuery={searchQuery} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Custom sidebar width for better readability
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar 
              onSearch={setSearchQuery} 
              searchQuery={searchQuery}
              currentPath={location}
            />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-y-auto bg-background">
                <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-8">
                  <Router searchQuery={searchQuery} />
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
