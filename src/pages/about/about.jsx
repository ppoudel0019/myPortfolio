import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImage from "../../images/me.jpg";
import Button from "react-bootstrap/Button";
import "./about.css"

const About = () => {
    return (
        <div id='about'>
            <div className='about'>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container fluid>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={10} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile " alt="profile" src={MyImage} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded"> 
                     

Hello there! <br /><br />
My name is Pooja Poudel.
 I am a Computer Science student at Old Dominion University. 
 My interests lie primarily in the field of software development and machine learning. I love learning, problem solving and challenging myself. <br />  <br />   
Outside of tech, I love to learn and talk about cultural anthropology. I can speak and write fluent Nepali, English and Hindi. 

<br /> <br />
                        </Row>
                        <Row className="d-flex justify-content-center flex-wrap">
       
                            <div>
                                <a href="https://drive.google.com/file/d/1Cy_X9ibQTT-Ob12MohNWZgO1WqxfNwrQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                     My Resume
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/ppoudel0019" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                    GitHub
                                    </Button>
                                 </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/pooja-poudel-37a48a173/" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                    LinkedIn
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href="#contact">
                                    <Button className="m-2" variant="outline-primary">
                                    Contact
                                    </Button>
                                </a>
                            </div>
                        
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>   
        </div>
    )
}

export default About
