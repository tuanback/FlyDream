import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const SuccessStories: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { t } = useTranslation();

  const stories = t("successStories.stories", {
    returnObjects: true,
  }) as Array<{
    name: string;
    institution: string;
    testimonial: string;
  }>;

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="bg-beige py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-mocha relative">
            {t("successStories.title")}
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gold"></span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-ivory hover:bg-mocha hover:text-ivory transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-ivory hover:bg-mocha hover:text-ivory transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-ivory rounded-2xl overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row min-h-[300px] md:h-[300px]">
                    <div className="md:w-1/2 relative group h-[200px] md:h-full">
                      <img
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${story.name}`}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-mocha bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-ivory rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-mocha ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                      <p className="text-lg md:text-xl text-mocha-light mb-4 md:mb-6">
                        "{story.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={`https://api.dicebear.com/6.x/initials/svg?seed=${story.name}`}
                          alt={story.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-base md:text-lg text-mocha">
                            {story.name}
                          </h4>
                          <p className="text-sm md:text-base text-mocha-light">
                            {story.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
