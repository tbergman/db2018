import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Seventeen from './2017/AppRoutes.js';
import Eighteen from './2018/components/Eighteen.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/2017" component={Seventeen} />
          <Route exact path="/2018" component={Eighteen} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
