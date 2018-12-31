import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function SongCard(props) {
	const songVisibility = props.songIsSelected ? "Song-card-18" : "Song-card-18 hidden";
	const _JSONdesc = props.song.description;
  const _parsedDesc = ReactHtmlParser(_JSONdesc);

  const _JSONListen = props.song.listen;
  const _parsedListen = ReactHtmlParser(_JSONListen);

	return (

		<div className={songVisibility} id={props.song._id} >
					
				<div className="card">
				  <hr />
				  <div className="title-row">
				    <h1>{props.song._id}</h1>
				    <div className="title-text">
				      <h4>{props.song.artist}</h4>
				      <h2>"{props.song.title}"</h2>
				    </div>
				  </div>
				  
				  <div className="description">{_parsedDesc}</div>
				  <img src={props.song.imgURL} alt={props.song.artist} />
				  <div className="listen">{_parsedListen}</div>
				  
				</div>
		</div>
	)
}

export default SongCard;