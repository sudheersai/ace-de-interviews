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
  "GitHub for Data Engineers",
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
];

const HeroSection = ({ selectedSkill, onSkillChange }: HeroSectionProps) => {
  return (
    <section id="skills" className="text-center py-12 sm:py-16 md:py-20 px-4 bg-gradient-hero">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
        <span className="text-gradient">Data Engineering</span>
        <br />
        <span className="text-foreground">Interview Hub</span>
      </h1>
      <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-slide-up font-medium">
        Select a skill to practice with real interview questions. Prepare and excel in your next data engineering interview.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <Button
            key={skill}
            variant={selectedSkill === skill ? "default" : "outline"}
            onClick={() => onSkillChange(skill)}
            size="sm"
            className={
              selectedSkill === skill
                ? "bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 text-xs sm:text-sm"
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
