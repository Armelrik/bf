import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../assets/istockphoto-467228674-1024x1024.jpg";
import Footer from '../components/Footer';
import DiasporaData from '../components/DiasporaData';

function Diaspora() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        // heroImg="./assets/12.jpg" 
        title="Diaspora"
        btnClass="hide"
        />
        <DiasporaData />
        <Footer />
    </>
  )
}

export default Diaspora;

