import React from 'react';

function Hero(props) {
	return (
		<div className="Hero-18">
			<div className="content-wrapper">
				<h4>D-Brad Music's</h4>
				<h1>Best Songs of 2018</h1>
				<p>Choose your sound preferences to continue:</p>
				<p><span className="sound-selection" onClick={(e) => props.soundSelection(true, e)}>Turn it up</span> / <span className="sound-selection" onClick={(e) => props.soundSelection(false, e)}>Mute pls</span></p>
			</div>
		</div>
	)
}

export default Hero;
