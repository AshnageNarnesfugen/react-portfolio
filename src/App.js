//import logo from './logo.svg';
import React, {Component} from 'react';


import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';
//import { NotFoundPage, Story, Contact, About, Home  } from './pages';
import AnimatedRoutes from './layout/animatedroute';
import { Nav, Foot } from './layout';

 class App extends Component {
   render() {
    return <>
      <Router>
        <Nav/>
        <AnimatedRoutes />
        <Foot/>
      </Router>
    </>
   }
}

export default App;
