import './NavbarStyles.css';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems, actualsDropdown, ambassadeDropdown, cooperationDropdown } from './MenuItems';
import { consulatDropdown } from './MenuItems';
import Img from '../assets/bf.png';
import 'flag-icon-css/css/flag-icons.min.css'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import NavLinks from './NavLinks';


  const languages = [
    {
      code: 'fr',
      name: 'FR',
      country_code: 'fr'
    },
    {
      code: 'en',
      name: 'EN',
      country_code: 'gb'
    },
    {
      code: 'ar',
      name: 'AR',
      country_code: 'ae'
    },
  ]

class Navbar extends Component {
  
  
  
  state = { clicked: false};
  handledClick = () => {
    this.setState({ clicked: !this.state.clicked })
  };

  render(){
    
    return(
      <>
        <nav className="NavbarItems">
         <Link to="/" className='navbar-logo'>
          <img src={Img} alt='logo'/>
        </Link>

        <div className='langDiv'>
          {languages.map(({code,name, country_code}) => (
            <button type='button' className='butLang' key={country_code}
             onClick={() => i18next.changeLanguage(code)}>
              <span className={`flag-icon flag-icon-${country_code}`}></span><br/>{name}
            </button>
          ))}
        </div>
        
        <div className="menu-icons" onClick={this.handledClick}>
          <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars" }></i>
        </div>

        <div className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
            <NavLinks />
        </div>
      </nav> 
      </>
    )
  }
}

export default Navbar;