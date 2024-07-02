import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='name oswald-unique '>
        Sahil Chhabra
      </div>
      <div className='navbar-container'>
      <div className='navbar-item'>
          <ScrollLink to="home" className='Home oswald-unique' smooth={true} duration={500}>
            Home
          </ScrollLink>
        </div>
        <div className='navbar-item'>

        <ScrollLink to="about"  className='about oswald-unique' smooth={true} duration={500}>
            About
          </ScrollLink>
        </div>
        <div className='navbar-item'>
          
        <ScrollLink to="projects"  className='Project oswald-unique' smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </div>
        <div className='navbar-item'>
        
        <ScrollLink to="contact"  className='contact oswald-unique' smooth={true} duration={500}>
            Contact
          </ScrollLink>
          
        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;