import React from 'react';
import { motion } from 'framer-motion';

const Exam = () => {
   const requiredExams = [
      { id: 1, subject: "Русский", contract: 40, budget: 65 },
      { id: 2, subject: "Обществознание", contract: 45, budget: 65 },
   ];

   const optionalExams = [
      { id: 1, subject: "Иностранный язык", contract: 35, budget: 65 },
      { id: 2, subject: "Информатика и ИКТ", contract: 44, budget: 65 },
      { id: 3, subject: "История", contract: 40, budget: 65 },
   ];

   const fadeIn = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
   };

   const staggerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.5 } },
   };

   return (
      <motion.section
         className="exam"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={staggerContainer}
      >
         <div className="exam__content">
            <motion.div className="exam__required" variants={fadeIn}>
               <h3 className="exam__title">Обязательные</h3>
               <div className="exam__list">
                  {requiredExams.map((exam) => (
                     <motion.div key={exam.id} className="exam__item" variants={fadeIn}>
                        <h4 className="exam__subject">{exam.subject}</h4>
                        <p className="exam__info">Контракт — <span className="exam__value">{exam.contract}</span></p>
                        <p className="exam__info">Бюджет — <span className="exam__value">{exam.budget}</span></p>
                     </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div className="exam__optional" variants={fadeIn}>
               <h3 className="exam__title">По выбору</h3>
               <div className="exam__list">
                  {optionalExams.map((exam) => (
                     <motion.div key={exam.id} className="exam__item" variants={fadeIn}>
                        <h4 className="exam__subject">{exam.subject}</h4>
                        <p className="exam__info">Контракт — <span className="exam__value">{exam.contract}</span></p>
                        <p className="exam__info">Бюджет — <span className="exam__value">{exam.budget}</span></p>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default Exam;
