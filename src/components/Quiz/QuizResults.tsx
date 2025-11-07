import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuizResultsProps {
  level: number;
  score: number;
  totalQuestions: number;
  canProceed: boolean;
  onNextLevel: () => void;
  isLastLevel: boolean;
  skill: string;
}

const QuizResults = ({
  level,
  score,
  totalQuestions,
  canProceed,
  onNextLevel,
  isLastLevel,
  skill
}: QuizResultsProps) => {
  const navigate = useNavigate();
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">
            Level {level} {isLastLevel ? "Complete!" : "Finished!"}
          </h2>
          <p className="text-muted-foreground">
            {skill} Quiz - Level {level}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-bold text-primary">
            {score}/{totalQuestions}
          </div>
          <p className="text-lg text-muted-foreground">
            {percentage.toFixed(0)}% Correct
          </p>
        </div>

        {canProceed && !isLastLevel && (
          <div className="bg-accent/50 rounded-lg p-4">
            <p className="text-sm font-medium text-accent-foreground">
              🎉 Great job! You scored {score} points and can proceed to Level {level + 1}
            </p>
          </div>
        )}

        {!canProceed && !isLastLevel && (
          <div className="bg-destructive/10 rounded-lg p-4">
            <p className="text-sm font-medium text-destructive-foreground">
              You need at least 5 points to unlock the next level. Try again!
            </p>
          </div>
        )}

        {isLastLevel && (
          <div className="bg-accent/50 rounded-lg p-4">
            <p className="text-sm font-medium text-accent-foreground">
              🏆 Congratulations! You've completed all levels!
            </p>
          </div>
        )}

        <div className="flex gap-3 justify-center pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          {canProceed && !isLastLevel && (
            <Button onClick={onNextLevel}>
              Next Level
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          
          {!canProceed && (
            <Button onClick={() => window.location.reload()}>
              Retry Level
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuizResults;
