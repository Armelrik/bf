import React from 'react'
import "./ToolsStyles.css"

const Tools = () => {

    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        //const clockElement = time;
        return time;
    }
    setInterval(updateClock, 1000);

  return (
    <div className='tools'>
        <h1>Outils utils</h1>
        <p>Nous sommes a votre disposition.
        </p>
        <div className='toolscard'>
            <div className='c-card' >
                <h4>Ouagadougou</h4>
                <div id='clock' className='dc'>12:00:00 AM</div>
                <div>{updateClock()}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Tools;