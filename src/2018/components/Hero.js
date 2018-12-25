import React, {Component} from 'react';

// class Hero extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			soundOn: null
// 		}
// 		this.soundSelection = this.soundSelection.bind(this)
// 	}

// 	soundSelection(val) {
// 		console.log(`sound ${val}`);
// 		this.setState({
// 			soundOn: val
// 		})
// 	}


// 	render() {
// 		return (
// 			<div className="Hero-18">
// 				<h4>Loud Places <i>presents</i></h4>
// 				<h1>Best Songs of 2018</h1>
// 				<p>Choose your sound preferences to continue:</p>
// 				<p><span className="sound-selection" onClick={(e) => this.soundSelection(true, e)}>Turn it up</span> / <span className="sound-selection" onClick={(e) => this.soundSelection(false, e)}>Mute pls</span></p>
// 			</div>
// 		)
// 	}
// }


function Hero(props) {
	return (
		<div className="Hero-18">
			<h4>Loud Places <i>presents</i></h4>
			<h1>Best Songs of 2018</h1>
			<p>Choose your sound preferences to continue:</p>
			<p><span className="sound-selection" onClick={(e) => props.soundSelection(true, e)}>Turn it up</span> / <span className="sound-selection" onClick={(e) => props.soundSelection(false, e)}>Mute pls</span></p>
		</div>
	)
}

export default Hero;
