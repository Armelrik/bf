import React from 'react'
import SignupForm from '../components/SignupForm'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SignImg from "../assets/istockphoto-1292769507-1024x1024.jpg";

function Signup (){
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={SignImg}
            title="S'inscrire sur notre site"
            btnClass="hide"
        />
        <SignupForm />
        <Footer />
    </>
  )
}

export default Signup;
