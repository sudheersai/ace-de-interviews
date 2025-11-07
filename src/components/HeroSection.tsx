import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  selectedSkill: string;
  onSkillChange: (skill: string) => void;
}

const skills = [
  "SQL",
  "Python",
  "Pyspark",
  "Data Warehousing",
  "Data Modeling",
  "GitHub",
  "ETL Concepts",
  "CI/CD",
  "AWS Glue",
  "AWS Redshift",
  "AWS EMR",
  "AWS Athena",
  "Amazon Kinesis Data Analytics",
  "Amazon S3",
  "AWS Lambda",
  "AWS Step Functions",
  "AWS Certified Data Engineer",
  "Hadoop",
];

const HeroSection = ({ selectedSkill, onSkillChange }: HeroSectionProps) => {
  return (
    <section id="skills" className="text-center py-12 sm:py-16 md:py-20 px-4 bg-gradient-hero">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-down px-2">
        <span className="text-gradient">Data Engineering</span>
        <br />
        <span className="text-foreground">Interview Hub</span>
      </h1>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up font-medium">
        Select a skill to practice with real interview questions. Prepare and excel in your next data engineering interview.
      </p>
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 max-w-5xl mx-auto px-2 animate-bounce-in">
        {skills.map((skill, index) => (
          <Button
            key={skill}
            variant={selectedSkill === skill ? "default" : "outline"}
            onClick={() => onSkillChange(skill)}
            size="sm"
            style={{ animationDelay: `${index * 0.05}s` }}
            className={
              selectedSkill === skill
                ? "bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 h-auto"
                : "bg-muted text-muted-foreground hover:bg-muted/80 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 h-auto"
            }
          >
            {skill}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
