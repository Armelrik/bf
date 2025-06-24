import React from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

function Dropdown() {

  return (
    <>
       {MenuItems.map((item, index) => {
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


