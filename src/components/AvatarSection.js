import React, { useState } from 'react';
import { Row, Container, Col, Image, Button } from 'react-bootstrap';
import { email } from '../data/const';
import './AvatarSection.css';

function AvatarSection() {
    const [showCopied, setShowCopied] = useState(false);

    const handleShowCopyClick = async () => {
        try {
            if (navigator && navigator.clipboard) {
                await navigator.clipboard.writeText(email);
            } else {
                window.clipboardData.setData('Text', email);
            }
            setShowCopied(true);
            setTimeout(() => {
                setShowCopied(false);
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container fluid className='wrapper-avatar-section'>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image className='avatar-image' src="avatar.png" />
                    </Col>
                    <Col md={7} className="description-panel">
                        <h1> Dilantha  </h1>
                        <h2> Senior Software Engineer @<a href='https://www.moqproducts.com.au/skoolbag/' rel="noopener noreferrer" target='_blank'>SkoolBag</a> </h2>
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

                        <div className='email-container-parent'>
                            <Button href={`mailto:${email}`} className="contact-btn" variant="outline-dark">
                                <i className="fas fa-paper-plane"></i> Send me an Email
                            </Button>
                            <div
                                className={showCopied ? 'email-container-child tooltipi top show' : 'email-container-child tooltipi top'}
                                onClick={handleShowCopyClick}
                                data-text="Copied !!!"
                            >
                                {email}
                                <div className='copy-icon-container'>
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="20"
                                        className="octicon octicon-clippy js-clipboard-clippy-icon m-1">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="20" width="20"
                                        className="octicon octicon-check js-clipboard-check-icon color-text-success m-1 d-none">
                                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

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