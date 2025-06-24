import React from 'react'
import './ActsDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function ActsData() {
  const { t } = useTranslation();
  return (
    <div className='acts_container'>
      <img src={Img1} alt='visas' />
      <div className='acts_text'>
        <h1>{t('visas_head')}</h1>
        {/* <p>{t('visas_text')}</p> */}
        <p>{t('acts_text')}</p>
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('acts_row1')}</td>
                <td><span>7</span></td>
                <td><span>14</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('acts_row2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('acts_row3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('acts_row4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('acts_row5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>{t('acts_row6')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>7</span></td>
                <td><span>14</span></td>
            </tr>
            
        </table>
      </div>
        
    </div>
    
  )
}

export default ActsData;