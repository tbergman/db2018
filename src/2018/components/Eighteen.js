import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Intro from './Intro';
import SongCard from './SongCard';
import Footer from './Footer';
import Player from './Player';
import VisibilitySensor from 'react-visibility-sensor';

import songData2018 from '../data/songData2018.json';

const menuObj = { //disabling for now until the full site is integrated
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

class Eighteen extends Component {
	constructor(props) {
		super(props);
				this.songCardRef = React.createRef();

		this.state = {
			songData: {songData2018},
			soundOn: null, 
			songId: 50,
			songUrl: '',
			playing: false,
			startTime: 0,
			endTime: 0,
			inViewport: false,
			width: 0,
			height: 0,
			genres: ["ALL", "ROCK", "R&amp;B", "POP", "INDIE", "RAP"],
			selectedGenres: ["ALL"],
			getElement: null
		}
	}

	componentDidMount() {
		this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);  
	  this.setState(() => {
      return {
        getElement: document.getElementById("videoInView")
      };
    });
	};

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
	initialSoundSelection = (val) => { // set & update user sound preferences
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
			 // eslint-disable-next-line
			const newList = list.splice(allIndex, 1, element);
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.splice(allIndex, 1, element) }));
		} else { // pop out when clicked a second time
			this.setState(prevState => ({ selectedGenres: prevState.selectedGenres.filter(genre => genre !== element) }));
		}
	}

	handlePlaying = () => {
		this.setState({
			playing: true
		})
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
		
		const containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;


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
					<Intro />	
          </div>
          <div className="col-right"></div>
				</div>
				<div id="videoInView"></div>
				<section className={listSoundStatus} > 
					<div className="col col-left" >
						
				


						{data.map((song) => {
						const songGenres = song.genres;
						const songId = song._id;
						const songIsSelected = (selectedGenres.some(v => songGenres.indexOf(v) !== -1))
						return (
							
										<SongCard 
											song={song} 
											key={song._id} 
											songIsSelected={songIsSelected} 
											onChange={isVisible => this._onChange(isVisible, songId)} 
											containment={containmentDOMRect} /> 
									
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