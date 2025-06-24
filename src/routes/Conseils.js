import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Img1 from "../assets/istockphoto-1288874565-1024x1024.jpg";
import { useTranslation } from "react-i18next";
import ConseilsData from "../components/ConseilsData";

function Conseils() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Img1}
        title="Conseils"
        buttonText={t("buttonText")}
        url="/signup"
        btnClass="show"
      />
      <ConseilsData />
      <Footer />
    </>
  );
}

export default Conseils;
