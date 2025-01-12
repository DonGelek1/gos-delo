import React from 'react';
import arrow from '../../assets/images/Arrow.png';

const Hero = () => {

   const tableData = [
      { type: "Очная", price: "350 000 ₽" },
      { type: "Очно-заочная", price: "150 000 ₽" },
      { type: "Заочная", price: "120 000 ₽" },
   ];

   return (
      <section className="hero">
         <div className="hero__content">
            <p className="hero__subtitle">
               <span className="hero__subtitle-highlight">МЫ</span> — это искусство гостеприимства, где каждый момент становится <em>особенным!</em>
            </p>
            <h1 className="hero__title">ГОСТИНИЧНОЕ ДЕЛО</h1>
            <div className="hero__table">
               <p className="hero__table-title">Форма обучения / стоимость в год</p>
               <ul className="hero__table-list">
                  {tableData.map((item, index) => (
                     <li className="hero__table-item" key={index}>
                        <span className="text">{item.type}</span>
                        <span className="dash">—</span>
                        <span className="text">{item.price}</span>
                     </li>
                  ))}
               </ul>
               <img className="hero__table-arrow" src={arrow} alt="------>" />
            </div>
            <button
               className="hero__button"
               onClick={() => window.open("https://ab.rudn.ru", "_blank", "noopener,noreferrer")}
            >
               Хочу поступить
            </button>
         </div>
      </section>
   )
}

export default Hero
