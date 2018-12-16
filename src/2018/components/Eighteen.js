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
		const data = this.state.songData.songDataJSON.songs;
		console.log(data);

		return (
			<div className="App-2018">
				<Nav />
				<Hero />
				{/*Video Player*/}
				{/*map over data and pass to song card as props*/}
				{data.map((song) => {
					return (
						<SongCard props={song} key={song.id} />
					)
				})}
				<Footer />
			</div>
		)
	}
}

export default Eighteen;