import React, { useState } from "react";
import { API_ENDPOINTS } from "../../config/api";
import { motion } from "framer-motion";
import arrow from "../../assets/images/Arrow.png";
import Modal from "../modal/Modal";

const Hero = ({ isModalOpen, setIsModalOpen, modalType, setModalType }) => {

   const tableData = [
      { type: "Очная", price: "350 000 ₽" },
      { type: "Очно-заочная", price: "150 000 ₽" },
      { type: "Заочная", price: "120 000 ₽" },
   ];

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

   const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;

      try {
         const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
         });

         setIsModalOpen(false);

         if (response.ok) {
            setModalType("success");
         } else {
            setModalType("error");
         }
      } catch (error) {
         setIsModalOpen(false);
         console.error("Ошибка:", error);
         setModalType("error");
      }
   };


   return (
      <motion.section
         className="hero"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         <motion.div className="hero__content">
            <motion.p
               className="hero__text"
               variants={containerVariants}
               transition={{ duration: 0.8, delay: 0.1 }}
            >
               Заключи предварительный договор уже сейчас, забронируй место в бакалавриате!&#8195;|&#8195;
               <button className="hero__link" onClick={() => setIsModalOpen(true)}>
                  Подробнее
               </button>
            </motion.p>
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
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
            >
               Хочу поступить
            </motion.button>
         </motion.div>
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form className="modal__form" onSubmit={handleSubmit}>
               <label className="modal__text">Введите e-mail, на который придет предварительный договор</label>
               <input type="email" name="email" className="modal__input" placeholder="your@email.com" required />
               <button type="submit" className="modal__button modal__button--submit">Отправить</button>
            </form>
         </Modal>

         <Modal isOpen={!!modalType} onClose={() => setModalType(null)}>
            {modalType === "success" ? (
               <p className="modal__text">E-mail успешно отправлен!</p>
            ) : (
               <p className="modal__text">Ошибка отправки!</p>
            )}
         </Modal>

      </motion.section>
   );
};

export default Hero;
