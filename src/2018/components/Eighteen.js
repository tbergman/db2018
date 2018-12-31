import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
// import SongCard from './SongCard';
import SongCardTest from './SongCard-test';
import Footer from './Footer';
import handleViewport from 'react-in-viewport';
import Player from './Player';
import VisibilitySensor from 'react-visibility-sensor';

//import songDataJSON from '../data/songData.json';
//const videoUrl = 'https://www.youtube.com/embed/pa_4jV0qRTg'//watch?v=pYRgeHRtKvU&feature=youtu.be
// const videoUrl = 'https://soundcloud.com/iceage-official/hurrah'
const songData2018 = [
	{
		"artist": "Dirty Projectors",
		"title": "That's A Lifestyle",
		"_id": 50,
		"startTime": 322,
		"description": "Spoon, the most consistently good band currently working, and one of my 10 favorite bands of all time, dropped another gem this year. 'Hot Thoughts' is a swaggering, sinewy jam, perfect for a future James Bond theme song. The sudden bursts of guitar interweave with the jangling bells, swooping strings, and moving bass line to make a nice groove to complement Britt Daniel's passionate yelps.",
		"imgURL": "http://res.cloudinary.com/ddvn6aemk/image/upload/c_fill,g_north,h_700,w_1300/v1513194248/dbrad2017/large/best_songs_2017_spoon.jpg",
		"videoUrl": "https://www.youtube.com/watch?v=bKJBSjadBRw",
		"genres": ["ALL", "INDIE", "ROCK"],
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
		"genres": ["ALL", "POP", "R&amp;B"],
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
		"genres": ["ALL", "INDIE"],
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
		"genres": ["ALL", "POP", "R&B"],
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
		"genres": ["ALL", "INDIE"],
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
		"genres": ["ALL", "ROCK"],
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

// const GENRE_FILTERS = {
// 	"ROCK": song => song.ROCK,
// 	"INDIE": song => song.ROCK,
// }

class Eighteen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songData: {songData2018},
			soundOn: null, 
			songId: 50, //songUrl?
			songUrl: '',
			playing: false,
			startTime: 0,
			inViewport: false,
			width: 0,
			height: 0,
			genres: ["ALL", "ROCK", "R&B", "POP", "INDIE", "RAP"],
			selectedGenres: ["ALL"],
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

	// onVisibilityChange = (id) => {
	// 	console.log(id, "onVisibilityChange")
	// 	this.setState({ songId: id });
	// }


	_onChange = (isVisible, param) => {
    console.log(isVisible, param, "_onChange")
    this.setVideoUrl(param)
    this.isInViewport(isVisible)
    this.setState({ songId: param})
	};

	setVideoUrl = (id) => {
		const currentSongObj = songData2018.filter(song => song._id === id)
		const currentSongUrl = currentSongObj[0].videoUrl
		this.setState({ songUrl: currentSongUrl })
	}

	isInViewport = (visibility) => {
		console.log(visibility, "isInViewport")
		this.setState({ inViewport: visibility })
	 }

	selectGenre = (e) => {
		const element = e.target.innerHTML;
		const list = this.state.selectedGenres;
		// if (element === "ALL") {
		// 	this.setState({ selectedGenres: [] });
		// } else 

		if (!list.includes(element)) {
			this.setState({ selectedGenres: [...this.state.selectedGenres, element] });
		} else {
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.filter(genre => genre !== element) }));
		}
	}

	updateSongVisibility = (visibility) => {
		this.setState({ hideSong: visibility })
	}
	

	handlePlaying = () => {
		// if (this.state.soundOn) {
			this.setState({
				playing: true
			})
		// }
	}

	render() {
		const data = this.state.songData.songData2018;
		const soundStatus = (this.state.soundOn === null) ? "List-container hidden" : "List-container";
		const width = this.state.width;
		const isVisible = this.state.inViewport;



		const soundChoice = this.state.soundOn
		const selectedGenres = this.state.selectedGenres;
		const currentSongObj = data.filter(song => song._id === this.state.songId);
		// console.log(this.state.songUrl, "this.state.songUrl")
		return (
			<div className="App-2018">																								
				<Nav genres={this.state.genres} menu={menuObj} width={width} selectGenre={(e) => this.selectGenre(e)} selectedGenres={selectedGenres} />
				<Hero soundSelection={this.soundSelection}  />
				<section className={soundStatus}>
					
					<div className="col col-right">
						{data.map((song) => {
						const songGenres = song.genres;
						const songId = song._id;
						const songIsSelected = (selectedGenres.some(v => songGenres.indexOf(v) !== -1))

						return (
							<VisibilitySensor key={song._id} onChange={isVisible => this._onChange(isVisible, songId)} scrollDelay={50} offset={{top:0}} >
								{({ isVisible }) => {
									//console.log(isVisible, song._id, "isVisible map")
									return (
										
									<SongCardTest 
										song={song} 
										key={song._id} 
										songIsSelected={songIsSelected} /> 


									)
								}}
							</VisibilitySensor>
							)
						})}
					</div>
					<div className="col col-left">
						<Player 
							songId={this.state.songId} 
							currentSong={currentSongObj}
							songData={data} 
							videoUrl={this.state.songUrl} 
							isVisible={isVisible} 
							volume={0.5} 
							width={width} 
							muted={!soundChoice} />
					</div>
				</section>
				<Footer visibility={soundStatus} />
			</div>
		)
	}
}



export default Eighteen;

/* 

<div className="card">
										  <hr />
										  <div className="title-row">
										    <h1>{song._id}</h1>
										    <div className="title-text">
										      <h4>{song.artist}</h4>
										      <h2>{song.title}</h2>
										    </div>
										  </div>
										  
										  <p className="description">{song.description}</p>
										  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
										  
										</div>






//////////
<SongCardTest 
									
									song={song} 
									key={song._id} 
									songIsSelected={songIsSelected} /> 





const options = {
	threshold: 0.469,
}
const SongCardBlock = handleViewport(SongCard, options, config: {} );

<SongCardBlock 
								onVisibilityChange={this.onVisibilityChange}
								isInViewport={this.state.inViewport}
								song={song} 
								width={width}
								id={song._id} 
								key={song._id} 
								playing={this.state.playing}
								muted={muted} 
								songIsSelected={songIsSelected} /> 
*/