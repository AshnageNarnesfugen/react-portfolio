import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer`
    height: auto;
    padding-top: 1%;
    padding-bottom: 1%;
    width: 100%;
    background: #3e878c;
    display: flex;
    place-content: center;
    z-index: 1;
    color: white;
    font-weight: bold;
`;

const Foot = () => (
    <Footer>
        Done by Alexis
    </Footer>
);

export default Foot;