import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuizQuestion from "@/components/Quiz/QuizQuestion";
import QuizResults from "@/components/Quiz/QuizResults";
import { getQuizLevelQuestions } from "@/data/quizQuestions";
import { QuizQuestion as QuizQuestionType, QuizState } from "@/types/quiz";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Header from "@/components/Header";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const skill = searchParams.get("skill") || "SQL";

  const [currentLevel, setCurrentLevel] = useState(1);
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [showResults, setShowResults] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Load questions for current level
  useEffect(() => {
    const levelQuestions = getQuizLevelQuestions(skill, currentLevel);
    setQuestions(levelQuestions);
    setUserAnswers(new Array(levelQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  }, [currentLevel, skill]);

  // Timer effect
  useEffect(() => {
    if (showResults || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return getTimeForLevel();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, showResults, questions]);

  const getTimeForLevel = () => {
    return currentLevel === 3 ? 60 : 30;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    // Check if answer is correct
    const isCorrect = answerIndex === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Update user answers
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    // Auto-advance after 1.5 seconds
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeRemaining(getTimeForLevel());
    } else {
      setShowResults(true);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < 3) {
      setCurrentLevel(prev => prev + 1);
      setTimeRemaining(getTimeForLevel());
    }
  };

  const canProceedToNextLevel = score >= 5;

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Header />
          <div className="py-20">
            <Card className="p-8 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">No Questions Available</h2>
              <p className="text-muted-foreground mb-6">
                There are no quiz questions available for {skill} at the moment.
              </p>
              <Button onClick={() => navigate("/")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        
        <div className="py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="self-start"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="text-center flex-1">
              <h1 className="text-xl sm:text-2xl font-bold">{skill} Quiz</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Level {currentLevel} of 3 
                {currentLevel === 1 && " - Easy"}
                {currentLevel === 2 && " - Medium"}
                {currentLevel === 3 && " - Hard"}
              </p>
            </div>
            
            <div className="hidden sm:block w-24"></div>
          </div>

          {!showResults ? (
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              timeRemaining={timeRemaining}
              onAnswerSelect={handleAnswerSelect}
              isAnswered={isAnswered}
            />
          ) : (
            <QuizResults
              level={currentLevel}
              score={score}
              totalQuestions={questions.length}
              canProceed={canProceedToNextLevel}
              onNextLevel={handleNextLevel}
              isLastLevel={currentLevel === 3}
              skill={skill}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
