import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='title'>Let's be internet friends.</h1>
        <Container className='contact-container'>
          <Row className='mt-5'>
            <Col xs='1'>
              <div className='contact-icon d-flex justify-content-center align-items-center'>
                <a href='https://www.linkedin.com/in/kait-van'><i className="fab fa-linkedin-in icon fa-2x"></i></a>
              </div>
            </Col>
            <Col className='d-flex align-items-center'>Connect on LinkedIn</Col>
          </Row>
          <Row className='mt-3'>
            <Col xs='1'>
              <div className='contact-icon d-flex justify-content-center align-items-center'>
                <a href='https://github.com/kaitvan'><i className="fab fa-github icon fa-2x"></i></a>
              </div>
            </Col>
            <Col className='d-flex align-items-center'>Check out my work on GitHub</Col>
          </Row>
          <Row className='mt-3'>
            <Col xs='1'>
              <div className='contact-icon d-flex justify-content-center align-items-center'>
                <a href='mailto:kaitlyn.vanhook@gmail.com'><i className="far fa-envelope icon fa-2x"></i></a>
              </div>
            </Col>
            <Col className='d-flex align-items-center'>Send me an Email</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
