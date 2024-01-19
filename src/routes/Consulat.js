import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import { useTranslation } from 'react-i18next';
import ConsulatData from '../components/ConsulatData';


function Consulat (){
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Consulat"
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <ConsulatData />
        <Footer />
    </>
  )
}

export default Consulat;
