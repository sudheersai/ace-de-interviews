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
      <div className="flex justify-between items-center py-3 sm:py-4 px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 min-w-0">
          <Database className="text-primary w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground truncate">
            DataEngineerPro
          </span>
        </div>
      
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#skills">
            Skills
          </a>
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#course">
            Course
          </a>
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#expert-consultation">
            Talk with our Expert
          </a>
          <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#resources">
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-[10px] xs:text-xs sm:text-sm px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 xs:py-2 h-7 xs:h-8 sm:h-9 md:h-10 whitespace-nowrap">
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 flex-shrink-0">
                <Menu className="h-4 w-4 xs:h-5 xs:w-5" />
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
                  href="#course"
                  onClick={() => setOpen(false)}
                >
                  Course
                </a>
                <a 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors" 
                  href="#expert-consultation"
                  onClick={() => setOpen(false)}
                >
                  Talk with our Expert
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
