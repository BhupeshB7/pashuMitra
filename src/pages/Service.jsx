import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaAmbulance, FaHospital, FaSyringe } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import ServiceItem from "./components/ServiceItem";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaSyringe size={30} color="white" />,
      title: t("service.vaccination"),
    },
    {
      icon: <FaHospital size={30} color="green" />,
      title: t("service.treatment"),
    },
    {
      icon: <FaAmbulance size={30} color="red" />,
      title: t("service.emergency"),
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Variants for Title, Subtitle, and Description animations
  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.05, // Staggered animation for each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-950  " id="services">
      <div className="max-w-[90%] lg:max-w-[70%] flex justify-center flex-col m-auto">
        {/* Title Animation */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-2xl font-bold text-gray-300 pt-5"
        >
          {t("service.title")}
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.h6
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-xl md:text-3xl text-gray-400 p-2"
        >
          {t("service.subTitle")}
        </motion.h6>

        {/* Description Animation (staggered word animation) */}
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-md md:text-xl text-gray-400 p-2 mb-4"
        >
          {t("service.description")
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>
      </div>

      <div className="container mx-auto px-3 lg:px-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center mb-4 bg-gray-950 p-4 m-1 rounded-full"
              >
                {service.icon}
              </motion.div>
              <h2 className="text-md md:text-xl text-center text-gray-400 p-3">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
  <path d="M 0,400 L 0,100 C 75.40364136035728,116.17657162487117 150.80728272071457,132.35314324974235 227,134 C 303.19271727928543,135.64685675025765 380.1745104774991,122.76399862590176 438,111 C 495.8254895225009,99.23600137409824 534.4946753692889,88.59086224665062 600,99 C 665.5053246307111,109.40913775334938 757.8467880453453,140.87255238749572 839,138 C 920.1532119546547,135.12744761250428 990.1181724493301,97.91892820336653 1061,79 C 1131.8818275506699,60.081071796633466 1203.6805221573343,59.451734799038135 1267,66 C 1330.3194778426657,72.54826520096186 1385.159738921333,86.27413260048093 1440,100 L 1440,400 L 0,400 Z" stroke="none" strokeWidth={0} fill="#111828" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" />
  <path d="M 0,400 L 0,233 C 62.14702851253864,205.87255238749572 124.29405702507728,178.74510477499143 192,196 C 259.7059429749227,213.25489522500857 332.97080041222955,274.89213328753004 398,282 C 463.02919958777045,289.10786671246996 519.8227413260048,241.68636207488836 587,239 C 654.1772586739952,236.31363792511164 731.7382342837512,278.36241841291655 803,275 C 874.2617657162488,271.63758158708345 939.2243215389901,222.86396427344553 1016,222 C 1092.7756784610099,221.13603572655447 1181.3644795602886,268.18172449330126 1254,278 C 1326.6355204397114,287.81827550669874 1383.3177602198557,260.40913775334934 1440,233 L 1440,400 L 0,400 Z" stroke="none" strokeWidth={0} fill="#0c1421" fillOpacity={1} className="transition-all duration-300 ease-in-out delay-150 path-1" />
</svg>

      <section className="bg-[#0c1421] py-12 ">
        <h6 className="text-green-400 text-4xl font-semibold text-center -mt-12 lg:-mt-32 ">
          {t("serviceItem.heading")}
        </h6>
        <ServiceItem />
      </section>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:-mt-36 transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#0C1421" />
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,150 C 29.02377288527569,161.15430151987096 58.04754577055138,172.30860303974188 109,150 C 159.95245422944862,127.69139696025812 232.83358980307014,71.9198893609034 275,96 C 317.16641019692986,120.0801106390966 328.61809501716783,224.01183951664456 371,221 C 413.38190498283217,217.98816048335544 486.69403012825865,108.03275257251838 533,82 C 579.3059698717414,55.96724742748163 598.6057844697982,113.85715019328197 633,126 C 667.3942155302018,138.14284980671803 716.8828319925484,104.53864665435377 772,92 C 827.1171680074516,79.46135334564623 887.8628875600078,87.98826318930298 929,120 C 970.1371124399922,152.01173681069702 991.6656177674206,207.50830058843425 1031,215 C 1070.3343822325794,222.49169941156575 1127.4746413703097,181.97853445696 1173,174 C 1218.5253586296903,166.02146554304 1252.4358167513399,190.57756158372572 1295,192 C 1337.5641832486601,193.42243841627428 1388.78209162433,171.71121920813715 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth={0}
          fill="url(#gradient)"
          fillOpacity={1}
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        />
      </svg>
       <AppointmentForm/>
      <Footer />
    </section>
  );
};

export default Service;
