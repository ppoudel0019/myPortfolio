import React from 'react'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import './projects.css'

function MenuItems({menuItem}) {
    return (
  <div className="projects">{
    menuItem.map((item)=>{
            return   <div className="project" key={item.id}>
                <Card style={{width: "18rem"}} >
             
                     <Image className="profile justify-content-end" alt="project" src={item.image} thumbnail fluid />
                     <h5  className=" text-center"> {item.title}  </h5>
                            <div className="image-style1">
                                 <div>  <Button variant="dark" href={item.link1}>{item.icon1}</Button></div>    
                                 {item.link2 ? <div><Button variant="dark"href={item.link2}>{item.icon2}</Button> </div> : <> </>}   
                    </div>  
                        
               
               <Accordion>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main">
                     <div className="image-style1">
                    <Button variant="outline-dark"on  >Project Details</Button>
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>Description:</strong> {item.description}
                      <br />
                      <strong>Tech used:</strong>   {item.techused} 
                      </Card.Body>
                    </Accordion.Collapse>
                    </Accordion>
                  </Card>

               </div>
                })
            }
        </div>
    )
}

export default MenuItems;