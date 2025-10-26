import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2">
        <Database className="text-primary w-8 h-8" />
        <span className="text-xl font-bold text-foreground">DataEngineerPro</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a className="text-muted-foreground hover:text-primary transition-colors" href="#skills">
          Skills
        </a>
        <a className="text-muted-foreground hover:text-primary transition-colors" href="#ai-assistant">
          AI Assistant
        </a>
        <a className="text-muted-foreground hover:text-primary transition-colors" href="#resources">
          Resources
        </a>
      </nav>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
