import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getQuestionById, getRelatedQuestions, sqlQuestions } from "@/data/sqlQuestions";
import Header from "@/components/Header";
import { toast } from "@/hooks/use-toast";

const QuestionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [readQuestions, setReadQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(getQuestionById(id || ""));
  const [relatedQuestions, setRelatedQuestions] = useState(getRelatedQuestions(id || "", []));
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  useEffect(() => {
    // Get read questions from sessionStorage
    const stored = sessionStorage.getItem("readQuestions");
    if (stored) {
      setReadQuestions(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const question = getQuestionById(id);
    if (!question) {
      navigate("/");
      return;
    }

    // Simulate loading
    setIsLoading(true);
    const loadingTime = 1000; // 1 second loading

    const timer = setTimeout(() => {
      setCurrentQuestion(question);
      
      // Mark as read
      if (!readQuestions.includes(id)) {
        const updated = [...readQuestions, id];
        setReadQuestions(updated);
        sessionStorage.setItem("readQuestions", JSON.stringify(updated));
      }

      // Get related questions
      setRelatedQuestions(getRelatedQuestions(id, readQuestions));
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [id]);

  const handleQuestionClick = (questionId: string) => {
    navigate(`/question/${questionId}`);
    window.scrollTo(0, 0);
  };

  const handleClearHistory = () => {
    sessionStorage.removeItem("readQuestions");
    setReadQuestions([]);
    toast({
      title: "History Cleared",
      description: "Your reading history has been cleared successfully.",
    });
  };

  const readQuestionsData = sqlQuestions.filter(q => 
    readQuestions.includes(q.id) && q.id !== id && q.skill === currentQuestion?.skill
  );

  const unreadQuestions = sqlQuestions.filter(q => 
    !readQuestions.includes(q.id) && q.id !== id && q.skill === currentQuestion?.skill
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Header />
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4">
            <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-spin" />
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">Loading answer...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <main className="px-0 sm:px-4 py-6 sm:py-8 max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-4 sm:mb-6 text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Questions
            </Button>
          </Link>

          {/* Current Question and Answer */}
          <div className="mb-6 sm:mb-8">
            <Card className="p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border-l-4 border-l-primary">
              <div className="mb-2 text-xs sm:text-sm font-medium text-primary">
                {currentQuestion.category}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                {currentQuestion.question}
              </h1>
              <div className="prose prose-sm sm:prose-base prose-slate dark:prose-invert max-w-none">
                <div className="text-card-foreground whitespace-pre-line leading-relaxed text-sm sm:text-base">
                  {currentQuestion.answer}
                </div>
              </div>
            </Card>
          </div>

          {/* Previously Read Questions */}
          {readQuestionsData.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Previously Read</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearHistory}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear History
                </Button>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {readQuestionsData.map((q) => (
                  <Card
                    key={q.id}
                    className="p-3 sm:p-4 cursor-pointer hover:shadow-lg transition-shadow bg-muted/50"
                    onClick={() => handleQuestionClick(q.id)}
                  >
                    <div className="text-xs text-muted-foreground mb-1">{q.category}</div>
                    <p className="text-card-foreground font-medium text-sm sm:text-base">{q.question}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Related/More Questions */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">More Questions</h2>
            <div className="space-y-2 sm:space-y-3">
              {(showAllQuestions ? unreadQuestions : relatedQuestions).map((q) => (
                <Card
                  key={q.id}
                  className="p-3 sm:p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleQuestionClick(q.id)}
                >
                  <div className="text-xs text-muted-foreground mb-1">{q.category}</div>
                  <p className="text-card-foreground font-medium text-sm sm:text-base">{q.question}</p>
                </Card>
              ))}
            </div>

            {!showAllQuestions && unreadQuestions.length > 3 && (
              <div className="mt-4 sm:mt-6 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base"
                  onClick={() => setShowAllQuestions(true)}
                >
                  Show More Questions
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
