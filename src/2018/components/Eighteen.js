import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import SongCardBlock from './SongCard';
import Footer from './Footer';


import songDataJSON from '../data/songData.json';

import ReactPlayer from 'react-player'
//import Player from './Player';
import videoSrc from '../media/50-37.mp4';
//const videoUrl = 'https://www.youtube.com/embed/pa_4jV0qRTg'//watch?v=pYRgeHRtKvU&feature=youtu.be
const videoUrl = 'https://soundcloud.com/iceage-official/hurrah'
const songData2018 = [
	{
		"artist": "Dirty Projectors",
		"title": "That's A Lifestyle",
		"_id": 42,
		"startTime": 322,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
	{
		"artist": "Janelle Monáe",
		"title": "Django Jane",
		"_id": 41,
		"startTime": 362,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
	{
		"artist": "Tomberlin",
		"title": "Any Other Way",
		"startTime": 401,
		"_id": 40,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
	{
		"artist": "Cardi B ft. Bad Bunny & J Balvin",
		"title": "I Like It",
		"_id": 39,
		"startTime": 442,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
	{
		"artist": "No Age",
		"title": "Send Me",
		"_id": 38,
		"startTime": 485,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
	{
		"artist": "Snail Mail",
		"title": "Pristine",
		"_id": 37,
		"startTime": 529,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
	},
]



class Eighteen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songData: {songData2018},
			soundOn: null, 
			songId: '', //songUrl?
			playing: false,
			startTime: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.exampleRef = React.createRef()

		//this.soundSelection = this.soundSelection.bind(this);
		//this.getSongId = this.getSongId.bind(this);
	}
	// set / update user sound preferences
	soundSelection = (val) => {
		console.log(`sound ${val}`);
		this.setState({
			soundOn: val
		})
	}

	// onScrollGetCurrentSong = (id) => {
	// }

	// onScroll = (id) => {
	// 	console.log('scrolled')
	// 	var foundData = this.state.songData.SongDataJSON.find(song => song.id === id)
	// 	console.log(foundData)
	// 	//setStartTime()
	// }

	componentDidMount() {
		const songCardDiv = document.getElementsByClassName('song-card');
		console.log(songCardDiv, 'song card div')
	  // window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
	  // window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(id) {
		const currentDiv = document.getElementById(id)
		if (currentDiv.scrollIntoView() === true) {
			console.log('hello?', id)
		}
	  // console.log('div id scroll', id)
	};

	// isInViewport(offset = 0) {
	// 	console.log('isInViewport')
	//    if (!this.yourElement) return false;
	//    const top = this.yourElement.getBoundingClientRect().top;
	//    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
	//  }

	render() {
		const data = this.state.songData.songData2018;
		console.log(data);

		return (
			<div className="App-2018">
				<Nav />
				<Hero soundSelection={this.soundSelection}  />
				{/*Video Player*/}
				{/*map over data and pass to song card as props*/}
				<ReactPlayer 
					url={videoUrl}
					config={{
				    youtube: {
				      playerVars: { start: 322, end: 330 }
				    },
				    soundCloud: {
				    	options: { auto_play: true }
				    }
			    }} />
				{data.map((song) => {
					return (
						<SongCardBlock className="song-card" props={song} id={song._id} key={song._id}  />
					)
				})}
				<Footer />
			</div>
		)
	}
}



export default Eighteen;

// onScroll={() => this.onScroll(song._id)}
//onScroll={console.log('scroll', song._id)}
//refField={(el) => this.yourElement = el} 

	// setStartTime = (time) = {
	// 	this.setState({
	// 		startTime: time
	// 	})
	// }

	// seekTo = (time) => {
	// 	this.player.seekTo(time)
	// }

	// onPlay = () => {
 //    console.log('onPlay')
 //    seekTo()
 //    this.setState({ playing: true })
 //  }



//onScroll={() => this.handleScroll(song._id)} 