import { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  timeRemaining: number;
  onAnswerSelect: (answerIndex: number) => void;
  isAnswered: boolean;
}

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  timeRemaining,
  onAnswerSelect,
  isAnswered
}: QuizQuestionProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-xs sm:text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className={timeRemaining <= 10 ? "text-destructive" : "text-foreground"}>
            {timeRemaining}s
          </span>
        </div>
      </div>

      <Progress value={(questionNumber / totalQuestions) * 100} className="h-2" />

      <Card className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 leading-snug">{question.question}</h3>

        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-3 md:px-4 text-xs sm:text-sm leading-relaxed whitespace-normal"
              onClick={() => !isAnswered && onAnswerSelect(index)}
              disabled={isAnswered}
            >
              <span className="font-semibold mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0 text-xs sm:text-sm">{String.fromCharCode(65 + index)}.</span>
              <span className="flex-1 break-words text-left">{option}</span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuizQuestion;
