import './NavbarStyles.css';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { serviceDropdown } from './MenuItems';
import Img from '../assets/bf.png';
import Button from './Button';
import Dropdown from './Dropdown';
import 'flag-icon-css/css/flag-icons.min.css'
import i18next from 'i18next';


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
            <button className='butLang' key={country_code}
             onClick={() => i18next.changeLanguage(code)}>
              <span className={`flag-icon flag-icon-${country_code}`}></span><br/>{name}
            </button>
          ))}
        </div>

        {/* <div className='langDropdown'>
          <div className='dropdown'>
            <button className='toggle' type='button'
            id='dropdownMenuButton'>
              Dropdown menu
            </button>
            <ul className='dropdown-menu'>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button className='dropdown-item'>
                    <span className={`flag-icon flag-icon-${country_code}`}></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        
        <div className="menu-icons" onClick={this.handledClick}>
          <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars" }></i>
        </div>

         {/* <ul className={this.state.clicked ? "nav-menu active" :
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
          <Button />
        </ul> */}

        <div className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
      
          {MenuItems.map((item,index) => {
            if(item.title === "Service"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn'>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {/* <Link to='/'>{item.title}</Link> */}
                  <Dropdown />
              </div>
            </div>
            )}
            if(item.title === "Contact"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn' to={item.url}>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {/* <Link to='/'>{item.title}</Link> */}
                  <Dropdown />
              </div>
            </div>
            )}
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn' to={item.url}>
                <i className={item.icon}></i>{item.title}
              </button></div>
            )
          }
          )}
         
         
          {/* <button className='dropbtn'>Dropdown</button> */}
          {/* <div className='dropdown-content'>
            <Link to='/'>Link1</Link>
            <Link to='/'>Link2</Link>
            <Link to='/'>Link3</Link>
          </div> */}
          
        </div>
        
      </nav> 
        {/* <Dropdown /> */}
      </>
      

    )
  }
}

export default Navbar;