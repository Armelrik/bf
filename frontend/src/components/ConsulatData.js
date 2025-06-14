import React from 'react'
import './ConsulatDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function ConsulatData() {
  const { t } = useTranslation();
  return (
    <div className='cd_container'>
      <img src={Img1} alt='visas' />
      <div className='cd_text'>
        <h1>{t('visas_head')}</h1>
        <p>{t('visas_text')} {t('visas_text_6')}
        les vendredis, le service s’arrête à 12heures. Par conséquent, les retraits qui coïncident avec ce jour sont reportés au lundi qui suit immédiatement, de 14H à 16H.</p>
        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td><span>Actes nécessitant un traitement en circuit</span>(initiation par un agent et validation par le Chef de poste, puis finalisation par l’agent initiateur et retour au Chef de poste pour signature) : Laissez-passer ou sauf conduite, Certificat de célibat, Déclaration de répudiation de nationalité, Actes de notoriété, Immatriculation des burkinabè, Attestation de résidence ou changement de résidence, Consentement à mariage du père ou de la mère, Attestation d’identité…</td>
                <td>9h - 11h</td>
                <td>48h après dépôt de 14h - 16h</td>
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
        
      </div>
    

    </div>
    
  )
}

export default ConsulatData;