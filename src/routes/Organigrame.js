import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img1 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img2 from "../assets/org.jpeg";

function Signup (){
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={Img1}
            title="Organigramme"
            btnClass="hide"
        />
        <div className=''>
            <img src={Img2} alt='needed'/>
        </div>
        <Footer />
    </>
  )
}

export default Signup;
