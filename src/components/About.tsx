
import React from "react";
import { Button } from "./ui/button";
import { Users, Award, CheckCircle } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";

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
  const happyPatientsCounter = useCountAnimation({ end: 2000 });
  const experienceCounter = useCountAnimation({ end: 15 });
  const successRateCounter = useCountAnimation({ end: 100 });

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
    <section id="about" className="py-16 md:py-20">
      <div className="container-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          With over 15 years of combined experience, our team of expert
          physiotherapists is dedicated to delivering exceptional results
          for all our patients.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                We offer both clinic-based and home visit services to ensure you receive
                the care you need in the setting that works best for you.
              </p>
            </div>
            <div className="pt-6">
              <Button
                className="w-full sm:w-auto button-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute w-64 h-64 rounded-full bg-accent/10 -z-10 -right-10 -top-10"></div>
            <div className="absolute w-32 h-32 rounded-full bg-accent/5 -z-10 left-10 bottom-10"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
              alt="Physiotherapy Session"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-poppins font-medium text-textColor mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-textColor-secondary text-base md:text-lg mb-12 max-w-3xl mx-auto">
            Our team consists of highly qualified physiotherapists with specialized training 
            and years of experience in different areas of physical therapy.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 p-6">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-accent/5 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-accent/50 group-hover:border-accent transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-poppins font-medium text-xl text-textColor mb-2">
                    {member.name}
                  </h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <div className="h-0.5 w-12 bg-accent/30 rounded-full mx-auto mb-4" />
                  
                  <div className="space-y-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
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
                  
                  <Button 
                    variant="outline"
                    className="mt-4 w-full bg-white hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button
              variant="secondary"
              className="group inline-flex items-center gap-2 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Team
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
