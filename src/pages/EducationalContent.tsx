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

  // Relevant images for different content types - no repeats
  const allImages = [
    eduTeamCollaboration,
    eduStudentsLearning,
    eduTeamMeeting,
    eduProfessionalWoman,
    eduBusinessMeeting,
    eduDiverseProfessionals,
    eduTeamDiscussion,
    eduWorkshop,
    eduGroupFriends,
    eduOfficeCollaboration,
    eduMulticulturalGroup,
    eduGlobalMeeting,
    eduBrainstorming,
    eduHandshake,
    eduPresentation,
  ];
  
  // Track used images per page to avoid repetition
  const usedImageIndices = useRef<Set<number>>(new Set());
  
  useEffect(() => {
    usedImageIndices.current.clear();
  }, [currentPage]);

  const getImageForBlock = (type: string, blockIndex: number): string => {
    // Find an unused image
    let imageIndex = blockIndex % allImages.length;
    while (usedImageIndices.current.has(imageIndex) && usedImageIndices.current.size < allImages.length) {
      imageIndex = (imageIndex + 1) % allImages.length;
    }
    usedImageIndices.current.add(imageIndex);
    return allImages[imageIndex];
  };

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
  }> = [];

  // Add introduction
  contentBlocks.push({
    type: "intro",
    title: content.title,
    content: content.introduction,
  });

  // Add sections content
  content.sections.forEach((section) => {
    if (section.content) {
      contentBlocks.push({
        type: "text",
        title: section.title,
        content: section.content,
      });
    }
    
    section.components?.forEach((component) => {
      contentBlocks.push({
        type: "component",
        title: component.title,
        data: component,
        sectionTitle: section.title,
      });
    });
    
    section.videos?.forEach((video) => {
      contentBlocks.push({
        type: "video",
        title: video.title,
        data: video,
        sectionTitle: section.title,
      });
    });
    
    section.cases?.forEach((caseStudy) => {
      contentBlocks.push({
        type: "case",
        title: caseStudy.title,
        data: caseStudy,
        sectionTitle: section.title,
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
            const showVisual = index % 3 !== 2; // Show visual for 2 out of every 3 blocks
            
            return (
              <div 
                key={index}
                ref={(el) => (blockRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${!showVisual ? 'max-w-3xl mx-auto' : ''}`}
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
                      <div className="bg-foreground/5 rounded-lg p-4">
                        <p className="text-sm text-foreground/60">
                          <span className="font-medium text-foreground/80">Learning Point:</span> {block.data.educational}
                        </p>
                      </div>
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
                  <div className={`flex flex-col ${showVisual ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse') : ''} items-center gap-8 md:gap-16`}>
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
                        <ul className="space-y-3">
                          {block.data.points.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-foreground/70">
                              <span className="w-2 h-2 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
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

                    {/* Visual Element */}
                    {showVisual && (
                      <div className="flex-shrink-0 w-full md:w-auto">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto">
                          <img
                            src={block.data?.imageUrl || getImageForBlock(block.type, index)}
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