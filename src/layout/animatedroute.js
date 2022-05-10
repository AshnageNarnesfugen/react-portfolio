import React from 'react';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';
import { NotFoundPage, Story, Contact, About, Home } from '../pages/index';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/home'>
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
                <Route exact path={'*' || '/404'}>
                    <NotFoundPage />
                </Route>
            </Switch>
        </AnimatePresence>
    );
}

export default AnimatedRoutes