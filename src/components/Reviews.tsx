import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  image: string;
  testimonial: string;
  condition: string;
  rating: number;
  gender: 'male' | 'female';
}

const Reviews = () => {
  const standardImages = {
    male: "/male-client-placeholder.jpg",
    female: "/female-client-placeholder.png"
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Hanif Halai",
      gender: "male",
      image: standardImages.male,
      condition: "Brain Stroke",
      testimonial:
        "After my brain stroke, I was worried about my recovery journey. The team at Thrive Physios provided exceptional care that helped me regain mobility and confidence faster than I thought possible.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahsan Shaikh",
      gender: "male",
      image: standardImages.male,
      condition: "Hemiplegia",
      testimonial:
        "Living with hemiplegia presented many challenges, but the personalized treatment plan from Thrive Physios has significantly improved my quality of life. Their expertise and dedication are truly remarkable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Nadeem Deraiya",
      gender: "male",
      image: standardImages.male,
      condition: "Vertigo",
      testimonial:
        "The vertigo episodes were debilitating until I found Thrive Physios. Their specialized treatment approach has reduced my symptoms dramatically. I can now enjoy daily activities without constant fear of dizziness.",
      rating: 5,
    },
    {
      id: 4,
      name: "Anas Lari",
      gender: "male",
      image: standardImages.male,
      condition: "Frozen Shoulder",
      testimonial:
        "My frozen shoulder was limiting my work and lifestyle. Thanks to the targeted therapy at Thrive Physios, I've regained almost full range of motion. Their expertise made all the difference in my recovery.",
      rating: 5,
    },
    {
      id: 5,
      name: "Shaheen Gandhi",
      gender: "female",
      image: standardImages.female,
      condition: "Plantar fasciitis",
      testimonial:
        "The pain from plantar fasciitis made even simple walking painful. The physiotherapists at Thrive developed a comprehensive treatment plan that addressed both my symptoms and the root cause. I'm finally pain-free!",
      rating: 5,
    },
    {
      id: 6,
      name: "Rehana Khandwani",
      gender: "female",
      image: standardImages.female,
      condition: "Osteoarthritis (knee)",
      testimonial:
        "Managing knee osteoarthritis seemed impossible until I started treatment at Thrive Physios. Their holistic approach combining therapy, exercises, and lifestyle modifications has significantly reduced my pain and improved mobility.",
      rating: 5,
    },
    {
      id: 7,
      name: "Rizwan Kapadia",
      gender: "male",
      image: standardImages.male,
      condition: "Ankle Sprain",
      testimonial:
        "After a severe ankle sprain, I was concerned about returning to sports. The rehabilitation program at Thrive Physios was exceptional, focusing not just on healing but also on preventing future injuries. I'm back to playing with confidence!",
      rating: 5,
    },
    {
      id: 8,
      name: "Owaish Nandoliya",
      gender: "male",
      image: standardImages.male,
      condition: "Achilles Tendonapathy",
      testimonial:
        "My Achilles tendonapathy was affecting my ability to walk comfortably. The team at Thrive Physios created a progressive treatment plan that gradually restored my tendon health. Their expertise and patience were crucial to my recovery.",
      rating: 5,
    },
    {
      id: 9,
      name: "Salim Khandwani",
      gender: "male",
      image: standardImages.male,
      condition: "Cervical Spondylitis",
      testimonial:
        "The chronic neck pain from cervical spondylitis was affecting my work and sleep. The physiotherapists at Thrive created an effective treatment regimen that has significantly reduced my pain and improved my neck mobility.",
      rating: 5,
    },
    {
      id: 10,
      name: "Abdul Sattar Qureshi",
      gender: "male",
      image: standardImages.male,
      condition: "Sciatic Pain",
      testimonial:
        "The sciatic pain was unbearable, affecting every aspect of my life. Thrive Physios' approach was comprehensive and effective. Their treatment not only addressed my immediate pain but also provided strategies to prevent recurrence.",
      rating: 5,
    },
    {
      id: 11,
      name: "Shakil Kapoor",
      gender: "male",
      image: standardImages.male,
      condition: "Varicose veins",
      testimonial:
        "Living with varicose veins was both painful and uncomfortable. The specialized therapy approach at Thrive Physios has helped manage my symptoms and improve circulation. Their knowledgeable team made me feel supported throughout my treatment.",
      rating: 5,
    },
    {
      id: 12,
      name: "Tahir Ansari",
      gender: "male",
      image: standardImages.male,
      condition: "ACL (POST O.P)",
      testimonial:
        "Following my ACL surgery, I was anxious about recovery. The post-operative rehabilitation at Thrive Physios was excellent. Their structured program helped me safely rebuild strength and return to my pre-injury activities.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
      }, 3000);
    }
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, reviews.length]);

  const nextSlide = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoScrolling(false);
  };

  const prevSlide = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setIsAutoScrolling(false);
  };

  // For desktop, display 3 cards at a time
  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % reviews.length;
    visibleReviews.push(reviews[index]);
  }

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-subtitle">
          Real patients, real results. Discover how our personalized physiotherapy has transformed lives.
        </p>

        {/* Mobile Slider (one card at a time) */}
        <div 
          className="relative md:hidden"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              <div className="w-full flex-shrink-0 p-2">
                <div className="bg-primary/20 p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className="w-16 h-16 object-cover rounded-full mb-4 border-2 border-accent"
                    />
                    <div className="flex mb-3">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} fill="#03CDD2" color="#03CDD2" size={16} />
                      ))}
                    </div>
                    <h4 className="font-poppins font-medium text-accent">
                      {reviews[currentIndex].condition}
                    </h4>
                    <p className="text-textColor-secondary text-center my-4">
                      "{reviews[currentIndex].testimonial}"
                    </p>
                    <h4 className="font-poppins font-medium text-textColor">
                      {reviews[currentIndex].name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-accent hover:bg-primary transition-colors"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-accent hover:bg-primary transition-colors"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop Display (three cards at a time) */}
        <div 
          className="hidden md:block"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div className="relative">
            <div className="grid grid-cols-3 gap-6 mt-12">
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-primary/20 p-6 rounded-lg transition-all hover:shadow-md"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 object-cover rounded-full mb-4 border-2 border-accent"
                    />
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} fill="#03CDD2" color="#03CDD2" size={16} />
                      ))}
                    </div>
                    <h4 className="font-poppins font-medium text-accent">
                      {review.condition}
                    </h4>
                    <p className="text-textColor-secondary text-center my-4">
                      "{review.testimonial}"
                    </p>
                    <h4 className="font-poppins font-medium text-textColor">
                      {review.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                className="bg-white rounded-full p-2 shadow-md text-accent hover:bg-primary transition-colors"
                onClick={prevSlide}
                aria-label="Previous reviews"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="bg-white rounded-full p-2 shadow-md text-accent hover:bg-primary transition-colors"
                onClick={nextSlide}
                aria-label="Next reviews"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
