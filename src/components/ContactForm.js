import './ContactFormStyle.css';

import React from 'react';

function ContactForm() {
  return (
    <div className='form-container'>
        <h1>Nos Horaires</h1>
          <span>Du lundi au vendredi</span>
          <span>De 9h a 16h</span>
          <span>Fermée samedi et dimanche</span>

        <h1>Nos coordonnées</h1>
        <div className='form_info'>
          <span>15 Al Khawarizmi Street Al Mushrif</span>
          <span>P.O.B. 5928 Abu Dhabi-United Arab Emirates</span>
          <span>Phone: (+971) 2 447 8476</span>
          <span>Fax: (+971) 2 447 6778</span>
          <span>Mail: amba.abudhabi@diplomatie.gov.bf</span>
        </div>
        <h1>Nous envoyer un message!</h1>
          <form>
            <input placeholder='Nom' />
            <input placeholder='Email' />
            <input placeholder='Objet' />
            <textarea placeholder='Votre Requette' rows="6"></textarea>
            <button>Envoyer votre message</button>
          </form>
    </div>
  )
}

export default ContactForm;

