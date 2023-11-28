import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles.css";
import dress1 from "../img/dress1.jpg";
import dress2 from "../img/dress2.jpg";
import dress3 from "../img/dress3.jpg";
import dress4 from "../img/dress4.jpg";
import dress5 from "../img/dress5.jpg";
import dress6 from "../img/dress6.jpg";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import { AiFillPlusSquare } from "react-icons/ai";
import logo from "../img/logo.png";
import sliderimg1 from "../img/sliderimg1.png";
import sliderimg2 from "../img/sliderimg2.jpg";
import sliderimg3 from "../img/sliderimg3.png";
import Accordion from "react-bootstrap/Accordion";
import { FaShoppingCart } from "react-icons/fa";

function MyCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container>
        <Row className="row-side">
          {/* SIDEBAR */}

          <Col xs={3}>
            <div class="container-category">
              <div class="line1"></div>
              <h1 class="text">CATEGORY</h1>
              <div class="line1"></div>
            </div>

            <Card>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>SPORTSWEAR</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup.Item className="category-names">
                      TRACKSUIT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      T-SHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      ATHLETE
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      SWEATSHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      TIGHTS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      SHORTS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      UNIFORMS
                    </ListGroup.Item>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>MENS</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup.Item className="category-names">
                      SWEATSHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      SHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      T-SHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      {" "}
                      JACKETS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      TROUSERS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      TRACKSUIT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      {" "}
                      SHOES
                    </ListGroup.Item>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>WOMENS</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup.Item className="category-names">
                      SWEATSHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      SHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      T-SHIRT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      CROP TOP
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      DRESS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      {" "}
                      JACKETS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      TROUSERS
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      TRACKSUIT
                    </ListGroup.Item>
                    <ListGroup.Item className="category-names">
                      {" "}
                      SHOES
                    </ListGroup.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ListGroup variant="flush">
                <ListGroup.Item className="category-names">KIDS</ListGroup.Item>
                <ListGroup.Item className="category-names">
                  FASHION
                </ListGroup.Item>
                <ListGroup.Item className="category-names">
                  HOUSEHOLDS
                </ListGroup.Item>
                <ListGroup.Item className="category-names">
                  INTERIORS
                </ListGroup.Item>
                <ListGroup.Item className="category-names">
                  CLOTHING
                </ListGroup.Item>
                <ListGroup.Item className="category-names">BAGS</ListGroup.Item>
                <ListGroup.Item className="category-names">
                  SHOES
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* CARDS */}

          <Col>
            <div class="container-featureditems">
              <div class="line2"></div>
              <h1 class="text">FEATURES ITEMS</h1>
              <div class="line2"></div>
            </div>

            {/* CARD-1 */}

            <Card className="card">
              <Card.Img className="card-img" variant="top" src={dress1} />
              <Card.Body>
                <Card.Title className="card-price">$ 36 </Card.Title>
                <Card.Text className="card-name">Short Flounce Dress</Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>

              <div className="plus-icon-text">
                <Row>
                  <Col xs={6}>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to wishlist</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to compare</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

            {/* CARD-2 */}

            <Card className="card">
              <Card.Img className="card-img" variant="top" src={dress2} />
              <Card.Body>
                <Card.Title className="card-price">$ 58 </Card.Title>
                <Card.Text className="card-name">Short Flounce Dress</Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>

              <div className="plus-icon-text">
                <Row>
                  <Col xs={6}>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to wishlist</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to compare</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

            {/* CARD-3 */}

            <Card className="card">
              <Card.Img className="card-img" variant="top" src={dress3} />
              <Card.Body>
                <Card.Title className="card-price">$ 42</Card.Title>
                <Card.Text className="card-name">Short Flounce Dress</Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>

              <div className="plus-icon-text">
                <Row>
                  <Col xs={6}>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to wishlist</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="plus1">
                      <AiFillPlusSquare className="plus" />{" "}
                      <p className="plus-p"> Add to compare</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          {/* SLIDER */}

          <Carousel activeIndex={index} onSelect={handleSelect} className="c">
            <Carousel.Item>
              <img className="d-block slider-img" src={sliderimg1} />

              <Carousel.Caption className="slider-text">
                <img className="logo2" src={logo}></img>
                <h3 className="carousel-h3">Free E-Commerce Template</h3>
                <p className="carousel-p">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block slider-img" src={sliderimg2} />

              <Carousel.Caption className="slider-text">
                <img className="logo2" src={logo}></img>
                <h3 className="carousel-h3">Free E-Commerce Template</h3>
                <p className="carousel-p">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block slider-img" src={sliderimg3} />

              <Carousel.Caption className="slider-text">
                <img className="logo2" src={logo}></img>
                <h3 className="carousel-h3">Free E-Commerce Template</h3>
                <p className="carousel-p">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default MyCard;
