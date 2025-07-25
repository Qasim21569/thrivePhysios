import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Users, Award, CheckCircle, Instagram, Linkedin } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { trackEvent } from "@/hooks/useGoogleAnalytics";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  gender: 'male' | 'female';
  image: string;
  specialty?: string;
  experience?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

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

const About = () => {
  const happyPatientsCounter = useCountAnimation({ end: 200 });
  const experienceCounter = useCountAnimation({ end: 10 });
  const successRateCounter = useCountAnimation({ end: 99 });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "PT. Saud Patel", 
      role: "Neuro & Sports Rehab Expert",
      gender: "male",
      image: "/saud.jpeg",
      specialty: "",
      experience: "",
      socialLinks: {
        instagram: "https://www.instagram.com/_physio.sp?igsh=YnkyMWVnNmU3YnZx",
        linkedin: "https://www.linkedin.com/in/saud-patel-0749a0339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    },
    // {
    //   id: 2,
    //   name: "PT. Hamza Tanwar",
    //   role: "Geriatric & Neuro Rehab Expert",
    //   gender: "male",
    //   image: "/hamza.jpeg",
    //   specialty: "",
    //   experience: "",
    //   socialLinks: {
    //     instagram: "https://www.instagram.com/active_therapeutic?igsh=ZWxya2V1amhvZDk0",
    //     linkedin: "https://www.linkedin.com/in/hamza-tanwar-1a954b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    //   }
    // },
    // {
    //   id: 3,
    //   name: "PT. Usman Daduji",
    //   role: "Sports & Ortho Rehab Expert",
    //   gender: "male",
    //   image: "/usman.jpeg",
    //   specialty: "",
    //   experience: "",
    //   socialLinks: {
    //     instagram: "https://www.instagram.com/usmanphysio_04?igsh=ajlucXMxdzQ3b2lu",
    //     linkedin: "https://in.linkedin.com/in/usman-daduji-673547362"
    //   }
    // },
    {
      id: 4,
      name: "PT. Afiya Halai",
      role: "Neuro & Geriatric Rehab Expert",
      gender: "female",
      image: "/afiya.jpeg",
      specialty: "",
      experience: "",
      socialLinks: {
        instagram: "https://instagram.com/afiya.halai",
        linkedin: "https://linkedin.com/in/afiya-halai"
      }
    },
    // {
    //   id: 5,
    //   name: "PT. Ayesha Charolia",
    //   role: "Ortho & Sports Rehab Expert",
    //   gender: "female",
    //   image: "/ayesha.jpeg",
    //   specialty: "",
    //   experience: "",
    //   socialLinks: {
    //     instagram: "https://instagram.com/ayesha.charolia",
    //     linkedin: "https://linkedin.com/in/ayesha-charolia"
    //   }
    // },
  ];

  const maleMembers = teamMembers.filter(member => member.gender === 'male');
  const femaleMembers = teamMembers.filter(member => member.gender === 'female');

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container-section">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="section-title">About Us</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="section-subtitle">
            With over 15 years of combined experience, our team of expert
            physiotherapists is dedicated to delivering exceptional results
            for all our patients.
          </p>
        </FadeIn>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
          <FadeIn direction="up" delay={0.3}>
            <div 
              ref={happyPatientsCounter.ref}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-textColor mb-2">
                {happyPatientsCounter.count}+
              </h3>
              <p className="text-textColor-secondary">Happy Patients</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <div 
              ref={experienceCounter.ref}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-textColor mb-2">
                {experienceCounter.count}+ Years
              </h3>
              <p className="text-textColor-secondary">Combined Experience</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div 
              ref={successRateCounter.ref}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <CheckCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-textColor mb-2">
                {successRateCounter.count}%
              </h3>
              <p className="text-textColor-secondary">Success Rate</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" delay={0.3}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor">
                Expert Care You Can Trust
              </h3>
              <div className="space-y-4 mt-6">
                <p className="text-textColor-secondary text-base md:text-lg">
                  At Thrive Physios, we believe in a holistic approach to physical wellbeing.
                  Our team combines extensive knowledge with personalized treatment plans 
                  to address your specific needs and goals.
                </p>
                <p className="text-textColor-secondary text-base md:text-lg">
                  We currently provide premium home visit physiotherapy services, bringing expert care directly to your doorstep. 
                  Our clinic-based services will be available soon, expanding our commitment to delivering exceptional care in the 
                  setting that works best for you.
                </p>
              </div>
              <div className="pt-6">
                <Button
                  className="w-full sm:w-auto button-primary"
                  onClick={() => {
                    trackEvent('button_click', 'consultation', 'schedule_consultation');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.4}>
            <div className="relative hidden lg:block">
              <div className="absolute w-64 h-64 rounded-full bg-accent/10 -z-10 -right-10 -top-10"></div>
              <div className="absolute w-32 h-32 rounded-full bg-accent/5 -z-10 left-10 bottom-10"></div>
              <img
                src="/backround.JPG"
                alt="Physiotherapy Session"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </FadeIn>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor mb-4">
              Meet Our Expert Team
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-textColor-secondary text-base md:text-lg mb-12 max-w-3xl mx-auto">
              Our team consists of highly qualified physiotherapists with specialized training 
              and years of experience in different areas of physical therapy.
            </p>
          </FadeIn>
          
          {/* Male Physios Section */}
          <FadeIn direction="up" delay={0.4}>
            <h4 className="text-xl font-medium text-textColor mb-6">Male Physios</h4>
          </FadeIn>
          {/* ✅ FIX: Conditional classes for centering */}
          <div 
            className={
              maleMembers.length > 1 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                : "flex justify-center mb-12"
            }
          >
            {maleMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 w-full max-w-sm" // Added max-width
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-in-out"></div>
                
                <div className="relative p-6">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                  </div>
                  
                  <h4 className="font-poppins font-medium text-xl text-textColor mb-2 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    {member.specialty && (
                      <p className="text-textColor-secondary text-sm">
                        <span className="font-medium">Specialty:</span> {member.specialty}
                      </p>
                    )}
                    {member.experience && (
                      <p className="text-textColor-secondary text-sm">
                        <span className="font-medium">Experience:</span> {member.experience}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex justify-center space-x-4 mb-4">
                    {member.socialLinks?.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="mt-2 w-full bg-white hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Female Physios Section */}
          <FadeIn direction="up" delay={0.5}>
            <h4 className="text-xl font-medium text-textColor mb-6">Female Physios</h4>
          </FadeIn>
          {/* ✅ FIX: Conditional classes for centering */}
          <div 
            className={
              femaleMembers.length > 1
                ? "grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto"
                : "flex justify-center mb-12 max-w-3xl mx-auto"
            }
          >
            {femaleMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 w-full max-w-sm" // Added max-width
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-in-out"></div>
                
                <div className="relative p-6">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                  </div>
                  
                  <h4 className="font-poppins font-medium text-xl text-textColor mb-2 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    {member.specialty && (
                      <p className="text-textColor-secondary text-sm">
                        <span className="font-medium">Specialty:</span> {member.specialty}
                      </p>
                    )}
                    {member.experience && (
                      <p className="text-textColor-secondary text-sm">
                        <span className="font-medium">Experience:</span> {member.experience}
                      </p>
                    )}
                  </div>

                  {/* ✅ FIX: Added missing social links */}
                  <div className="flex justify-center space-x-4 mb-4">
                    {member.socialLinks?.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="mt-2 w-full bg-white hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;