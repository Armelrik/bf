import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Img1 from "../assets/istockphoto-467228674-1024x1024.jpg";
import Img2 from "../assets/istockphoto-1301083980-1024x1024.jpg";
import Img3 from '../assets/istockphoto-1288874565-1024x1024.jpg';
import Img4 from '../assets/istockphoto-515599896-1024x1024.jpg';
import Img5 from "../assets/1.jpg";
import Img6 from "../assets/ambasador.jpeg";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

const Destination = () => {
  const { t } = useTranslation();
  return (
    <div className='destination'>
        <h1>Neywaogo - Fofo - Aw danse</h1>
        <h2>{ t ('welcome_title') }</h2>
        <p>{t('welcome_from')}</p>

        <DestinationData 
            className="first-des"
            heading={t('first_dest_head')}
            text={t('first_dest_text')}
            img1={Img6}
            img2={Img5}
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

