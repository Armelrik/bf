import React from 'react'
import Img1 from "../assets/demande.png";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const OtherDocData = () => {
    const { t } = useTranslation();
    return (
      <div className='consulCard-container'>
        <img src={Img1} alt='consulCard' />
        <div className='consulCard-text'>
          {/* <h1>{t('consulCard_head')}</h1> */}
          <h1>Voici la liste des documents a fournir pour</h1>
          <p>Pieces a fournir pour l’etablissement d’une decharge </p>
          {/* <p>{t('consulCard_text')}</p> */}
          
          <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement de la décharge  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>UPhotocopies légalisées des Passeports ou CNIB ou CIC du demandeur  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Titre de séjour du demandeur (Emirat ID) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Un document justificatif de la résidence </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Une (01) photo d’identité récente, prise de face (front, oreilles et menton bien dégagés)  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>Une adresse complète du domicile du demandeur </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Une quittance de paiement des frais d’établissement s’élevant à 48 AED</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
        </table>

        <p>Pieces a fournir pour l’etablissement d’une autorisation parentale </p>
          {/* <p>{t('consulCard_text')}</p> */}
          
          <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement de l’autorisation parentale   </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>UPhotocopies légalisées des Passeports ou CNIB ou CIC du demandeur  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Titre de séjour du demandeur (Emirat ID) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Un document justificatif de la résidence </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Une (01) photo d’identité récente, prise de face (front, oreilles et menton bien dégagés)  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>Une adresse complète du domicile du demandeur </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Une quittance de paiement des frais d’établissement s’élevant à 48 AED</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
        </table>
        </div>
          
      </div>
      
    )
}

export default OtherDocData;

