import React from 'react';
import './DiasporaDataStyles.css';
import Img1 from "../assets/amb.jpeg";
import { useTranslation } from 'react-i18next';

function DiasporaData() {
  const { t } = useTranslation();
  return (
    <div className='dd_container'>
      <img src={Img1} alt='ambassador' />
      <div className='dd_text'>
        {/* <h1>La Diaspora</h1> */}
        <h1>{t('title_message')}</h1>
        <p>
        </p>
      </div>
    </div>
  )
}

export default DiasporaData;