import './NavbarStyles.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

class Navbar extends Component {

  state = { clicked: false};
  handledClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Ambassade</h1>

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
          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

