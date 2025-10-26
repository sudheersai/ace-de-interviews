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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted rounded-lg">
      <h2 className="text-4xl font-bold text-center text-foreground">From Our Users</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center">
              <img
                alt={`${testimonial.name} profile picture`}
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
              />
              <div className="ml-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-card-foreground">{testimonial.quote}</p>
            <div className="mt-4 flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                i < testimonial.rating ? (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ) : (
                  <StarOff key={i} className="w-4 h-4" />
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
