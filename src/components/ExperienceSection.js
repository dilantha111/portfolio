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
                        <h4> 2020 - present </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> SkoolBag </h3>
                        <p>
                            Currently I work as a team lead at SkoolBag. SkoolBag provides a
                            communication platform for schools in Australia. This platform includes three
                            components. Admin dashboard, a react native mobile app and a web portal.
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> React Native </span>,
                                <span className='tech-slot'> Angular </span>,
                                <span className='tech-slot'> AWS </span>,
                                <span className='tech-slot'> Serverless </span>,
                            </span>
                        </div>

                        <div className='tech-stack-container'>
                            <span className='tech-stack'>
                                <span className='tech-slot'> NodeJS </span>
                            </span>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Senior Software Engineer </h3>
                        <h4> 2020 </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> Different </h3>
                        <p>
                            Different provides a solution for managing properties and leases
                            in Australia. It connects property providers, tenants and service provider
                            together to make everyone's lives better
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> ReactJS </span>,
                                <span className='tech-slot'> AWS </span>,
                                <span className='tech-slot'> Serverless </span>,
                                <span className='tech-slot'> NodeJS </span>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className="left-panel">
                        <h3> Senior Software Engineer </h3>
                        <h4> 2019 - 2020 </h4>
                    </Col>
                    <Col md={7} className="right-panel">
                        <h3> iTelasoft (Pvt) Ltd </h3>
                        <p>
                            Currently I work in product team, where several produts are
                            being developed and maintained for financial domains.
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> NuxtJS </span>,
                                <span className='tech-slot'> VueJS </span>,
                                <span className='tech-slot'> ReactJS </span>,
                                <span className='tech-slot'> AWS </span>
                            </span>
                        </div>
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
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> NodeJs </span>,
                                <span className='tech-slot'> Angular </span>,
                                <span className='tech-slot'> ReactJS </span>,
                                <span className='tech-slot'> AWS </span>
                            </span>
                        </div>
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
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> Angular </span>,
                                <span className='tech-slot'> Java Spring boot </span>
                            </span>
                        </div>
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
                        </p>
                        <div className='tech-stack-container'>
                            Technology Stack: <span className='tech-stack'>
                                <span className='tech-slot'> ReactJS </span>,
                                <span className='tech-slot'> NodeJS </span>,
                                <span className='tech-slot'> Angular </span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ExperienceSection;