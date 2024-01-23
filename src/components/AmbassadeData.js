import React from 'react'
import './AmbassadorUsStyles.css';
// import Img2 from "../assets/ambasador.jpeg";
import Img1 from "../assets/amb.jpeg";
// import { useTranslation } from 'react-i18next';

function AmbassadeData() {
//   const { t } = useTranslation();
  return (
    <div className='ambassador-container'>
      <img src={Img1} alt='ambassador' />
      <div className='ambassador-text'>
        {/* <h1>{t('ambassador_head')}</h1> */}
        <h1>AMBASSADE DU BURKINA FASO</h1>
        {/* <p>{t('ambassador_text')}</p> */}
        <p>Juridiquement ouverte en 2020, l'Ambassade du Burkina Faso 
            aux Émirats Arabes Unis a commencé à fonctionner à partir de 2023 avec le Dr. Souleymane KONATE, comme Chargé d’affaires a.i.</p>
      </div>
        
    </div>
    
  )
}

export default AmbassadeData;