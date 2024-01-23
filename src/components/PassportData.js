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
        <h1> Voici la liste des documents a fournir pour chaque type de passport</h1>
        {/* <p>{t('passport_text')}</p> */}
        <p>Composition de dossier pour le renouvellement d’un passeport ordinaire burkinabe:</p>
        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Quittance cachetée de paiement des frais d’établissement </td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Formulaire de Demande dûment rempli et revêtue du cachet droit de timbre perçu à retirer à l’Ambassade. Le formulaire porte obligatoirement les empreintes du demandeur.</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Photocopie du passeport en voie d’expiration ou expiré </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Photocopie légalisée de la Carte d’Identité Consulaire ou de la CNIB (obligatoire)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Document justificatif de la profession </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Trois (03) photos récentes pour passeport, prises de face sur fond blanc (front, oreilles et menton bien dégagé). Bonne tenue vivement recommandée.</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Adresse de la personne à prévenir en cas de besoin : Nom, prénom(s) et adresse téléphonique de quelqu’un vivant au Burkina Faso </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>Titre de séjour </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>En cas de perte, joindre une attestation de perte faite à l’Ambassade sur la base de la déclaration de perte établie par la police émiratie compétente ;</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>Extrait de naissance </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>Certificat de nationalité </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>12</span></td>
                <td>Pour un renouvellement avant six (06) de la date d’expiration, joindre le passeport original à la demande</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>
        <hr/>
        <p>Composition de dossier pour l’etablissement d’un passeport ordinaire burkinabe pour les personnes ayant acquis la nationalite burkinabe par le mariage:</p>
        {/* <p>{t('passport_text')}</p> */}
        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Quittance cachetée de paiement des frais d’établissement </td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Formulaire de Demande dument rempli et revêtue du cachet ‘‘droit de timbre perçu’’ à retirer à l’Ambassade  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Trois (03) photos récentes pour passeport, prises de face sur fond blanc (front, oreilles et menton bien dégagé). Bonne tenue vivement recommandée. </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Extrait ou photocopie légalisée d’Acte de Naissance </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Photocopie légalisée de la Carte d’Identité Consulaire  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Certificat de nationalité burkinabè</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Casier judiciaire datant de moins de 3 mois (facultatif)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>Extrait ou photocopie légalisée de l’Acte de mariage </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>Attestation de la profession ou une copie légalisée </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>Copie du passeport de la nationalité d’origine de l’intéressé(e)  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>Copie du passeport, de la CNIB ou de la CIC du ou de la conjoint(e)  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>12</span></td>
                <td>Adresse de la personne à prévenir en cas de besoin : Nom, prénom(s) et adresse téléphonique de quelqu’un vivant au Burkina Faso </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>13</span></td>
                <td>Titre de séjour (facultatif) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>

        <hr/>
        <p>Composition de dossier pour l’etablissement d’un passeport ordinaire burkinabe pour mineur:</p>
        {/* <p>{t('passport_text')}</p> */}

        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Quittance cachetée de paiement des frais d’établissement </td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Formulaire de Demande dument rempli (pas d’empreintes)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Autorisation parentale (père ou mère)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Extrait d’acte de naissance ou jugement supplétif d’acte de naissance</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Certificat de nationalité burkinabè</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Photocopies légalisées des Passeports ou CNIB ou CIC des deux (2) parents </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Trois (03) photos récentes pour passeport, prises de face sur fond blanc (front, oreilles et menton bien dégagé). Bonne tenue vivement recommandée.</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>Adresse de la personne à prévenir en cas de besoin : Nom, prénom(s) et adresse téléphonique de quelqu’un vivant au Burkina Faso </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>Titre de séjour des parents  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>Certificat de scolarité (pour les élèves) ou une attestation d’inscription de l’année académique en cours (pour les étudiants)</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>Traduction de l’acte de naissance en français (pour les actes de naissance en arabe ou autre langue) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>
            
        </table>
      </div>
        
    </div>
    
  )
}

export default PassportData;