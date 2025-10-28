import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import AIAssistantSection from "@/components/AIAssistantSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <main>
          <HeroSection />
          <QuestionSection />
          <AIAssistantSection />
          <TestimonialsSection />
          <ResourcesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
