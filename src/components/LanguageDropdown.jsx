// import React, { useState } from "react";
// import { useLanguage } from "../context/LanguageContext.jsx";

// const LanguageDropdown = () => {
//   const { selectedLanguage, changeLanguage } = useLanguage();
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);

//   return (
//     <div className="relative">
//       <button
//         onClick={handleLanguageToggle}
//         className="flex items-center space-x-2 focus:outline-none border border-green-500 rounded-3xl px-6 py-2 hover:bg-gray-950 text-green-400"
//       >
//         <span>{selectedLanguage}</span>
//         <span
//           className={`transform ${
//             isLanguageOpen ? "rotate-180" : "rotate-0"
//           } transition-transform duration-300`}
//         >
//           ▼
//         </span>
//       </button> 

//       {isLanguageOpen && (
//         <ul onClick={handleLanguageToggle} className="absolute right-2 mt-2 w-32 bg-gray-950 border border-gray-700 rounded-md shadow-lg z-10">
//           <li
//             className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
//             onClick={() => changeLanguage("Hindi")}
//           >
//             Hindi
//           </li>
//           <li
//             className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
//             onClick={() => changeLanguage("English")}
//           >
//             English
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LanguageDropdown;




import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx"; 
import { MdLanguage } from "react-icons/md";

const LanguageDropdown = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);

  return (
    <div className="relative">
      <button
        onClick={handleLanguageToggle}
        className="flex items-center space-x-2 focus:outline-none border border-green-500 rounded-3xl px-6 py-2 hover:bg-gray-950 text-green-400"
      >
        <span><MdLanguage size={20}/></span>
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
        <ul
          onClick={handleLanguageToggle}
          className="absolute right-2 mt-2 w-32 bg-gray-950 border border-gray-700 rounded-md shadow-lg z-10"
        >
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => changeLanguage("Hindi")}
          >
            Hindi
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => changeLanguage("English")}
          >
            English
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => changeLanguage("Maithili")}
          >
            Maithili
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-green-400"
            onClick={() => changeLanguage("Bhojpuri")}
          >
            Bhojpuri
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
