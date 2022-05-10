import React from 'react';
import styled from 'styled-components'

const LateralNav = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(70, 111, 133, 1);
    @media (max-width: 768px) {
        height: max-content;
    }
`
const UnorderedList = styled.ul`
    display: grid;
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
    return  <LateralNav>
                <UnorderedList>
                    {props.children}
                </UnorderedList> 
            </LateralNav>
};

export default VerticalNav;