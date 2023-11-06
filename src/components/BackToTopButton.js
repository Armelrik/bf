import React from 'react'
import { useEffect, useState } from 'react';
import './BackToTopButtonStyles.css';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scroolUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


  return (
    <div className='bClass'>{
        // backToTopButton && ( <i className='bx bx-up-arrow-circle'></i> )
        backToTopButton && ( <div className="buttonClass" 
        style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "20px",
            // textAlign: "center",
            cursor: "pointer",
        }} 
        onClick={scroolUp} ><i class="fa-solid fa-house-user"></i>
             {/* <button >^</button> */}
        </div> )
    }</div>
  )
}

export default BackToTopButton;

