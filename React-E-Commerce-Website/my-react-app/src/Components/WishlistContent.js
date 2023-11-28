import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import wishlistimg1 from "../img/wishlistimg1.jpeg";
import wishlistimg2 from "../img/wishlistimg2.jpeg";
import Accordion from "react-bootstrap/Accordion";
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
import dress7 from "../img/dress7.jpeg";
import dress8 from "../img/dress8.jpg";
import dress9 from "../img/dress9.jpg";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";

function WishlistContent() {
  const [itemCount, setItemCount] = useState(0);
  const arttır = () => {
    setItemCount(itemCount + 1);
  };
  return (
    <>
      <Container>
        <img className="wishlistimg1" src={wishlistimg1}></img>

        {/* SIDE BAR */}

        <Row>
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

            {/* SIDE BAR ALTINDAKİ RESİM */}
            <img className="wishlistimg2" src={wishlistimg2}></img>
          </Col>

          {/* FEATURES ITEMS */}
          <Col>
            <div class="container-featureditems">
              <div class="line2"></div>
              <h1 class="text">FEATURES ITEMS</h1>
              <div class="line2"></div>
            </div>

            {/* CARD-1 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress1} />
              <Card.Body>
                <Card.Title className="card-price">$ 36</Card.Title>
                <Card.Text className="card-name">Short Flounce Dress</Card.Text>
                <Button
                  onClick={() => arttır()}
                  className="btn"
                  variant="primary"
                >
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-2 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress2} />
              <Card.Body>
                <Card.Title className="card-price">$ 58</Card.Title>
                <Card.Text className="card-name">
                  Black and White T-Shirt
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-3 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress3} />
              <Card.Body>
                <Card.Title className="card-price">$ 42</Card.Title>
                <Card.Text className="card-name">
                  White Casual Sports Shoes
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-4 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress4} />
              <Card.Body>
                <Card.Title className="card-price">$ 48</Card.Title>
                <Card.Text className="card-name">
                  Blue Shoulder Detailed Dress
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-5 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress5} />
              <Card.Body>
                <Card.Title className="card-price">$ 53</Card.Title>
                <Card.Text className="card-name">
                  Wide Leg Light Color Jeans
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-6 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress6} />
              <Card.Body>
                <Card.Title className="card-price">$ 28</Card.Title>
                <Card.Text className="card-name">
                  Red Polka Dot Summer Dress
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-7 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress7} />
              <Card.Body>
                <Card.Title className="card-price">$ 44</Card.Title>
                <Card.Text className="card-name">
                  Black Asymmetrical Evening Dress
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-8 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress8} />
              <Card.Body>
                <Card.Title className="card-price">$ 62</Card.Title>
                <Card.Text className="card-name">
                  Gray Pocket Detailed T-Shirt
                </Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>

            {/* CARD-9 */}

            <Card className="card">
              <Card.Img className="card-img1" variant="top" src={dress9} />
              <Card.Body>
                <Card.Title className="card-price">$ 75</Card.Title>
                <Card.Text className="card-name">Beige Men's Jacket</Card.Text>
                <Button className="btn" variant="primary">
                  <FaShoppingCart />
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WishlistContent;
