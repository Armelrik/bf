import React from 'react'
import Img1 from "../assets/demande.png";
import './ConsulCardDataStyles.css';
import { useTranslation } from 'react-i18next';

const CertificateData = () => {
    const { t } = useTranslation();
    return (
      <div className='consulCard-container'>
        <img src={Img1} alt='consulCard' />
        <div className='consulCard-text'>
          {/* <h1>{t('consulCard_head')}</h1> */}
          <h1>Establishment of a CIC</h1>
          <p>Pieces a fournir pour la demande de CIC </p>
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
                <td>Une fiche de demande de CIC dument remplie, signée et datée (à retirer au Service consulaire de l’Ambassade) ; </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Une photocopie de l’acte de naissance du demandeur  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Une photocopie du passeport burkinabè; </td>
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

export default CertificateData;

