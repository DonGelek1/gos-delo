import React from 'react';
import VkIcon from '../../assets/images/Vk.svg';
import TelegramIcon from '../../assets/images/Telegram.svg';
import './Footer.scss'

const Footer = () => {
   const socialLinks = [
      { id: 1, href: 'https://vk.com/hsm_rudn', label: 'VK', icon: VkIcon },
      { id: 2, href: 'https://t.me/hsm_rudn', label: 'Telegram', icon: TelegramIcon },
   ];

   return (
      <footer className="footer">
         <div className="footer__content">
            <p className="footer__text">RUDN University © 2024</p>
            <div className="footer__socials">
               {socialLinks.map((social) => (
                  <a
                     key={social.id}
                     href={social.href}
                     className="footer__icon"
                     aria-label={social.label}
                     target="_blank"
                  >
                     <img src={social.icon} alt={social.label} />
                  </a>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
