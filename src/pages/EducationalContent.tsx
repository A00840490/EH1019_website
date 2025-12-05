import { useParams, useNavigate } from "react-router-dom";
import { educationalPages } from "@/data/educationalContent";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Import local images
import eduTeamCollaboration from "@/assets/edu-team-collaboration.jpg";
import eduStudentsLearning from "@/assets/edu-students-learning.jpg";
import eduTeamMeeting from "@/assets/edu-team-meeting.jpg";
import eduProfessionalWoman from "@/assets/edu-professional-woman.jpg";
import eduBusinessMeeting from "@/assets/edu-business-meeting.jpg";
import eduDiverseProfessionals from "@/assets/edu-diverse-professionals.jpg";
import eduTeamDiscussion from "@/assets/edu-team-discussion.jpg";
import eduWorkshop from "@/assets/edu-workshop.jpg";
import eduGroupFriends from "@/assets/edu-group-friends.jpg";
import eduOfficeCollaboration from "@/assets/edu-office-collaboration.jpg";
import eduMulticulturalGroup from "@/assets/edu-multicultural-group.jpg";
import eduGlobalMeeting from "@/assets/edu-global-meeting.jpg";
import eduBrainstorming from "@/assets/edu-brainstorming.jpg";
import eduHandshake from "@/assets/edu-handshake.jpg";
import eduPresentation from "@/assets/edu-presentation.jpg";

