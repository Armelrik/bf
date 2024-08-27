import React from 'react'
import './AmbassadorUsStyles.css';
import Img1 from "../assets/ambasador.jpeg";
import { useTranslation } from 'react-i18next';

function AmbassadorUs() {
  const { t } = useTranslation();
  return (
    <div className='ambassador_container'>
      <img src={Img1} alt='ambassador' />
      <div className='ambassador_text'>
        <h1>{t('ambassador_head')}</h1>
        <p>{t('first_dest_text')}</p>
      </div>
        
    </div>
    
  )
}

export default AmbassadorUs;