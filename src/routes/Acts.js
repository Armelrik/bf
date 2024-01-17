import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import VisasData from '../components/VisasData';
import { useTranslation } from 'react-i18next';


function Acts (){
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Visa pour le Burkina-faso"
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <VisasData />
        <Footer />
    </>
  )
}

export default Acts;
