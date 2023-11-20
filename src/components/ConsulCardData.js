import React from 'react'
import Img1 from "../assets/demande.png";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const ConsulCardData = () => {
    const { t } = useTranslation();
    return (
      <div className='consulCard-container'>
        <img src={Img1} alt='consulCard' />
        <div className='consulCard-text'>
          <h1>{t('consulCard_head')}</h1>
          <p>{t('consulCard_text')}</p>
          <ul>
              <li>{t('consulCard_text_1')}</li>
              <li>{t('consulCard_text_2')}</li>
              <li>{t('consulCard_text_3')}</li>
              <li>{t('consulCard_text_4')}</li>
              <li>{t('consulCard_text_5')}</li>
          </ul>
          <p>{t('consulCard_text_6')}</p>
        </div>
          
      </div>
      
    )
}

export default ConsulCardData;

