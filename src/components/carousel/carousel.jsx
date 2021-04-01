import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'
import img1 from '../../images/background5.JPG'

import ScrollDown from "../scrolldown/scrolldown";

const MyCarousel = () => {
    return (
        <div>
            <Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  
     
 
  
</Carousel>
<ScrollDown />
            
        </div>
    )
}

export default MyCarousel
