import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import VisasData from '../components/VisasData';


function Visas (){
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Visa pour le Burkina-faso"
            btnClass="hide"
        />
        <VisasData />
        <Footer />
    </>
  )
}

export default Visas;
