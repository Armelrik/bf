import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HCBEData from '../components/HCBEData';
import AboutImg from '../assets/istockphoto-1090499678-1024x1024.jpg';

function HCBE() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Délégué HCBE"
        btnClass="hide"
      />
      <HCBEData />
      <Footer />
    </>
  );
}

export default HCBE; 