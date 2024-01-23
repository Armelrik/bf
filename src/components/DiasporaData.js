import React from 'react';
import './DiasporaDataStyles.css';
import Img1 from "../assets/amb.jpeg";

function DiasporaData() {
  return (
    <div className='dd_container'>
      <img src={Img1} alt='ambassador' />
      <div className='dd_text'>
        <h1>La Diaspora</h1>
        <p>La diaspora burkinabé aux Emirat Arabe Unis est forte de plus de 4.000 personnes, organisées en partie dans 
        des associations régionales ou de développements. Cette communauté se compose d’étudiants et stagiaires civils 
        et militaires, de travailleurs, d’entrepreneurs, de professeurs, de femmes et d’enfants, etc. qui font tous notre fierté.
        </p>
      </div>
    </div>
  )
}

export default DiasporaData;