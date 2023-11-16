import './NavbarStyles.css';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems, actualsDropdown, ambassadeDropdown, cooperationDropdown } from './MenuItems';
import { consulatDropdown } from './MenuItems';
import Img from '../assets/bf.png';
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

        
        
        <div className="menu-icons" onClick={this.handledClick}>
          <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars" }></i>
        </div>

        <div className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
      
      <div className='langDiv'>
          {languages.map(({code,name, country_code}) => (
            <button type='button' className='butLang' key={country_code}
             onClick={() => i18next.changeLanguage(code)}>
              <span className={`flag-icon flag-icon-${country_code}`}></span><br/>{name}
            </button>
          ))}
        </div>
        
          {MenuItems.map((item,index) => {
            if(item.title === "Ambassade"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn'>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {/* <Link to='/'>{item.title}</Link> */}
                  {ambassadeDropdown.map((item, index) => {
                    return(
                      <div key={index}>
                        <Link to={item.url}>{item.title}</Link>
                      </div>
                      )
                  })}
              </div>
            </div>
            )}
            if(item.title === "Consulat"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn'>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {consulatDropdown.map((item, index) => {
                    return(
                      <div key={index}>
                        <Link to={item.url}>{item.title}</Link>
                      </div>
                      )
                  })}
              </div>
            </div>
            )}
            if(item.title === "Coopération"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn'>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {cooperationDropdown.map((item, index) => {
                    return(
                      <div key={index}>
                        <Link to={item.url}>{item.title}</Link>
                      </div>
                      )
                  })}
              </div>
            </div>
            )}
            if(item.title === "Actualités"){
            return (
              <div key={index} className='dropdown'>
              <button  className='dropbtn'>
                <i className={item.icon}></i>{item.title}
              </button>
              <div  className='dropdown-content'>
                  {actualsDropdown.map((item, index) => {
                    return(
                      <div key={index}>
                        <Link to={item.url}>{item.title}</Link>
                      </div>
                      )
                  })}
              </div>
            </div>
            )}
            
            return (
              <div key={index} className='dropdown'>
              <Link  className='nav-links' to={item.url}>
                <i className={item.icon}></i>{item.title}
              </Link></div>
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
      </>
      

    )
  }
}

export default Navbar;