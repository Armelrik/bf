import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../assets/istockphoto-492788590-1024x1024.jpg";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        // heroImg="./assets/12.jpg" 
        title="A propos"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
    </>
  )
}

export default About;

