//import logo from './logo.svg';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { NotFoundPage, Contact, About, Home  } from './pages';
import { Nav, Foot } from './layout';

 class App extends Component {
   render() {
    return <>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path={'*' || '/404'}>
            <NotFoundPage />
          </Route>
        </Switch>
        <Foot/>
      </Router>
    </>
   }
}

export default App;
