import React from 'react'
import "./ContactFormStyle.css";

const SignupForm = () => {
  return (
    <div className='form-container'>
        <h1>Remplissez le formulaire pour prendre un rendez-vous!</h1>
        <form onSubmit='/'>
            <input placeholder='Nom' />
            <input placeholder='Email' />
            <input placeholder='Jour' />
            <input placeholder='Heure'></input>
            <button>Envoyer</button>
        </form>
    </div>
  )
}

export default SignupForm