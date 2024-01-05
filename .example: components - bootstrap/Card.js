import React from 'react';
import Card from 'react-bootstrap/Card';

// Props: locationData{}

class Location extends React.Component {
  render() {
    return (
      <>
        <Card style={{ display: this.props.locationData.show }} bg='secondary' text='light'>
          <Card.Body>
            <Card.Title>{this.props.locationData.display_name}</Card.Title>
            <Card.Text>Latitude: {this.props.locationData.lat}</Card.Text>
            <Card.Text> Longitude: {this.props.locationData.lon}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={this.props.locationData.mapUrl} />
        </Card>
      </>
    );
  }
}

export default Location;
