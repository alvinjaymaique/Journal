import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Container fluid className='fixed-left'>
      <Row>
        {/* Sidebar Column */}
        <Col
          xs={collapsed ? 1 : 3}
          className={`bg-dark text-white vh-100 transition-all ${collapsed ? 'text-center' : ''}`}
        >
          <Button
            variant="light"
            size="sm"
            className="mt-3"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? '>' : '<'}
          </Button>
          <Nav className="flex-column p-3">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#services" className="text-white">Services</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Col>

        {/* Main Content Column */}
        {/* <Col xs={collapsed ? 11 : 9} className="p-4" style={{marginTop:'100px'}}>
          <h1>Main Content</h1>
          <p>This is where your main content goes.</p>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Sidebar;
