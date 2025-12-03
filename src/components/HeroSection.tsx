import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground max-w-3xl leading-tight">
          How can being culturally intelligent significantly impact your life?
        </h1>
        
        <button 
          onClick={() => navigate("/learn/1")}
          className="w-12 h-12 rounded-full border-2 border-foreground bg-background/90 flex items-center justify-center hover:bg-background transition-colors group flex-shrink-0 ml-6"
        >
          <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
