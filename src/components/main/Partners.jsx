import React from 'react';
import Safmar from '../../assets/images/safmar-logo.png';
import Radisson from '../../assets/images/radisson-logo.png';
import Zimu from '../../assets/images/zimu-logo.png';
import Kempinski from '../../assets/images/kempinski-logo.png';
import Carlton from '../../assets/images/carlton-logo.png';
import Wtc from '../../assets/images/wtc-logo.png';

const Partners = () => {

   const partnersData = [
      { id: 1, src: Safmar, alt: "Сафмар Плаза" },
      { id: 2, src: Radisson, alt: "Radisson Blu" },
      { id: 3, src: Zimu, alt: "ЗИМУ Сеть отелей" },
      { id: 4, src: Kempinski, alt: "Hotel Baltschug Kempinski Moscow" },
      { id: 5, src: Carlton, alt: "The Carlton" },
      { id: 6, src: Wtc, alt: "World Trade Center Moscow" },
   ];

   return (
      <section className="partners">
         <div className="partners__content">
            {partnersData.map((partner) => (
               <div key={partner.id} className="partners__item">
                  <img src={partner.src} alt={partner.alt} className="partners__image" />
               </div>
            ))}
         </div>
      </section>
   );
};

export default Partners;
