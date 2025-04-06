import React from "react";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-mocha py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-ivory">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.description")}</p>
          <button className="bg-gold text-mocha px-8 py-3 rounded-md font-semibold hover:bg-ivory">
            {t("cta.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
