import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/ao-logo6.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-body text-center"> {/* Center align the social icons */}
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/boatman-27"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/demzaya1bs"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/adham-osman-662529233/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ao.27.o1/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright text-center">
          <img src={logo} alt="brand" style={{ maxWidth: '15%', height: 'auto' }} />
        </Col>

        
      </Row>
    </Container>
  );  
}

export default Footer;
