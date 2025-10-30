import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sqlQuestions } from "@/data/sqlQuestions";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

interface QuestionSectionProps {
  selectedSkill: string;
}

const QuestionSection = ({ selectedSkill }: QuestionSectionProps) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  
  const filteredQuestions = useMemo(() => {
    return sqlQuestions.filter(q => q.skill === selectedSkill);
  }, [selectedSkill]);
  
  const displayedQuestions = showAll ? filteredQuestions : filteredQuestions.slice(0, 8);

  // Reset showAll when skill changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedSkill]);

  const handleQuestionClick = (id: string) => {
    navigate(`/question/${id}`);
  };

  return (
    <section className="px-4">
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {displayedQuestions.map((question) => (
          <Card 
            key={question.id} 
            className="p-4 sm:p-6 text-left hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            onClick={() => handleQuestionClick(question.id)}
          >
            <div className="text-xs text-muted-foreground mb-2 font-medium">
              {question.category}
            </div>
            <p className="text-sm sm:text-base text-card-foreground">{question.question}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 sm:mt-12 text-center">
        {filteredQuestions.length > 8 && !showAll ? (
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold text-sm sm:text-base"
            onClick={() => setShowAll(true)}
          >
            See More Questions ({filteredQuestions.length - 8} more)
          </Button>
        ) : filteredQuestions.length > 8 ? (
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold text-sm sm:text-base"
            onClick={() => {
              setShowAll(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Show Less
          </Button>
        ) : null}
      </div>
    </section>
  );
};

export default QuestionSection;
