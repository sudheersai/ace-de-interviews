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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span className={timeRemaining <= 10 ? "text-destructive" : "text-foreground"}>
            {timeRemaining}s
          </span>
        </div>
      </div>

      <Progress value={(questionNumber / totalQuestions) * 100} className="h-2" />

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-4 px-4"
              onClick={() => !isAnswered && onAnswerSelect(index)}
              disabled={isAnswered}
            >
              <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
              <span className="flex-1">{option}</span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuizQuestion;
