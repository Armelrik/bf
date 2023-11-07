import React from 'react'
import './AmbassadorUsStyles.css';
import { useTranslation } from 'react-i18next';

function AmbassadorUs() {
  const { t } = useTranslation();
  return (
    <div className='about-container'>
        <h1>{t('ambassador_head')}</h1>
        <p>{t('ambassador_text')}</p>
    </div>
  )
}

export default AmbassadorUs;