import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/images/Arrow.png";

const Hero = () => {
   const tableData = [
      { type: "Очная", price: "350 000 ₽" },
      { type: "Очно-заочная", price: "150 000 ₽" },
      { type: "Заочная", price: "120 000 ₽" },
   ];

   // Варианты анимации для заголовка и таблицы
   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
   };

   const listItemVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: (i) => ({
         opacity: 1,
         x: 0,
         transition: { duration: 0.5, delay: i * 0.2 },
      }),
   };

   return (
      <motion.section
         className="hero"
         initial="hidden" // Начальное состояние
         animate="visible" // Конечное состояние
         variants={containerVariants} // Варианты анимации
      >
         <motion.div className="hero__content">
            <motion.p
               className="hero__subtitle"
               variants={containerVariants}
               transition={{ duration: 0.8, delay: 0.1 }}
            >
               <span className="hero__subtitle-highlight">МЫ</span> — это искусство гостеприимства, где каждый момент становится <em>особенным!</em>
            </motion.p>
            <motion.h1
               className="hero__title"
               variants={containerVariants}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
               ГОСТИНИЧНОЕ ДЕЛО
            </motion.h1>
            <motion.div className="hero__table" variants={containerVariants}>
               <p className="hero__table-title">Форма обучения / стоимость в год</p>
               <ul className="hero__table-list">
                  {tableData.map((item, index) => (
                     <motion.li
                        className="hero__table-item"
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                     >
                        <span className="text">{item.type}</span>
                        <span className="dash">—</span>
                        <span className="text">{item.price}</span>
                     </motion.li>
                  ))}
               </ul>
               <motion.img
                  className="hero__table-arrow"
                  src={arrow}
                  alt="------>"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
               />
            </motion.div>
            <motion.button
               className="hero__button"
               onClick={() => window.open("https://ab.rudn.ru", "_blank", "noopener,noreferrer")}
               whileHover={{ scale: 1.1 }} // Эффект при наведении
               whileTap={{ scale: 0.9 }} // Эффект при клике
            >
               Хочу поступить
            </motion.button>
         </motion.div>
      </motion.section>
   );
};

export default Hero;
