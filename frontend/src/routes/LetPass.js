import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import LetPassData from '../components/LetPassData';
import { useTranslation } from 'react-i18next';


function LetPass (){
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Laissez-passer ou Sauf conduite"
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <LetPassData />
        <Footer />
    </>
  )
}

export default LetPass;
