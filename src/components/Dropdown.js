import React from 'react'
import { serviceDropdown } from './MenuItems';
import { Link } from 'react-router-dom';

function Dropdown() {

  return (
    <>
       {serviceDropdown.map((item, index) => {
        return(
            <div key={index}>
                <Link to={item.url}>{item.title}</Link>
            </div>
        )
       })}
    </>
  )
}

export default Dropdown;


