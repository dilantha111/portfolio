import React from 'react';
import { Row, Container, Col, Image, Button } from 'react-bootstrap';
import './AvatarSection.css';

function AvatarSection() {
    return (
        <Container fluid className='wrapper-avatar-section'>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image className='avatar-image' src="avatar.png" />
                    </Col>
                    <Col md={7} className="description-panel">
                        <h1> Dilantha  </h1>
                        <h2> Senior Software Engineer @<a href='https://www.moqproducts.com.au/skoolbag/' target='_blank'>SkoolBag</a> </h2>
                        <h3>
                            <i className="fab fa-node-js"></i> NodeJS | <i className="fab fa-react"></i> ReactJS | <i className="fab fa-aws"></i> AWS
                        </h3>
                        <h3>
                            <i className="fab fa-angular"></i> Angular | <i className="fab fa-react"></i> React Native
                        </h3>
                        <p>
                            Hi I am Dilantha. A Full Stack Developer with more than 4 years of experience in building software.
                            I am passionated in cloud computing, front end development, developing backends and serverless solutions.
                        </p>

                        <Button href="mailto:dilantha.prasanjith111@gmail.com" className="contact-btn" variant="outline-dark">
                            <i className="fas fa-paper-plane"></i> Send me an Email
                        </Button>

                    </Col>
                </Row>
                <Row className='findme-icon-container'>
                    <Col xs={3} sm={2}>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dilantha111"> <i className="fab fa-github"></i> </a>
                    </Col>
                    <Col xs={3} sm={2}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dilantha-prasanjith-9592188a/"> <i className="fab fa-linkedin"></i> </a>
                    </Col>
                    <Col xs={3} sm={2}>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dilanthaw111"> <i className="fab fa-twitter"></i> </a>
                    </Col>
                    <Col xs={3} sm={2}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dilantha.prasanjith.96"> <i className="fab fa-facebook-square"></i> </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AvatarSection;