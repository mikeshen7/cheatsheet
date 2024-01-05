import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    return (
      <>
        <img
          src={this.props.element.image_url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.element.title}</h3>
          <p>Released on {this.props.element.released_on}</p>
          <p>Average Votes: {this.props.element.average_votes}</p>
          <p>Total Votes: {this.props.element.total_votes}</p>
          <p>Popularity: {this.props.element.popularity}</p>
          <p>{this.props.element.description}</p>
        </Carousel.Caption>
      </>
    );
  }
}

export default Movie;
