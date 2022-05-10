import React from 'react';
import styled from 'styled-components'

const LateralNav = styled.div `
    height: fit-content;
    margin: 10px;
    border-radius: 10px;
    background: rgba(70, 111, 133, 1);
    padding: 10px;
    @media (max-width: 768px) {
        width: max-content;
        height: max-content;
    }
`
const UnorderedList = styled.ul `
    display: grid;
    padding-inline-start: 10px;
    margin-block-start: 0;
    margin-block-end: 0;
    @media (max-width: 768px) {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
        display: flex;
        place-content: center;
    }
`;

const VerticalNav = (props) => {
    return <LateralNav >
                <UnorderedList > { props.children } </UnorderedList>  
            </LateralNav >
};

export default VerticalNav;