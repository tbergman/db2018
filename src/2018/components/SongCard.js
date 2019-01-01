import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import VisibilitySensor from 'react-visibility-sensor';

function SongCard(props) {
	const songVisibility = props.songIsSelected ? "Song-card-18" : "Song-card-18 hidden";
	const _JSONdesc = props.song.description;
  const _parsedDesc = ReactHtmlParser(_JSONdesc);

  const _JSONListen = props.song.listen;
  const _parsedListen = ReactHtmlParser(_JSONListen);

  const _JSONArtist = props.song.artist;
  const _parsedArtist = ReactHtmlParser(_JSONArtist);

	return (

		<div className={songVisibility} id={props.song._id} >
					
				<div className="card">
				  <hr />
				  <VisibilitySensor key={props.song._id} onChange={props.onChange} containment={props.containment} scrollDelay={50} minTopValue={20}>
						{({ isVisible }) => {
							return (
						  <div className="title-row">
						    <h1>{props.song._id}</h1>
						    <div className="title-text">
						      <h4>{_parsedArtist}</h4>
						      <h2><span className="quotations">“</span>{props.song.title}<span className="quotations">”</span></h2>
						    </div>
						  </div>
						 );
						}}
					</VisibilitySensor>
				  
				  <div className="description">{_parsedDesc}</div>
				  <img src={props.song.imgURL} alt={props.song.artist} />
				  <div className="listen">{_parsedListen}</div>
				  
				</div>
		</div>
	)
}

export default SongCard;