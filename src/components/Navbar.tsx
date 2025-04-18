import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { images } from "../resources";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="bg-mocha text-ivory py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>{t("contact.phone")}</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail size={16} className="mr-2" />
              <span>{t("contact.email")}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-mocha text-ivory border-none cursor-pointer mr-4"
              defaultValue={i18n.language}
            >
              {/* <option value="en">English</option> */}
              <option value="ko">한국어</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            {/* <a href="#" className="hover:text-gold">
              {t("login.student")}
            </a>
            <a href="#" className="hover:text-gold">
              {t("login.partner")}
            </a> */}
          </div>
        </div>
      </div>
      <nav className="bg-ivory shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
                <a href="/" className="flex items-center text-2xl font-bold text-mocha">
                <img
                  src={images.navbar.logo}
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                {t("nav.brand")}
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-mocha-light hover:text-mocha">
                {t("nav.home")}
              </a>
              <a href="#" className="text-mocha-light hover:text-mocha">
                {t("nav.about")}
              </a>
              <a href="#" className="text-mocha-light hover:text-mocha">
                {t("nav.services")}
              </a>
              <a href="#" className="text-mocha-light hover:text-mocha">
                {t("nav.contact")}
              </a>
              <a
                href={`https://zalo.me/0971199368`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mocha text-ivory px-6 py-2 rounded-md hover:bg-mocha-light flex items-center justify-center"
              >
                {t("nav.getStarted")}
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-mocha">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-ivory">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-mocha-light hover:text-mocha"
              >
                {t("nav.home")}
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-mocha-light hover:text-mocha"
              >
                {t("nav.about")}
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-mocha-light hover:text-mocha"
              >
                {t("nav.services")}
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-mocha-light hover:text-mocha"
              >
                {t("nav.countries")}
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-mocha-light hover:text-mocha"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
