import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./dictionaries/en.json";
import hi from "./dictionaries/hi.json";

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
