import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sqlQuestions } from "@/data/sqlQuestions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QuestionSection = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const displayedQuestions = showAll ? sqlQuestions : sqlQuestions.slice(0, 8);

  const handleQuestionClick = (id: string) => {
    navigate(`/question/${id}`);
  };

  return (
    <section className="px-4">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {displayedQuestions.map((question) => (
          <Card 
            key={question.id} 
            className="p-6 text-left hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            onClick={() => handleQuestionClick(question.id)}
          >
            <div className="text-xs text-muted-foreground mb-2 font-medium">
              {question.category}
            </div>
            <p className="text-card-foreground">{question.question}</p>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        {!showAll ? (
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold"
            onClick={() => setShowAll(true)}
          >
            See More Questions ({sqlQuestions.length - 8} more)
          </Button>
        ) : (
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold"
            onClick={() => {
              setShowAll(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Show Less
          </Button>
        )}
      </div>
    </section>
  );
};

export default QuestionSection;
