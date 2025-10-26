import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  "What is the difference between UNION and UNION ALL in SQL?",
  "Explain different types of joins in SQL with examples.",
  "What are window functions and how are they useful?",
  "How would you optimize a slow-running SQL query?",
];

const QuestionSection = () => {
  return (
    <section className="px-4">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {questions.map((question, index) => (
          <Card key={index} className="p-6 text-left hover:shadow-lg transition-shadow">
            <p className="text-card-foreground">{question}</p>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" className="font-semibold">
          See More Questions
        </Button>
      </div>
    </section>
  );
};

export default QuestionSection;
