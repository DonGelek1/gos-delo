import React, { useState } from 'react';
import './Header.scss';

const Navbar = () => {
   const [active, setActive] = useState(false);

   const links = [
      { name: "Описание", path: "#description" },
      { name: "Практика", path: "#practice" },
      { name: "Партнеры", path: "#partners" },
      { name: "Баллы ЕГЭ", path: "#exams" },
      { name: "Как поступить?", path: "#admission" },
   ];

   return (
      <nav className='header__menu'>
         <ul onClick={() => setActive(false)} className={active ? 'header__list active' : 'header__list'}>
            {links.map(link => (
               <li key={link.name}>
                  <a className='header__link' href={link.path}>{link.name}</a>
               </li>
            ))}
         </ul>
         <div onClick={() => setActive(!active)} className={active ? 'header__burger active' : 'header__burger'}>
            <span></span>
         </div>
      </nav>
   );
};

export default Navbar;

