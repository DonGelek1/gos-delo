import React from 'react';

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

   return (
      <section className="exam">
         <div className="exam__content">
            <div className="exam__required">
               <h3 className="exam__title">Обязательные</h3>
               <div className="exam__list">
                  {requiredExams.map((exam) => (
                     <div key={exam.id} className="exam__item">
                        <h4 className="exam__subject">{exam.subject}</h4>
                        <p className="exam__info">Контракт — <span className="exam__value">{exam.contract}</span></p>
                        <p className="exam__info">Бюджет — <span className="exam__value">{exam.budget}</span></p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="exam__optional">
               <h3 className="exam__title">По выбору</h3>
               <div className="exam__list">
                  {optionalExams.map((exam) => (
                     <div key={exam.id} className="exam__item">
                        <h4 className="exam__subject">{exam.subject}</h4>
                        <p className="exam__info">Контракт — <span className="exam__value">{exam.contract}</span></p>
                        <p className="exam__info">Бюджет — <span className="exam__value">{exam.budget}</span></p>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
};

export default Exam;
