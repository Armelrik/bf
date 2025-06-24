import React from 'react';
import "./HeroStyles.css";
import Slide from "../components/Slide";

function Hero(props) {

  const slides = [
    {url: "http://localhost:3000/assets/img/bf-drapeau-ciel.jpg", title: "One" },
    {url: "http://localhost:3000/assets/img/bf-drapeau.jpg" , title: "Two" },
    {url: "http://localhost:3000/assets/img/bf-baobab.jpg", title: "Three" },
    {url: "http://localhost:3000/assets/img/bf-marche.jpg", title: "Four" },
    {url: "http://localhost:3000/assets/img/bf-enfant.jpg", title: "Five" },
  ];

  return (
    <>
        <div className={props.cName}>
            { props.isHome ? <div className='hero-slide'><Slide slides={slides} /></div> : <img alt='HeroImg' src={props.heroImg}/>}
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}
                </a>
            </div>
        </div>
    </>
  )
}

export default Hero;