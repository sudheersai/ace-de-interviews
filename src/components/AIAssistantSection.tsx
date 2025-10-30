import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiPartnerImage from "@/assets/ai-partner.jpg";

const features = [
  "One-on-One Expert Consultation Sessions",
  "Personalized Interview Preparation Strategies",
  "Real-World Mock Interview Practice",
];

const AIAssistantSection = () => {
  return (
    <section id="expert-consultation" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Ace Your Interviews with{" "}
            <span className="text-gradient">Our Experts</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Connect with experienced data engineering professionals who provide personalized guidance, real-world insights, and proven strategies to help you succeed in your interviews.
          </p>
          <ul className="mt-6 space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-secondary mt-1 w-5 h-5 flex-shrink-0" />
                <span className="ml-3 text-sm sm:text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 sm:mt-10 bg-gradient-primary hover:opacity-90 text-white font-semibold w-full sm:w-auto shadow-primary transition-all duration-300 hover:shadow-glow hover:scale-105" size="lg">
            Book a Consultation
          </Button>
        </div>
        <div className="order-1 md:order-2 animate-scale-in">
          <img
            alt="Professional data engineer working with AI assistance"
            className="rounded-xl shadow-2xl w-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            src={aiPartnerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
