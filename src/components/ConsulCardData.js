import React from 'react'
import Img1 from "../assets/demande.png";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const ConsulCardData = () => {
    const { t } = useTranslation();
    return (
      <div className='consulCard-container'>
        <img src={Img1} alt='consulCard' />
        <div className='consulCard-text'>
          <h1>{t('consulCard_head')}</h1>
          <p>Documents requis pour l’etablissement d’une carte d’identite consulaire burkinabe
</p>
          {/* <p>{t('consulCard_text')}</p> */}
          
          <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations: unregistered fees</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement d’une Carte d’Identité Consulaire </td>
                <td><span>20 </span>48 (CIC sécurisée)</td>
                <td><span>41</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Photocopie de l’acte de naissance  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Document justificatif de la profession / titre de séjour (Emirat ID) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Deux (02) photos d’identités récentes, prises de face (front, oreilles et menton bien dégagé)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Adresse complète </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>20/48</span></td>
                <td><span>41</span></td>
            </tr>
            
        </table>
        </div>
          
      </div>
      
    )
}

export default ConsulCardData;

