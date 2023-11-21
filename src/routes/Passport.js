import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Img from '../assets/istockphoto-1282629773-1024x1024.jpg';

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
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Passport