import React from 'react';
import Img1 from "../assets/amb.jpeg";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const AssociationsData = () => {
    const { t } = useTranslation();
    return (
    <div className='cc_container'>
        <img src={Img1} alt='Associations' />
        <div className='cc_text'>
        <h1>{t('associations_title')}</h1>
        <table>
            <tr id="header">
                <th>{t('associations_table_header_1')}</th>
                <th>{t('associations_table_header_2')}</th>
                <th>{t('associations_table_header_3')}</th>
                <th>{t('associations_table_header_4')}</th>
            </tr>
            <tr>
                <td>{t('associations_row_1_mdpc')}</td>
                <td></td>
                <td>{t('associations_row_1_name')}</td>
                <td>{t('associations_row_1_contact')}</td>
            </tr>
            <tr>
                <td>{t('associations_row_2_mdpc')}</td>
                <td></td>
                <td>{t('associations_row_2_name')}</td>
                <td>{t('associations_row_2_contact')}</td>
            </tr>
            <tr>
                <td>{t('associations_row_3_mdpc')}</td>
                <td></td>
                <td>{t('associations_row_3_name')}</td>
                <td>{t('associations_row_3_contact')}</td>
            </tr>
        </table>
        </div>
    </div>
    )
}

export default AssociationsData; 