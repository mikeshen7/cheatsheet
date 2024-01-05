import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
      <>
        <Carousel style={{ display: this.props.movieData.show }}>
          {this.props.movieData.movies.map((element, index) => {
            return (
              <Carousel.Item key={index}>
                <Movie
                  element={element}
                  index={index}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </>
    );
  }
}

export default Movies;
