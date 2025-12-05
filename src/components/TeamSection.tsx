import { User } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image?: string;
}

import sergio from "@/assets/Sergio_Ramos.png";
import johanna from "@/assets/Johanna_Petterson.png";
import alejandro from "@/assets/Alejandro_Orta.png";
import angela from "@/assets/Angela_Lizeth.png";

const teamMembers: TeamMember[] = [
  {
    name: "Sergio",
    title: "Project Leader / Presenter",
    description: "I am the project leader for our Cultural Intelligence educational material. I coordinate the team, make decisions, and guide the structure of our videos and website for GlobalConnect Inc.",
    image: sergio,
  },
  {
    name: "Johanna",
    title: "Expert Role + Research Lead",
    description: "I take the role of the Cultural Intelligence expert, and I also lead the research process. My job is to make sure our content is accurate, practical, and useful for GlobalConnect employees.",
    image: johanna,
  },
  {
    name: "Alejandro",
    title: "Case Creator / Script Writer",
    description: "I am responsible for creating the workplace cases and writing scripts for our training videos. My focus is designing realistic examples that show how Cultural Intelligence works inside GlobalConnect.",
    image: alejandro,
  },
  {
    name: "Angela",
    title: "Website Designer / Production Manager",
    description: "I'm in charge of designing the website and helping manage the video production. I make sure our educational material looks professional, clear, and easy for GlobalConnect employees to use.",
    image: angela,
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A team passionate about promoting cultural intelligence and building bridges between different cultures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 text-secondary" />
                )}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
