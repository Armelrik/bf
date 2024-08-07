import React from 'react';
import Img1 from "../assets/pass.jpg";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const ConsulCardData = () => {
    const { t } = useTranslation();
    return (
    <div className='cc_container'>
        <img src={Img1} alt='Consul Card' />
        <div className='cc_text'>
        <h1>{t('consulCard_head')}</h1>
        <p>{t('consulCard_text_line')}</p>
          {/* <p>{t('consulCard_text')}</p> */}
        <table>
            <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('consulCard_row1')}</td>
                <td><span>20 </span>48 {t('consulCard_row2')} </td>
                <td><span>41</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('consulCard_row3')}   </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('consulCard_row4')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('consulCard_row5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('consulCard_row6')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')} </span></td>
                <td><span>20/48</span></td>
                <td><span>41</span></td>
            </tr>
            
        </table>
        </div>
    </div>
    )
}

export default ConsulCardData;

