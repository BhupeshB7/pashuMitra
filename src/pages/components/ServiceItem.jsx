import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const ServiceItem = () => {
  const { t } = useTranslation();
  const items = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661942274165-00cc8d55a93f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmV0ZXJpbmFyeSUyMGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D",
      title: t("serviceItem.title"),
      description: t("serviceItem.description"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661881927509-845fe97500c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmV0ZXJpbmFyeSUyMGNsaW5pYyUyMGNvd3xlbnwwfHwwfHx8MA%3D%3D",
      title: t("serviceItem.title2"),
      description: t("serviceItem.description2"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1666237390552-dca0ad72629c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVmZmFsb3xlbnwwfHwwfHx8MA%3D%3D",
      title: t("serviceItem.title3"),
      description: t("serviceItem.description3"),
    },
    {
      img: "https://images.unsplash.com/photo-1632236542159-809925d85fc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmV0fGVufDB8fDB8fHww",
      title: t("serviceItem.title4"),
      description: t("serviceItem.description4"),
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-3 lg:px-20 mt-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center  bg-gray-900 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  alt="background"
                  className="w-full h-[170px] object-cover round-top"
                />
              </div>
              <h2 className="text-md md:text-xl text-center text-gray-400 p-3">
                {service.title}
              </h2>
              <p className="text-md text-gray-500 p-3">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     
  );
};

export default ServiceItem;
