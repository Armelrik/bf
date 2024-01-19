import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import VisasData from '../components/VisasData';
import { useTranslation } from 'react-i18next';
import OtherDocData from '../components/OtherDocData';


function OtherDoc (){
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Autres documents"
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <OtherDocData />
        <Footer />
    </>
  )
}

export default OtherDoc;
