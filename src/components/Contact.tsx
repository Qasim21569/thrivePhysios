import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link with predefined message
    window.open(
      "https://wa.me/919664315797?text=Hi%20Thrive%20Physios,%20I%20would%20like%20to%20book%20a%20session.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-primary/60">
      <div className="container-section">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-8">Contact Us</h2>
        <p className="section-subtitle px-4">
          Ready to start your journey to better movement and health? Our team of
          specialists is here to help you thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          <div>
            <h3 className="text-2xl md:text-2xl font-poppins font-medium text-textColor mb-6 text-center md:text-left">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-accent bg-white p-3 rounded-full shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-textColor">Phone</h4>
                  <p className="text-textColor-secondary">+91 96643 15797</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-accent bg-white p-3 rounded-full shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-textColor">Email</h4>
                  <p className="text-textColor-secondary break-all">info@thrivephysios.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-accent bg-white p-3 rounded-full shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-textColor">WhatsApp</h4>
                  <p className="text-textColor-secondary">
                    Message us directly for the fastest response
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mx-4 md:mx-0">
            <h3 className="text-2xl md:text-2xl font-poppins font-medium text-textColor mb-6 text-center md:text-left">
              Book Your Appointment Today
            </h3>
            <p className="text-textColor-secondary mb-8">
              The fastest way to schedule your appointment is through our WhatsApp
              service. Our team typically responds within 1 hour during business
              hours.
            </p>
            <div className="space-y-6">
              <button
                onClick={handleWhatsAppClick}
                className="button-primary w-full flex items-center justify-center space-x-2"
              >
                <MessageSquare size={18} />
                <span>Chat with Us on WhatsApp</span>
              </button>
              <p className="text-sm text-textColor-secondary text-center">
                Or call us directly at +91 96643 15797
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
