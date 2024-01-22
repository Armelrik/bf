import React from 'react'
import "./TripStyles.css"
import TripData from './TripData';

import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493558744-1024x1024.jpg";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Recents() {
    const { t } = useTranslation();

  return (
    <div className='trip'>
        {/* <h1>{t('recent_head')}</h1> */}
        <h1>Recents activities</h1>
        <p>{t('recent_text')}</p>

        <div className='tripcard'>
            <TripData 
                image={Img1}
                heading={t('tripcard_head1')}
                text={t('tripcard_text1')}
                link={'/visas'}
                
            />

            <TripData 
                image={Img2}
                heading={t('tripcard_head2')}
                text={t('tripcard_text2')}
                link={'/consulat'}
            />

            <TripData 
                image={Img3}
                heading={t('tripcard_head3')}
                text={t('tripcard_text3')}
                link={'/signup'}
                
            />
        </div>
    </div>
  )
}

export default Recents; 