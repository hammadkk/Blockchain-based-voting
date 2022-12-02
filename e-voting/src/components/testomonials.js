import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import customers from "./slider";

function Slide() {
  return (
    <Container fluid className="customers-container">
      <h2 className="customers-container-heading">Voting Options</h2>
      <Carousel className="customers-carousel-container">
        {customers.map((data, i) => (
          <Carousel.Item className="customers-carousel-item">
            <Image
              className="d-block customers-carousel-img"
              src={data.link}
              alt={data.name}
            />
            <Carousel.Caption className="customers-carousel-caption">
              <h5 className="customers-caption-title">{data.name}</h5>
              <p>
                <q>{data.content}</q>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slide;
//  <Carousel.Item interval={2000}>
//         <img
//           className="d-block mw-25 test-img"
//           src="./images/pti.jpg"
//           alt="First slide"
//         />

//         <Carousel.Caption className="slider-info">
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block mw-25 test-img"
//           src="./images/pmln.jpeg"
//           alt="Second slide"
//         />
//         <Carousel.Caption className="slider-info">
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block mw-25 test-img"
//           src="./images/1.jpeg"
//           alt="Third slide"
//         />{" "}
//         <Carousel.Caption className="slider-info">
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block mw-25 test-img"
//           src="./images/2.jpeg"
//           alt="Third slide"
//         />{" "}
//         <Carousel.Caption className="slider-info">
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block mw-25 test-img"
//           src="./images/3.jpeg"
//           alt="Third slide"
//         />
//       </Carousel.Item>
