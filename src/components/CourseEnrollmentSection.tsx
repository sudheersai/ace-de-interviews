import { Button } from "@/components/ui/button";
import courseImage from "@/assets/data-engineering-course.jpg";
import { GraduationCap, CheckCircle } from "lucide-react";

const CourseEnrollmentSection = () => {
  const benefits = [
    "Master SQL and data engineering fundamentals",
    "Real-world projects and hands-on practice",
    "Expert-led video tutorials",
    "Lifetime access to course materials",
    "Certificate of completion"
  ];

  return (
    <section id="course" className="py-12 sm:py-16 lg:py-20 animate-fade-in scroll-mt-20">
      <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl overflow-hidden border border-primary/10 shadow-lg">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left side - Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 z-10" />
            <img
              src={courseImage}
              alt="Data Engineering Course - Professional learning environment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 p-6 sm:p-8 lg:p-12 animate-slide-left">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 bg-primary/10 rounded-full">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Premium Course</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Enroll in Our Complete Data Engineering Course
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Take your career to the next level with our comprehensive data engineering course. 
              Learn from industry experts and master the skills that top companies are looking for.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-sm sm:text-base animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open('https://www.udemy.com/share/104TLq3@g8p1_J1r0QjF1ltNAfRCwnv0YAAwD4ZP9OT1sEPVV0ZhaInNFLCqru7p8vfJoOEH/', '_blank')}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseEnrollmentSection;
