import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Img1 from "../assets/istockphoto-1290323627-1024x1024.jpg";
import Img2 from "../assets/istockphoto-1301083980-1024x1024.jpg";
import Img3 from '../assets/istockphoto-1288874565-1024x1024.jpg';
import Img4 from '../assets/istockphoto-515599896-1024x1024.jpg';


const Destination = () => {
  return (
    <div className='destination'>
        <h1>Destinations populaires</h1>
        <p>Les opportunites de visiter la nature sauvage du pays</p>

        <DestinationData 
            className="first-des"
            heading="Les pics de Sindou"
            text="Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
            Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore."
            img1={Img1}
            img2={Img2}
        />

        <DestinationData 
            className="first-des-reverse"
            heading="Les cascades de Banfora"
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

