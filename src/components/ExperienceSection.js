import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './ExperienceSection.css';

function ExperienceSection() {
    return (
        <Container fluid className='wrapper-experience-section'>
            <Container>
                <h1> Experience </h1>
                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Senior Software Engineer </h3>
                        <h4> 2019 - present </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> iTelasoft (Pvt) Ltd </h3>
                        <p>
                            Currently I work in product team, where several produts are
                            being developed and maintained for financial domains.
                            Technology Stack: NuxtJS, VueJS, ReactJS, AWS, .net core
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Software Engineer </h3>
                        <h4> 2017 - 2019 </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> 99X Technology </h3>
                        <p>
                            At 99X Technology I worked in UpNorway team. UpNorway is a
                            travel agency based in Oslo Norway.
                            Technology stack: NodeJs, Angular, ReactJS, AWS
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Intern Software Engineer </h3>
                        <h4> 2017 </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> Auxenta Inc </h3>
                        <p>
                            I got the chance to work with Dialog Axiata internal teams.
                            Technology stack : Java Spring boot, Angular
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Freelance  Full Stack Developer </h3>
                        <h4> 2014 - present </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> Fiverr </h3>
                        <p>
                            I've been working as a  freelance full stack developer from 2014.
                            I got the chance to work with clients from Fiverr and through people who contacted me directly.
                            Technology Stack : ReactJS, NodeJS, Angular
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ExperienceSection;