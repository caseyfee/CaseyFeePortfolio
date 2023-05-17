import React from 'react';
import { Footer } from 'react-bootstrap';
import { Fa } from 'react-bootstrap-icons';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function FooterComp() {
  return (
    <Footer>
      <Container>
        <Row>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem><a href="#">About</a></ListGroupItem>
              <ListGroupItem><a href="#">Contact</a></ListGroupItem>
              <ListGroupItem><a href="#">Privacy Policy</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem><a href="#"><Fa icon="facebook"/></a></ListGroupItem>
              <ListGroupItem><a href="#"><Fa icon="twitter"/></a></ListGroupItem>
              <ListGroupItem><a href="#"><Fa icon="linkedin"/></a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <p class="copyright">Copyright &copy; 2023 Casey Fee</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default FooterComp;