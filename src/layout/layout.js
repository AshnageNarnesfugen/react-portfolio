import React from 'react'
import AnimatedRoutes from './animatedroute';
import { Nav, Foot } from './';
import { NotFoundPage } from '../pages';
import {
    useLocation
} from 'react-router-dom';

const Layout = () => {
  const { state } = useLocation()

    return (
    <> 
        {state?.from === '404' ? (
                <NotFoundPage /> 
        ) : (
            <>  
                <Nav />
                    <AnimatedRoutes />
                <Foot />
            </>
        )}
     </> 
    )
}

export default Layout