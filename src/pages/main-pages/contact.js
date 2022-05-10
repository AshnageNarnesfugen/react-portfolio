import React from 'react';
import { Layout } from '../../layout';
import Banner from '../../layout/banner'
//import Divider from '../layout/divider'
import BannerImage from '../../bannerimages/contact-header.jpg'
import emailjs, { init } from 'emailjs-com'
import styled from 'styled-components'
import '../../pages/styles/form.css';
import Buildings from '../../bannerimages/buildings.jpg'
import { motion } from 'framer-motion'
const UserID = init("user_0J0XEtg1MDIAHVo5zevl5")

//import HubspotForm from 'react-hubspot-form'


const Row = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        display: grid;
    }
`;

const Col = styled.div`
    display: grid;
    width: 50%;
    margin: 10px;
    border-radius: 10px;
    place-content: stretch;
    backdrop-filter: blur(20px);
    @media (max-width: 768px) {
        width: auto;
    }
`;

const Decoration = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background-image: url("${Buildings}");
    background-size: cover;
    background-position: center;
    
    /*&:after {
        content: "";
        background-color: #DFDBE5;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-position: center;
        opacity: 0.3;
    }*/
`;

const Form = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_frrzr27', 'template_crn3xt8', e.target, UserID)
            .then((result) => {
                console.log(result.text);
                window.alert(`The form was successfully submited, Status: ${result.text}`)
            }, (error) => {
                console.log(error.text);
                window.alert(`The form was not submited, Status: ${error.text}`)
            });
        e.target.reset()
    }

    return (
        <>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="center-wrap">
                        <div className="section text-center">
                            <h4 className="mb-4">Contact Us</h4>
                            <div className="form-group">
                                <input type="text" name="from_name" className="form-style" placeholder="Your Full Name" id="from_name" autoComplete="off" />
                                <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" name="from_email" className="form-style" placeholder="Your Email" id="from_name" autoComplete="off" />
                                <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                                <textarea name="message" placeholder="Your Message" autoComplete="off"></textarea>
                                <i className="input-icon uil uil-comment-alt"></i>
                            </div>
                            <button type="submit" className="btn mt-4">submit</button>
                        </div>
                    </div>
            </form>
        </>
    )
}

const Contact = () => (
    <motion.div
    className="main-frame"
    initial={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
    animate={{ opacity:1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
    exit={{ opacity:0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
    >
        <Banner img={BannerImage}>
            {/*hex="00ADA2"*/}
            Contact Us
        </Banner>
        <Layout>
            <Row>
                <Col className="form-section">
                    <Form/>
                </Col>
                <Col className="deco">
                    <Decoration>
                        <iframe style={{borderRadius: '10px', border: '0'}} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59231.84751622181!2d-100.10189461481428!3d25.651331250547358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c2cccf65f28f%3A0x9bad0e30fbc25fa1!2sReal%20de%20San%20Roberto%20210%2C%20Real%20de%20San%20Jos%C3%A9(La%20Ciudadela)%2C%2067250%20Ju%C3%A1rez%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1627588118559!5m2!1ses-419!2smx" width="100%" height="100%" allowFullScreen={true} loading="lazy"></iframe>
                    </Decoration>
                </Col> 
            </Row>
        </Layout>
    </motion.div>
);

export default Contact;