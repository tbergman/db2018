import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import SongCard from './SongCard';
import Footer from './Footer';
import songDataJSON from '../data/songData.json';

class Eighteen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songData: {songDataJSON}
		}
	}

	render() {
		return (
			<div className="App-2018">
				<Nav />
				<Hero />
				{/*Video Player*/}
				{/*map over data and pass to song card as props*/}
				this.state.songData.map(song => {
					<SongCard props={song} />
				})
				<Footer />
			</div>
		)
	}
}

export default Eighteen;