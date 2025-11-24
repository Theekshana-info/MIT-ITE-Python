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
  Grid3x3,
  GitGraph,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickAccessVisible, setQuickAccessVisible] = useState(true);

  // Quick access items for the horizontal scrollable bar
  const quickAccessItems = [
    { href: "/data-types", label: "Data Types", icon: Database },
    { href: "/operators", label: "Operators", icon: Calculator },
    { href: "/conditionals", label: "Conditionals", icon: GitBranch },
    { href: "/loops", label: "Loops", icon: RefreshCw },
    { href: "/functions", label: "Functions", icon: Code },
    { href: "/arrays", label: "Arrays / Lists", icon: ListOrdered },
    { href: "/numpy", label: "NumPy", icon: Grid3x3 },
    { href: "/flowcharts", label: "Flowcharts", icon: GitGraph },
    { href: "/code-editor", label: "Code Editor", icon: Terminal },
    { href: "/activities", label: "Activities", icon: Trophy },
    { href: "/summary", label: "Summary", icon: BookOpen },
  ];

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/data-types", label: "Learn", icon: BookOpen },
    { href: "/code-editor", label: "Code Editor", icon: Terminal },
    { href: "/activities", label: "Practice", icon: Trophy },
    { href: "/summary", label: "Reference", icon: Code2 },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Navigation Bar - Mobile Only */}
      <nav className="lg:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 gap-4">
          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 border shadow-lg"
          >
            <Menu className="w-6 h-6" />
          </Button>
          
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-lg">
                <Code2 className="w-5 h-5" />
              </div>
              <span>Python</span>
            </a>
          </Link>

          {/* Quick Access Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <Link href="/">
              <a>
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  size="sm"
                  aria-label="Home"
                  className="p-2 border shadow-lg"
                >
                  <Home className="w-5 h-5" />
                </Button>
              </a>
            </Link>
            
            <Link href="/code-editor">
              <a>
                <Button
                  variant={isActive("/code-editor") ? "default" : "ghost"}
                  size="sm"
                  aria-label="Code Editor"
                  className="p-2 border shadow-lg"
                >
                  <Terminal className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>

        {/* Quick Access Grid */}
        {quickAccessVisible && (
          <div className="border-t bg-background/80 backdrop-blur relative">
            <div className="grid grid-cols-6 gap-1.5 px-2 py-2">
              {quickAccessItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <a>
                      <Button
                        variant={isActive(item.href) ? "default" : "outline"}
                        size="sm"
                        className="w-full flex flex-col items-center justify-center gap-0.5 px-1 py-1 h-auto text-[8px] shadow-lg"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        <span className="font-medium leading-tight text-center">{item.label}</span>
                      </Button>
                    </a>
                  </Link>
                );
              })}
              
              {/* Toggle Button - As 12th button with highlight */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuickAccessVisible(false)}
                aria-label="Hide quick access"
                className="w-full flex flex-col items-center justify-center gap-0.5 px-1 py-1 h-auto text-[8px] shadow-lg border-2 border-orange-500 bg-orange-50 hover:bg-orange-100 dark:bg-orange-950 dark:hover:bg-orange-900"
              >
                <ChevronUp className="w-3 h-3 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                <span className="font-medium leading-tight text-center text-orange-600 dark:text-orange-400">Hide</span>
              </Button>
            </div>
          </div>
        )}
        
        {/* Show button when hidden */}
        {!quickAccessVisible && (
          <div className="border-t bg-background/80 backdrop-blur">
            <div className="flex justify-center px-2 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuickAccessVisible(true)}
                aria-label="Show quick access"
                className="flex items-center gap-2 px-4 py-2 border-2 border-orange-500 bg-orange-50 hover:bg-orange-100 dark:bg-orange-950 dark:hover:bg-orange-900 shadow-lg"
              >
                <ChevronDown className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Show Quick Access</span>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-background border-r shadow-2xl z-50 transform transition-transform duration-250 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <a className="flex items-center gap-3 font-bold text-xl">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                  <Code2 className="w-6 h-6" />
                </div>
                <span>Python</span>
              </a>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link key={link.href} href={link.href}>
                    <a onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant={active ? "default" : "ghost"}
                        className={`w-full justify-start gap-3 h-12 text-base ${
                          active ? "" : "hover:bg-accent"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.label}
                      </Button>
                    </a>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-4 border-t">
            <a
              href="https://github.com/Theekshana-info/MIT-ITE-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-3 hover:bg-accent rounded-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Top Bar - Minimal, just for consistency */}
      <nav className="hidden lg:block sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-6 justify-end">
          <a
            href="https://github.com/Theekshana-info/MIT-ITE-Python"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </>
  );
}
