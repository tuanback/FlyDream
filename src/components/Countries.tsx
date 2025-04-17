import React from "react";
import { useTranslation } from "react-i18next";
import { images } from "../resources";

const Countries = () => {
  const { t } = useTranslation();

  const countries = [
    {
      name: t("countries.korea"),
      image: images.countries.korea,
    },
  ];

  return (
    <div className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mocha mb-4">
            {t("countries.title")}
          </h2>
          <p className="text-mocha-light max-w-2xl mx-auto">
            {t("countries.description")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-ivory">
                  {country.name}
                </h3>
                <p className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("countries.exploreUniversities")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
