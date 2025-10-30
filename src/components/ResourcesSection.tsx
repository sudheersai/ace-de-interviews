import { Card } from "@/components/ui/card";
import { FileText, File, PlayCircle } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "AWS Cheat Sheet",
    description: "In-depth articles on data engineering concepts and trends.",
  },
  {
    icon: File,
    title: "Cheat Sheets",
    description: "Quick references for SQL, Python, and popular DE tools.",
  },
  {
    icon: PlayCircle,
    title: "Latest AI tools",
    description: "Expert-led sessions on acing interviews and career growth.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-2 sm:px-4 leading-tight animate-fade-in">
        <span className="text-foreground">Free Resources to</span>{" "}
        <span className="text-gradient">Boost Your Prep</span>
      </h2>
      <div className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card 
              key={index} 
              className="p-6 sm:p-8 md:p-10 text-center hover:shadow-secondary transition-all duration-300 hover:scale-105 animate-scale-in border-2 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-block bg-gradient-primary p-3 sm:p-4 md:p-5 rounded-2xl shadow-primary group-hover:shadow-glow transition-all duration-300">
                <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
              </div>
              <h3 className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl md:text-2xl font-bold text-foreground">{resource.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{resource.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ResourcesSection;
