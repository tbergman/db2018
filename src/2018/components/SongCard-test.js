import React from 'react';

function SongCardTest(props) {
	const songVisibility = props.songIsSelected ? "Song-card-18" : "Song-card-18 hidden";
	// console.log(songVisibility, "songVisibility")
	//console.log('song Id, song start, end', props.song._id, props.song.start, props.song.end)
	return (

		<div className={songVisibility} id={props.song._id}>
			<div id={props.song._id} className="Song-card-18" >
					
				<div className="card">
				  <hr />
				  <div className="title-row">
				    <h1>{props.song._id}</h1>
				    <div className="title-text">
				      <h4>{props.song.artist}</h4>
				      <h2>{props.song.title}</h2>
				    </div>
				  </div>
				  
				  <p className="description">{props.song.description}</p>
				  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
				  
				</div>
			</div>
		</div>
	)
}

export default SongCardTest;