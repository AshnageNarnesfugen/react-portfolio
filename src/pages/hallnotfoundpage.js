import React from 'react';
import styled from 'styled-components';
import { useLottie } from 'lottie-react'
import Lainanimation from '../lain.json'
import {Link} from 'react-router-dom'
import AudioTabClick from '../audios/satellite.mp3';

const Row = styled.section`
  display: flex;
  @media (max-width: 768px) {
    display: grid;
  }
`;

const Container404 = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: grid;
  place-content: center;
  color: white;
  font-weight: bold;
  overflow: hidden;
  @media (max-width: 768px) {
    position: absolute;
  }
`;

const Title404 = styled.h1`
  font-size: 10em;
  margin: 0;
  text-shadow: 10px 10px 0px rgba(62,135,140,1);
  @media (max-width: 768px) {
    margin-top: 100%;
  }
`

const LainContainer = styled.div`
    z-index: 0;
    @media (max-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    } 
`;

const Lain = () => {
  const options = {
    animationData: Lainanimation,
    loop: true,
    autoplay: true
  }

  const { View } = useLottie(options);
  return  <LainContainer>
            {View}
          </LainContainer>
}

const NotFoundPage = () => {
  return  <>
            <Row>
              <Container404>
                  <Title404>
                    404
                  </Title404>
                  <span style={{ display: 'grid', alignContent: 'center', placeContent: 'center'}}>
                    <p style={{ fontStyle: 'italic' }}>🎵 Did you get lost while you were gone?🎵</p>
                    <p style={{ margin: '0', display: 'flex', textAlign: 'center', placeContent: 'center' }}>Page Not Found -&nbsp;<Link className="link-to-home" to="/">Go back Home</Link></p>
                  </span>
              </Container404>
              <Container404>
                  <Lain/>
                  <audio preload="auto" autoPlay={true} loop={true} src={AudioTabClick}/>
              </Container404>
            </Row>
          </>
}

export default NotFoundPage;