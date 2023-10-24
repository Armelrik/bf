import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";


function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="./assets/12.jpg" 
        title="Le pays des hommes integres"
        text="Ambassade du Burkina-Faso" 
        buttonText="Nous visiter"
        url="/"
        btnClass="show"
        />
        <Destination />
        </>
    )
}

export default Home;
