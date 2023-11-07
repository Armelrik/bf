import React from 'react'
import './AmbassadorUsStyles.css';
import Img1 from "../assets/ambasador.jpeg";
import { useTranslation } from 'react-i18next';

function AmbassadorUs() {
  const { t } = useTranslation();
  return (
    <div className='ambassador-container'>
      <img src={Img1} alt='ambassador' />
      <div>
        <h1>{t('ambassador_head')}</h1>
        <p>{t('ambassador_text')}</p>
      </div>
        
    </div>
    
  )
}

export default AmbassadorUs;