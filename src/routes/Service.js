
import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ServiceImg from '../assets/istockphoto-1288874510-1024x1024.jpg';

function Service() {
  return (
     <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="No services"
        btnClass="hide"
        />
    </>
  )
}

export default Service;
