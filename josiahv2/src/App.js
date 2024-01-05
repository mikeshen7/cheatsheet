import './App.css';
import Header from './Header';
// import Header2 from './Header2';
import Services from './Services';
import ServicesCards from './ServicesCards';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>

              <main className="custom-main">

                <Routes>

                  <Route
                    exact path="/"
                    element={<Services />}
                  >
                  </Route>

                  <Route
                    exact path="/Services"
                    element={<Services />}
                  >
                  </Route>

                  <Route
                    exact path="/ServicesCards"
                    element={<ServicesCards />}
                  >
                  </Route>

                  <Route
                    exact path="/Gallery"
                    element={<Gallery />}
                  >
                  </Route>

                  <Route
                    exact path="/Contact"
                    element={<Contact />}
                  >
                  </Route>

                </Routes>
              </main>
            </Col>
          </Row>

        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
