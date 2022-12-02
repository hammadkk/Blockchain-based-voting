import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About E-Voting System</h1>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="feature-box">
            <img src="./images/person.png" className="about-img"></img>
          </Col>
          <Col xs={12} lg={6} className="feature-box box2">
            <p className="about-details">
              Voters can electronically record their safe and private ballots
              using the eVote election technology. Voters may easily cast their
              ballots using its user-friendly interface by following a few
              straightforward steps. We guarantee the legitimacy of the voters
              and the votes they cast, as well as the non-tracking of the votes
              cast. <br />
              The solid architecture of eVote has consistently shown itself to
              be one of the most trustworthy, understandable, and affordable
              electronic voting solutions. It produces an easy-to-use voting
              process that eventually boosts voter participation. What
              distinguishes eVote from its rivals are its auditable,
              user-friendly, secure, and reliable features.
              <br /> Many organisations from a variety of industries have used
              eVote to conduct hassle-free electronic voting with the utmost
              security and integrity. Our strengths include providing excellent
              and prompt customer service, conducting extremely safe and
              reliable elections, and last but not least, having the ability to
              compile results quickly and accurately.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
