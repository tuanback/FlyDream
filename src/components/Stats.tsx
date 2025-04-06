import React from "react";
import { Users, GraduationCap, Globe2, Award } from "lucide-react";

const Stats = () => {
  return (
    <div className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-mocha" />
            </div>
            <div className="text-4xl font-bold text-mocha mb-2">15,000+</div>
            <div className="text-mocha-light">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-mocha" />
            </div>
            <div className="text-4xl font-bold text-mocha mb-2">500+</div>
            <div className="text-mocha-light">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe2 className="w-12 h-12 text-mocha" />
            </div>
            <div className="text-4xl font-bold text-mocha mb-2">20+</div>
            <div className="text-mocha-light">Countries</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-mocha" />
            </div>
            <div className="text-4xl font-bold text-mocha mb-2">25+</div>
            <div className="text-mocha-light">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
