import React from 'react'
import './VisasDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function Visas() {
  const { t } = useTranslation();
  return (
    <div className='visas-container'>
      <img src={Img1} alt='visas' />
      <div className='visas-text'>
        <h1>{t('visas_head')}</h1>
        <p>{t('visas_text')}</p>
        <ul>
            <li>{t('visas_text_1')}</li>
            <li>{t('visas_text_2')}</li>
            <li>{t('visas_text_3')}</li>
            <li>{t('visas_text_4')}</li>
            <li>{t('visas_text_5')}</li>
        </ul>
        <p>{t('visas_text_6')}</p>
      </div>
        
    </div>
    
  )
}

export default Visas;