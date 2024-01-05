import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ServicesCards extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} sm = {1} md={2} lg={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 4</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 5</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 6</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 7</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Darthvader2.png" />
                <Card.Body>
                  <Card.Title>House Wash 8</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Keep Your Home Looking Perfect With Our Full Home Power Washing Service</Card.Subtitle>
                  <Card.Text>
                    Over time, your home’s exterior can become dirty and have potentially harmful mold and algae buildup. To fix this issue, it’s essential to invest in house pressure washing to protect your investment. We perform power washing on stone, concrete, wood, brick and other popular home materials.
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>









      </>
    );
  }
}

export default ServicesCards;