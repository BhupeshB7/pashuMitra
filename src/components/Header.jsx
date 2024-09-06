// // import React, { useState, useEffect, useRef } from "react";
// // import { FaBars, FaTimes } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
// //   const [selectedLanguage, setSelectedLanguage] = useState("English");
// //   const menuRef = useRef(null);

// //   const handleToggle = () => setIsOpen(!isOpen);

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);

// //   const handleLanguageChange = (language) => {
// //     setSelectedLanguage(language);
// //     setIsLanguageOpen(false);
// //   };

// //   return (
// //     <header className="bg-white text-[#074f15]">
// //       <div className="container mx-auto flex items-center justify-between p-4">
// //         {/* Logo */}
// //         <div className="text-2xl font-bold">
// //           <Link to="/">Logo</Link>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-4 items-center">
// //           <Link to="/about">About</Link>
// //           <Link to="/contact">Contact</Link>
// //           <Link to="/login">Login</Link>
// //           <Link to="/service">Service</Link>

// //           {/* Language Dropdown */}
// //           <div className="relative">
// //             <button
// //               onClick={handleLanguageToggle}
// //               className="flex items-center space-x-2 focus:outline-none border border-green-700  rounded-3xl px-6 py-2 hover:bg-green-100"
// //             >
// //               <span>{selectedLanguage}</span>
// //               <span className={`transform ${isLanguageOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
// //                 ▼
// //               </span>
// //             </button>

// //             {isLanguageOpen && (
// //               <ul className="absolute right-2   mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                   onClick={() => handleLanguageChange("Hindi")}
// //                 >
// //                   Hindi
// //                 </li>
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                   onClick={() => handleLanguageChange("English")}
// //                 >
// //                   English
// //                 </li>
// //               </ul>
// //             )}
// //           </div>
// //         </nav>

// //         {/* Hamburger Icon */}
// //         <div className="md:hidden flex items-center">
// //           <button onClick={handleToggle} className="text-2xl">
// //             {isOpen ? <FaTimes /> : <FaBars />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         ref={menuRef}
// //         className={`fixed top-0 right-0 w-64 bg-white text-[#074f15] h-full transform ${
// //           isOpen ? "translate-x-0" : "translate-x-full"
// //         } transition-transform duration-300 ease-in-out`}
// //       >
// //         <div className="flex items-center justify-end p-4">
// //           <button onClick={handleToggle} className="text-2xl">
// //             <FaTimes />
// //           </button>
// //         </div>
// //         <nav className="flex flex-col items-center space-y-4 mt-8">
// //           <Link to="/about" onClick={handleToggle}>
// //             About
// //           </Link>
// //           <Link to="/contact" onClick={handleToggle}>
// //             Contact
// //           </Link>
// //           <Link to="/login" onClick={handleToggle}>
// //             Login
// //           </Link>
// //           <Link to="/service" onClick={handleToggle}>
// //             Service
// //           </Link>

// //           {/* Language Selection in Mobile Menu */}
// //           <div className="relative">
// //             <button
// //               onClick={handleLanguageToggle}
// //               className="flex items-center space-x-2 focus:outline-none"
// //             >
// //               <span>{selectedLanguage}</span>
// //               <span className={`transform ${isLanguageOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
// //                 ▼
// //               </span>
// //             </button>

// //             {isLanguageOpen && (
// //               <ul className="absolute mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                   onClick={() => handleLanguageChange("Hindi")}
// //                 >
// //                   Hindi
// //                 </li>
// //                 <li
// //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                   onClick={() => handleLanguageChange("English")}
// //                 >
// //                   English
// //                 </li>
// //               </ul>
// //             )}
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import logo from "../assets/logo.png"
// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

//   const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);

//   const handleLanguageChange = (language) => {
//     const langCode = language === "Hindi" ? "hi" : "en";
//     i18n.changeLanguage(langCode); // Change language using i18next
//     setSelectedLanguage(language);
//     setIsLanguageOpen(false);
//   };

//   return (
//     <header className="bg-gray-900 text-[#baffc8] z-auto">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="pl-6">
//           <Link to="/"><img src={logo} alt="logo" className="w-28 h-12" /></Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="flex space-x-4 items-center">
//           <Link to="/login">{t('header.login')}</Link>
//           {/* Language Dropdown */}
//           <div className="relative">
//             <button
//               onClick={handleLanguageToggle}
//               className="flex items-center space-x-2 focus:outline-none border border-green-500  rounded-3xl px-6 py-2 hover:bg-gray-950 text-green-400"
//             >
//               <span>{selectedLanguage}</span>
//               <span className={`transform ${isLanguageOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
//                 ▼
//               </span>
//             </button>

//             {isLanguageOpen && (
//               <ul className="absolute right-2   mt-2 w-32 bg-gray-950 border border-gray-700 rounded-md shadow-lg z-10 ">
//                 <li
//                   className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
//                   onClick={() => handleLanguageChange("Hindi")}
//                 >
//                   Hindi
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
//                   onClick={() => handleLanguageChange("English")}
//                 >
//                   English
//                 </li>
//               </ul>
//             )}
//           </div>
//         </nav>
//       </div>

//     </header>
//   );
// };

// export default Header;

// src/components/Header.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import LanguageDropdown from "./LanguageDropdown";
import toast from "react-hot-toast";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "English");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogin = () => {
    toast.error("Login is not available yet");
  };
  return (
    <>
      <header className="bg-gray-900 text-[#baffc8] z-auto">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="pl-6">
            <Link to="/">
              <img src={logo} alt="logo" className="w-28 h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-4 items-center">
            <Link to="#wlogin" onClick={handleLogin}>
              Login
            </Link>

            {/* Language Dropdown */}
            <LanguageDropdown
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </nav>
        </div>

        {/* Sticky Navbar Section */}
      </header>
      {isSticky && (
        <div
          className={`w-full flex justify-between text-white ${
            isSticky ? "sticky top-0 z-50" : ""
          }`}
        >
          <div
            className="bg-gray-800 w-1/2 text-center py-6 flex justify-center items-center gap-6"
            onClick={() => window.open("https://wa.me/917520260421")}
          >
            <FaWhatsapp size={30} color="white" />
            <p>WhatsAPp</p>
          </div>
          <a
            href="tel:+917520260421" // Replace with the actual phone number
            className="bg-green-500 w-1/2 text-center py-6 flex justify-center items-center gap-6"
          >
            <FaPhoneVolume size={30} color="white" />
            <p>Call Now</p>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
