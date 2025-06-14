import React from 'react'
import { useTranslation } from 'react-i18next';
import './routesStyles.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img from '../assets/istockphoto-467228674-1024x1024.jpg';
import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493558744-1024x1024.jpg";
import Img4 from "../assets/istockphoto-1090499678-1024x1024.jpg";
import gsap from 'gsap';
import GaleryData from '../components/GaleryData';

function Galery() {
    const { t } = useTranslation();


    return(
    
        <>
        <Navbar />
        {/* <NavbarLast/> */}
        <Hero 
            cName="hero"
            heroImg={Img}
            title={ "Galerie photo" }
            btnClass="hide"
        />
        <GaleryData />
        <Footer />
        </>
    )
}

export default Galery