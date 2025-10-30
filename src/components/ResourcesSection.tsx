import { Card } from "@/components/ui/card";
import { FileText, File, PlayCircle } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Blog Posts",
    description: "In-depth articles on data engineering concepts and trends.",
  },
  {
    icon: File,
    title: "Cheat Sheets",
    description: "Quick references for SQL, Python, and popular DE tools.",
  },
  {
    icon: PlayCircle,
    title: "Webinars",
    description: "Expert-led sessions on acing interviews and career growth.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
        <span className="text-foreground">Free Resources to</span>{" "}
        <span className="text-gradient">Boost Your Prep</span>
      </h2>
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card key={index} className="p-8 sm:p-10 text-center hover:shadow-secondary transition-all duration-300 hover:scale-105 animate-scale-in border-2 group">
              <div className="inline-block bg-gradient-primary p-4 sm:p-5 rounded-2xl shadow-primary group-hover:shadow-glow transition-all duration-300">
                <Icon className="text-white w-7 h-7 sm:w-9 sm:h-9" />
              </div>
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-foreground">{resource.title}</h3>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">{resource.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ResourcesSection;
