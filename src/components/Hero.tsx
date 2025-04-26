import React from "react";
import { Rocket } from "lucide-react";

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

          <div className="md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-secondary/40 via-primary/30 to-accent/20 rounded-full blur-3xl" />
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-accent/10 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-accent/10">
                    <Rocket className="text-accent mb-2 h-8 w-8" />
                    <h3 className="font-poppins font-semibold text-lg text-textColor">Quick Recovery</h3>
                    <p className="text-textColor-secondary text-sm">Personalized treatment plans</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-accent/10 transform translate-y-4">
                    <div className="h-2 w-16 bg-accent rounded-full mb-2" />
                    <h3 className="font-poppins font-semibold text-lg text-textColor">Expert Care</h3>
                    <p className="text-textColor-secondary text-sm">Professional therapists</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-accent/10 transform -translate-y-4">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                      <div className="h-4 w-4 rounded-full bg-accent" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-textColor">Modern Methods</h3>
                    <p className="text-textColor-secondary text-sm">Latest techniques</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl shadow-sm border border-accent/10">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-2 w-2 rounded-full bg-accent" />
                      ))}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-textColor">Proven Results</h3>
                    <p className="text-textColor-secondary text-sm">High success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-40 -z-10 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198 2C136 86.5 169.5 165 119 241.5C68.5 318 2 334 2 398" stroke="#03CDD2" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
