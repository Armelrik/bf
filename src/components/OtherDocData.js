import React from 'react'
import Img1 from "../assets/demande.png";
import './OtherDocDataStyles.css';
import { useTranslation } from 'react-i18next';

const OtherDocData = () => {
    const { t } = useTranslation();
    return (
    <div className='odd_container'>
        <img src={Img1} alt='consulCard' />
        <div className='odd_text'>
          {/* <h1>{t('consulCard_head')}</h1> */}
        <h1>{t('visas_head')}</h1>
        <p>{t('other_title1')}</p>
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
                <td>{t('other_row1')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('other_row2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('other_row3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('other_row4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('other_row5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>{t('other_row6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('other_row7')}</td>
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

        <hr/>
        <p>{t('other_title2')}</p>
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
                <td>{t('other_row1_1')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('other_row1_2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('other_row1_3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('other_row1_4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('other_row1_5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>{t('other_row1_6')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>{t('other_row1_7')}</td>
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

        <hr/>
        <p>{t('other_title3')}</p>
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
                <td>{t('other_row2_1')}</td>
                <td><span>34</span></td>
                <td><span>68</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>{t('other_row2_2')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>{t('other_row2_3')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>{t('other_row2_4')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>{t('other_row2_5')}</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>{t('consulCard_row7')}</span></td>
                <td><span>34</span></td>
                <td><span>68</span></td>
            </tr>
            
        </table>
        </div>
    
    </div>
    
    )
}

export default OtherDocData;

