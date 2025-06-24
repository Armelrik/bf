import React from 'react';
import Img1 from "../assets/istockphoto-1090499678-1024x1024.jpg";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const ConseilsData = () => {
    const { t } = useTranslation();
    return (
    <div className='cc_container'>
        <img src={Img1} alt='Conseils' />
        <div className='cc_text'>
            <h1>{t('conseils_header_title')}</h1>
            <p><strong>{t('conseils_reference')}</strong></p>
            <h2>{t('conseils_subtitle')}</h2>
            <p>{t('conseils_paragraph1')}</p>
            <p>{t('conseils_paragraph2')}</p>
            <p>{t('conseils_paragraph3')}</p>
            <ul>
                <li>{t('conseils_list1')}</li>
                <li>{t('conseils_list2')}</li>
                <li>{t('conseils_list3')}</li>
                <li>{t('conseils_list4')}</li>
                <li>{t('conseils_list5')}</li>
                <li>{t('conseils_list6')} <a href="https://u.ae/en/information-and-services/health-and-fitness/drugs-and-controlled-medicines" target="_blank" rel="noopener noreferrer">https://u.ae/en/information-and-services/health-and-fitness/drugs-and-controlled-medicines</a> ;</li>
                <li>{t('conseils_list7')}</li>
            </ul>
            <p>{t('conseils_paragraph4')}</p>
            <p><strong>{t('conseils_date')}</strong></p>
            <p>{t('conseils_footer')}</p>
            <a href="/assets/files/Conseils_Voyageurs_Burkina_UAE_2025.pdf" target='_blanck' className="download-btn">
                {t('conseils_download_btn')}
            </a>
        </div>
    </div>
    )
}

export default ConseilsData; 