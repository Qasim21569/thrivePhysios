import React from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-textColor text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img 
                src="/logov1.png" 
                alt="Thrive Physios Logo" 
                className="h-10 w-auto object-contain mr-1"
              />
              {/* 
                Size options for testing:
                - Small: text-2xl
                - Medium: text-3xl (current)
                - Large: text-4xl
                - Extra Large: text-5xl
                
                To change size, uncomment the preferred size option below and comment out the others
              */}
              <h2 className="font-poppins font-bold">
                {/* Small Size */}
                {/* <span className="footer-shimmer-text text-2xl">Thrive</span> <span className="text-white text-2xl">Physios</span> */}
                
                {/* Medium Size (Current) */}
                <span className="footer-shimmer-text text-3xl">Thrive</span> <span className="text-white text-3xl">Physios</span>
                
                {/* Large Size */}
                {/* <span className="footer-shimmer-text text-4xl">Thrive</span> <span className="text-white text-4xl">Physios</span> */}
                
                {/* Extra Large Size */}
                {/* <span className="footer-shimmer-text text-5xl">Thrive</span> <span className="text-white text-5xl">Physios</span> */}
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Professional physiotherapy services helping you move better, feel better, and thrive better.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/thrive_physios?igsh=MWtrMjJ1ZnZqMXV6bg==" 
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.instagram.com/thrive_physios?igsh=MWtrMjJ1ZnZqMXV6bg==" 
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/thrive_physios?igsh=MWtrMjJ1ZnZqMXV6bg==" 
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#specialisation" className="text-gray-300 hover:text-accent transition-colors">Specialisations</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-accent transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-medium text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Sports Injury Rehabilitation</li>
              <li className="text-gray-300">Post-Surgery Recovery</li>
              <li className="text-gray-300">Neck & Back Pain Treatment</li>
              <li className="text-gray-300">Pediatric Physiotherapy</li>
              <li className="text-gray-300">Geriatric Care</li>
              <li className="text-gray-300">Home Physiotherapy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-poppins font-medium text-lg mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@thrivephysios.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@thrivephysios.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+919664315797" className="text-gray-300 hover:text-accent transition-colors">
                  +91 96643 15797
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 text-sm">
              © 2025 Thrive Physios. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Designed and Developed by <span className="fancy-credit">Qasim Kharodia</span>
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          .footer-shimmer-text {
            background: linear-gradient(90deg, 
              #03CDD2 0%, 
              #8EEDFF 35%, 
              #03CDD2 60%, 
              #37B3B8 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
            animation: shimmer 5s ease-in-out infinite;
          }
        `
      }} />
    </footer>
  );
};

export default Footer;
