import React from 'react';
import "./TripStyles.css";
import { Link } from 'react-router-dom';

function TripData(props) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.image} alt='image1' />
        </div>
        <Link to={props.link}>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        </Link>
    </div>
  )
}

export default TripData