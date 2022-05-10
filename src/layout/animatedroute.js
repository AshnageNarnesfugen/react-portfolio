import React from 'react';
import {
    Switch,
    Route,
    useLocation,
    Redirect
} from 'react-router-dom';
import { Story, Contact, About, Home } from '../pages/index';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
                <Route exact path='/story'>
                    <Story />
                </Route>
                <Route path='*'>
                    <Redirect to={{ ...location, state: { from: '404' } }} />
                </Route>
            </Switch>
        </AnimatePresence>
    );
}

export default AnimatedRoutes