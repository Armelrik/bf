import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1301083980-1024x1024.jpg";
import ConsulCardData from '../components/ConsulCardData';


function ConsulCard (){
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Carte consulaire"
            btnClass="hide"
        />
        <ConsulCardData />
        <Footer />
    </>
  )
}

export default ConsulCard;
