import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-mocha py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-ivory">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.description")}</p>
          <a
            href={`https://zalo.me/0971199368`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-mocha px-8 py-3 rounded-md font-semibold hover:bg-ivory inline-block"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
