import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAssistiveListeningSystems,
  faCircleCheck,
  faLock,
  faLaptop,
  faLocationPinLock,
  faHandsClapping,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <Container className="feature-container">
      <Row>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon icon={faCircleCheck} className="icon" />
          <h3 class="feature-title">Easy to use.</h3>
          <p>So easy to use, accessible by everyone.</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon icon={faLocationPinLock} className="icon" />
          <h3 class="feature-title"> Privacy & integrity.</h3>
          <p>Privacy and confidentiality our number 1 priority.</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon icon={faLaptop} className="icon" />
          <h3 class="feature-title">Compatible.</h3>
          <p>Works seamlessly on all devices.</p>
        </Col>

        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon
            icon={faAssistiveListeningSystems}
            className="icon"
          />
          <h3 class="feature-title">Automated system.</h3>
          <p>No Error-prone manual processes.</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <h3 class="feature-title">Elite Security.</h3>
          <p>Can't just break in.</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <FontAwesomeIcon icon={faHandsClapping} className="icon" />
          <h3 class="feature-title">Friendly Interface.</h3>
          <p>It renders a smooth and easy-to-use voter interface.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
