import React from 'react'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import './projects.css'

function MenuItems({menuItem}) {
    return (
  <div>
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-style1">
                        <Accordion>
                  <Card>
                     
                            <Image className="profile justify-content-end" alt="project" src={item.image} thumbnail fluid />
                        
                            <ul className="image-style1">
                                
                 
                                    <Button href={item.link1}>{item.icon1}</Button>
                                    <Button href={item.link2}>{item.icon2}</Button>
                                
                            </ul>
                      
                        <h5>
                            {item.title}
                        </h5>
                        <div className="d-flex justify-content-between flex-column mt-1">
               
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                    <Button >Project Details</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>Description:</strong> {item.title}
                      <br />
                      <strong>Tech used:</strong>    
                      </Card.Body>
                    </Accordion.Collapse>
                    </div>
                  </Card>
                </Accordion>
               
                </div>
                </div>
           
                })
            }
        </div>
    )
}

export default MenuItems;