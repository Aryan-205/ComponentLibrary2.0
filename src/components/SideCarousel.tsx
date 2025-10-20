"use client";
import { useState, useRef, useEffect } from "react";

// Monster-themed colors and names for the slides
const THEME_SLIDES = [
  {
    name: "Original Assault",
    color: "bg-[#274308]", // Dark Green/Black
    accent: "text-[#90ED27]", // Neon Green
  },
  {
    name: "Rehab Red",
    color: "bg-[#611023]", // Dark Red/Maroon
    accent: "text-[#FF4500]", // Orange/Red Accent
  },
  {
    name: "Ultra Zero",
    color: "bg-[#5b5b5b]", // Dark Gray
    accent: "text-white", // White Accent
  },
];

// Simple chevron icon for navigation buttons
const ChevronIcon = ({ direction = "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 transition-transform duration-200 ${direction === "left" ? "rotate-180" : ""}`}
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
);


export default function SideCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const totalSlides = THEME_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  
  const currentSlide = THEME_SLIDES[currentIndex];

  // Logic to scroll the track to center the current item using browser smooth scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Find the element corresponding to the current index
      const currentItem = track.children[currentIndex];
      if (currentItem) {
        // Calculate the position needed to center the current item
        // track.scrollLeft property will be used for smooth scrolling.
        const itemCenter = currentItem.offsetLeft + currentItem.offsetWidth / 2;
        const containerCenter = track.offsetWidth / 2;
        const scrollPosition = itemCenter - containerCenter;

        track.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);
  
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-black p-4 md:p-8 rounded-xl shadow-2xl shadow-green-900/50">
      
      <h3 className={`text-3xl md:text-5xl font-extrabold uppercase mb-8 tracking-wider ${currentSlide.accent}`}>
        {currentSlide.name}
      </h3>

      {/* Main Carousel Viewport (overflow hidden) */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Scrollable Track - This container holds all the slides */}
        <div
          ref={trackRef}
          // Added 'snap-x snap-mandatory' for touch/drag snapping
          className="flex gap-6 py-4 px-12 overflow-x-hidden snap-x snap-mandatory transition-transform duration-500 ease-in-out"
          style={{ 
             // Apply padding that is wider than the card itself to ensure the first/last card can be centered
             paddingLeft: '50%',
             paddingRight: '50%',
             transform: 'translateX(0)' 
          }}
        >
          {THEME_SLIDES.map((slide, index) => {
            const isCurrent = index === currentIndex;
            // Scale and opacity applied for the "motion" effect
            const scaleClass = isCurrent ? 'scale-100 opacity-100' : 'scale-75 opacity-50';
            const sizeClass = isCurrent ? 'w-64 h-64' : 'w-48 h-48';
            
            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                // snap-center ensures the scroll stops in the middle of the item
                className={`flex-shrink-0 cursor-pointer snap-center transition-all duration-500 transform ${scaleClass}`}
              >
                <div 
                  className={`${sizeClass} ${slide.color} rounded-2xl border-4 border-white/20 shadow-inner shadow-black/70 flex justify-center items-center text-center`}
                  style={{
                    // Explicit transitions for scale/size changes
                    transition: 'width 0.5s, height 0.5s, transform 0.5s'
                  }}
                >
                  <span className={`text-xl font-bold italic tracking-tighter transition-colors duration-500 ${slide.accent}`}>
                    {slide.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Buttons placed over the viewport */}
        <button
          onClick={prevSlide}
          aria-label="Previous Theme"
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border-2 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800/80 border-[#90ED27] text-[#90ED27] shadow-[0_0_10px_rgba(144,237,39,0.5)] z-20 ${currentIndex === 0 ? 'opacity-30 pointer-events-none' : ''}`}
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Theme"
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border-2 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800/80 border-[#90ED27] text-[#90ED27] shadow-[0_0_10px_rgba(144,237,39,0.5)] z-20 ${currentIndex === totalSlides - 1 ? 'opacity-30 pointer-events-none' : ''}`}
        >
          <ChevronIcon direction="right" />
        </button>

      </div>

      {/* Indicator Dots */}
      <div className="flex gap-2 mt-8">
        {THEME_SLIDES.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#90ED27] scale-125 shadow-[0_0_8px_rgba(144,237,39,1)]"
                : "bg-gray-700 hover:bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
