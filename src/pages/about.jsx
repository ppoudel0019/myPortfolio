import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImage from "../images/laptop1.webp"


const About = () => {
    return (
        <div id='about'>
             <div className='about'>
            <h1>About Me</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={MyImage} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        My name is
                        <br />
                         ....
                         <br />
                         ... 
                         <br />
                         da da bla bla bla :D :D :D
                    </Col>


                </Row>
            </Container>
            </div>   
        </div>
    )
}

export default About
