import React from 'react';
import Img1 from "../assets/Ibrahim-Traore.jpg";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const HCBEData = () => {
    const { t } = useTranslation();
    return (
    <div className='cc_container'>
        <img src={Img1} alt='HCBE Delegate' />
        <div className='cc_text'>
        <h1>{t('hcbe_title')}</h1>
        <p><strong>{t('hcbe_subtitle')}</strong></p>
        <p><em>{t('hcbe_author')}</em></p>
        <p>{t('hcbe_salutation')}</p>
        <p>{t('hcbe_paragraph1')}</p>
        <p>{t('hcbe_paragraph2')}</p>
        </div>
    </div>
    )
}

export default HCBEData; 