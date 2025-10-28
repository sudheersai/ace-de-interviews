import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiPartnerImage from "@/assets/ai-partner.jpg";

const features = [
  "Real-time Feedback on Your Answers",
  "Personalized Questions Based on Job Descriptions",
  "Behavioral and Technical Mock Interviews",
];

const AIAssistantSection = () => {
  return (
    <section id="ai-assistant" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Ace Your Interviews with an AI Partner
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Our AI-powered assistant provides real-time feedback and personalized questions to help you prepare for any data engineering interview scenario.
          </p>
          <ul className="mt-6 space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-secondary mt-1 w-5 h-5 flex-shrink-0" />
                <span className="ml-3 text-sm sm:text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-6 sm:mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full sm:w-auto" size="lg">
            Try the AI Assistant
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <img
            alt="Professional data engineer working with AI assistance"
            className="rounded-lg shadow-xl w-full"
            src={aiPartnerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
