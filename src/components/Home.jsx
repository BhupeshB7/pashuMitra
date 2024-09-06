import React, { useEffect, useRef } from "react";
import Header from "./Header";
import bg from "../assets/c3.jpg";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import AppointmentForm from "./AppointmentForm";
import { motion, useAnimation, useInView } from "framer-motion";
import Service from "../pages/Service";

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 0.5,
        x: 0,
        scale: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -140,
        scale: 0.4,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  return (
    <>
      <Header />
      <section className="relative">
        <motion.img
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 10,
            },
          }}
          whileHover={{ scale: 1.1 }}
          src={bg}
          alt="background"
          className="w-full h-[600px] object-cover opacity-20 -z-0"
        />
        
        <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-end justify-evenly gap-12 p-4 text-white">
          <button
            className="bg-green-500 hover:bg-green-400 text-green-950 text-xl rounded-3xl px-6 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            Book Appointment
          </button>

          <div className=" rounded-2xl p-6 w-[90%] md:w-[500px] lg:w-[700px]">
            <h1 className="home-title">{t("home.title")}</h1>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AppointmentForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </section>
      <Service />
    </>
  );
};

export default Home;
