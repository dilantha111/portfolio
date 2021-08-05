import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container className='footer-container' fluid>
      <footer> <small>&copy; Copyright { currentYear }, Dilantha Wijayarathne </small> </footer>
    </Container>
  );
}

export default Footer;