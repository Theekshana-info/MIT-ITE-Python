import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Code2, 
  Home, 
  BookOpen, 
  Trophy,
  Menu,
  X,
  Terminal
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Sidebar Trigger + Logo */}
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
          </div>
          
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-lg sm:text-xl hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary text-primary-foreground">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="hidden sm:inline">MIT ITE 1213</span>
              <span className="sm:hidden">Python</span>
            </a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href}>
                <a>
                  <Button
                    variant={active ? "default" : "ghost"}
                    className={`gap-2 ${active ? "" : "hover:bg-accent"}`}
                    size="sm"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Button>
                </a>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 justify-end lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Desktop Right Section (can add theme toggle, etc.) */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="https://github.com/Theekshana-info/MIT-ITE-Python"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      variant={active ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 ${active ? "" : "hover:bg-accent"}`}
                      size="lg"
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Button>
                  </a>
                </Link>
              );
            })}
            <div className="pt-4 border-t">
              <a
                href="https://github.com/Theekshana-info/MIT-ITE-Python"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
