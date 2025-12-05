import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Home, RotateCcw } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleQuestions, setVisibleQuestions] = useState<Set<number>>(new Set());
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalQuestions = quizQuestions.length;
  const answeredCount = Object.keys(answers).length;

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            setVisibleQuestions((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    questionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Pastel colors that transition based on scroll
  const pastelColors = [
    { h: 45, s: 60, l: 90 },
    { h: 35, s: 55, l: 88 },
    { h: 25, s: 50, l: 86 },
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

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((score, [index, answer]) => {
      return answer === quizQuestions[parseInt(index)].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const handleRestart = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={() => navigate("/")}
          className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm"
          aria-label="Go home"
        >
          <Home className="w-5 h-5 text-foreground/70" />
        </button>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground/90 mb-12 text-center">
          Test Your Knowledge (Quiz)
        </h1>

        {/* All Questions */}
        <div className="space-y-8">
          {quizQuestions.map((question, questionIndex) => {
            const isVisible = visibleQuestions.has(questionIndex);
            
            return (
              <div 
                key={questionIndex}
                ref={(el) => (questionRefs.current[questionIndex] = el)}
                data-index={questionIndex}
                className={`bg-foreground/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-lg md:text-xl font-serif font-semibold text-foreground/90 mb-6">
                  {questionIndex + 1}. {question.question}
                </h2>

                <RadioGroup 
                  value={answers[questionIndex] || ""} 
                  onValueChange={(value) => handleAnswerChange(questionIndex, value)}
                  className="space-y-3"
                  disabled={showResults}
                >
                  {question.allOptions.map((option, optionIndex) => (
                    <div 
                      key={optionIndex}
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all ${
                        showResults 
                          ? "cursor-default border-foreground/10"
                          : answers[questionIndex] === option 
                            ? "border-foreground/40 bg-foreground/10 cursor-pointer" 
                            : "border-foreground/10 hover:border-foreground/20 cursor-pointer hover:bg-foreground/5"
                      }`}
                      onClick={() => !showResults && handleAnswerChange(questionIndex, option)}
                    >
                      <RadioGroupItem value={option} id={`q${questionIndex}-option-${optionIndex}`} />
                      <Label 
                        htmlFor={`q${questionIndex}-option-${optionIndex}`} 
                        className={`flex-1 ${showResults ? "cursor-default" : "cursor-pointer"} text-foreground/80`}
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}
        </div>

        {/* Submit Button or Results */}
        <div className="mt-12">
          {!showResults ? (
            <div className="text-center">
              <p className="text-foreground/60 mb-6">
                You have answered {answeredCount} of {totalQuestions} questions
              </p>
              <Button 
                onClick={handleSubmit}
                disabled={answeredCount < totalQuestions}
                size="lg"
                className="px-8"
              >
                Submit Answers
              </Button>
            </div>
          ) : (
            <div className="bg-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground/90 mb-6">
                Your Result
              </h2>
              
              <div className="my-8">
                <div className="text-6xl md:text-7xl font-bold text-foreground/90 mb-3">
                  {percentage}%
                </div>
                <p className="text-foreground/60 text-lg">
                  You got {score} out of {totalQuestions} questions correct
                </p>
              </div>

              <div className="mb-8">
                {percentage >= 80 && (
                  <p className="text-lg text-foreground/80">
                    Excellent! You have high cultural intelligence.
                  </p>
                )}
                {percentage >= 50 && percentage < 80 && (
                  <p className="text-lg text-foreground/80">
                    Good job! You are on your way to improving your cultural intelligence.
                  </p>
                )}
                {percentage < 50 && (
                  <p className="text-lg text-foreground/70">
                    There are opportunities to develop your cultural intelligence.
                  </p>
                )}
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={handleRestart} variant="outline" className="border-foreground/20 hover:bg-foreground/10">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={() => navigate("/")}>
                  Go Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;