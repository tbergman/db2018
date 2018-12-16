import React, { Component } from 'react';

function SongCard(props) {
	return (
		<div className="Song-card-18">
			<div className="card">
			  <hr />
			  <div className="title-row">
			    <h1>{props.id}</h1>
			    <div className="title-text">
			      <h4>{props.artist}</h4>
			      <h2>{props.title}</h2>
			    </div>
			  </div>
			  
			  <p className="description">{props.description}</p>
			  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
			  
			</div>
		</div>
	)
}

export default SongCard;