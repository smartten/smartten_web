import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import languageData from "./translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // init data
    resources: {
      vi: {
        translation: languageData.vi,
      },
      en: {
        translation: languageData.en,
      },
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
