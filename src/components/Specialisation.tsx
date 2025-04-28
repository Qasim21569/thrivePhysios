import React, { useEffect, useState } from "react";
import { 
  Activity, 
  Bandage, 
  Heart, 
  Accessibility,
  Home 
} from "lucide-react";

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

interface SpecialisationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SpecialisationCard: React.FC<SpecialisationCardProps> = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-accent/30 hover:translate-y-[-5px] h-full">
        <div className="text-accent mb-4">{icon}</div>
        <h3 className="text-xl font-poppins font-medium text-textColor mb-3">{title}</h3>
        <p className="text-textColor-secondary">{description}</p>
      </div>
    </FadeIn>
  );
};

const Specialisation = () => {
  const specialisations = [
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Specialized treatment to help athletes and active individuals recover from sports-related injuries and return to their activities.",
      icon: <Activity size={32} />,
    },
    {
      title: "Post-Surgery Recovery",
      description:
        "Comprehensive rehabilitation programs designed to optimize recovery following surgical procedures.",
      icon: <Bandage size={32} />,
    },
    {
      title: "Neck & Back Pain Treatment",
      description:
        "Expert care for chronic or acute neck and back pain, addressing the root cause for long-term relief.",
      icon: <Heart size={32} />,
    },
    {
      title: "Geriatric Care",
      description:
        "Specialized physiotherapy services for older adults focusing on mobility, balance, and quality of life.",
      icon: <Accessibility size={32} />,
    },
    {
      title: "Home Physiotherapy Services",
      description:
        "Convenience of professional physiotherapy treatment in the comfort of your own home.",
      icon: <Home size={32} />,
    },
  ];

  // First 3 cards for the top row
  const topRowCards = specialisations.slice(0, 3);
  // Last 2 cards for the bottom row
  const bottomRowCards = specialisations.slice(3);

  return (
    <section id="specialisation" className="py-20 bg-primary/20">
      <div className="container-section">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="section-title">Our Specialisations</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <p className="section-subtitle">
            We offer a comprehensive range of physiotherapy services tailored to meet your specific needs.
          </p>
        </FadeIn>

        {/* Top row cards - 3 cards in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {topRowCards.map((specialisation, index) => (
            <SpecialisationCard
              key={index}
              index={index}
              title={specialisation.title}
              description={specialisation.description}
              icon={specialisation.icon}
            />
          ))}
        </div>
        
        {/* Bottom row cards - centered using flex */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {bottomRowCards.map((specialisation, index) => (
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" key={index}>
              <SpecialisationCard
                index={index + 3}
                title={specialisation.title}
                description={specialisation.description}
                icon={specialisation.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
