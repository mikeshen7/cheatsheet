import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Gallery extends React.Component {
  render() {
    return (
      <>
        <Carousel>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/starwars2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Image Title</h3>
              <p>Image description</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/starwars3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Image Title</h3>
              <p>Image description</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/starwars4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Image Title</h3>
              <p>Image description</p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>

      </>
    );
  }
}

export default Gallery;