import React from 'react';
import Hero from './Hero';
import Description from './Description';
import Practice from './Practice';
import Partners from './Partners';
import Exam from './Exam';
import Admission from './Admission';
import Banner from './Banner';
import './Main.scss';

const Main = () => {
   return (
      <main className="main">
         <Hero />
         <Banner id="description" text="ОПИСАНИЕ" />
         <Description />
         <Banner id="practice" text="ПРАКТИКА" />
         <Practice />
         <Banner id="partners" text="ПАРТНЁРЫ" />
         <Partners />
         <Banner id="exams" text="БАЛЛЫ ЕГЭ" />
         <Exam />
         <Banner id="admission" text="КАК ПОСТУПИТЬ" />
         <Admission />
      </main>
   );
};

export default Main;
