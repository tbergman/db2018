import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {
	const isVisible = props.isVisible;
	//console.log(isVisible, songId, "isVisible"); 
  const viewportWidth = `${props.width}px`;
  //console.log(props.width, "props,width")
  const playerThird = `${props.width * 0.4}px`;
  const playerWidth = (props.width < 640) ? viewportWidth : playerThird;
  const calcHeight = `${props.width * 0.5}px`;
  const playerHeight = (playerWidth === viewportWidth ? `${props.width * 0.5}px`: `${props.width * 0.25}px`)
  //const playerHeight = (viewportWidth < 640) ? calcHeight : '360px'
  const hideVideo = (isVisible && props.width > 640) ? 'Player' : 'Player hidden';
  const currentSong = props.currentSong[0]
  //console.log(props.currentSong[0], "why")
  const configVars = currentSong.youtube ? {youtube: { playerVars: { start: props.currentSong[0].start, end: currentSong.end, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }
  //console.log(configVars)
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