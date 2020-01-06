import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';

function AvatarSection() {
    return (
        <Container fluid className='wrapper-avatar-section'>
            <Container>
                <Row>
                    <Col md={4}>
                        <Image src="avatar.png" thumbnail />
                    </Col>
                    <Col md={8} className="description-panel">
                        <h1> Dilantha  </h1>
                        <h2> Full Stack Developer </h2>
                        <h3>
                            <i className="fab fa-node-js"></i> NodeJS | <i className="fab fa-react"></i> ReactJS | <i class="fab fa-vuejs"></i> VueJS | <i className="fab fa-angular"></i> Angular | <i className="fab fa-aws"></i> AWS
                        </h3>
                        <h3 className='social-links'>
                            Find me on :
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dilantha111"> <i className="fab fa-github"></i> </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dilantha-prasanjith-9592188a/"> <i className="fab fa-linkedin"></i> </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dilanthaw111"> <i className="fab fa-twitter"></i> </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dilantha.prasanjith.96"> <i className="fab fa-facebook-square"></i> </a>
                        </h3>
                        <p>
                            Code for a living and for a hobby | Life is just a flat arrow function with only lexical scope
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AvatarSection;