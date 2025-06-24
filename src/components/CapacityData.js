import React from 'react'
import './CapacityDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function CapacityData() {
  const { t } = useTranslation();
  return (
    <div className='cap_container'>
      <img src={Img1} alt='visas' />
      <div className='cap_text'>
        <h1>{t('visas_head')}</h1>
       <p>{t('capacity_text')} </p>
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('capacity_row1')}</td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td><span>{t('capacity_row2')}</span>{t('capacity_row2_1')} </td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row2_3')}</td>
            </tr>

            <tr>
                <td><span>3</span></td>
                <td><span>{t('capacity_row3')}</span>{t('capacity_row3_1')}</td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row3_2')}</td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td><span>{t('capacity_row4')}</span>{t('capacity_row4_1')}</td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row4_2')}</td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td><span>{t('capacity_row5')} </span>{t('capacity_row5_1')}</td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row5_2')}</td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td><span>{t('capacity_row6')}</span>{t('capacity_row6_1')}</td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row6_2')}</td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td><span>{t('capacity_row7')}</span>{t('capacity_row7_1')} </td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row7_2')}</td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td><span>{t('capacity_row8')}</span>{t('capacity_row8_1')}</td>
                <td>{t('capacity_row2_2')}</td>
                <td>{t('capacity_row8_2')}</td>
            </tr>
            
        </table>
        {/* <ul>
            <li>{t('visas_text_1')}</li>
            <li>{t('visas_text_2')}</li>
            <li>{t('visas_text_3')}</li>
            <li>{t('visas_text_4')}</li>
            <li>{t('visas_text_5')}</li>
        </ul> */}
        
      </div>
    

    </div>
    
  )
}

export default CapacityData;