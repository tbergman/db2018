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
		"genres": ["INDIE", "ROCK"],
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
		"genres": ["POP", "R&amp;B"],
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
		"genres": ["INDIE"],
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
		"genres": ["POP", "R&B"],
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
		"genres": ["INDIE"],
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
		"genres": ["ROCK"],
		"youtube": true,
		"start": 60,
		"end": 96,
	},
]

const menuObj = {
	"title": "Menu",
	"links": [
		{
			"url": "/",
			"linkTitle": "Home"
		},
		{
			"url": "/2017",
			"linkTitle": "2017"
		},
		{
			"url": "https://www.dbradmusic.com",
			"linkTitle": "dbradmusic.com"
		}
	]
}

const GENRE_FILTERS = {
	"ROCK": song => song.ROCK,
	"INDIE": song => song.ROCK,
}

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
			genres: ["ALL", "ROCK", "R&B", "POP", "INDIE", "RAP"],
			selectedGenres: [],
		}
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
		this.handlePlaying();
		this.setState({
			soundOn: val
		})
	}

	selectGenre = (e) => {
		const element = e.target.innerHTML;
		const list = this.state.selectedGenres;
		if (element === "ALL") {
			this.setState({ selectedGenres: [] });
		} else if (!list.includes(element)) {
			this.setState({ selectedGenres: [...this.state.selectedGenres, element] });
		} else {
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.filter(genre => genre !== element) }));
		}
	}

	updateSongVisibility = (visibility) => {
		this.setState({ hideSong: visibility })
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
		const width = this.state.width;
		const muted = this.state.soundOn
		const selectedGenres = this.state.selectedGenres;

		//let hideSong;

		return (
			<div className="App-2018">																								
				<Nav genres={this.state.genres} menu={menuObj} width={width} selectGenre={(e) => this.selectGenre(e)} selectedGenres={selectedGenres} />
				<Hero soundSelection={this.soundSelection}  />
				<section className={soundStatus}>
				{data.map((song) => {
					
					//console.log("selectedGenres", selectedGenres)
					//console.log("song.genres", song.genres)
					
					{/*if (selectedGenres === []) {
						hideSong = 'Song-card-18';
					} else if (selectedGenres.includes(song.genre)) {
						hideSong = 'Song-card-18';
					} else {
						hideSong = 'Song-card-18 hidden';
					}*/}

					const songGenres = song.genres;
					//let songIsSelected;
					const songIsSelected = (selectedGenres.some(v => songGenres.indexOf(v) !== -1))
					{/*var songIsSelectedFunction = function (selectedGenres, songGenres) {
				    return songGenres.some(function (v) {
				        return songIsSelected = selectedGenres.indexOf(v) >= 0;
				    });
					};*/}
					return (
						<SongCardBlock 
							song={song} 
							width={width}
							id={song._id} 
							key={song._id} 
							playing={this.state.playing}
							selectedGenres={selectedGenres} 
							muted={muted} 
							songIsSelected={songIsSelected} /> 
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