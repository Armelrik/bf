import React from 'react'
import './VisasDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function Visas() {
  const { t } = useTranslation();
  return (
    <div className='visas_container'>
      <img src={Img1} alt='visas' />
      <div className='visas_text'>
        <h1>{t('visas_head')}</h1>
        <p>{t('visas_text')}</p>
        <table>
        <tr id="header">
                <th>Numero</th>
                <th>Documents</th>
                <th>Montant en Dirham </th>
                <th>Observations: non détenteur de la CIC</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Quittance de paiement des frais d’établissement</td>
                <td><span>340</span></td>
                <td><span>679</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Formulaire de demande dûment rempli avec les empreintes biométriques </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Extrait ou jugement supplétif d’Acte de Naissance </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Certificat de nationalité burkinabè</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Copie légalisée du certificat de nationalité burkinabè</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Casier judiciaire de moins de trois (03) mois (Facultatif) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Copie légalisée de la Carte Nationale d’Identité Burkinabè ou de la Carte consulaire (obligatoire) </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>8</span></td>
                <td>Document justificatif de la profession et Titre de séjour</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>9</span></td>
                <td>Trois (03) photos récentes pour passeport, prise de face sur fond blanc (front, oreilles et menton bien dégagé). </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>10</span></td>
                <td>Adresse de la personne à prévenir en cas de besoin : Nom, prénom(s) et adresse téléphonique de quelqu’un vivant au Burkina Faso </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>11</span></td>
                <td>En cas de perte : joindre la déclaration de perte délivrée par l’Ambassade </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>12</span></td>
                <td>Pour des besoins d’information complémentaires sur le demandeur, le service compétent (la Division de la Migration de la police) pourrait solliciter une copie des documents d’identité (CNIB ou Passeport) des deux (02) parents, une copie du permis de séjour de l’intéressé, une copie du livret de famille. </td>
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

export default Visas;