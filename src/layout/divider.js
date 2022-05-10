import React from 'react';
import styled from 'styled-components'

const Division = styled.div `
    width: auto;
    height: fit-content;
    background: rgba(173, 219, 222, 0.25);
    backdrop-filter: blur(15px);
    padding: 2%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 1%;
    box-shadow: 5px 5px 10px #222222;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    font-size: 1.25rem;
    @media (max-width: 767px) {
        margin-left: 1.5%;
        margin-right: 1.5%;
    }
`;

const Divider = (props) => (
    <Division>
        {props.children}
    </Division>
);

export default Divider;