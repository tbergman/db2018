import React from 'react';
import { Link } from 'react-router-dom';

function Navburger(props) {
	const menu = props.menu;
	const links = menu.links;

	return (
		<div className="Navburger-18">
			<li className="dropdown-toggle">
				<Link to="#" className="dropdown-title">{menu.title}</Link>

				<ul className="dropdown-menu">
					{links.map((link, i) => {
						return (
							<li key={i} className="dropdown-menu-item">
								<Link className="dropdown-link" to={link.url}>{link.linkTitle}</Link>
							</li>
						)
					})}
				</ul>

	    </li>
		</div>
	)
}



export default Navburger;