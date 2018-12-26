import React from 'react';
import Logo from '../images/logo-sm.svg';

function Nav(props) {
	const genres = props.genres;
	console.log(genres)
	return (
		<div className="Nav-18">
			<div className="Logo-18">
				<img src={Logo} alt="logo"/>
				<ul className="genre-list">
				{genres.map((genre) => {
					return (
						<li>{genre}</li>
					)
				})}
				</ul>
			</div>
		</div>
	)
}

export default Nav;