
import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link with predefined message
    window.open(
      "https://wa.me/1234567890?text=Hi%20Thrive%20Physios,%20I%20would%20like%20to%20book%20a%20session.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-primary/60">
      <div className="container-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to start your journey to better movement and health? Our team of
          specialists is here to help you thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-medium text-textColor mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent bg-white p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-textColor">Phone</h4>
                    <p className="text-textColor-secondary">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent bg-white p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-textColor">Email</h4>
                    <p className="text-textColor-secondary">info@thrivephysios.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent bg-white p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-textColor">Address</h4>
                    <p className="text-textColor-secondary">
                      123 Healing Street, Wellness City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent bg-white p-3 rounded-full">
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
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-poppins font-medium text-textColor mb-6">
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
                Or call us directly at +1 (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
