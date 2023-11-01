import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonStyles.css';

function Button() {
  return (
    <Link to="signup">
        <button className='btn'>S'inscrire</button>
    </Link>
  )
}

export default Button