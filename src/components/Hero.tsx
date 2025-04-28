import React, { useEffect, useState } from "react";
import { LayoutGrid } from "lucide-react";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getTransform = () => {
    if (direction === "up") return "translateY(20px)";
    if (direction === "down") return "translateY(-20px)";
    if (direction === "left") return "translateX(20px)";
    if (direction === "right") return "translateX(-20px)";
    return "translateY(0)";
  };
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0) translateX(0)" : getTransform(),
    transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
    transitionDelay: `${delay}s`,
    height: '100%'
  };
  
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-primary/60 to-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 md:space-y-10 md:w-1/2">
            <div className="space-y-0 md:space-y-1">
              <FadeIn delay={0.2} direction="left">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-textColor">
                  Move Better
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.5} direction="left">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-textColor">
                  Feel Better
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.8} direction="left">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold">
                  <span className="shimmer-text inline-flex">Thrive</span>
                  <span className="text-textColor"> Better</span>
                </h1>
              </FadeIn>
            </div>
            
            <FadeIn delay={1.1} direction="left">
              <p className="text-base md:text-xl text-textColor-secondary max-w-xl mt-6 px-4 md:px-0">
                Professional physiotherapy services to help you recover, 
                strengthen, and improve your quality of life.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
                <a href="#contact" className="button-primary w-full sm:w-auto text-center">
                  Book a Consultation
                </a>
                <a href="#about" className="button-secondary w-full sm:w-auto text-center">
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.8} direction="right" className="md:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-secondary/40 via-primary/30 to-accent/20 rounded-full blur-3xl" />
              
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-accent/10">
                <div className="space-y-6">
                  <FadeIn delay={1.2} direction="up">
                    <div className="flex items-center gap-6 p-4 bg-white/80 rounded-2xl border border-accent/10 hover:shadow-md transition-all">
                      <div className="flex-shrink-0">
                        <LayoutGrid className="h-10 w-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-textColor">Comprehensive Care</h3>
                        <p className="text-textColor-secondary">Personalized treatment plans tailored to your needs</p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={1.4} direction="up">
                    <div className="flex items-center gap-6 p-4 bg-white/80 rounded-2xl border border-accent/10 hover:shadow-md transition-all">
                      <div className="flex-shrink-0 h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <div className="h-5 w-5 bg-accent rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-textColor">Expert Therapists</h3>
                        <p className="text-textColor-secondary">Highly qualified professionals at your service</p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={1.6} direction="up">
                    <div className="flex items-center gap-6 p-4 bg-white/80 rounded-2xl border border-accent/10 hover:shadow-md transition-all">
                      <div className="flex-shrink-0">
                        <div className="w-10 space-y-1.5">
                          <div className="h-1.5 w-full bg-accent rounded-full" />
                          <div className="h-1.5 w-3/4 bg-accent rounded-full" />
                          <div className="h-1.5 w-1/2 bg-accent rounded-full" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-textColor">Proven Results</h3>
                        <p className="text-textColor-secondary">High success rate with lasting outcomes</p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute right-0 top-40 -z-10 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198 2C136 86.5 169.5 165 119 241.5C68.5 318 2 334 2 398" stroke="#03CDD2" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shimmer-text {
          background: linear-gradient(90deg, 
            #03CDD2 0%, 
            #8EEDFF 35%, 
            #03CDD2 60%, 
            #37B3B8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
