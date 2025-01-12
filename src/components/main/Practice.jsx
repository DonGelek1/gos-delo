import React from 'react'

const Practice = () => {

   const courses = [
      {
         id: 1,
         title: "курс",
         description: "— учебная практика, где студенты более глубоко погружаются в индустрию.",
      },
      {
         id: 2,
         title: "курс",
         description: "— практика, подготавливающая студентов к реальной работе.",
      },
      {
         id: 3,
         title: "курс",
         description: "— производственная практика на реальных предприятиях.",
      },
      {
         id: 4,
         title: "курс",
         description: "— преддипломная практика, для подготовки к выпускной квалификационной работе.",
      },
   ];

   return (
      <section className="practice">
         <div className="practice__content">
            <h2 className="practice__title">
               <span className="practice__highlight">РУДН</span> предоставляет студентам возможность проходить практику в гостиницах, отелях, бизнес-отелях, апартаментах, гостевых домах, кемпингах и других предприятиях и организациях международной гостиничной индустрии.
            </h2>

            <div className="practice__courses">
               <h3 className="practice__subtitle">Ваша практика</h3>
               <div className="practice__list">
                  {courses.map((course) => (
                     <div key={course.id} className="practice__item">
                        <div className="practice__group">
                           <div className="practice__circle">{course.id}</div>
                           <span className="practice__course">{course.title}</span>
                        </div>
                        <p className="practice__description">{course.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Practice
