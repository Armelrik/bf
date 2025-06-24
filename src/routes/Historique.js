import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import AboutImg from '../assets/2.jpg';
import AboutImg2 from '../assets/istockphoto-583736340-1024x1024.jpg';
import './routesStyles.css';

function Historique() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title={t('dropdown2_2')}
        btnClass="hide"
      />
      <div className='cc_container'>
        <img src={AboutImg2} alt='Historique' />
        <div className='cc_text'>
          <h1>{t('historique_title')}</h1>
          <p>{t('historique_paragraph1')}</p>
          <p>{t('historique_paragraph2')}</p>
          <p>{t('historique_paragraph3')}</p>
          <p>{t('historique_paragraph4')}</p>
          <ul>
            <li>{t('historique_list1')}</li>
            <li>{t('historique_list2')}</li>
            <li>{t('historique_list3')}</li>
            <li>{t('historique_list4')}</li>
            <li>{t('historique_list5')}</li>
            <li>{t('historique_list6')}</li>
            <li>{t('historique_list7')}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Historique; 