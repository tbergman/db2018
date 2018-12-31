import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../2018/images/logo_1.svg'
import '../css/App.css';

// import { Topbar } from '../img/topbar.svg';

function Navbar(props) {
  return (
    <div className='Navbar'>
        <div className="Navbar-bar"></div>
        <div className="Navbar-2017-flex">
          {/*<div className="Home-icon">
            <a href='/'><img alt="main logo" src={Logo} /></a>
          </div>*/}
          <div className='Navbar-logo'>
            <a href='/2017'>D-BRAD'S BEST SONGS OF 2017</a>
          </div>
        </div>

        <div className='Navbar-links'>
          
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            exact
            to='/2017'
          >
            Intro
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/2017/50-21'
          >
            50-21 
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/2017/20-11'
          >
            20-11 
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/2017/10-1'
          >
            10-1 
          </NavLink>
        </div>

      </div>
  );
}

export default Navbar;
