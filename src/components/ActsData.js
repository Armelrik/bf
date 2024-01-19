import React from 'react'
import './VisasDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function ActsData() {
  const { t } = useTranslation();
  return (
    <div className='visas-container'>
      <img src={Img1} alt='visas' />
      <div className='visas-text'>
        <h1>{t('visas_head')}</h1>
        {/* <p>{t('visas_text')}</p> */}
        <p>Composition de dossier pour l’établissement d’un acte de naissance</p>
        <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations: unregistered fees</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement d’un acte de naissance</td>
                <td><span>7</span></td>
                <td><span>14</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Déclaration de naissance </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Document justificatif de la profession des parents </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Photocopie de passeports des deux parents </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Acte de naissance des parents </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Adresse complète des parents  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>7</span></td>
                <td><span>14</span></td>
            </tr>
            
        </table>
      </div>
        
    </div>
    
  )
}

export default ActsData;