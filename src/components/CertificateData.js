import React from 'react'
import Img1 from "../assets/demande.png";
import './CertificateDataStyles.css';
import { useTranslation } from 'react-i18next';

const CertificateData = () => {
    const { t } = useTranslation();
    return (
    <div className='cd_container'>
        <img src={Img1} alt='consulCard' />
        <div className='cd_text'>
        <h1>{t('certif_title')}</h1>
        <p>{t('certif_text')}</p>
        
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('certif_row1')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('certif_row2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('certif_row3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('certif_row4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('certif_row5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>{t('certif_row6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('certif_row7')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
        </table>
        </div>

    </div>

    )
}

export default CertificateData;

