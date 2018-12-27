import React from 'react';
import { Link } from 'react-router-dom';

function Navburger(props) {
	return (
		<div className="Navburger-18">
			<li className="dropdown-toggle"><Link to="#" className="dropdown-title">Menu</Link>
	      <ul className="dropdown-menu">
	          <li className="dropdown-menu-item"><Link className="dropdown-link" to="/" href="#">Home</Link></li>
	          <li className="dropdown-menu-item"><Link className="dropdown-link" to="/2017">2017</Link></li>
	          <li className="dropdown-menu-item"><a className="dropdown-link" href="https://www.dbradmusic.com">dbradmusic.com</a></li>
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