import React from 'react';
import iconLang from '../../assets/images/icon-lang.svg';
import iconPs from '../../assets/images/icon-ps.svg';
import iconArm from '../../assets/images/icon-arm.svg';
import iconPravo from '../../assets/images/icon-pravo.svg';
import iconNote from '../../assets/images/icon-note.svg';
import iconLoud from '../../assets/images/icon-loud.svg';
import iconFin from '../../assets/images/icon-fin.svg';

const Description = () => {

   const subjectsData = [
      {
         title: "Иностранный язык",
         icon: iconLang,
      },
      {
         title: "Психология",
         icon: iconPs,
      },
      {
         title: "Конфликтология",
         icon: iconArm,
      },
      {
         title: "Право",
         icon: iconPravo,
      },
      {
         title: "Менеджмент",
         icon: iconNote,
      },
      {
         title: "Маркетинг",
         icon: iconLoud,
      },
      {
         title: "Экономика",
         icon: iconFin,
      },
   ];


   const disciplinesData = [
      {
         title: "Международные гостиничные сети: управление брендом",
         content:
            "Компетенция оказывает навыки и знания, необходимые для эффективного управления гостиничным брендом в глобальной сети. Это включает в себя стратегии брендинга, маркетинга и взаимодействия с клиентами для обеспечения консистентности и привлекательности бренда на международных рынках.",
      },
      {
         title: "Проектирование и старт предприятий международной сферы гостеприимства",
         content: "",
      },
      {
         title: "Классификационная экспертиза и аудит предприятий сферы гостеприимства",
         content: "",
      },
      {
         title: "Организация работы служб гостиничного комплекса",
         content: "",
      },
      {
         title: "Технологии продвижения и продаж в международной сфере гостеприимства",
         content: "",
      },
      {
         title: "Ивент-менеджмент в международной индустрии гостеприимства",
         content: "",
      },
      {
         title: "Эмоциональный сервис: управление поведением гостя",
         content: "",
      },
      {
         title: "Экономический анализ деятельности предприятий в сфере гостеприимства",
         content: "",
      },
   ];

   return (
      <section className="description">
         <div className="description__content">
            <h2 className="description__title">
               <span className="description__highlight">ВШУ РУДН</span> — это симбиоз гуманитарных и управленческих наук, а также иностранных языков. Мы готовим управленцев и лидеров индустрии гостеприимства.
            </h2>

            <div className="description__subjects">
               <h3 className="description__subtitle">Предметы</h3>
               <div className="description__list">
                  {subjectsData.map((subject, index) => (
                     <div key={index} className="description__item">
                        <img
                           src={subject.icon}
                           alt={`${subject.title} иконка`}
                           className="description__icon"
                           aria-hidden="true"
                        />
                        <span className="description__text">
                           {subject.title}
                        </span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="description__disciplines">
               <h3 className="description__subtitle">Некоторые дисциплины и компетенции</h3>
               <ul className="description__list-dis">
                  {disciplinesData.map((discipline, index) => (
                     <li key={index} className="description__discipline">
                        <details>
                           <summary className="description__summary">
                              {discipline.title}
                              <span className="description__toggle"></span>
                           </summary>
                           {discipline.content && (
                              <p className="description__text-dis">{discipline.content}</p>
                           )}
                        </details>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Description
