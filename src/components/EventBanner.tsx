import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Phone, CheckCircle, Info } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventBanner = () => {
  // Set event date - August 10, 2025, 10:00 AM
  const eventDate = new Date("2025-08-10T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const handleRegistration = () => {
    // WhatsApp registration with event-specific message
    const message = encodeURIComponent(
      "Hi Thrive Physios! I would like to register for the FREE Physiotherapy Camp on August 10, 2025, at Madni High School, Jogeshwari West. Please confirm my slot and provide more details."
    );
    window.open(`https://wa.me/919664315797?text=${message}`, "_blank");
  };

  const handleMoreDetails = () => {
    // Placeholder for future implementation
    console.log("More details clicked - to be implemented");
    // This will be implemented later as requested
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent via-accent to-[#02B8BD] shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-3">
        {/* Main Banner Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Section - Brand & Event Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
              <img 
                src="/logov1.png" 
                alt="Thrive Physios Logo" 
                className="h-8 w-auto object-contain"
              />
              <div className="font-poppins font-bold">
                <span className="text-accent bg-white px-1 rounded text-lg">Thrive</span>
                <span className="text-white text-lg"> Physios</span>
              </div>
            </div>

            {/* Event Title */}
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="font-bold text-lg">FREE Physio Camp</span>
            </div>
          </div>

          {/* Center Section - Event Details */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Aug 10, 2025 | 10 AM - 5 PM</span>
            </div>
            <span className="hidden sm:block text-white/60">•</span>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Madni High School, Jogeshwari West</span>
            </div>
            {/* <span className="hidden sm:block text-white/60">•</span>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span className="font-medium text-yellow-200">Limited Slots</span>
            </div> */}
          </div>

          {/* Right Section - Countdown & Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Countdown Timer */}
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium">Starts In:</span>
              <div className="flex gap-1">
                {[
                  { label: "D", value: timeLeft.days },
                  { label: "H", value: timeLeft.hours },
                  { label: "M", value: timeLeft.minutes },
                  { label: "S", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-center min-w-[35px]">
                    <div className="text-white font-bold text-xs">{item.value.toString().padStart(2, '0')}</div>
                    <div className="text-yellow-200 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleRegistration}
                className="bg-white text-accent font-poppins font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md text-sm flex items-center gap-2"
              >
                <CheckCircle size={16} />
                Register Now
              </button>
              <button
                onClick={handleMoreDetails}
                className="bg-transparent border-2 border-white text-white font-poppins font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-accent transition-all duration-300 hover:scale-105 shadow-md text-sm flex items-center gap-2"
              >
                <Info size={16} />
                More Details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-2 pt-2 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white text-xs">
            {/* Left - Benefits */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
              <span className="flex items-center gap-1">
                <CheckCircle size={12} />
                Free Consultation
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1">
                <CheckCircle size={12} />
                Expert Assessment
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1">
                <CheckCircle size={12} />
                Minimal Treatment Charges
              </span>
            </div>
            
            {/* Right - Contact */}
            {/* <div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="font-medium">Call: +91 8369890513</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner; 