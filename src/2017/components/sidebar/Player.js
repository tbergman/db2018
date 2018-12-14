import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../css/App.css';

class VideoPlayer extends Component {
  render () {
    return (
    	<ReactPlayer 
    		url={this.props.url}
    		width="340px"
    		height="220px"
        controls={true}
    	/>
  	)
  }
}

export default VideoPlayer;