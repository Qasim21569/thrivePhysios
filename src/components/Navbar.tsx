
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    // WhatsApp link with predefined message
    window.open(
      "https://wa.me/1234567890?text=Hi%20Thrive%20Physios,%20I%20would%20like%20to%20book%20a%20session.",
      "_blank"
    );
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Specialisation", href: "#specialisation" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="font-poppins text-textColor font-bold text-xl md:text-2xl">
                Thrive <span className="text-accent">Physios</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-textColor-secondary hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleContactClick}
              className="button-primary"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-textColor"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-5 pb-6 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-poppins text-textColor-secondary hover:text-accent transition-colors py-2 text-base"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleContactClick}
              className="button-primary w-full mt-3 flex justify-center"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
