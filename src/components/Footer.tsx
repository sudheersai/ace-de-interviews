import { Database, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-12 sm:mt-16 md:mt-20 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center space-x-2">
            <Database className="text-primary w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">DataEngineerPro</span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors" 
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors" 
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 md:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2024 DataEngineerPro. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <span>·</span>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <span>·</span>
            <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
