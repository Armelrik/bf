import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Img from '../assets/istockphoto-1282629773-1024x1024.jpg';
import PassportData from '../components/PassportData'

const Passport = () => {
  return (
    <div>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={Img}
        title="Passeport"
        btnClass="hide"
        />
        <PassportData />
        <Footer />
    </div>
  )
}

export default Passport