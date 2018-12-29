import React from 'react'
// import ReactPlayer from 'react-player'

const Player = (props: { inViewport: boolean }) => {
	//console.log(props.height, "props.height")
	const { inViewport, innerRef } = props;
	// const configVars = props.song.youtube ? {youtube: { playerVars: { start: props.song.start, end: props.song.end, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }

  const text = inViewport ? 'In-viewport' : 'Not-in-viewport';
  let hideVideo;


  return (
  	<div>{text}</div>
  	)
}

export default Player;

//playing={props.playing}

{/*<ReactPlayer 
	  	url={props.url} 
	  	config={props.config} 
	  	width={props.width} 
	  	height={props.height}
	  	playing={props.playing} 
	  	volume={props.volume}
	  	muted={props.muted} />*/}
	 