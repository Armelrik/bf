import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from "../assets/istockphoto-1219546128-1024x1024.jpg";

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
    </>
  )
}

export default About;

