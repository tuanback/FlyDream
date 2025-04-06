import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-mocha text-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("nav.brand")}</h3>
            <p className="text-beige mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.countries")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.studyDestinations")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.usa")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.uk")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.canada")}
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-gold">
                  {t("footer.australia")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactUs")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-beige">{t("footer.phone")}</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-beige">{t("footer.email")}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-beige">{t("footer.address")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-mocha-light mt-12 pt-8 text-center text-beige">
          <p>
            &copy; {new Date().getFullYear()} {t("nav.brand")}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
