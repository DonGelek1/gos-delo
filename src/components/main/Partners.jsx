import React from "react";
import { motion } from "framer-motion";
import Safmar from "../../assets/images/safmar-logo.png";
import Radisson from "../../assets/images/radisson-logo.png";
import Zimu from "../../assets/images/zimu-logo.png";
import Kempinski from "../../assets/images/kempinski-logo.png";
import Carlton from "../../assets/images/carlton-logo.png";
import Wtc from "../../assets/images/wtc-logo.png";

const Partners = () => {
   const partnersData = [
      { id: 1, src: Safmar, alt: "Сафмар Плаза" },
      { id: 2, src: Radisson, alt: "Radisson Blu" },
      { id: 3, src: Zimu, alt: "ЗИМУ Сеть отелей" },
      { id: 4, src: Kempinski, alt: "Hotel Baltschug Kempinski Moscow" },
      { id: 5, src: Carlton, alt: "The Carlton" },
      { id: 6, src: Wtc, alt: "World Trade Center Moscow" },
   ];

   const fadeIn = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   };

   const staggerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.5 } },
   };

   return (
      <motion.section
         className="partners"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={staggerContainer}
      >
         <motion.div className="partners__content">
            {partnersData.map((partner) => (
               <motion.div
                  key={partner.id}
                  className="partners__item"
                  variants={fadeIn}
               >
                  <img
                     src={partner.src}
                     alt={partner.alt}
                     className="partners__image"
                  />
               </motion.div>
            ))}
         </motion.div>
      </motion.section>
   );
};

export default Partners;
