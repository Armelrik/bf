import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

import Img1 from "../assets/2.jpg";


function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg={Img1}
            title="Le pays des hommes intègres"
            text="Ambassade du Burkina-Faso aux Émirats Arabes Unis" 
            buttonText="Rendez-vous"
            url="/"
            btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home;
