import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import SongCard from './SongCard';
import Footer from './Footer';
import handleViewport from 'react-in-viewport';


//import songDataJSON from '../data/songData.json';
//const videoUrl = 'https://www.youtube.com/embed/pa_4jV0qRTg'//watch?v=pYRgeHRtKvU&feature=youtu.be
// const videoUrl = 'https://soundcloud.com/iceage-official/hurrah'
const songData2018 = [
	{
		"artist": "Dirty Projectors",
		"title": "That's A Lifestyle",
		"_id": 42,
		"startTime": 322,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=bKJBSjadBRw",
		"youtube": true,
		"start": 32,
		"end": 71,
	},
	{
		"artist": "Janelle Monáe",
		"title": "Django Jane",
		"_id": 41,
		"startTime": 362,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=mTjQq5rMlEY",
		"youtube": true,
		"start": 76,
		"end": 119,
	},
	{
		"artist": "Tomberlin",
		"title": "Any Other Way",
		"startTime": 401,
		"_id": 40,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=vquVuj0DWZk",
		"youtube": true,
		"start": 93,
		"end": 131,
	},
	{
		"artist": "Cardi B ft. Bad Bunny & J Balvin",
		"title": "I Like It",
		"_id": 39,
		"startTime": 442,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=xTlNMmZKwpA",
		"youtube": true,
		"start": 56,
		"end": 85, //94
	},
	{
		"artist": "No Age",
		"title": "Send Me",
		"_id": 38,
		"startTime": 485,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=B7WiAVLqJOc",
		"youtube": true,
		"start": 151,
		"end": 194,
	},
	{
		"artist": "Snail Mail",
		"title": "Pristine",
		"_id": 37,
		"startTime": 529,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=s7tnTucP1UM",
		"youtube": true,
		"start": 60,
		"end": 96,
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
			startTime: 0,
			inViewport: false,
			width: 0,
			height: 0,
			genres: ["rock", "R&B", "pop", "indie", "rap"],
			selectedGenres: []
		}
		// this.exampleRef = React.createRef()
		// this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		// const songCardLine = document.getElementsByClassName('In-viewport');
		//console.log(songCardLine, 'song card line')	
		// update window dimensions when screen resized
		this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);  
	};

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	// set & update user sound preferences
	soundSelection = (val) => {
		//console.log(`sound ${val}`);
		// const passwordInput = document.getElementsByTagName('input');
		this.handlePlaying();
		this.setState({
			soundOn: val
		})
	}

	// isInViewport(offset = 0) {
	// 	console.log('isInViewport')
	//  }

	handlePlaying = () => {
		// if (this.state.soundOn) {
			this.setState({
				playing: true
			})
		// }
	}

	render() {
		const data = this.state.songData.songData2018;
		const soundStatus = (this.state.soundOn === null) ? "hidden" : "";
		// console.log('state.soundOn', this.state.soundOn);
		// console.log('soundStatus', soundStatus)
		//console.log('width and height', this.state.width, this.state.height)
		const width = this.state.width;
		//const height = this.state.height;
		const muted = this.state.soundOn
		// console.log(muted, "muted-eighteen")
		return (
			<div className="App-2018">
				<Nav />
				<Hero soundSelection={this.soundSelection}  />
				
				<section className={soundStatus}>
				{data.map((song) => {
					return (
						<SongCardBlock 
							className="song-card" 
							props={song} 
							width={width}
							id={song._id} 
							key={song._id} 
							playing={this.state.playing} 
							muted={muted} /> //onmouseleave
					)
				})}
				</section>
				<Footer visibility={soundStatus} />
			</div>
		)
	}
}

const options = {
	threshold: 0.469,
}
const SongCardBlock = handleViewport(SongCard, options, /** config: {} **/);



export default Eighteen;