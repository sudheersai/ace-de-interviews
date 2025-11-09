import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import AIAssistantSection from "@/components/AIAssistantSection";
import CourseEnrollmentSection from "@/components/CourseEnrollmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Trophy } from "lucide-react";

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState("SQL");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz?skill=${encodeURIComponent(selectedSkill)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <main>
          <HeroSection selectedSkill={selectedSkill} onSkillChange={setSelectedSkill} />
          
          {/* Quiz CTA Section */}
          <section className="py-8">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-6 border border-border/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Test Your {selectedSkill} Skills</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Take a 5-minute quiz with 3 levels
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  onClick={handleStartQuiz}
                  className="whitespace-nowrap"
                >
                  Start Quiz
                </Button>
              </div>
            </div>
          </section>

          <QuestionSection selectedSkill={selectedSkill} />
          <AIAssistantSection />
          <CourseEnrollmentSection />
          <TestimonialsSection />
          <ResourcesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
