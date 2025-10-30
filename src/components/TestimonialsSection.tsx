import { Card } from "@/components/ui/card";
import { Star, StarOff } from "lucide-react";
import sarahImage from "@/assets/testimonial-sarah.jpg";
import michaelImage from "@/assets/testimonial-michael.jpg";
import jessicaImage from "@/assets/testimonial-jessica.jpg";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Data Engineer at TechCorp",
    image: sarahImage,
    quote: "The interactive question bank was a game-changer. It gave me a clear path and the confidence to land my first data engineering role.",
    rating: 4,
  },
  {
    name: "Michael B.",
    role: "Senior Data Engineer",
    image: michaelImage,
    quote: "I've recommended DataEngineerPro to all my mentees. The skill-based interview prep is pure gold.",
    rating: 5,
  },
  {
    name: "Jessica W.",
    role: "Analytics Engineer",
    image: jessicaImage,
    quote: "The AI assistant helped me overcome my interview anxiety. I felt so prepared and confident.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted rounded-2xl my-8 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
        <span className="text-gradient">Success Stories</span>{" "}
        <span className="text-foreground">From Our Users</span>
      </h2>
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 sm:p-8 hover:shadow-primary transition-all duration-300 hover:scale-105 animate-slide-up border-2">
            <div className="flex items-center">
              <img
                alt={`${testimonial.name} profile picture`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                src={testimonial.image}
              />
              <div className="ml-3 sm:ml-4 min-w-0">
                <p className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-card-foreground">{testimonial.quote}</p>
            <div className="mt-3 sm:mt-4 flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                i < testimonial.rating ? (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                ) : (
                  <StarOff key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
                )
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
