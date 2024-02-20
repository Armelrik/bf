
import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ServiceImg from '../assets/istockphoto-1288874510-1024x1024.jpg';
import Footer from '../components/Footer';

import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493513742-1024x1024.jpg";
import Img4 from "../assets/istockphoto-492788590-1024x1024.jpg";
import ServiceData from '../components/ServiceData';

function Service() {
  return (
     <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Nos services"
        btnClass="hide"
        />
      
      <div className='service'>
        <h1>Heures de Service </h1>
        <p>Le Service consulaire de l’ambassade reçoit les usagers et les dossiers
        du lundi au Jeudi de 9h a 16h et le vendredi de 9h a 12h.
        </p>

        <div className='service_card'>
            <ServiceData 
                image={Img1}
                heading = "Secretariat particulier"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.Tempor aute exercitation anim esse Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore. Tempor aute exercitation anim esse."
            />
            <ServiceData 
                image={Img2}
                heading = "Services Tourisme"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.Tempor aute exercitation anim esse Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore. Tempor aute exercitation anim esse."
                />
            <ServiceData 
                image={Img3}
                heading = "Services assainissement"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.Tempor aute exercitation anim esse Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore. Tempor aute exercitation anim esse."
                />
            <ServiceData 
                image={Img4}
                heading = "Services Consulaires"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.Tempor aute exercitation anim esse Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore. Tempor aute exercitation anim esse."
            />
          
        </div>
    </div>

      <Footer />
    </>
  )
}

export default Service;