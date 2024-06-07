import React from "react";
import "./SignupFormStyles.css";
import StripeContainer from "../stripe/StripeContainer";
import { CheckoutForm } from "../stripe/CheckoutForm";

const SignupForm = () => {
  return (
    <div className="form-container">
      <h1>
        Créez un compte et choissisez le service que vous voulez effectuer en
        ligne
      </h1>
      <form>
        <input placeholder="Nom" />
        <input placeholder="Prénom" />
        <input placeholder="Email" />
        <input placeholder="Télephone" />
        <input placeholder="Ville" />
        {/* <input type="date" placeholder="Jour" /> */}
        {/* <input type="time" placeholder="Heure"></input> */}

        <div className="form-text">
          <label>Formulaire</label>
          <select>
            <option>Visa</option>
            <option>Actes et déclarations</option>
            <option>Passeports</option>
            <option>Cartes consulaires</option>
            <option>Laissez passer</option>
            <option>Procuration</option>
            <option>Authentification</option>
            <option>Décharge</option>
            <option>Autres services</option>
          </select>
          {/* <span>||||||</span> */}
          <StripeContainer />
          
          {/* <button> Payer</button> */}
        </div>
        <div>
          <p>
            vous devez effectuer un paiement pour télécharger le formulaire de
            la prestation dont vous avez besoin puis vous rendre sur votre
            compte pour restituer le dossier que vous avez complété en version
            PDF. vous recevrez des commentaires en fonction du temps d'exécution
            du service. MERCI.
          </p>
          <br />
        </div>
        <button>Valider</button>
      </form>
    </div>
  );
};

export default SignupForm;
