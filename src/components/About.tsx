
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  gender: 'male' | 'female';
  image: string;
}

const About = () => {
  // Mock team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "Senior Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300", 
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Sports Rehabilitation Specialist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      id: 3,
      name: "Dr. Robert Taylor",
      role: "Orthopedic Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      role: "Pediatric Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      id: 5,
      name: "Dr. Emily Parker",
      role: "Geriatric Care Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    },
  ];

  const maleMembers = teamMembers.filter(member => member.gender === 'male');
  const femaleMembers = teamMembers.filter(member => member.gender === 'female');

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-8">About Us</h2>
        <p className="section-subtitle px-4">
          With over 15 years of combined experience, our team of expert
          physiotherapists is dedicated to delivering exceptional results
          for all our patients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6 text-center md:text-left px-4 md:px-0">
            <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor">
              Expert Care You Can Trust
            </h3>
            <p className="text-textColor-secondary text-base md:text-lg">
              At Thrive Physios, we believe in a holistic approach to physical wellbeing.
              Our team combines extensive knowledge with personalized treatment plans 
              to address your specific needs and goals.
            </p>
            <p className="text-textColor-secondary text-base md:text-lg">
              We offer both clinic-based and home visit services to ensure you receive
              the care you need in the setting that works best for you. Our diverse team includes
              both male and female physiotherapists, allowing you to choose the practitioner
              you feel most comfortable with.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <a href="#contact" className="button-primary w-full md:w-auto text-center">
                Schedule a Consultation
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute w-64 h-64 rounded-full bg-primary/50 -z-10 -right-10 -top-10"></div>
            <div className="absolute w-32 h-32 rounded-full bg-secondary/70 -z-10 left-10 bottom-10"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
              alt="Physiotherapy Session"
              className="rounded-lg shadow-md w-full object-cover h-full"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 md:mt-20 text-center px-4 md:px-0">
          <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor mb-8">
            Meet Our Team
          </h3>
          
          {/* Male Team Members Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {maleMembers.map((member) => (
              <div key={member.id} className="bg-primary/20 p-4 md:p-6 rounded-lg transition-all hover:shadow-md">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-3 md:mb-4 border-2 border-accent"
                  />
                  <h4 className="font-poppins font-medium text-lg md:text-xl text-textColor">
                    {member.name}
                  </h4>
                  <p className="text-textColor-secondary text-sm md:text-base mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Female Team Members Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {femaleMembers.map((member) => (
              <div key={member.id} className="bg-primary/20 p-4 md:p-6 rounded-lg transition-all hover:shadow-md">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-3 md:mb-4 border-2 border-accent"
                  />
                  <h4 className="font-poppins font-medium text-lg md:text-xl text-textColor">
                    {member.name}
                  </h4>
                  <p className="text-textColor-secondary text-sm md:text-base mt-1">
                    {member.role}
                  </p>
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
