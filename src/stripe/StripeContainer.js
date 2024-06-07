import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY = "pk_test_51P8IGP2Nv5ADYJCcJbLWTGwxcuQ9w07J77MvbCdPeF5JZZu2LJDY74cM1qcRjff1Frx9ATa0X1jkEDt8RI2VNn9Y000LDL5Zgp";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise} >
        <CheckoutForm />
    </Elements>
  )
}

export default Stripe;