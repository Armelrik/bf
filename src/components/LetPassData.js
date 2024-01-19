import React from 'react'
import './VisasDataStyles.css';
import Img1 from "../assets/pass.jpg";
import { useTranslation } from 'react-i18next';

function Visas() {
  const { t } = useTranslation();
  return (
    <div className='visas-container'>
      <img src={Img1} alt='visas' />
      <div className='visas-text'>
        <h1>{t('visas_head')}</h1>
        <p>{t('visas_text')}</p>
        <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations: unregistered fees</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement de Laissez-passer  </td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Acte de naissance  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Copie de la Carte Nationale d’Identité Burkinabè ou de la Carte d’Identité Consulaire ou du Certificat de nationalité burkinabè</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Photocopie du passeport </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Titre de séjour du demandeur  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span>6</span></td>
                <td>Adresse complète et destination </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>7</span></td>
                <td>Deux (02) photos d’identités  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>
            
        </table>

        {/* <p>{t('visas_text')}</p> */}
        <p>Composition de dossier pour l’etablissement d’un laissez-passer pour mineur</p>
        <table>
            <tr id="header">
                <th>Number</th>
                <th>Documents</th>
                <th>Fees in Dirham </th>
                <th>Observations: unregistered fees</th>
            </tr>
            
            <tr>
                <td><span>1</span></td>
                <td>Frais d’établissement de Laissez-passer  </td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>

            <tr>
                <td><span>2</span></td>
                <td>Acte de naissance  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>3</span></td>
                <td>Photocopie du passeport </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>4</span></td>
                <td>Photocopie de passeports des deux parents pour les mineurs</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>5</span></td>
                <td>Titre de séjour des parents pour les mineurs</td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td><span>6</span></td>
                <td>Adresse complète du lieu de résidence et de destination </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
        
            <tr>
                <td><span>7</span></td>
                <td>Deux (02) photos d’identités  </td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            
            <tr>
                <td><span></span></td>
                <td><span>Montant total </span></td>
                <td><span>17</span></td>
                <td><span>34</span></td>
            </tr>
            
        </table>
      </div>
        
    </div>
    
  )
}

export default Visas;