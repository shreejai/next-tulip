'use client'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import img1 from '../assets/images/img1.jpeg';

const bgStyle = {
  height: '90vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const CarouselComponent = () => {
  return (
    <Carousel id='heroSlider'>
      {/* <Carousel.Item className="bgStyle 123" style={{ height: '100vh', backgroundImage: `url(${img1.src})`}}> */}
      <Carousel.Item className="bgStyle" style={{ backgroundImage: `url(${img1.src})`}}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bgStyle" style={{ backgroundImage: `url(${img1.src})`}}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bgStyle" style={{ backgroundImage: `url(${img1.src})`}}>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
