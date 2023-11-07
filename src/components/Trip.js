import React from 'react'
import "./TripStyles.css"
import TripData from './TripData';

import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493558744-1024x1024.jpg";

function Trip() {
  return (
    <div className='trip'>
        <h1>Services recents</h1>
        <p>Pour tous vos besoins, 
            nos serives uniques sont a votre disposition.
        </p>

        <div className='tripcard'>
            <TripData 
                image={Img1}
                heading = "Services Passports"
                text = "Vous serez rediriger vers le site de visa du Burkina ou vous pourez faire votre demande en toute tranquilitte"
            />
            <TripData 
                image={Img2}
                heading = "Services Tourisme"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur enim velit. Est cillum aliquip consequat."
            />
            <TripData 
                image={Img3}
                heading = "Services assainissement"
                text = "Tempor aute exercitation anim esse. Do do esse dolor sit ut pariatur."
            />
        </div>
    </div>
  )
}

export default Trip; 