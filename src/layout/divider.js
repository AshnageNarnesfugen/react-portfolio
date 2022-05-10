import React from 'react';
import styled, { keyframes } from 'styled-components'

const LoadAnimationOpacity = keyframes`
    from {
        opacity: 0;
        filter: blur(10px);
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
        filter: blur(0px);
        transform: translateY(0px);
    }
`;

const Division = styled.div `
    width: auto;
    height: fit-content;
    background: rgba(173, 219, 222, 0.25);
    backdrop-filter: blur(15px);
    padding: 2%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1.5%;
    margin-bottom: 1.5%;
    box-shadow: 5px 5px 10px #222222;
    border-radius: 5px;
    overflow: hidden;
    animation: ${LoadAnimationOpacity} 0.5s linear ;
    color: white;
    font-size: 1.25rem;
`;

const Divider = (props) => (
    <Division>
        {props.children}
    </Division>
);

export default Divider;