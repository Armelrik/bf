import React, { useState } from 'react'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import Img from '../assets/bf.png';
import './NavbarLastStyles.css';

function NavbarLast() {
  const [dropdown, setDropdown] = useState(false);

    return(
      <>
      <nav className='navbar-last'>
        <Link to="/" className='nav-last-logo'>
          <img src={Img} alt='logo'/>
        </Link>

         <ul className="nav-last-items">
          { MenuItems.map((item) => {
            if (item.title === "Service") {
            return(
              <li key={item.id} className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <Link to={item.url}>
                  <i class={item.icon}></i>{item.title}
                </Link>
                {dropdown && <Dropdown />}
              </li>
            );}
            return(
              <li key={item.id} className={item.cName}>
                <Link to={item.url}>
                  <i class={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })} 
        </ul>
        <Button />
      </nav>
      {/* <Dropdown /> */}
</>
    )
  }

export default NavbarLast;