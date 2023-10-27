import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Img1 from "../assets/istockphoto-467228674-1024x1024.jpg";
import Img2 from "../assets/istockphoto-1301083980-1024x1024.jpg";
import Img3 from '../assets/istockphoto-1288874565-1024x1024.jpg';
import Img4 from '../assets/istockphoto-515599896-1024x1024.jpg';
import Img5 from "../assets/Ibrahim-Traore.jpg";
import Img6 from "../assets/ambasador.jpeg";



const Destination = () => {
  return (
    <div className='destination'>
        <h1>Ni waongo - Bienvenue</h1>
        <p>Son Excellence Monsieur l'ambassadeur extraordinaire et plénipotentiaire du Burkina Faso aux Émirats Arabes Unis.</p>

        <DestinationData 
            className="first-des"
            heading="Le mot du président"
            text="Son excellence Président du Faso, Chef de l’État le Capitaine Ibrahim TRAORE : ''Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.'' "
            img1={Img5}
            img2={Img6}
            headline1="Tempor aute exercitation anim esse"
            headline2="Dr. Souleymane KONATE SEM L'ambassadeur"
        />
        <DestinationData 
            className="first-des-reverse"
            heading="Les sites touristiques"
            text="Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore."
            img1={Img1}
            img2={Img2}
        />

        <DestinationData 
            className="first-des"
            heading="Les activitées culturelles"
            text="Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore."
            img1={Img3}
            img2={Img4}
        />
    </div>
  )
}

export default Destination;

