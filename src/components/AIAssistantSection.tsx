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
    <section id="expert-consultation" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1 animate-slide-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-2">
            Ace Your Interviews with{" "}
            <span className="text-gradient">Our Experts</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2">
            Connect with experienced data engineering professionals who provide personalized guidance, real-world insights, and proven strategies to help you succeed in your interviews.
          </p>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 md:space-y-4 px-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-secondary mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="ml-2 sm:ml-3 text-xs sm:text-sm md:text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            className="mt-6 sm:mt-8 md:mt-10 bg-gradient-primary hover:opacity-90 text-white font-semibold w-full sm:w-auto shadow-primary transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm sm:text-base" 
            size="lg"
            onClick={() => window.open('https://superprofile.bio/bookings/dataengineerplus', '_blank')}
          >
            Book a Consultation
          </Button>
        </div>
        <div className="order-1 md:order-2 animate-slide-left px-2">
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
