import React from 'react'
import ReactPlayer from 'react-player'

function Player(props) {
	// console.log(props.height, "props.height")
	// songId={props.id}
  return (

  	<ReactPlayer 

	  	url={props.url} 
	  	config={props.config} 
	  	width={props.width} 
	  	height={props.height}
	  	playing={props.playing} 
	  	volume={props.volume}
	  	muted={props.muted}
	  	 />
	 )
}

export default Player;

//playing={props.playing}