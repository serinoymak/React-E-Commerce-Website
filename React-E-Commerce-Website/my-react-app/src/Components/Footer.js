import React from "react";
import Row from "react-bootstrap/esm/Row";
import "../styles.css";
import Col from "react-bootstrap/Col";
import eshopper from "../img/e-shopper.png";
import footerimg1 from "../img/footerimg1.jpg";
import footerimg2 from "../img/footerimg2.jpg";
import footerimg3 from "../img/footerimg3.jpg";
import footerimg4 from "../img/footerimg4.jpg";
import map from "../img/map.png";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Container from "react-bootstrap/esm/Container";
import footerimg from "../img/footerimg.jpeg";

function Footer() {
  return (
    <>
      <Container>
        <footer className="footer">
          {/* FOOTER ÜSTTEKİ */}

          <div className="footer-1">
            <Row>
              <Col xs={1}>
                <img className="eshopper" src={eshopper}></img>
                <p className="footer-p1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Col>

              <Col xs={2}>
                <img className="footerimg1" src={footerimg1}></img>
                <h4 className="footer-h4">Circle of Hands</h4>
                <p className="footer-p">24 DEC 2014</p>
              </Col>

              <Col xs={2}>
                <img className="footerimg1" src={footerimg2}></img>
                <h4 className="footer-h4">Circle of Hands</h4>
                <p className="footer-p">24 DEC 2014</p>
              </Col>

              <Col xs={2}>
                <img className="footerimg1" src={footerimg3}></img>
                <h4 className="footer-h4">Circle of Hands</h4>
                <p className="footer-p">24 DEC 2014</p>
              </Col>

              <Col xs={2}>
                <img className="footerimg1" src={footerimg4}></img>
                <h4 className="footer-h4">Circle of Hands</h4>
                <p className="footer-p">24 DEC 2014</p>
              </Col>

              <Col xs={3}>
                <img className="footerimg-map" src={map}></img>
              </Col>
            </Row>

            <hr></hr>

            {/* FOOTER ALTTAKİ */}

            <Row>
              <Col xs={2}>
                <h3 className="footer-h3">SERVICE</h3>
                <p className="footer-p2"> Online Help</p>
                <p className="footer-p2"> Contact Us</p>
                <p className="footer-p2"> Order Status</p>
                <p className="footer-p2"> Change Location</p>
                <p className="footer-p2"> FAQ's</p>
              </Col>

              <Col xs={2}>
                <h3 className="footer-h3">QUOCK SHOP</h3>
                <p className="footer-p2"> T-shirt</p>
                <p className="footer-p2"> Mens</p>
                <p className="footer-p2"> Womens</p>
                <p className="footer-p2"> Gift Cards</p>
                <p className="footer-p2"> Shoes</p>
              </Col>

              <Col xs={2}>
                <h3 className="footer-h3">POLICIES</h3>
                <p className="footer-p2"> Terms of Use</p>
                <p className="footer-p2"> Privacy Policy</p>
                <p className="footer-p2"> Refund Policy</p>
                <p className="footer-p2"> Billing System</p>
                <p className="footer-p2"> Ticket System</p>
              </Col>

              <Col xs={2}>
                <h3 className="footer-h3">ABOUT SHOPPER</h3>
                <p className="footer-p2"> Company Information</p>
                <p className="footer-p2"> Careers</p>
                <p className="footer-p2"> Store Location</p>
                <p className="footer-p2"> Affillate Program</p>
                <p className="footer-p2"> Copyright</p>
              </Col>

              <Col xs={4}>
                <h3 className="footer-h3">ABOUT SHOPPER</h3>

                <input
                  className="mailbox"
                  type="text"
                  placeholder="Your email address"
                />

                <BsFillArrowRightSquareFill className="footer-icon" />
                <p className="footer-p2">
                  Get the most recent updates from our site and be updated your
                  self...
                </p>
              </Col>
            </Row>
          </div>
        </footer>
      </Container>

      {/* En alttaki kutu */}

      <Container>
        <div className="rectangle2">
          <div className="left2">
            <p className="rectangle-p2">
              {" "}
              Copyright <AiOutlineCopyrightCircle /> 2013 E-SHOPPER Inc. All
              rights reserved.{" "}
            </p>
          </div>

          <div className="right2">
            <p className="rectangle-p2"> Designed by</p>
            <p className="rectangle-p3"> Themum</p>
            <img className="footerimg" src={footerimg}></img>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
