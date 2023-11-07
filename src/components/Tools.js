import React from 'react'
import "./ToolsStyles.css"
import Img1 from '../assets/gps.webp'
import Img2 from '../assets/app2.jpeg'
import Img3 from '../assets/lettre.webp'
import {DateTime} from 'luxon';
import { useTranslation } from 'react-i18next'

const Tools = () => {
    const { t } = useTranslation();

const locations = document.querySelectorAll("section.times div")
    const updateTimes = function() {
        locations.forEach(location => {
            const output = location.querySelector("output")
            const timezone = location.getAttribute("timezone")
            const now = DateTime.now().setZone(timezone)
            output.innerHTML = now.toFormat("HH:mm:ss")
        })

    }

    updateTimes()
    setInterval( function () {
        updateTimes()
    }, (1000));

  return (
    <div className='tools'>
        <h1>{t('tools_head')}</h1>
        <p>{t('tools_text')}</p>
        <div className='toolscard'>
            <div className='c-card' >
                <h4>{t('toolscard_head1')}</h4><br />
                <section className='times'>
                    <div timezone="Africa/Ouagadougou" className='timesDetails'>
                        <h3>Ouaga (GMT+0)</h3>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="Asia/Dubai" className='timesDetails'>
                        <h3>Dubai (GMT+4)</h3>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="Europe/Paris" className='timesDetails'>
                        <h3>Paris (GMT+1)</h3>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="Europe/London" className='timesDetails'>
                        <h3>London (GMT+0)</h3>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="America/New_York" className='timesDetails'>
                        <h3>New-york (GMT-5)</h3>
                        <output>00:00:00</output>
                    </div>
                    
                </section>
                {/* <div id='clockBF' className='dc'>12:00:00 AM</div> */}
                
            </div>
            <div className='c-card' >
                <h4>{t('toolscard_head2')}</h4>
                <div className='c-image'>
                    <img src={Img1} alt='appli' />
                </div>
                
            </div>
            <div className='c-card' >
                <h4>{t('toolscard_head3')}</h4>
                <div className='c-image'>
                    <img src={Img2}  alt='appli' />
                </div>
                
            </div>
            <div className='c-card' >
                <h4>{t('toolscard_head4')}</h4>
                <div className='c-image'>
                    <img src={Img3}  alt='appli' />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Tools;