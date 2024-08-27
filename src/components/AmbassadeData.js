import React from 'react'
import './AmbassadorUsStyles.css';
import Img1 from "../assets/amb.jpeg";
import { useTranslation } from 'react-i18next';

function AmbassadeData() {
const { t } = useTranslation();
  return (
    <div className='ambassador_container'>
      <img src={Img1} alt='ambassador' />
      <div className='ambassador_text'>
        <h1>{t('title_message')}</h1>
        {/* <h1>Ambassade du Burkina-Faso aux Émirats Arabes Unis</h1> */}
        {/* <p>{t('ambassador_text')}</p> */}
        <p></p>
      </div>
        
    </div>
    
  )
}

export default AmbassadeData;