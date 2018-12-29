import React from 'react';
import Player from './Player.js'

const SongCard = (props: { inViewport: boolean }) => {

	const { inViewport, innerRef } = props;
  const text = inViewport ? 'In-viewport' : 'Not-in-viewport';

  const playingStatus = inViewport ? true : false;
  const viewportWidth = `${props.width}px`;
  const playerWidth = (props.width < 640) ? viewportWidth : '640px';
  const calcHeight = `${props.width * 0.6}px`;
  const playerHeight = (viewportWidth < 640) ? calcHeight : '360px'
  const hideVideo = (inViewport && props.width > 640) ? 'Player' : 'Player hidden';

  const configVars = props.song.youtube ? {youtube: { playerVars: { start: props.song.start, end: props.song.end, iv_load_policy: 3, modestbranding: 1, loop: 1 } } } : { soundCloud: { options: { auto_play: true } } }
  const song = props.song;
	const songVisibility = props.songIsSelected ? "Song-card-18" : "Song-card-18 hidden"

	return (
		<div className={songVisibility} id={props.song._id} ref={innerRef}>
			<div className={hideVideo}>
				<Player 
					url={props.song.videoUrl} 
					config={configVars} 
					width={playerWidth} 
					height={playerHeight} 
					playing={playingStatus} 
					volume={0.5} 
					muted={!props.muted} />
			</div>
			<div className="card">
			  <hr className={text}/>
			  <div className="title-row">
			    <h1>{props.song._id}</h1>
			    <div className="title-text">
			      <h4>{props.song.artist}</h4>
			      <h2>{props.song.title}</h2>
			    </div>
			  </div>
			  
			  <p className="description">{props.song.description}</p>
			  <p>{text}</p>
			  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
			  
			</div>
		</div>
	)
}

export default SongCard;

//props.refField