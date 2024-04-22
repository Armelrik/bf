import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Img1 from "../assets/istockphoto-467228674-1024x1024.jpg";
import Img2 from "../assets/istockphoto-1301083980-1024x1024.jpg";
import Img3 from '../assets/imgs/img15.jpeg'
import Img4 from '../assets/istockphoto-515599896-1024x1024.jpg';

// import Img3 from '../assets/istockphoto-1288874565-1024x1024.jpg';
// import Img4 from '../assets/istockphoto-515599896-1024x1024.jpg';

import Img5 from "../assets/amb.jpeg";
import Img6 from "../assets/Drapeau-bf.gif";
import { useTranslation } from "react-i18next";


const Destination = () => {
  const { t } = useTranslation();
  return (
    <div className='destination'>
        <h1>Neywaogo - Fofo - Aw danse</h1>
        <h2>{ t ('welcome_title') }</h2>
        {/* <p>{t('welcome_from')}</p> */}

        <DestinationData 
            className="first-des"
            heading={t('first_dest_head')}
            text={t('first_dest_text')}
            img1={Img5}
            img2={Img6}
        />
        <DestinationData 
            className="first-des-reverse"
            heading={t('second_dest_head')}
            text={t('second_dest_text')}
            img1={Img1}
            img2={Img2}
        />

        <DestinationData 
            className="first-des"
            heading={t('third_dest_head')}
            text={t('third_dest_text')}
            img1={Img3}
            img2={Img4}
        />
    </div>
  )
}

export default Destination;

