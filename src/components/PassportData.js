import React from 'react'
import './PassportData.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function PassportData() {
  const { t } = useTranslation();
  return (
    <div className='passport-container'>
      <img src={Img1} alt='passport' />
      <div className='passport-text'>
        <h1>{t('passport_head')}</h1>
        <p>{t('passport_text')}</p>
        <ul>
            <li>{t('passport_text_1')}</li>
            <li>{t('passport_text_2')}</li>
            <li>{t('passport_text_3')}</li>
            <li>{t('passport_text_4')}</li>
            <li>{t('passport_text_5')}</li>
        </ul>
        <p>{t('passport_text_6')}</p>
      </div>
        
    </div>
    
  )
}

export default PassportData;