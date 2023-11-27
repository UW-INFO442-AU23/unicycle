import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next) 
  .init({ 
    resources: {
      en: {
        translation: require('./locales/en.json')
      },
      zh: {
        translation: require('./locales/zh.json')
      }
    }, 
    lng: 'en', 
    fallbackLng: "en", 
  })

export default i18n