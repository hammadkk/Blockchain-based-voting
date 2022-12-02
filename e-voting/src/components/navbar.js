import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbarr() {
  return (
    <Navbar className="mainnav" collapseOnSelect expand="lg" variant="dark">
      <Container className="containerr">
        <Navbar.Brand href="#home" className="logo">
          <img
            alt=""
            src="./images/evote6.png"
            width="100"
            height="100"
            className="d-inline-block align-top logo-img"
          />
          <h4 className="logo-des">eVote</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="#cast-vote">
              Cast-Vote
            </Nav.Link>
            <Nav.Link className="navlink" href="#About us">
              About us
            </Nav.Link>
            <Nav.Link className="navlink" href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="navbar-grid ps-20">
        <Row>
          <Col xs={12} lg={6} className="nav-feature-box1">
            <div class="typewriter">
              <h1 class="typing-erase">Voting Just got Easier.</h1>
            </div>
            {/* <h1>Voting Just Got Easier.</h1> */}
          </Col>
          <Col xs={12} lg={6} className="nav-feature-box2">
            <img src="./images/hand2.png"></img>
          </Col>
        </Row>
      </div>
    </Navbar>
  );
}

export default Navbarr;
