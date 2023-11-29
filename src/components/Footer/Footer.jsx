import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer style={{border:"2px solid white",display:"flex",justifyContent:"center"}} className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col
            md={4}
            xs={12}
            className="mb-3 mb-md-0 text-center text-md-start"
          >
            <img src="/images/logoRaw.svg" alt="Logo" className="img-fluid" />
          </Col>

          {/* Email */}
          <Col md={4} xs={12} className="mb-3 mb-md-0 text-center">
            <p className="m-0">ecstasyteam9@gmail.com</p>
          </Col>

          {/* Socials */}
          <Col
            md={4}
            xs={12}
            className="text-center text-md-end"
          >
            <div  className="social-icons">
              <a style={{marginRight:"2.62rem"}} href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.svg" />
              </a>
              <a style={{marginRight:"2.62rem"}} href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.svg" />
              </a>
              <a style={{marginRight:"2.62rem"}} href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.svg" />
              </a>
              <a style={{marginRight:"2.62rem"}} href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
