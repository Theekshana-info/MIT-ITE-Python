import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { PyodideProvider } from "@/contexts/PyodideContext";
import { useEffect } from "react";

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
import CodingChallenges from "@/pages/CodingChallenges";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Home searchQuery="" />} />
      <Route path="/data-types" component={() => <DataTypes searchQuery="" />} />
      <Route path="/coding-challenges" component={() => <CodingChallenges searchQuery="" />} />
      <Route path="/operators" component={() => <Operators searchQuery="" />} />
      <Route path="/conditionals" component={() => <Conditionals searchQuery="" />} />
      <Route path="/loops" component={() => <Loops searchQuery="" />} />
      <Route path="/functions" component={() => <Functions searchQuery="" />} />
      <Route path="/arrays" component={() => <Arrays searchQuery="" />} />
      <Route path="/numpy" component={() => <NumPy searchQuery="" />} />
      <Route path="/flowcharts" component={() => <Flowcharts searchQuery="" />} />
      <Route path="/activities" component={() => <Activities searchQuery="" />} />
      <Route path="/summary" component={() => <Summary searchQuery="" />} />
      <Route path="/code-editor" component={() => <CodeEditor searchQuery="" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <PyodideProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            {/* Desktop Sidebar - Fixed */}
            <AppSidebar currentPath={location} />
            
            {/* Main Content Area */}
            <div className="lg:pl-72">
              {/* Top Navigation */}
              <Navbar />
              
              {/* Page Content */}
              <main className="min-h-screen bg-background">
                <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
                  <Router />
                </div>
              </main>
            </div>
          </div>
          <Toaster />
        </TooltipProvider>
      </PyodideProvider>
    </QueryClientProvider>
  );
}

export default App;
