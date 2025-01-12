import React from 'react';

const Admission = () => {
   const steps = [
      {
         id: 1,
         title: 'Регистрация',
         description: 'Зарегистрироваться в личном кабинете приёмной комиссии',
         link: 'https://ab.rudn.ru',
      },
      {
         id: 2,
         title: 'Подача заявления',
         description: 'Кликнуть на "Подать заявление".',
      },
      {
         id: 3,
         title: 'Заполнение данных',
         description: 'Заполнить необходимую информацию по шагам.',
      },
      {
         id: 4,
         title: 'Выбор программы',
         description: (
            <ul>
               <li>
                  Выбрать факультет — «Высшая школа управления».
               </li>
               <li>
                  Форма обучения — очная.
               </li>
               <li>
                  Уровень обучения — бакалавриат.
               </li>
               <li>
                  Категория поступления — контракт/квота.
               </li>
               <li>
                  Направление подготовки — «Гостиничное дело».
               </li>
            </ul>

         ),
      },
      {
         id: 5,
         title: 'Оплата в случае контракта',
         description: 'Оплатить 1 семестр обучения — 175 000 ₽.',
      },
   ];

   return (
      <section className="admission">
         <div className="admission__content">
            {steps.map((step) => (
               <div key={step.id} className="admission__step">
                  <h3 className="admission__title">{step.title}</h3>
                  <div className="admission__description">
                     {step.description}
                     {step.link && (
                        <>
                           {' '}
                           <a href={step.link} target="_blank" rel="noopener noreferrer">
                              {step.link}
                           </a>
                        </>
                     )}
                  </div>
                  <span className="admission__number">{step.id}</span>
               </div>
            ))}
            <button
               className="admission__button"
               onClick={() => window.open("https://ab.rudn.ru", "_blank", "noopener,noreferrer")}
            >
               Хочу поступить
            </button>
         </div>
      </section>
   );
};

export default Admission;
