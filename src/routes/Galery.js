import React from 'react'
import { useTranslation } from 'react-i18next';
import './routesStyles.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Img from '../assets/istockphoto-467228674-1024x1024.jpg';
import Img1 from "../assets/istockphoto-583736340-1024x1024.jpg";
import Img2 from "../assets/istockphoto-496359874-1024x1024.jpg";
import Img3 from "../assets/istockphoto-493558744-1024x1024.jpg";
import Img4 from "../assets/istockphoto-1090499678-1024x1024.jpg";
import gsap from 'gsap';

function Galery() {
    const { t } = useTranslation();

    const items = document.querySelectorAll('.item')

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


    return(
    
        <>
        <Navbar />
        {/* <NavbarLast/> */}
        <Hero 
            cName="hero"
            heroImg={Img}
            title={ "Galerie photo" }
            btnClass="hide"
        />
        <div className='galery'>
            <h1>Notre derniere ceremonie</h1>
            <p>Nous avons eu notre celemonie de remise de prix en faveur de l'institution des activites</p>
            <div className='slide'>
                <div className='group'>
                    <img className='item' src={Img1} />
                    <img className='item' src={Img2} />
                    <img className='item' src={Img3} />
                    <img className='item' src={Img4} />
                </div>
            </div>
            <h1>Nos locaux et infrastructures</h1>
            <p>Notre bureau se trouve en plein coeur de la ville de Dubai et offre un access rapide a nos services</p>
            <div className='slide'>
                <div className='group'>
                    <img className='item' src={Img2}></img>
                    <img className='item' src={Img4}></img>
                    <img className='item' src={Img3}></img>
                    <img className='item' src={Img1}></img>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Galery