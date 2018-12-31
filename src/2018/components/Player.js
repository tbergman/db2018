import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {
	const isVisible = props.isVisible;
  const viewportWidth = `${props.width * 0.92}px`;
  const playerThird = `${props.width * 0.25}px`;

  const playerWidth = (props.width <= 768) ? viewportWidth : playerThird;
  const playerHeight = (playerWidth === viewportWidth ? `${props.width * 0.45}px`: `${props.width * 0.15}px`)

  const checkMobile = (props.width <= 768) ? 'mobile' : ''; 
  const mobilePlayer = (checkMobile === 'mobile' && props.muted) ? 'Player hidden' : 'Player';
  //const mobilePlayer = (props.width <= 768) ? 'Player hidden' : 'Player';
  const hideUntilVisible = (isVisible) ? '' : 'hidden';
  const currentSong = props.currentSong[0]
  const startTime = props.times[0];
  const endTime = props.times[1];
  const configVars = currentSong.youtube ? {youtube: { playerVars: { start: startTime, end: endTime, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }
  const isPlaying = isVisible ? true : false;

  return (
  	<div className={mobilePlayer}>
      <div className={hideUntilVisible}>
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
	  </div>
	 )
}

export default Player;