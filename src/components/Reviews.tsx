
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  image: string;
  testimonial: string;
  rating: number;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah M.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
      testimonial:
        "The team at Thrive Physios completely transformed my recovery after knee surgery. Their personalized approach and expertise helped me return to running faster than I expected.",
      rating: 5,
    },
    {
      id: 2,
      name: "James L.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      testimonial:
        "After struggling with chronic back pain for years, Dr. Wilson developed a treatment plan that finally provided lasting relief. I'm now able to enjoy activities I had given up on.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma T.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      testimonial:
        "The home physiotherapy service was perfect for my elderly mother who couldn't travel easily. Professional, compassionate, and effective care right in our home.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael R.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      testimonial:
        "As a professional athlete, I need specialized care for injuries. The sports rehabilitation program at Thrive Physios is exceptional and has kept me performing at my best.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
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
        <h2 className="section-title">Client Reviews</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what our clients have to say
          about their experience with Thrive Physios.
        </p>

        {/* Mobile Slider (one card at a time) */}
        <div className="relative md:hidden">
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
                    <p className="text-textColor-secondary text-center mb-4">
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
        <div className="hidden md:block">
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
                    <p className="text-textColor-secondary text-center mb-4">
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
