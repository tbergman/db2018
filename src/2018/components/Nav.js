import React from 'react';
import Logo from '../images/logo-sm.svg';
import Navburger from './Navburger';

function Nav(props) {
	const genres = props.genres;
	console.log(genres)
	return (
		<div className="Nav-18">
			<div className="Logo-18">
				<img src={Logo} alt="logo"/>
			</div>
			<ul className="genre-list">
				{genres.map((genre) => {
					return (
						<li>{genre}</li>
					)
				})}
			</ul>
			<Navburger />
		</div>
	)
}

export default Nav;