import './ContactFormStyle.css';

import React from 'react';

function ContactForm() {
  return (
    <div className='form-container'>
        <h1>Nos coordonnées</h1><br/>
            <p>Addresse: 7, Rue Bassin, Cite, BP.6484 10101, Ouaga, BFA</p> 
            <p>Tél : +226 537 675 512 Fax : +226 537 675 517 </p>
            <p>Horaire : Lundi au Vendredi de 9h à 14h</p>
            <br/>
        <h1>Nous envoyer un message!</h1>
        <form>
            <input placeholder='Nom' />
            <input placeholder='Email' />
            <input placeholder='Objet' />
            <textarea placeholder='Votre Requette' rows="5"></textarea>
            <button>Envoyer votre message</button>
        </form>
    </div>
  )
}

export default ContactForm;

