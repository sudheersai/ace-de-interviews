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
    <section id="resources" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground px-4">
        Free Resources to Boost Your Prep
      </h2>
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card key={index} className="p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block bg-accent p-3 sm:p-4 rounded-full">
                <Icon className="text-accent-foreground w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-foreground">{resource.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{resource.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ResourcesSection;
