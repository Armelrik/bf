import React from 'react';
import './AboutUsStyles.css';
import Img1 from "../assets/Drapeau-bf.gif";
import Img2 from "../assets/amb.jpeg";
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t } = useTranslation();
  return (


    <div className='about_container'>
      <img src={Img1} alt='ambassador' />
      <div className='about_text'>

        <h1>Histoire du Burkina</h1>
        <h1>{t('history_head')}</h1>
        <p>
        Le Burkina Faso, littéralement « Pays des hommes intègres » est un pays d’Afrique de l'Ouest sans 
        accès à la mer, frontalier du Mali au nord, du Niger à l’est, du Bénin et du Togo au sud-est, 
        du Ghana au sud et de la Côte d'Ivoire au sud-ouest. Le pays, d’une superficie de 274 200 km2, 
        est peuplé par environ 16 millions d’habitants, les Burkinabè. La capitale est Ouagadougou, 
        située au centre du pays. Il est membre de l’Union africaine (UA) et de la Communauté économique des 
        États de l'Afrique de l'Ouest (CEDEAO).
        Le Burkina Faso est un pays enclavé et relativement plat ; son point culminant est le Tenakourou qui 
        s’élève à 747 mètres. On y retrouve deux types de milieux naturels : le Sahel au nord et la savane au sud.
        </p>

        <h1>Notre Culture</h1>
        <p>Le Burkina Faso est un pays dont l’héritage culturel est très riche grâce aux 60 ethnies différentes 
          qu’il y vivent ensemble. Le maintien des traditions et de l’harmonie au sein de ses différentes populations
          est essentiel à la consolidation et l’épanouissement de la nation. Le succès du Burkina Faso n’est pas seulement
            dû à sa forte tradition d’intégration, mais aussi à sa volonté politique et à son innovation culturelle. 
            Le Burkina Faso exporte sa propre culture, et accueille des évènements régionaux et internationaux sur tout son territoire</p>

        <h1>Notre Politique</h1>
        <p>Depuis son indépendance en août 1960, le Burkina Faso a connu plusieurs régimes politiques : État de droit et État d'exception. 
          À partir de 1991, le pays a officiellement opté pour un système politique démocratique en adoptant une constitution par voie référendaire 
          et en organisant des élections présidentielles et législatives.
          La Constitution actuelle du Burkina Faso a instauré un régime semi-présidentiel ouvert au multipartisme :
          Le Président du Burkina Faso, élu par le peuple pour cinq ans lors d'un scrutin à un ou à deux tours. Il ne devait pouvoir être réélu qu'une seule fois ;
          L'Assemblée nationale est la seule instance législative du pays. Le Président de l’Assemblée nationale est le Président du Parlement. La durée d'une législature est de cinq ans.
          Le Burkina Faso est un État démocratique à trois pouvoirs qui sont :
          le pouvoir exécutif assuré par le Gouvernement,
          le pouvoir législatif composé d'une Assemblée Nationale et d'une Chambre des Représentants,
          le pouvoir judiciaire. En outre, d'autres institutions viennent consolider l'état de droit. Ce sont notamment : le Médiateur du Faso,
          le Conseil Économique et Social (CES), le Conseil Supérieur de la Communication 
          l'Autorité de régulation des communications électroniques et des postes (ARCEP), et la Commission Nationale de la Décentralisation (CND).</p>
    </div>
  </div>
  )
}

export default AboutUs