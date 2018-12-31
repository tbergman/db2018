import React from 'react';

function Footer(props) {
	const visibility = `${props.visibility} Footer-18 footer`
	return (
		<div className={visibility}>
			<div className="footer-links-container">
				<div className="footer-links-item listen">
					<h4>LISTEN</h4>
					<div className="footer-link-div"><a className="footer-link" href="https://open.spotify.com/user/dbradford07/playlist/3TypZOoIyytlMC6mxu9757?si=WP7T7KoWSj6EqU0li9Zl1g" target="_blank" rel="noopener noreferrer">Spotify</a></div>
          <div className="footer-link-div"><a className="footer-link" href="https://www.youtube.com/watch?v=NC7cmWkBoz4&list=PLqpBLIvY2a6eQCdrHkY1vLHWngiu8O_dV" target="_blank" rel="noopener noreferrer">YouTube</a></div>
				</div> 
				<div className="footer-links-item follow">
					<h4>FOLLOW</h4>
					<div className="footer-link-div"><a className="footer-link" href="https://dbradmusic.com" target="_blank" rel="noopener noreferrer">D-Brad Music</a></div>
          <div className="footer-link-div"><a className="footer-link" href="https://twitter.com/catchadave" target="_blank" rel="noopener noreferrer">Twitter</a></div>
				</div>
			</div>
			<div className="bottom-span">
				<span>Extreme listing by <a className="footer-link" href="https://dbradmusic.com" target="_blank" rel="noopener noreferrer">dbradmusic.com</a></span> | 
				<span> Site by <a className="footer-link" href="http://taylor-parsell.com" target="_blank" rel="noopener noreferrer">taypsl</a></span> | 
				<span> Made with <span aria-label="burrito" role="img">🌯 </span> + <span aria-label="doggo" role="img">🐕 </span> in Berkeley, CA ©2018</span>
			</div>
		</div>
	)
}
export default Footer;