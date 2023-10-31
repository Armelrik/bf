import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

import Img1 from "../assets/2.jpg";
import Tools from "../components/Tools";
// import NavbarToo from "../components/NavbarToo";


function Home(){
    return(
        <>
        {/* <Navbar/> */}
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={Img1}
            title="Le pays des hommes intègres"
            text="Ambassade du Burkina-Faso aux Émirats Arabes Unis." 
            buttonText="Prendre un Rendez-vous"
            url="/"
            btnClass="show"
        />
        <Destination />
        <Trip />
        <Tools />
        <Footer />
        </>
    )
}

export default Home;
