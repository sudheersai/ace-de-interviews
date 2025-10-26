import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const HeroSection = () => {
  const [selectedSkill, setSelectedSkill] = useState("SQL");

  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
        Data Engineering Hub
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Select a skill to practice with real interview questions. Prepare and excel in your next data engineering interview.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <Button
            key={skill}
            variant={selectedSkill === skill ? "default" : "outline"}
            onClick={() => setSelectedSkill(skill)}
            className={
              selectedSkill === skill
                ? "bg-accent text-accent-foreground hover:bg-accent/90"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
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
