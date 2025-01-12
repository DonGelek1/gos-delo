import React, { useEffect, useRef, useState } from 'react';

const Banner = ({ id, text }) => {
   const bannerRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsVisible(entry.isIntersecting);
         },
         {
            threshold: 0,
         }
      );

      if (bannerRef.current) {
         observer.observe(bannerRef.current);
      }

      return () => {
         if (bannerRef.current) {
            observer.unobserve(bannerRef.current);
         }
      };
   }, []);

   return (
      <div id={id} className="banner" ref={bannerRef}>
         <div
            className="banner__wrapper"
            style={{
               animationPlayState: isVisible ? 'running' : 'paused',
            }}
         >
            <p className="banner__text">
               {Array(8)
                  .fill(null)
                  .map((_, i) => (
                     <span key={i}>{text}</span>
                  ))}
            </p>
         </div>
      </div>
   );
};

export default Banner;
