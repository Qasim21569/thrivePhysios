import React from 'react';
import { Button } from "@/components/ui/button";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'left': return 'translate3d(-50px, 0, 0)';
      case 'right': return 'translate3d(50px, 0, 0)';
      case 'down': return 'translate3d(0, 50px, 0)';
      default: return 'translate3d(0, 50px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 md:pt-52 pb-16 md:pb-20 bg-gradient-to-b from-primary/60 to-white"
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
            
            <FadeIn delay={1.4} direction="left">
              <div className="flex flex-col sm:flex-row gap-4 px-4 md:px-0">
                                 <Button 
                   className="button-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                   onClick={() => {
                     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                   Book a Consultation
                 </Button>
                 <Button 
                   variant="outline" 
                   className="button-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                   onClick={() => {
                     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                   Learn More
                 </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6} direction="right" className="md:w-1/2 relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-poppins font-medium text-textColor">
                        Comprehensive Care
                      </h3>
                      <p className="text-sm md:text-base text-textColor-secondary mt-1">
                        Personalized treatment plans tailored to your needs
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-poppins font-medium text-textColor">
                        Expert Therapists
                      </h3>
                      <p className="text-sm md:text-base text-textColor-secondary mt-1">
                        Highly qualified professionals at your service
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-poppins font-medium text-textColor">
                        Proven Results
                      </h3>
                      <p className="text-sm md:text-base text-textColor-secondary mt-1">
                        High success rate with lasting outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative SVG */}
      <div className="absolute bottom-0 left-0 opacity-10">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198 2C136 86.5 169.5 165 119 241.5C68.5 318 2 334 2 398" stroke="#03CDD2" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
