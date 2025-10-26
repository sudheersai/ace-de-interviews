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
    <section id="ai-assistant" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-foreground">
            Ace Your Interviews with an AI Partner
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our AI-powered assistant provides real-time feedback and personalized questions to help you prepare for any data engineering interview scenario.
          </p>
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-secondary mt-1 w-5 h-5 flex-shrink-0" />
                <span className="ml-3 text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" size="lg">
            Try the AI Assistant
          </Button>
        </div>
        <div>
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
