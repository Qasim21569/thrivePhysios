
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-primary/60 to-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-3 max-w-3xl text-center md:text-left">
            {/* Tagline sequence with subtle animation */}
            <div className="space-y-0 md:space-y-1">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-textColor opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Move Better
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-textColor opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Feel Better
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-accent opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
                Thrive Better
              </h1>
            </div>
            
            <p className="text-base md:text-xl text-textColor-secondary max-w-xl mt-6 opacity-0 animate-fade-in px-4 md:px-0" style={{ animationDelay: "1.4s" }}>
              Professional physiotherapy services to help you recover, 
              strengthen, and improve your quality of life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 opacity-0 animate-fade-in w-full sm:w-auto" style={{ animationDelay: "1.8s" }}>
              <a href="#contact" className="button-primary w-full sm:w-auto text-center">
                Book a Consultation
              </a>
              <a href="#about" className="button-secondary w-full sm:w-auto text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative abstract line art shape */}
      <div className="absolute right-0 top-40 -z-10 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198 2C136 86.5 169.5 165 119 241.5C68.5 318 2 334 2 398" stroke="#03CDD2" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
