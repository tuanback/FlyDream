import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = t("hero.slides", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    image: string;
  }>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-mocha text-ivory h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <div className="flex space-x-4">
                <a
                  href={`https://zalo.me/0971199368`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-mocha px-8 py-3 rounded-md font-semibold hover:bg-ivory flex items-center"
                >
                  {t("hero.getStarted")} <ChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-mocha/50 text-ivory hover:bg-mocha transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-mocha/50 text-ivory hover:bg-mocha transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-gold" : "bg-ivory/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
