import React from 'react';
import { Layout } from '../layout';
import Banner from '../layout/banner'
import Divider from '../layout/divider'
import VerticalNav from '../layout/verticalnav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components'
import BannerImage from '../bannerimages/home.jpg'

const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
    grid-auto-flow: dense;
    place-content: center;
    align-content: center;
    justify-content: center;
    place-items: center;
    align-items: center;
    justify-items: center;
    height: 100%;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        display: grid;
    }
`;

const RightCol = styled.div`
    display: grid;
    width: 80%;
    place-content: stretch;
    backdrop-filter: blur(20px);
    overflow-y: scroll;
    height: 60vh;
    @media (max-width: 768px) {
        height: 80vh;
        width: 100%;
    }
`;

const LeftCol = styled.div`
    display: grid;
    width: 20%;
    place-content: stretch;
    backdrop-filter: blur(20px);
    overflow-y: scroll;
    height: 60vh;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        overflow-y: hidden;
    }
`;

const Listitem = styled.li`
    list-style: none;
    margin: 4px;
    color: white;
`;

const Scrolllinks = styled.a`
    color: white;
    transition: 0.5s ease-in-out;
    &:hover{
        color: #61dafb;
    }
    &.active{
        color: #141E30;
    }
`;



const Home = () => {
return <>
        <Banner img={BannerImage}>
            {/*hex="20679B"*/}
            Home
        </Banner>
        <Layout>
            <Row>
                <LeftCol className="custom-height">
                    <VerticalNav>
                        <Listitem>
                            <Scrolllinks href="#home">Home Page</Scrolllinks>
                        </Listitem>
                        <Listitem>
                            <Scrolllinks href="#another">Divider</Scrolllinks>
                        </Listitem>
                    </VerticalNav>
                </LeftCol>
                <RightCol>
                    <Divider>
                        <div id="home" />
                    <h2 className="main-title">
                        This is the Home page
                    </h2>
                    <p>
                    Given the right environment, talented and self-determined people create amazing things.
                    Collaboration is the only way to fulfill our purpose.
                    By being agile and mastering technology we stay one step ahead.
                    We build trust by relentlessly doing as we say.
                    </p>
                    <Grid>
                    <LazyLoadImage
                        wrapperClassName="content-image"
                        alt={`test1`}
                        height={"auto"}
                        src={`https://picsum.photos/200/300?random=1`} // use normal <img> attributes as props
                        width={"auto"} 
                        effect="blur"/>
                    </Grid>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio perferendis vero, ullam cum voluptatum aspernatur sit, doloremque amet voluptate cupiditate iure excepturi numquam autem aliquam. Repudiandae dolores beatae esse!
                        Necessitatibus, error! Alias ratione corporis doloremque, praesentium consequuntur ex facere quisquam? Quis molestiae delectus excepturi deserunt in obcaecati harum ipsum beatae, quasi, animi praesentium, ullam qui nam dignissimos laborum quas?
                        Dicta eos quis consectetur a iusto labore maxime porro delectus perspiciatis dolorem officiis iure incidunt, molestias culpa sunt assumenda blanditiis. Hic, totam! Unde maxime impedit voluptatem eaque atque nemo? Eius?
                        Pariatur repellendus dolorum, inventore sed beatae dicta, dignissimos repudiandae, tempore esse incidunt veritatis obcaecati accusamus quibusdam doloribus. Vitae ratione ab vero, nisi dolorem autem, at nam quis soluta temporibus amet.
                        Non blanditiis facilis rem, fugiat est sint sequi nemo reprehenderit ipsa eos sed asperiores commodi repellat dolorum! Animi doloremque sit id, culpa, ex veritatis aliquid eveniet ipsam soluta architecto nulla?
                    </p> 
                </Divider>
                <Divider>
                <div id="another" />
                    <p>Another Divider</p>
                </Divider>
                </RightCol>
            </Row>
        </Layout>
    </>
};

export default Home;