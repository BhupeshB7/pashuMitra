import React, { useState,useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import LanguageDropdown from "./LanguageDropdown";
import toast from "react-hot-toast";

const footerIcons = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bhupesh-kumar-35011224b",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:lalbabu7520@gmail.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/bhupeshb7?igsh=ODVvMWd0bmQ0ZG10",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/917520260421",
  },
];

const Footer = () => {
  const [subscribed, setSubscribed] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleIconClick = (link) => {
    if (link.startsWith("https://wa.me")) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };
  const handleSubscribe = () => {
    if(subscribed.length === 0) {
      toast.error("Please enter your email address");
      return;
    }
    if(!subscribed.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Subscribed successfully");
    console.log(subscribed);
    setSubscribed("");
  };
  return (
    <footer className="bg-[#020a13] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>
          <div>
            <h6 className="text-white text-lg mb-2">Quick Links</h6>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-gray-400 flex items-center">
                <FaHome className="mr-2" /> Home
              </a>
              <LanguageDropdown
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>
          <div>
            <h6 className="text-white text-lg mb-2">Contact Us</h6>
            <p className="text-gray-400 text-sm">
              Email: lalbabu7520@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              Phone:{" "}
              <a href="tel:+917520260421" className="text-gray-400">
                +91 7520260421
              </a>
            </p>
            <div className="flex mt-4 space-x-4">
              {footerIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 text-xl"
                  onClick={() => handleIconClick(item.link)}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col gap-4 p-3 bg-[#0c1421] rounded-xl py-6">
              <input
                className="bg-[#020a13] text-gray-400 rounded-3xl p-3 w-full"
                type="email"
                placeholder="Enter your email address"
                value={subscribed}
                onChange={(e) => setSubscribed(e.target.value)}
              />
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl w-[200px] focus:outline-none focus:shadow-outline"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pashu Mitra || Lalbabu Kumar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
