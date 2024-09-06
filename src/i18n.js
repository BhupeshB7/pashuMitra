import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      hi: { translation: translationHI }
    },
    fallbackLng: 'hi',  // default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    }
  });

export default i18n;
