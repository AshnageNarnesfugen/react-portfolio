import React, {useEffect} from "react";
import { Layout } from "../../layout";
import Banner from "../../layout/banner";
import "react-lazy-load-image-component/src/effects/blur.css";
//import styled from "styled-components";
import BannerImage from "../../bannerimages/wallpaper.PNG";
import Divider from "../../layout/divider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion'
//import { Parallax, ParallaxLayer } from 'react-spring'

const Story = () => {

  const [data_call, setData_call] = React.useState([])

  const apiCall = async() => {
    
    const API_Data = 'https://picsum.photos/v2/list?page=1&limit=10'
    const data = await fetch(API_Data)
    const jsnData = await data.json()
    setData_call(jsnData)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <motion.div
        className="main-frame"
        initial={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
        animate={{ opacity:1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
        exit={{ opacity:0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
    >
      <Banner img={BannerImage}>
        Stories
      </Banner>
      <Layout>
        <Divider>
          <div className="img-grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              data_call.map((item, index) => (
                  <div className="box" style={{margin: '10px'}} key={index}>
                    <p>{item.author}</p>
                    
                    <LazyLoadImage 
                          alt={item.url}
                          width={"auto"}
                          height={"100"}
                          src={item.download_url}
                          effect="blur"
                    />
                    
                  </div>
              ))
            }
          </div>
        </Divider>
      </Layout>
    </motion.div>
  );
};

export default Story;
