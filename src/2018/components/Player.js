import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function Player(props) {
  return <ReactPlayer url={props.playerUrl} ref={props.refField} config={props.config} />
}

export default Player;

//playing={props.playing}