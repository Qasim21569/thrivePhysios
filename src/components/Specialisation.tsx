
import React from "react";
import { 
  Activity, 
  Bandage, 
  Bed, 
  Heart, 
  User, 
  AccessibleIcon,
  Home 
} from "lucide-react";

interface SpecialisationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SpecialisationCard: React.FC<SpecialisationCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-accent/30 hover:translate-y-[-5px]">
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-poppins font-medium text-textColor mb-3">{title}</h3>
      <p className="text-textColor-secondary">{description}</p>
    </div>
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
      title: "Pediatric Physiotherapy",
      description:
        "Gentle, child-friendly approaches to help young patients develop motor skills and overcome physical challenges.",
      icon: <User size={32} />,
    },
    {
      title: "Geriatric Care",
      description:
        "Specialized physiotherapy services for older adults focusing on mobility, balance, and quality of life.",
      icon: <AccessibleIcon size={32} />,
    },
    {
      title: "Home Physiotherapy Services",
      description:
        "Convenience of professional physiotherapy treatment in the comfort of your own home.",
      icon: <Home size={32} />,
    },
  ];

  return (
    <section id="specialisation" className="py-20 bg-primary/20">
      <div className="container-section">
        <h2 className="section-title">Our Specialisations</h2>
        <p className="section-subtitle">
          We offer a comprehensive range of physiotherapy services tailored to meet your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {specialisations.map((specialisation, index) => (
            <SpecialisationCard
              key={index}
              title={specialisation.title}
              description={specialisation.description}
              icon={specialisation.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
