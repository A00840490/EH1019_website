import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <HeroSection />
      <ContentSection />
      <TeamSection />
    </div>
  );
};

export default Index;
