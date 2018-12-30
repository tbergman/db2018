import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {
	// const songData = props.songData;
	// const songId = props.songId;
	// const currentSongObj = songData.filter(song => song._id === songId);
 //  const currentSong = currentSongObj[0];

	// console.log(currentSong, 'currentSong');

	const isVisible = props.isVisible;
	//console.log(isVisible, songId, "isVisible"); 

  const viewportWidth = `${props.width}px`;
  const playerWidth = (viewportWidth < 640) ? viewportWidth : '640px';
  const calcHeight = `${props.width * 0.6}px`;
  const playerHeight = (viewportWidth < 640) ? calcHeight : '360px'
  const hideVideo = (isVisible && props.width > 640) ? 'Player' : 'Player hidden';
  const currentSong = props.currentSong[0]

  const configVars = currentSong.youtube ? {youtube: { playerVars: { start: currentSong.start, end: currentSong.end, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }
  console.log(configVars)
  const isPlaying = isVisible ? true : false

  return (
  	<div className={hideVideo}>
	  	<ReactPlayer 
		  	url={currentSong.videoUrl} 
		  	config={configVars} 
		  	width={playerWidth} 
		  	height={playerHeight}
		  	playing={isPlaying} 
		  	volume={props.volume}
		  	muted={props.muted}
		  	 />
	  </div>
	 )
}

export default Player;

//playing={props.playing}