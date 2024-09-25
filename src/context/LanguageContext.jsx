// import React, { createContext, useState, useContext } from "react";
// import { useTranslation } from "react-i18next";

// const LanguageContext = createContext();


// export const LanguageProvider = ({ children }) => {
//   const { i18n } = useTranslation();
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "Hindi"
//   );


//   const changeLanguage = (language) => {
//     const langCode = language === "Hindi" ? "hi" : "en";
//     i18n.changeLanguage(langCode);
//     setSelectedLanguage(language);
//     localStorage.setItem("selectedLanguage", language);
//   };

//   return (
//     <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Create a hook for easy access to the language context
// export const useLanguage = () => useContext(LanguageContext);
import React, { createContext, useState, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "Hindi"
  );

  const changeLanguage = (language) => {
    let langCode;

    switch (language) {
      case "Hindi":
        langCode = "hi";
        break;
      case "English":
        langCode = "en";
        break;
      case "Maithili":
        langCode = "ma";
        break;
      case "Bhojpuri":
        langCode = "bp";
        break;
      default:
        langCode = "hi"; // Default to Hindi if no valid selection
    }

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
