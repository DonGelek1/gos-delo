import React from 'react';
import Navbar from './Navbar';
import logo from '../../assets/images/RUDN-logo.svg';
import './Header.scss';

const Header = () => {

   return (
      <header className='header'>
         <div className='header__container'>
            <div className='header__logo'>
               <img src={logo} alt="RUDN University Logo" />
            </div>
            <Navbar />
         </div>
      </header>
   );
};

export default Header;
