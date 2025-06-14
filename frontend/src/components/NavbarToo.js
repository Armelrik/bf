import React from 'react'
import './NavbarTooStyles.css'

function NavbarToo() {
  return (
    <div>
<nav>
  <div class="menu">
    <div class="container">
      <ul class="inner-menu">
        <li><a href="#">Animate-1</a>
          <ul class="dropdown">
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
          </ul>
        </li>
        <li><a href="#">Animate-2</a>
          <ul class="dropdown">
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
          </ul>
        </li>
        <li><a href="#">Animate-3</a>
          <ul class="dropdown">
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
          </ul>
        </li>
        <li><a href="#">Animate-4</a>
          <ul class="dropdown">
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
            <li><a href="#">Dropdown-menu</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarToo;