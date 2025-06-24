import React from 'react'
import './PassportData.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function PassportData() {
  const { t } = useTranslation();
  return (
    <div className='pass_container'>
      <img src={Img1} alt='passport' />
      <div className='pass_text'>
        {/* <h1>{t('passport_head')}</h1> */}
        <h1>{t('pass_text')} </h1>
        {/* <p>{t('passport_text')}</p> */}
        <p>{t('pass_subText')}:</p>
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('pass_row1')} </td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('pass_row2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('pass_row3')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('pass_row4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('pass_row5')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>{t('pass_row6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('pass_row7')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>{t('pass_row8')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>{t('pass_row9')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>{t('pass_row10')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>{t('pass_row11')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>12</span></td>
                <td>{t('pass_row12')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>
        <hr/>
        <p>{t('pass_subText2')}:</p>
        {/* <p>{t('passport_text')}</p> */}
        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('pass_mar1')}</td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('pass_mar2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('pass_mar3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('pass_mar4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('pass_mar5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>{t('pass_mar6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('pass_mar7')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>{t('pass_mar8')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>{t('pass_mar9')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>{t('pass_mar10')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>{t('pass_mar11')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>12</span></td>
                <td>{t('pass_mar12')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>13</span></td>
                <td>{t('pass_mar13')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>

        <hr/>
        <p>{t('pass_subText3')}:</p>
        {/* <p>{t('passport_text')}</p> */}

        <table>
        <tr id="header">
                <th>{t('consulCard_title1')}</th>
                <th>{t('consulCard_title2')}</th>
                <th>{t('consulCard_title3')}</th>
                <th>{t('consulCard_title4')}</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>{t('pass_ord1')}</td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('pass_ord2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('pass_ord3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('pass_ord4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('pass_ord5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>{t('pass_ord6')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('pass_ord7')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>{t('pass_ord8')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>{t('pass_ord9')}  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>{t('pass_ord10')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>{t('pass_ord11')} </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>
        </div>
        
    </div>
    )
}

export default PassportData;