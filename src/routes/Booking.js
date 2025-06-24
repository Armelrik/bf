import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-1292769507-1024x1024.jpg";
import VisasData from '../components/VisasData';
import { useTranslation } from 'react-i18next';
import CapacityData from '../components/CapacityData';
import SignupForm from '../components/SignupForm';


function Booking (){
  const { t } = useTranslation();
  return (
    <>
        
        {/* <img src={Img1} alt='img'/> */}
        <SignupForm />

        {/* <CapacityData /> */}
        {/* <Footer /> */}
    </>
  )
}

export default Booking;
