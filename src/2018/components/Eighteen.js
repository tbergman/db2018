import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
// import SongCard from './SongCard';
import SongCard from './SongCard';
import Footer from './Footer';
// import handleViewport from 'react-in-viewport';
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
				this.songCardRef = React.createRef();

		this.state = {
			songData: {songData2018},
			soundOn: null, 
			songId: 50, //songUrl?
			songUrl: '',
			playing: false,
			startTime: 0,
			endTime: 0,
			inViewport: false,
			width: 0,
			height: 0,
			genres: ["ALL", "ROCK", "R&B", "POP", "INDIE", "RAP"],
			selectedGenres: ["ALL"],
		}
	}

	componentDidMount() {
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
	initialSoundSelection = (val) => {
		this.handlePlaying();
		this.setState( 
			{ soundOn: val },
			() => window.scrollTo({ // add callback so function can access updated state
	      top:this.songCardRef.current.offsetTop, 
	      behavior: "smooth"   
	    }))
	}

	toggleSound = (val) => {
		this.setState({
			soundOn: !val,
		})
	}

	// scrollToMyRef = () => {   // run this method to execute scrolling. 
 //    	console.log("scrollToMyRef")
 //  }

	_onChange = (isVisible, param) => {
    if (isVisible) {
    	this.setVideoUrl(param)
    	this.setState({ songId: param, inViewport: isVisible })
    } else {
    	this.isInViewport(isVisible)
    }
	};

	setVideoUrl = (id) => {
		const currentSongObj = songData2018.filter(song => song._id === id);
		const currentSongUrl = currentSongObj[0].videoUrl;
		const currentSongStart = currentSongObj[0].start;
		const currentSongEnd = currentSongObj[0].end;
		this.setState({ 
			songUrl: currentSongUrl,
			startTime: currentSongStart,
			endTime: currentSongEnd
		})
	}

	isInViewport = (visibility) => {
		this.setState({ inViewport: visibility })
	 }

	selectGenre = (e) => {
		const element = e.target.innerHTML;
		const list = this.state.selectedGenres;
		if (element === "ALL") { // if all is selected, clear state and replace with "ALL"
			this.setState({ selectedGenres: ["ALL"] });
		} else if (list.length === 1 && list.includes(element) ) {
			this.setState({ selectedGenres: ["ALL"]})
		} else if (!list.includes(element) && !list.includes("ALL")) { //if alement is not in list, add it
			this.setState({ selectedGenres: [...this.state.selectedGenres, element] });
		} else if (list.includes("ALL")) { // if adding an element, remove "ALL" from list
			const allIndex = list.indexOf("ALL");
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.splice(allIndex, 1, element) }));
		} else { // if element 
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.filter(genre => genre !== element) }));
		}
	}

	// updateSongVisibility = (visibility) => {
	// 	this.setState({ hideSong: visibility })
	// }

	handlePlaying = () => {
		// if (this.state.soundOn) {
			this.setState({
				playing: true
			})
		// }
	}

	render() {
		const data = this.state.songData.songData2018;
		const listSoundStatus = (this.state.soundOn === null) ? "List-container hidden" : "List-container";
		const locked = (this.state.soundOn === null) ? "fix-position" : "";
		const width = this.state.width;
		const isVisible = this.state.inViewport;
		const soundStatus = (this.state.soundOn === null) ? "hidden" : " ";

		const soundChoice = this.state.soundOn
		const selectedGenres = this.state.selectedGenres;
		const currentSongObj = data.filter(song => song._id === this.state.songId);
		const times = [this.state.startTime, this.state.endTime];
		
		return (
			<div className="App-2018">																								
				<Nav 
					genres={this.state.genres} 
					menu={menuObj} 
					width={width} 
					selectGenre={(e) => this.selectGenre(e)} 
					selectedGenres={selectedGenres} 
					visibility={soundStatus}
					soundChoice={soundChoice}
					toggleSound={() => this.toggleSound(soundChoice)}
					muted={!soundChoice} />
				<Hero soundSelection={this.initialSoundSelection} locked={locked}/>
				<div ref={this.songCardRef}></div>

				<div className={listSoundStatus}>
					<div className="Intro-18 col-left">
						<div className="card">
							<p><span className="first-line">2017 was a dark year in many respects</span>
								, but music allows us to feel the gamut of emotions, 
			          regardless of what’s going on around us. A song can mirror and solidify what you’re feeling, 
			          or can change your mood altogether. A song can also inspire, surprise, or disappoint, 
			          depending on its context. Music subverted expectations in 2017 -- rap was dominated by 
			          flute samples, Calvin Harris made funk songs, Courtney Barnett and Kurt Vile teamed up for 
			          a whole album, Lorde and Kendrick Lamar got even better, and Harry Styles sounded like David 
			          Bowie.
		           </p>
		           </div>
           	</div>
           <div className="col-right"></div>
				</div>


				<section className={listSoundStatus} > 
					<div className="col col-left">
						{data.map((song) => {
						const songGenres = song.genres;
						const songId = song._id;
						//console.log(songId, 'songId from card')
						const songIsSelected = (selectedGenres.some(v => songGenres.indexOf(v) !== -1))
						return (
							<VisibilitySensor key={song._id} onChange={isVisible => this._onChange(isVisible, songId)} scrollDelay={50}>
								{({ isVisible }) => {
									return (
										<SongCard 
											song={song} 
											key={song._id} 
											songIsSelected={songIsSelected} /> 
									)
								}}
							</VisibilitySensor>
							)
						})}
					</div>
					<div className="col col-right">
						<Player 
							songId={this.state.songId} 
							currentSong={currentSongObj}
							songData={data} 
							videoUrl={this.state.songUrl} 
							isVisible={isVisible} 
							volume={0.5} 
							width={width} 
							muted={!soundChoice} 
							times={times} />
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