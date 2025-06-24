import React from 'react'
import './LetPassDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function LetPass() {
  const { t } = useTranslation();
  return (
    <div className='lp_container'>
      <img src={Img1} alt='Let Pass' />
      <div className='lp_text'>
        <h1>{t('visas_head')}</h1>
        {/* <p>{t('visas_text')}</p> */}
        <p>{t('let_title1')} </p>
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('let_row1')}</td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('let_row2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('let_row3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('let_row4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('let_row5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>{t('let_row6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('let_row7')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>
            
        </table>

        <hr/>
        {/* <p>{t('visas_text')}</p> */}
        <p>{t('let_title2')}</p>
        <table>
            <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('let_row_2_1')}</td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('let_row_2_2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('let_row_2_3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('let_row_2_4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('let_row_2_5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>{t('let_row_2_6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
        
            <tr>
                <td><span>7</span></td>
                <td>{t('let_row_2_7')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>
            
        </table>
    </div>
        
    </div>
    )
}

export default LetPass;