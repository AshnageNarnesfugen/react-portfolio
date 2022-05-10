//import logo from './logo.svg';
import React, {Component} from 'react';




import './App.css';
//import { NotFoundPage, Story, Contact, About, Home  } from './pages';
import AnimatedRoutes from './layout/animatedroute';
import { Nav, Foot } from './layout';

 class App extends Component {
   render() {
    return <>
        <Nav/>
        <AnimatedRoutes />
        <Foot/>
    </>
   }
}

export default App;
