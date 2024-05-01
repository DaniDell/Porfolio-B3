import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import image1 from './assets/DaniDell.png';
import image2 from './assets/TramaApp.png';

function App() {
  return (
    <div className="App">
      <Navbar inverse collapseOnSelect className="mb-4">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Dani Dell Acqua</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Acerca de mí
            </NavItem>
            <NavItem eventKey={2} href="#">
              Portafolio
            </NavItem>
            <NavItem eventKey={3} href="#">
              Contacto
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Grid>
        <Row className="show-grid d-flex align-items-center justify-content-center mb-4">
<Col md={2} className="d-flex justify-content-center align-items-center" style={{ padding: '3rem' }}>
  <img src="/Profile Picture.png" alt="Profile" className="mx-auto d-block" />
</Col>
          <Col md={10} className="d-flex flex-column justify-content-end text-right">
            <h1>Demo web utilizando Bootstrap 3</h1>
            <p>¡Hola! Soy una programadora apasionada por diseñar soluciones accesibles con tecnología.</p>
          </Col>
        </Row>
        <Row className="show-grid d-flex align-items-center justify-content-center mb-4">
          <Col md={6} className="d-flex justify-content-center">
            <img src={image1} alt="Image 1" className="img-responsive" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={image2} alt="Image 2" className="img-responsive" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
