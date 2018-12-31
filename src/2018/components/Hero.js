import React from 'react';
import heroImage from '../images/2018-hero.jpg';
import heroOverlay from '../images/static-4.gif';

function Hero(props) {
	return (
		<div className="Hero-18">

		<img className="hero-img" alt="title" src={heroImage} />
		<img className="overlay" alt="static gif" src={heroOverlay} />
			<div className="content-wrapper">
				<h4>D-Brad Music's</h4>
				<h1>Best Songs of 2018</h1>
				<p>Choose your sound preferences to continue:</p>
				<div className="sound-selection-container">
					<div className="sound-selection on" onClick={(e) => props.soundSelection(true, e)}>Turn it up</div>
					<div className="sound-selection off" onClick={(e) => props.soundSelection(false, e)}>Mute pls</div></div>
			</div>
		</div>
	)
}

export default Hero;
