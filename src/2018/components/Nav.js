import React from 'react';
import Logo from '../images/logo-sm.svg';
import Navburger from './Navburger';

function Nav(props) {
	const genres = props.genres;
	// const mobile = (props.width < 640) ? '' : 'hidden';
	// const desktop = (props.width > 640) ? '' : 'hidden';
	const selectedGenres = props.selectedGenres;
	let selected; 

	return (
		<div className="Nav-18">
			<div className="Nav-18-left">
				<div className="Logo-18">
					<img src={Logo} alt="logo"/>
				</div>

				<div className="">
					<ul className="genre-list">
						{genres.map((genre, i) => {
							if (selectedGenres.includes(genre)) {
								selected = 'selected'
							} else {
								selected = ''
							}
							return (
								<li key={i} className={selected} onClick={props.selectGenre}>{genre}</li>
							)
						})}
					</ul>
				</div>

			</div>
			<Navburger menu={props.menu} />
		</div>
	)
}

export default Nav;