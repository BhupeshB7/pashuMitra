import React, { createContext, useState, useContext } from "react";
import { useTranslation } from "react-i18next";

// Create a context for language
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "Hindi"
  );

  // Function to change language
  const changeLanguage = (language) => {
    const langCode = language === "Hindi" ? "hi" : "en";
    i18n.changeLanguage(langCode);
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a hook for easy access to the language context
export const useLanguage = () => useContext(LanguageContext);
