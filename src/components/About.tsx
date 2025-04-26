
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  gender: 'male' | 'female';
  image: string;
  specialty?: string;
  experience?: string;
}

const About = () => {
  // Enhanced team members data with more details
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "Senior Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Sports Injuries",
      experience: "12+ years"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Sports Rehabilitation Specialist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Spinal Rehabilitation",
      experience: "8+ years"
    },
    {
      id: 3,
      name: "Dr. Robert Taylor",
      role: "Orthopedic Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Joint Mobilization",
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      role: "Pediatric Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Child Development",
      experience: "7+ years"
    },
    {
      id: 5,
      name: "Dr. Emily Parker",
      role: "Geriatric Care Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Pain Management",
      experience: "9+ years"
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

        {/* Enhanced Team Section */}
        <div className="mt-16 md:mt-20 text-center px-4 md:px-0">
          <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-textColor-secondary text-base md:text-lg mb-10 max-w-3xl mx-auto">
            Our team consists of highly qualified physiotherapists with specialized training and years of experience in different areas of physical therapy.
          </p>
          
          {/* Team Members Grid - Single responsive grid for all members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-gradient-to-br from-primary/30 to-secondary/30 p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-accent/20 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-accent group-hover:border-4 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-poppins font-medium text-xl md:text-2xl text-textColor mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium text-sm md:text-base mb-2">
                    {member.role}
                  </p>
                  <div className="h-0.5 w-12 bg-accent/50 rounded-full mb-3"></div>
                  
                  {/* Additional information with hover effect */}
                  <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
                  
                  <button className="mt-4 bg-white text-accent border border-accent rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-4">
            <a href="#contact" className="button-secondary inline-flex items-center gap-2">
              Join Our Team
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
