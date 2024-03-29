import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import VisasData from '../components/VisasData';
import { useTranslation } from 'react-i18next';
import CapacityData from '../components/CapacityData';


function Capacity (){
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Dossier de mariage"
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <CapacityData />
        <Footer />
    </>
  )
}

export default Capacity;
