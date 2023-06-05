import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en, pt } from "./lang";

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  }
};

function initDefaultLanguage() {
  const storageLanguage = localStorage.getItem("andre-lng");

  if (storageLanguage) return storageLanguage;

  localStorage.setItem("andre-lng", "en");
}

initDefaultLanguage();

const options = {
  order: ["localStorage", "cookie"],
  lookupLocalStorage: "andre-lng"
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    supportedLngs: ["en", "pt"],
    detection: options,
    resources
  });

export default i18n;
