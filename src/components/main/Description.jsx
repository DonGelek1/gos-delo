import React from "react";
import { motion } from "framer-motion";
import iconLang from "../../assets/images/icon-lang.svg";
import iconPs from "../../assets/images/icon-ps.svg";
import iconArm from "../../assets/images/icon-arm.svg";
import iconPravo from "../../assets/images/icon-pravo.svg";
import iconNote from "../../assets/images/icon-note.svg";
import iconLoud from "../../assets/images/icon-loud.svg";
import iconFin from "../../assets/images/icon-fin.svg";

const Description = () => {
   const subjectsData = [
      { title: "Иностранный язык", icon: iconLang },
      { title: "Психология", icon: iconPs },
      { title: "Конфликтология", icon: iconArm },
      { title: "Право", icon: iconPravo },
      { title: "Менеджмент", icon: iconNote },
      { title: "Маркетинг", icon: iconLoud },
      { title: "Экономика", icon: iconFin },
   ];

   const disciplinesData = [
      { title: "Международные гостиничные сети: управление брендом" },
      { title: "Проектирование и старт предприятий международной сферы гостеприимства" },
      { title: "Классификационная экспертиза и аудит предприятий сферы гостеприимства" },
      { title: "Организация работы служб гостиничного комплекса" },
      { title: "Технологии продвижения и продаж в международной сфере гостеприимства" },
      { title: "Ивент-менеджмент в международной индустрии гостеприимства" },
      { title: "Эмоциональный сервис: управление поведением гостя" },
      { title: "Экономический анализ деятельности предприятий в сфере гостеприимства" },
   ];

   // Варианты анимации
   const fadeIn = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
   };

   const staggerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.5 } },
   };

   return (
      <motion.section
         className="description"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={fadeIn}
      >
         <motion.div className="description__content" variants={fadeIn}>
            <motion.h2 className="description__title">
               <span className="description__highlight">ВШУ РУДН</span> — это симбиоз гуманитарных и управленческих наук, а также иностранных языков. Мы готовим управленцев и лидеров индустрии гостеприимства.
            </motion.h2>

            <motion.div className="description__subjects" variants={staggerContainer}>
               <motion.h3 className="description__subtitle" variants={fadeIn}>
                  Предметы
               </motion.h3>
               <motion.div className="description__list">
                  {subjectsData.map((subject, index) => (
                     <motion.div
                        key={index}
                        className="description__item"
                        variants={fadeIn}
                     >
                        <img
                           src={subject.icon}
                           alt={`${subject.title} иконка`}
                           className="description__icon"
                           aria-hidden="true"
                        />
                        <span className="description__text">{subject.title}</span>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>

            <motion.div className="description__disciplines" variants={staggerContainer}>
               <motion.h3 className="description__subtitle" variants={fadeIn}>
                  Некоторые дисциплины и компетенции
               </motion.h3>
               <motion.ul className="description__list-dis">
                  {disciplinesData.map((discipline, index) => (
                     <motion.li
                        key={index}
                        className="description__discipline"
                        variants={fadeIn}
                     >
                        {discipline.title}
                     </motion.li>
                  ))}
               </motion.ul>
            </motion.div>
         </motion.div>
      </motion.section>
   );
};

export default Description;
