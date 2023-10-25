import React from 'react'
import "./ContactFormStyle.css";

const SignupForm = () => {
  return (
    <div className='form-container'>
        <h1>Remplissez le formulaire pour creer un compte!</h1>
        <form>
            <input placeholder='Nom' />
            <input placeholder='Email' />
            <input placeholder='Pays' />
            <password placeholder='Mot de passe'></password>
            <button>Envoyer</button>
        </form>
    </div>
  )
}

export default SignupForm