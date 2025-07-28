import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialisation from "@/components/Specialisation";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EventBanner from "@/components/EventBanner";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EventBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Specialisation />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
