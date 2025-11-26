import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Home, 
  BookOpen, 
  Trophy,
  Menu,
  X,
  Terminal,
  Database,
  Calculator,
  GitBranch,
  RefreshCw,
  Code,
  ListOrdered,
  ChevronRight,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main navigation categories
  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/code-editor", label: "Code Editor", icon: Terminal },
    { href: "/coding-challenges", label: "Challenges", icon: Code2 },
    { href: "/activities", label: "Practice", icon: Trophy },
  ];

  // Learning topics for drawer
  const learningTopics = [
    { href: "/data-types", label: "Data Types", icon: Database },
    { href: "/operators", label: "Operators", icon: Calculator },
    { href: "/conditionals", label: "Conditionals", icon: GitBranch },
    { href: "/loops", label: "Loops", icon: RefreshCw },
    { href: "/functions", label: "Functions", icon: Code },
    { href: "/arrays", label: "Arrays / Lists", icon: ListOrdered },
  ];

  // Resources
  const resourceItems = [
    { href: "/summary", label: "Quick Reference", icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="lg:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="flex h-14 items-center px-4 gap-3">
          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="h-9 w-9"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-semibold text-base">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight">Python</span>
                <span className="text-[10px] text-muted-foreground leading-tight">MIT/ITE 1213</span>
              </div>
            </a>
          </Link>

          {/* Right Side Actions */}
          <div className="ml-auto flex items-center gap-1">
            <Link href="/code-editor">
              <a>
                <Button
                  variant={isActive("/code-editor") ? "default" : "ghost"}
                  size="icon"
                  aria-label="Code Editor"
                  className="h-9 w-9"
                >
                  <Terminal className="w-4 h-4" />
                </Button>
              </a>
            </Link>
            <Link href="/coding-challenges">
              <a>
                <Button
                  variant={isActive("/coding-challenges") ? "default" : "ghost"}
                  size="icon"
                  aria-label="Challenges"
                  className="h-9 w-9"
                >
                  <Code2 className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-50 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-background z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary/5 to-transparent">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <a className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-bold text-lg leading-tight">Python</h1>
                  <p className="text-xs text-muted-foreground">MIT/ITE 1213</p>
                </div>
              </a>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 overflow-y-auto">
            {/* Main Navigation */}
            <div className="p-3">
              <div className="space-y-1">
                {mainNavItems.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <a onClick={() => setMobileMenuOpen(false)}>
                        <Button
                          variant={active ? "default" : "ghost"}
                          className={`w-full justify-start gap-3 h-11 ${
                            active ? "shadow-md" : "hover:bg-accent"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{link.label}</span>
                        </Button>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Learning Topics Section */}
            <div className="px-3 pb-3">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Learning Topics</span>
              </div>
              <div className="space-y-0.5">
                {learningTopics.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <a onClick={() => setMobileMenuOpen(false)}>
                        <div
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            active 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Resources Section */}
            <div className="px-3 pb-3">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Resources</span>
              </div>
              <div className="space-y-0.5">
                {resourceItems.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <a onClick={() => setMobileMenuOpen(false)}>
                        <div
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            active 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-3 border-t bg-muted/30">
            <a
              href="https://github.com/Theekshana-info/MIT-ITE-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
            <div className="mt-3 px-3 text-center">
              <p className="text-[10px] text-muted-foreground">© 2025 Fundamentals of Programming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Top Bar */}
      <nav className="hidden lg:block sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-12 items-center px-6 justify-end gap-4">
          <a
            href="https://github.com/Theekshana-info/MIT-ITE-Python"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>
    </>
  );
}
