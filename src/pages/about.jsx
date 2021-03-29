import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyImage from "../images/laptop1.webp";
import Button from "react-bootstrap/Button";


const About = () => {
    return (
        <div id='about'>
            <div className='about'>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={10} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={MyImage} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded"> 
                        My name is Pooja Poudel.
                        <br />
                        <br />
                        da da da 
                         <br />
                         :D :D :D
                         <br />
                        bla bla bla 
                        <br />
                        <br />
                        <br />
                        </Row>
                        <Row className="d-flex justify-content-center flex-wrap">
                            <div>
                                <a href="#contact">
                                    <Button className="m-2" variant="outline-primary">
                                    Contact
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href="xyz" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                     My Resume
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href="xyz" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                    GitHub
                                    </Button>
                                 </a>
                            </div>
                            <div>
                                <a href="xyz" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                    LinkedIn
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
