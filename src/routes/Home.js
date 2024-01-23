import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Img1 from "../assets/2.jpg";
import Tools from "../components/Tools";
import { useTranslation } from "react-i18next";
import Recents from "./Recents";
import Booking from "./Booking";

function Home(){
    const { t } = useTranslation();

    return(
    
        <>
        <Navbar />
        {/* <NavbarLast/> */}
        <Hero 
            cName="hero"
            heroImg={Img1}
            title={ t ('welcome_message') }
            text={ t ('title_message') } 
            buttonText={ t ('buttonText') } 
            url="/signup"
            btnClass="show"
        />
        <Destination />
        <Booking />
        <Trip />
        {/* <Recents /> */}
        <Tools />
        <Footer />
        </>
    )
}

export default Home;
