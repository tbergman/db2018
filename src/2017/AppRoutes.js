import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js'
import Home from './components/Home.js';
import SmallBox from './components/SmallBox.js';
import MediumBox from './components/MediumBox.js';
import LargeBox from './components/LargeBox.js';
import BurgerNavbar from './components/BurgerNavbar.js';
import Footer from './components/Footer.js'

export default class Routes extends Component {
	render() {
		return(
			<BrowserRouter>
		    <div>
		    	<div className="App">
		    		<Navbar />
		    		<BurgerNavbar />
		    		<Switch>
		    			<Route exact path="/" component={Home} />
			    		<Route path="/50-21" component={SmallBox} />
			    		<Route path="/20-11" component={MediumBox} />
			    		<Route path="/10-1" component={LargeBox} />
			    	</Switch>
			    	<Footer />
		    	</div>
		    </div>
			</BrowserRouter>
		)
	}
  
}

