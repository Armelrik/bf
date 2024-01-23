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
       <p>Constitution de dossier pour mariage </p>
        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>01-	Demande adressée à SEM l’Ambassadeur ou le Chargé d’Affaires a.i. (y mentionner également votre adresse et votre n° de téléphone)</td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td><span>Actes de constatation et de confirmation de régularité </span> Légalisation, certification, autorisation parentale, procuration, décharge</td>
                <td>9h - 11h</td>
                <td>Le jour du dépôt de 14h - 16h</td>
            </tr>

            <tr>
                <td><span>3</span></td>
                <td><span>Actes particuliers: </span>Demande de visa</td>
                <td>9h - 11h</td>
                <td>72h après le dépôt de 15h - 16h</td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td><span>Actes particuliers: </span>Acte de naissance</td>
                <td>9h - 11h</td>
                <td>Une semaine après la déclaration de naissance de 15h - 16h</td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td><span>Actes particuliers: </span>Acte de mariage</td>
                <td>9h - 11h</td>
                <td>Immédiatement après la célébration</td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td><span>Actes particuliers: </span>Carte d’identité consulaire</td>
                <td>9h - 11h</td>
                <td>48h après dépôt de 14h - 16h</td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td><span>Actes particuliers: </span>Demande de passeport (renouvellement/établissement/prorogation) </td>
                <td>9h - 11h</td>
                <td>A la date de la réception de la valise diplomatique transmettant le passeport, de 14H - 16H</td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td><span>Actes particuliers: </span>Déclaration, procès-verbal, certificat ou prestations non spécifiées</td>
                <td>9h - 11h</td>
                <td>24 heures après le dépôt, de 14H à 16H</td>
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