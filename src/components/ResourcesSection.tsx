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
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-foreground">
        Free Resources to Boost Your Prep
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-block bg-accent p-4 rounded-full">
                <Icon className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{resource.title}</h3>
              <p className="mt-2 text-muted-foreground">{resource.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ResourcesSection;
