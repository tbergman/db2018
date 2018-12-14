import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div class="home">
				<Link to="/2017">2017</Link>
				<Link to="/2018">2018</Link>
			</div>		
		)
	}
}

export default Home;