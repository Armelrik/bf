import React from 'react';
import './GaleryDataStyles.css';
import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493558744-1024x1024.jpg";
import Img4 from "../assets/istockphoto-1090499678-1024x1024.jpg";
import gsap from 'gsap';

import { useTranslation } from "react-i18next";

function GaleryData () {
  const { t } = useTranslation();
  const items = document.querySelectorAll('.item');
  const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
    
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})


  return (
    <div className='galerydata'>
        <div className='galery'>
            <h1>{ t ('galery_head') }</h1>
            <p>{ t ('galery_text') }</p>
            <div className='slide'>
                <div className='group'>
                    <img className='item' src={Img1} alt='img1' />
                    <img className='item' src={Img2} alt='img2'/>
                    <img className='item' src={Img3} alt='img3'/>
                    <img className='item' src={Img4} alt='img4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GaleryData;

