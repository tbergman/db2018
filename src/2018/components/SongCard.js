import React, { Component } from 'react';

function SongCard(props) {
	return (
		<div className="Song-card-18">
			<div className="card">
			  <hr />
			  <div className="title-row">
			    <h1>50</h1>
			    <div className="title-text">
			      <h4>ARTIST NAME</h4>
			      <h2>SONG TITLE</h2>
			    </div>
			  </div>
			  
			  <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
			  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
			  
			</div>
		</div>
	)
}

export default SongCard;