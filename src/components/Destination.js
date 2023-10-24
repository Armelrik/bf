import React from 'react';
import './DestinationStyles.css';
import Img1 from '../assets/istockphoto-1288874565-1024x1024.jpg';
import Img2 from '../assets/istockphoto-515599896-1024x1024.jpg';


const Destination = () => {
  return (
    <div className='destination'>
        <h1>Destinations populaires</h1>
        <p>Les opportunites de visiter la nature sauvage du pays</p>

        <div className='first-des'>
            <div className='des-text'>
                <h2>Les pics de Sindou</h2>
                <p>
                    Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
                    Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
                    Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
                    Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
                    Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat esse proident laboris officia eiusmod ut dolore.
                </p>
            </div>

            <div className='image'>
                <img alt='image' src={Img1} />
                <img alt='image' src={Img2} />
            </div>
        </div>
    </div>
  )
}

export default Destination;

