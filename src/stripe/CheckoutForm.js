import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";


export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token created", paymentMethod);
            //Envoie du token au backend
            try{
                const {id} = paymentMethod;
                const response = await axios.post("http://localhost:8080/stripe/charge",
                
                {
                    amount: 10000,
                    id: id,
                    return_url: 'http://localhost:8080/',
                });
                if (response.data.success)
                    console.log("Payment succeed!")
            } catch (error) {
                console.log("There was an issue", error);
            }
        }
        else {
            console.log(error.message)
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement options={{
                hidePostalCode: true
            }} />
            <br/>
            <button>Payer</button>
        </form>
    )
}