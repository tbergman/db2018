import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {
	const isVisible = props.isVisible;
  const viewportWidth = `${props.width}px`;
  const playerThird = `${props.width * 0.4}px`;
  const playerWidth = (props.width < 640) ? viewportWidth : playerThird;
  const calcHeight = `${props.width * 0.5}px`;
  const playerHeight = (playerWidth === viewportWidth ? `${props.width * 0.5}px`: `${props.width * 0.25}px`)
  

  //const hideVideo = (isVisible && props.width > 640) ? 'Player' : 'Player hidden';
  const hideVideo = (isVisible && props.width > 640) ? 'Player' : 'Player hidden';
  //const checkMobile = (props.width < 640 && muted )
  const currentSong = props.currentSong[0]
  const configVars = currentSong.youtube ? {youtube: { playerVars: { start: props.currentSong[0].start, end: currentSong.end, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }
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