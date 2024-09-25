import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationMA from './locales/ma/translation.json';  // Maithili translations
import translationBP from './locales/bp/translation.json';  // Bhojpuri translations

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      hi: { translation: translationHI },
      ma: { translation: translationMA }, // Maithili
      bp: { translation: translationBP }, // Bhojpuri
    },
    fallbackLng: 'hi',  // Fallback language
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    }
  });

export default i18n;
