import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import AIAssistantSection from "@/components/AIAssistantSection";
import CourseEnrollmentSection from "@/components/CourseEnrollmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState("SQL");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <main>
          <HeroSection selectedSkill={selectedSkill} onSkillChange={setSelectedSkill} />
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
