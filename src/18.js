import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next).use(Backend).use(LanguageDetector)
  .use(HttpApi)
  .init( {
    fallbackLng: 'en',
    debug:true,
    detection: {
      order: ["querystring", 'localStorage'],
      cache: ['localStorage']
    },
    interpolation:{
      escapeValue:false
    }
  })