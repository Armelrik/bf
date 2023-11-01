import React from 'react'
import './DropdownStyles.css';
import { serviceDropdown } from './MenuItems';
import { Link } from 'react-router-dom';

function Dropdown() {
  return (
    <>
        <ul className='service-submenu'>
            { serviceDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.url} className={item.cName}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Dropdown;


