import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  return (
    <Carousel className='mt-1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/500×400/?pizza"
          alt="First slide"
          style={{maxHeight:"400px"}}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/500×400/?burger"
          alt="Second slide"
          style={{maxHeight:"400px"}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/500×400/?noodles"
          alt="Third slide"
          style={{maxHeight:"400px"}}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Carousels