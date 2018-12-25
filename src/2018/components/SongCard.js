import React from 'react';
import handleViewport from 'react-in-viewport';

const SongCard = (props: { inViewport: boolean }) => {
	const { inViewport, innerRef } = props;
	const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';
  
	return (
		<div className="Song-card-18" id={props.props._id} ref={innerRef}>
			<div className="card">
			  <hr />
			  <div className="title-row">
			    <h1>{props.props._id}</h1>
			    <div className="title-text">
			      <h4>{props.props.artist}</h4>
			      <h2>{props.props.title}</h2>
			    </div>
			  </div>
			  
			  <p className="description">{props.props.description}</p>
			  <p>{text}</p>
			  <img src="https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg" alt="dog" />
			  
			</div>
		</div>
	)
}

const SongCardBlock = handleViewport(SongCard, /** options: {}, config: {} **/);

export default SongCardBlock;


//props.refField