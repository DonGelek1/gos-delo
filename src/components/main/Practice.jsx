import React from "react";
import { motion } from "framer-motion";

const Practice = () => {
   const courses = [
      { id: 1, title: "курс", description: "— учебная практика, где студенты более глубоко погружаются в индустрию." },
      { id: 2, title: "курс", description: "— практика, подготавливающая студентов к реальной работе." },
      { id: 3, title: "курс", description: "— производственная практика на реальных предприятиях." },
      { id: 4, title: "курс", description: "— преддипломная практика, для подготовки к выпускной квалификационной работе." },
   ];

   const fadeIn = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
   };

   const staggerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.5 } },
   };

   return (
      <motion.section
         className="practice"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={fadeIn}
      >
         <motion.div className="practice__content" variants={fadeIn}>
            <motion.h2 className="practice__title">
               <span className="practice__highlight">РУДН</span> предоставляет студентам возможность проходить практику в гостиницах, отелях, бизнес-отелях, апартаментах, гостевых домах, кемпингах и других предприятиях и организациях международной гостиничной индустрии.
            </motion.h2>

            <motion.div className="practice__courses" variants={staggerContainer}>
               <motion.h3 className="practice__subtitle" variants={fadeIn}>
                  Ваша практика
               </motion.h3>
               <motion.div className="practice__list">
                  {courses.map((course) => (
                     <motion.div
                        key={course.id}
                        className="practice__item"
                        variants={fadeIn}
                     >
                        <div className="practice__group">
                           <div className="practice__circle">{course.id}</div>
                           <span className="practice__course">{course.title}</span>
                        </div>
                        <p className="practice__description">{course.description}</p>
                     </motion.div>
                  ))}
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.section>
   );
};

export default Practice;
