import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import AmbassadorUs from '../components/AmbassadorUs';
import AmbassadeData from '../components/AmbassadeData';

function Ambassade() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        // heroImg="./assets/12.jpg" 
        title="L'Ambassade"
        btnClass="hide"
        />
        <AmbassadeData />
        <Footer />
    </>
  )
}

export default Ambassade;

