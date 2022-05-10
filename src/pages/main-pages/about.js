import React from 'react';
import { Layout } from '../../layout';
import Banner from '../../layout/banner'
import Divider from '../../layout/divider'
import BannerImage from '../../bannerimages/Launch-website-banner-US.jpg'
import { motion } from 'framer-motion'
//import styled from 'styled-components'

const About = () => (
    <motion.div
    className="main-frame"
    initial={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
    animate={{ opacity:1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
    exit={{ opacity:0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
    >
        <Banner img={BannerImage}>
            {/*hex="00AD4B"*/}
            About Us
        </Banner>
        <Layout>
            <Divider>
                <h2 className="main-title">
                    This is the About page
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita nisi facilis enim dignissimos numquam eligendi harum laboriosam! Neque officia provident debitis animi est reiciendis quam ipsa molestiae quis! Fuga!
                    Ducimus corporis eaque necessitatibus reprehenderit, et voluptas aut qui, repudiandae tenetur eum illo accusantium quae voluptatem, atque nihil modi omnis libero cum. Dolores minima voluptatum voluptatem dolorum impedit deserunt facilis?
                    Voluptates expedita repudiandae, sequi blanditiis suscipit nisi sed non dolorum, in est repellendus, laborum temporibus cupiditate doloribus dolorem dolor voluptatibus. In aliquam, atque facilis eius esse corporis quas. Voluptas, dolores?
                </p>  
            </Divider>
            
        </Layout>
    </motion.div>
);

export default About;