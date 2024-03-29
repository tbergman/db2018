import React from 'react';
import Logo from '../images/logo-sm.svg';
//import Navburger from './Navburger';
import soundOn from '../images/on.svg';
import soundOff from '../images/off.svg';

function Nav(props) {
	const genres = props.genres;
	const soundIcon = (props.soundChoice) ? soundOn : soundOff ; 
	const selectedGenres = props.selectedGenres;
	const soundVisibility = (props.visibility === "hidden") ? "sound-icon hidden" : "sound-icon" ;
	const checkMobile = (props.width <= 768) ? 'hidden' : ''; 

	let selected; 

	return (
		<div className="Nav-18">
			<div className="Nav-18-left">
				<div className="Logo-18">
					<img src={Logo} alt="logo"/>
				</div>
				<div className="Nav-title">D-Brad's Best Songs of 2018</div>
			</div>
			<div className="Nav-18-right">
				<div className={props.visibility}>
					<div className={checkMobile}>
						<div className="genre-list-container">
							<div className="genre-list-title">Genres</div>
							<ul className="genre-list">
								{genres.map((genre, i) => {
								  if (selectedGenres.includes(genre) && genre !== "ALL") {
										selected = 'selected'
									} else if (genre === "ALL") {
										selected = 'all'
									} else {
										selected = ''
									} 
									const displayGenre = (genre === "R&amp;B") ? "R&B" : genre;

									return (
										<li key={i} className={selected} onClick={props.selectGenre}>{displayGenre}</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
				<img className={soundVisibility} alt="volume toggle" src={soundIcon} onClick={props.toggleSound} />
				{/*<Navburger menu={props.menu} />*/}
			</div>
		</div>
	)
}

export default Nav;