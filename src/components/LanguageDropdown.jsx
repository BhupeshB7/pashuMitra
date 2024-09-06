// src/components/LanguageDropdown.js

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = ({ selectedLanguage, onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);

  const handleLanguageChange = (language) => {
    const langCode = language === "Hindi" ? "hi" : "en";
    i18n.changeLanguage(langCode);
    onLanguageChange(language);
  };

  return (
    <div className="relative">
      <button
        onClick={handleLanguageToggle}
        className="flex items-center space-x-2 focus:outline-none border border-green-500 rounded-3xl px-6 py-2 hover:bg-gray-950 text-green-400"
      >
        <span>{selectedLanguage}</span>
        <span
          className={`transform ${
            isLanguageOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          ▼
        </span>
      </button>

      {isLanguageOpen && (
        <ul className="absolute right-2 mt-2 w-32 bg-gray-950 border border-gray-700 rounded-md shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => handleLanguageChange("Hindi")}
          >
            Hindi
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => handleLanguageChange("English")}
          >
            English
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
