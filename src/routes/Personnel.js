import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-496359874-1024x1024.jpg";
import PersonnelData from '../components/PersonnelData';


function Signup (){
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Personnel"
            btnClass="hide"
        />
        <PersonnelData />
        <Footer />
    </>
  )
}

export default Signup;
