import React from 'react';
import { Link } from 'react-router-dom';

function Navburger(props) {
	return (
		<div className="Navburger-18 main-nav">
			<li class="dropdown-toggle"><Link to="#">Menu</Link>
	      <ul class="dropdown-menu">
	          <li class="dropdown-menu-item"><Link to="/" href="#">Home</Link></li>
	          <li class="dropdown-menu-item"><Link to="#">2017</Link></li>
	          <li class="dropdown-menu-item"><a href="https://www.dbradmusic.com">dbradmusic.com</a></li>
	      </ul>
	    </li>
		</div>
	)
}

export default Navburger;

// map props = props.burgerLink

{/*<input type="checkbox" id="check-box-dropdown" />
		  <label for="check-box-dropdown" className="hamburger-menu">
		    <span></span>
		  </label>
		  <ul className="main-nav__items">
		    
		  </ul>*/}

  // <li><Link to="" className="main-nav__link">Link</Link></li>
		//     <li><Link to="" className="main-nav__link">Link</Link></li>
		//     <li><Link to="" className="main-nav__link">Link</Link></li>
		//     <li><Link to="" className="main-nav__link">Link</Link></li>