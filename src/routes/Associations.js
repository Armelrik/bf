import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AssociationsData from '../components/AssociationsData';
import AboutImg from '../assets/amb.jpeg';

function Associations() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Associations"
        btnClass="hide"
      />
      <AssociationsData />
      <Footer />
    </>
  );
}

export default Associations; 