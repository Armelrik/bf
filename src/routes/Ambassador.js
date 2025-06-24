import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import AmbassadorUs from '../components/AmbassadorUs';

function Ambassador() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        // heroImg="./assets/12.jpg" 
        title="L'Ambassadeur"
        btnClass="hide"
        />
        <AmbassadorUs />
        <Footer />
    </>
  )
}

export default Ambassador;

