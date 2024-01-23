import React from 'react'
import "./SignupFormStyles.css";

const SignupForm = () => {
  return (
    <div className='form-container'>
        <h1>Remplissez le formulaire pour prendre un rendez-vous!</h1>
        <form>
          <div className='form-text'>
            <label>Objet</label>
            <select>
              <option>Visa</option>
              <option>Passport</option>
              <option>Laissez passer</option>
              <option>Certificat</option>
              <option>Autres</option>
            </select>
            </div>
            <input placeholder='Nom' />
            <input placeholder='Email' />
            <input type='date' placeholder='Jour' />
            <input type='time' placeholder='Heure'></input>
            <button>Envoyer</button>
        </form>
    </div>
  )
}

export default SignupForm