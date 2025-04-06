import React from "react";
import { Users, GraduationCap, Globe2, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-mocha" />,
      value: "15,000+",
      label: t("stats.studentsPlaced"),
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-mocha" />,
      value: "500+",
      label: t("stats.partnerUniversities"),
    },
    {
      icon: <Globe2 className="w-12 h-12 text-mocha" />,
      value: "20+",
      label: t("stats.countries"),
    },
    {
      icon: <Award className="w-12 h-12 text-mocha" />,
      value: "25+",
      label: t("stats.yearsExperience"),
    },
  ];

  return (
    <div className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-mocha mb-2">
                {stat.value}
              </div>
              <div className="text-mocha-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
