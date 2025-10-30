import { Database, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Database className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-lg sm:text-xl font-bold text-foreground">DataEngineerPro</span>
        </div>
      
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#skills">
            Skills
          </a>
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#ai-assistant">
            AI Assistant
          </a>
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#resources">
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 h-9 sm:h-10">
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col space-y-6 mt-8">
                <a 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors" 
                  href="#skills"
                  onClick={() => setOpen(false)}
                >
                  Skills
                </a>
                <a 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors" 
                  href="#ai-assistant"
                  onClick={() => setOpen(false)}
                >
                  AI Assistant
                </a>
                <a 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors" 
                  href="#resources"
                  onClick={() => setOpen(false)}
                >
                  Resources
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