const EducationalContent = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(pageId || "1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleBlocks, setVisibleBlocks] = useState<Set<number>>(new Set());
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const content = educationalPages.find(p => p.id === currentPage);
  const totalPages = educationalPages.length;

  // Image mapping
  const imageMap: Record<string, string> = {
    "edu-team-collaboration.jpg": eduTeamCollaboration,
    "edu-students-learning.jpg": eduStudentsLearning,
    "edu-team-meeting.jpg": eduTeamMeeting,
    "edu-professional-woman.jpg": eduProfessionalWoman,
    "edu-business-meeting.jpg": eduBusinessMeeting,
    "edu-diverse-professionals.jpg": eduDiverseProfessionals,
    "edu-team-discussion.jpg": eduTeamDiscussion,
    "edu-workshop.jpg": eduWorkshop,
    "edu-group-friends.jpg": eduGroupFriends,
    "edu-office-collaboration.jpg": eduOfficeCollaboration,
    "edu-multicultural-group.jpg": eduMulticulturalGroup,
    "edu-global-meeting.jpg": eduGlobalMeeting,
    "edu-brainstorming.jpg": eduBrainstorming,
    "edu-handshake.jpg": eduHandshake,
    "edu-presentation.jpg": eduPresentation,
  };

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    blockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [content]);

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Page not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      navigate(`/learn/${currentPage + 1}`);
    } else {
      navigate("/quiz");
    }
  };

  const isLastPage = currentPage === totalPages;

  // Pastel colors that transition based on scroll
  const pastelColors = [
    { h: 45, s: 60, l: 90 },   // Warm peach/cream
    { h: 35, s: 55, l: 88 },   // Soft orange
    { h: 25, s: 50, l: 86 },   // Light tan
  ];

  const getBackgroundColor = () => {
    const colorIndex = Math.min(Math.floor(scrollProgress * pastelColors.length), pastelColors.length - 1);
    const nextIndex = Math.min(colorIndex + 1, pastelColors.length - 1);
    const localProgress = (scrollProgress * pastelColors.length) % 1;
    
    const current = pastelColors[colorIndex];
    const next = pastelColors[nextIndex];
    
    const h = current.h + (next.h - current.h) * localProgress;
    const s = current.s + (next.s - current.s) * localProgress;
    const l = current.l + (next.l - current.l) * localProgress;
    
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  // Collect all content blocks for alternating layout
  const contentBlocks: Array<{
    type: "intro" | "component" | "video" | "case" | "text";
    title?: string;
    content?: string;
    data?: any;
    sectionTitle?: string;
    imageUrl?: string;
  }> = [];

  // Add introduction
  contentBlocks.push({
    type: "intro",
    title: content.title,
    content: content.introduction,
    imageUrl: content.introImageUrl,
  });

  // Add sections content
  content.sections.forEach((section) => {
    if (section.content) {
      contentBlocks.push({
        type: "text",
        title: section.title,
        content: section.content,
        imageUrl: section.imageUrl,
      });
    }
    
    section.components?.forEach((component) => {
      contentBlocks.push({
        type: "component",
        title: component.title,
        data: component,
        sectionTitle: section.title,
        imageUrl: component.imageUrl,
      });
    });
    
    section.videos?.forEach((video) => {
      contentBlocks.push({
        type: "video",
        title: video.title,
        data: video,
        sectionTitle: section.title,
        imageUrl: video.imageUrl,
      });
    });
    
    section.cases?.forEach((caseStudy) => {
      contentBlocks.push({
        type: "case",
        title: caseStudy.title,
        data: caseStudy,
        sectionTitle: section.title,
        imageUrl: caseStudy.imageUrl,
      });
    });
  });

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
          className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm"
          aria-label="Go home"
        >
          <Home className="w-5 h-5 text-foreground/70" />
        </button>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-5xl">

        {/* Content Blocks */}
        <div className="space-y-24">
          {contentBlocks.map((block, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleBlocks.has(index);
            const hasImage = !!block.imageUrl;
            const imageSource = block.imageUrl ? imageMap[block.imageUrl] : null;
            
            return (
              <div 
                key={index}
                ref={(el) => (blockRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${!hasImage ? 'max-w-3xl mx-auto' : ''}`}
              >
                {block.type === "video" && block.data.youtubeVideoId ? (
                  /* Video blocks: text above, video below */
                  <div className="space-y-6 max-w-4xl mx-auto">
                    <div className="space-y-4">
                      {block.title && (
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground/90">
                          {block.title}
                        </h2>
                      )}
                      <p className="text-foreground/70 leading-relaxed">{block.data.description}</p>
                      {block.data.educational && (
                        <div className="bg-foreground/5 rounded-lg p-4">
                          <p className="text-sm text-foreground/60">
                            <span className="font-medium text-foreground/80">Learning Point:</span> {block.data.educational}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="w-full aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${block.data.youtubeVideoId}`}
                        title={block.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  /* Non-video blocks: alternating layout */
                  <div className={`flex flex-col ${hasImage ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse') : ''} items-center gap-8 md:gap-16`}>
                    {/* Text Content */}
                    <div className="flex-1 space-y-4">
                      {block.title && (
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground/90">
                          {block.title}
                        </h2>
                      )}
                      
                      {block.type === "intro" && (
                        <p className="text-foreground/70 text-lg leading-relaxed">
                          {block.content}
                        </p>
                      )}

                      {block.type === "text" && (
                        <p className="text-foreground/70 leading-relaxed">
                          {block.content}
                        </p>
                      )}

                      {block.type === "component" && (
                        block.data.isCircularDiagram ? (
                        <div className="flex flex-col items-center space-y-8 w-full py-8">
                          {/* Circular Diagram with 4 Components */}
                          <div className="relative w-full max-w-3xl aspect-square">
                            {/* Text boxes for each quadrant */}
                            {/* Top Right - Motivational */}
                            <div className="absolute top-0 right-0 w-56 -translate-y-4 translate-x-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-blue-200">
                                <p className="text-sm font-bold text-gray-800 mb-2">Motivational</p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Energy to pursue new CQ skills
                                </p>
                              </div>
                            </div>
                            
                            {/* Bottom Right - Knowledge */}
                            <div className="absolute bottom-0 right-0 w-56 translate-y-4 translate-x-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-blue-200">
                                <p className="text-sm font-bold text-gray-800 mb-2">Knowledge</p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  "Head-smarts" about cultural issues
                                </p>
                              </div>
                            </div>
                            
                            {/* Bottom Left - Meta-cognitive */}
                            <div className="absolute bottom-0 left-0 w-56 translate-y-4 -translate-x-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-blue-200">
                                <p className="text-sm font-bold text-gray-800 mb-2">Meta-cognitive</p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Mental capacity around cultural knowledge
                                </p>
                              </div>
                            </div>
                            
                            {/* Top Left - Behavioral */}
                            <div className="absolute top-0 left-0 w-56 -translate-y-4 -translate-x-4">
                              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-blue-200">
                                <p className="text-sm font-bold text-gray-800 mb-2">Behavioral</p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Verbal and nonverbal actions
                                </p>
                              </div>
                            </div>
                            
                            {/* SVG Circle Diagram */}
                            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                              {/* Vertical line */}
                              <line x1="200" y1="50" x2="200" y2="350" stroke="white" strokeWidth="4" />
                              {/* Horizontal line */}
                              <line x1="50" y1="200" x2="350" y2="200" stroke="white" strokeWidth="4" />
                              
                              {/* Top Right Quadrant - Motivational */}
                              <path
                                d="M 200 200 L 200 50 A 150 150 0 0 1 350 200 Z"
                                fill="hsl(220, 70%, 50%)"
                                opacity="0.95"
                                className="hover:opacity-100 transition-opacity"
                              />
                              
                              {/* Bottom Right Quadrant - Knowledge */}
                              <path
                                d="M 200 200 L 350 200 A 150 150 0 0 1 200 350 Z"
                                fill="hsl(220, 70%, 42%)"
                                opacity="0.95"
                                className="hover:opacity-100 transition-opacity"
                              />
                              
                              {/* Bottom Left Quadrant - Meta-cognitive */}
                              <path
                                d="M 200 200 L 200 350 A 150 150 0 0 1 50 200 Z"
                                fill="hsl(220, 70%, 35%)"
                                opacity="0.95"
                                className="hover:opacity-100 transition-opacity"
                              />
                              
                              {/* Top Left Quadrant - Behavioral */}
                              <path
                                d="M 200 200 L 50 200 A 150 150 0 0 1 200 50 Z"
                                fill="hsl(220, 70%, 28%)"
                                opacity="0.95"
                                className="hover:opacity-100 transition-opacity"
                              />
                              
                              {/* Icons for each quadrant */}
                              {/* Motivational - Lightning bolt */}
                              <g transform="translate(270, 125)">
                                <path d="M 0 -8 L -4 2 L 2 2 L -2 12 L 8 0 L 2 0 Z" fill="white" opacity="0.95" />
                              </g>
                              
                              {/* Knowledge - Brain/Head icon */}
                              <g transform="translate(270, 275)">
                                <circle cx="0" cy="0" r="10" fill="white" opacity="0.95" />
                                <path d="M -4 -3 Q 0 -6 4 -3 Q 6 0 4 3 Q 0 6 -4 3 Q -6 0 -4 -3" fill="hsl(220, 70%, 42%)" opacity="0.95" />
                              </g>
                              
                              {/* Meta-cognitive - Lightbulb */}
                              <g transform="translate(130, 275)">
                                <circle cx="0" cy="-4" r="7" fill="white" opacity="0.95" />
                                <rect x="-3" y="3" width="6" height="5" rx="1" fill="white" opacity="0.95" />
                                <line x1="-2" y1="8" x2="2" y2="8" stroke="white" strokeWidth="1.5" opacity="0.95" />
                              </g>
                              
                              {/* Behavioral - People icon */}
                              <g transform="translate(130, 125)">
                                <circle cx="-5" cy="-3" r="3.5" fill="white" opacity="0.95" />
                                <circle cx="5" cy="-3" r="3.5" fill="white" opacity="0.95" />
                                <path d="M -8 2 L -5 10 L -2 10 M 2 10 L 5 10 L 8 2" stroke="white" strokeWidth="2" fill="none" opacity="0.95" />
                              </g>
                              
                              {/* Center circle */}
                              <circle cx="200" cy="200" r="45" fill="white" opacity="0.98" />
                              <text x="200" y="210" textAnchor="middle" fontSize="24" fontWeight="bold" fill="hsl(220, 70%, 40%)">
                                CQ
                              </text>
                              
                              {/* Quadrant labels inside the circle */}
                              <text x="270" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" opacity="0.95">
                                Motivational
                              </text>
                              
                              <text x="270" y="275" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" opacity="0.95">
                                Knowledge
                              </text>
                              
                              <text x="130" y="275" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" opacity="0.95">
                                Meta-cognitive
                              </text>
                              
                              <text x="130" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" opacity="0.95">
                                Behavioral
                              </text>
                            </svg>
                          </div>
                        </div>
                        ) : (
                          <div className="space-y-6">
                            {block.data.points.map((point: string, i: number) => (
                              <div 
                                key={i} 
                                className="bg-foreground/5 rounded-lg p-4 border-l-4 border-foreground/20 hover:border-foreground/40 transition-colors"
                              >
                                <p className="text-foreground/70 leading-relaxed">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        )
                      )}

                      {block.type === "case" && (
                        <div className="space-y-4">
                          <p className="text-foreground/70 italic leading-relaxed">"{block.data.scenario}"</p>
                          <div className="bg-foreground/5 rounded-lg p-4">
                            <p className="text-sm text-foreground/60">
                              <span className="font-medium text-foreground/80">Analysis:</span> {block.data.analysis}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual Element - Only if imageUrl is specified */}
                    {hasImage && imageSource && (
                      <div className="flex-shrink-0 w-full md:w-auto">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto">
                          <img
                            src={imageSource}
                            alt="Cultural intelligence illustration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center pt-20">
          {isLastPage ? (
            <Button 
              onClick={handleNext}
              className="px-8 py-3 text-lg"
            >
              Take Quiz
            </Button>
          ) : (
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border-2 border-foreground/30 bg-transparent flex items-center justify-center hover:bg-foreground/10 transition-colors group"
            >
              <ArrowRight className="w-6 h-6 text-foreground/70 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationalContent;