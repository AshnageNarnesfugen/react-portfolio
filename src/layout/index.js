import React from 'react';
import Nav from './nav';
import Foot from './foot';
import styled from 'styled-components';

const Container = styled.section`
    width: auto;
    height: auto;
    display: grid;
    place-content: center;
    align-content: center;
    justify-content: center;    
`;

const Layout = (props) => 
    <>
        <Container className="container">     
            {props.children}
        </Container>
    </>
;


export { Layout, Nav, Foot };