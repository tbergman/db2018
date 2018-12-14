import React, { Component } from 'react';
import '../css/App.css';

export default class Box extends Component {
  render() {
    return (
    	<div onClick={this.props.onClick} className="box">

    		<img src={this.props.imgUrl} alt={this.props.songId} className="responsive-img"/>
    		<h1 className="box-number">{this.props.songId}</h1>
    	</div>
  	)
  }
}
