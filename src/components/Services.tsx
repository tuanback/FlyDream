import React from "react";
import { BookOpen, FileText, Users, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mocha mb-4">
            {t("services.title")}
          </h2>
          <p className="text-mocha-light max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">
              {t("services.courseSelection.title")}
            </h3>
            <p className="text-mocha-light">
              {t("services.courseSelection.description")}
            </p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">
              {t("services.visaAssistance.title")}
            </h3>
            <p className="text-mocha-light">
              {t("services.visaAssistance.description")}
            </p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">
              {t("services.testPrep.title")}
            </h3>
            <p className="text-mocha-light">
              {t("services.testPrep.description")}
            </p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Compass className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">
              {t("services.careerGuidance.title")}
            </h3>
            <p className="text-mocha-light">
              {t("services.careerGuidance.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
