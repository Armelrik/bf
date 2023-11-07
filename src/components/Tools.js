import React from 'react'
import "./ToolsStyles.css"
import Img1 from '../assets/gps.webp'
import Img2 from '../assets/app2.jpeg'
import Img3 from '../assets/lettre.webp'
import {DateTime} from 'luxon';

const Tools = () => {
//     function updateClock() {
//         const now = new Date();
//         const time = now.toLocaleTimeString();
//         return time;
//     }

const locations = document.querySelectorAll("section.times div")
    const updateTimes = function() {
        locations.forEach(location => {
            const output = location.querySelector("output")
            const timezone = location.getAttribute("timezone")

            const now = DateTime.now().setZone(timezone)
            output.innerHTML = now.toFormat("HH:mm:ss")
        })
        // const bf = DateTime.now().setZone().toFormat("HH:mm:ss");

    }

    updateTimes()
    setInterval( function () {
        updateTimes()
    }, (1000));

  return (
    <div className='tools'>
        <h1>Outils utiles</h1>
        <p>Nos outils sont a votre disposition.
        </p>
        <div className='toolscard'>
            <div className='c-card' >
                <h4>Heure du monde</h4><br />
                <section className='times'>
                    <div timezone="Africa/Ouagadougou" className='timesDetails'>
                        <h4>Ouagadougou(GMT+0)</h4>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="Asia/Dubai" className='timesDetails'>
                        <h4>Dubai(GMT+4)</h4>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="Europe/Paris" className='timesDetails'>
                        <h4>Paris(GMT+1)</h4>
                        <output>00:00:00</output>
                    </div>
                    <div timezone="America/New_York" className='timesDetails'>
                        <h4>New york(GMT-5)</h4>
                        <output>00:00:00</output>
                    </div>
                </section>
                {/* <div id='clockBF' className='dc'>12:00:00 AM</div> */}
                
            </div>
            <div className='c-card' >
                <h4>Localisation de nos bureaux</h4><br />
                <img src={Img1} className='c-image' alt='appli' />
            </div>
            <div className='c-card' >
                <h4>Telecharger notre application</h4><br />
                <img src={Img2} className='c-image' alt='appli' />
            </div>
            <div className='c-card' >
                <h4>Faire des suggestions</h4><br/>
                <img src={Img3} className='c-image' alt='appli' />
            </div>
        </div>
        
    </div>
  )
}

export default Tools;