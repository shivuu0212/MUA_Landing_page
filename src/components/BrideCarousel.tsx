"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const BRIDE_IMAGES = [
  {
    src: "/images/brides/bride_traditional_red_1774463249219.png",
    title: "The Royal Heritage",
    description: "Classic Indian bridal elegance with deep red tones and golden shimmer.",
  },
  {
    src: "/images/brides/bride 2.jpeg",
    title: "The Royal Heritage",
    description: "Classic Indian bridal elegance with deep red tones and golden shimmer.",
  },
  {
    src: "/images/brides/bride_modern_pastel_1774463269612.png",
    title: "Pastel Radiance",
    description: "Soft, dewy finish paired with delicate lavender and silver accents.",
  },
  {
    src: "/images/brides/bride1.jpeg",
    title: "Pastel Radiance",
    description: "Soft, dewy finish paired with delicate lavender and silver accents.",
  },
  {
    src: "/images/brides/bride_glam_shimmer_1774463286457.png",
    title: "Golden Glamour",
    description: "Bold crimson lips and metallic gold highlights for a star-studded reception.",
  },
  {
    src: "/images/brides/bride_editorial_look_1774463302626.png",
    title: "Editorial Chic",
    description: "High-fashion precision focusing on graphic lines and rose-gold warmth.",
  },
];

export default function BrideCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BRIDE_IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BRIDE_IMAGES.length) % BRIDE_IMAGES.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-brand-pink">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase">
                Bridal Portfolio
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-charcoal">
              Capturing Your <br />
              <span className="italic text-brand-pink">Most Radiant</span> Moments
            </h2>
          </div>
          <p className="text-charcoal/60 text-lg max-w-sm leading-relaxed border-l border-brand-pink/20 pl-6">
            Every bride has a unique story. We specialize in creating high-end, personalized looks that celebrate your individual beauty on your special day.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group h-[600px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {BRIDE_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-110 rotate-1"
                }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>

              {/* Content Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-12 transition-all duration-700 delay-300 ${index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                <div className="max-w-xl space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 right-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-charcoal transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-charcoal transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-12 right-12 flex gap-3 z-30">
            {BRIDE_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-white" : "w-2 bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
