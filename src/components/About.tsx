import React from "react";
import { Button } from "./ui/button";
import { Users, Award, CheckCircle, Instagram, Linkedin } from "lucide-react";
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
  const happyPatientsCounter = useCountAnimation({ end: 200 });
  const experienceCounter = useCountAnimation({ end: 10 });
  const successRateCounter = useCountAnimation({ end: 100 });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "PT. Saud Patel",
      role: "Senior Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "",
      experience: ""
    },
    {
      id: 2,
      name: "PT. Hamza Tanwar",
      role: "Sports Rehabilitation Specialist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "",
      experience: ""
    },
    {
      id: 3,
      name: "PT. Usman Daduji",
      role: "Orthopedic Physiotherapist",
      gender: "male",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "",
      experience: ""
    },
    {
      id: 4,
      name: "PT. Afiya Halai",
      role: "Pediatric Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "",
      experience: ""
    },
    {
      id: 5,
      name: "PT. Ayesha Charolia",
      role: "Geriatric Care Specialist",
      gender: "female",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "",
      experience: ""
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
              src="/backround.JPG"
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
          
          {/* Male Physios Section */}
          <h4 className="text-xl font-medium text-textColor mb-6">Male Physios</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {maleMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top border effect */}
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
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300">
                      <Linkedin size={18} />
                    </a>
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
          <h4 className="text-xl font-medium text-textColor mb-6">Females</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            {femaleMembers.map((member) => (
              <div 
                key={member.id} 
                className="group relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top border effect */}
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
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white text-accent border border-accent/30 hover:bg-accent hover:text-white transition-colors duration-300">
                      <Linkedin size={18} />
                    </a>
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
