import React from 'react';
import styled, { keyframes } from 'styled-components'
import useColorThief from 'use-color-thief';

const Loadbackground = keyframes `
    from {
        opacity: 1;
    }
    to {
        opacity: 0.5;
    }
`;

const Bannerimage = styled.div `
    width: auto;
    height: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
    background: url("${(props) => props.image}");
    transition: all 0.5s linear;
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;
    overflow: hidden;
    text-align: center;
    background-repeat: no-repeat;
    image-rendering: auto;
    margin: 10px;
    border-radius: 10px;
`;

const Filter = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: ${(props) => props.color};
    animation: ${Loadbackground} 1s linear ;
`;

const Pagetitle = styled.h1 `
    margin: 10px;
    font-size: 4em;
    text-shadow: 5px 5px 0px black;
    position: relative;
`;

const Banner = (props) => {

    const { color } = useColorThief(props.img, {
        format: 'hex',
        colorCount: 10,
        quality: 10,
    });

    return <>
                <Bannerimage image = { props.img } >
                    <Filter color = { color }/> 
                    <Pagetitle > { props.children } </Pagetitle> 
                </Bannerimage>                
            </>
};

export default Banner;