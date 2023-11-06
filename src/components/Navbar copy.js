import './NavbarStyles.css';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { serviceDropdown } from './MenuItems';
import Img from '../assets/bf.png';
import Button from './Button';
import Dropdown from './Dropdown';

class Navbar extends Component {
  
  state = { clicked: false};
  handledClick = () => {
    this.setState({ clicked: !this.state.clicked })
  };

  render(){
    return(
      <>
        <nav className="NavbarItems">
        <h1 className="navbar-logo"> 
          <img src={Img} alt='logo'className='logo'/>
          {/* <Link className='navbar-logo-link' to='/'>Burkina-Faso</Link>  */}
        </h1>
        <div className="menu-icons" onClick={this.handledClick}>
          <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars" }></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" :
            "nav-menu" }>
          { MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i class={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
          {/* <button><Link to='/signup'>S'inscrire</Link></button> */}
          <Button />
        </ul>
      </nav> 
        <Dropdown />
      </>
      

    )
  }
}

export default Navbar;