import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { TiSocialGooglePlus } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

function ContactInfo() {
  return (
    <>
{/* GET IN TOUCH FORM */}
      <Container>

      

        <Row>
          <Col xs={8}>
          <Form className="form">
          <div class="container-getintouch">
              <div class="line3"></div>
              <h1 class="text">GET IN TOUCH</h1>
              <div class="line3"></div>
            </div>
           
      
              <Row>
                <Col xs={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Name" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Subject" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your Message Here" />
              </Form.Group>
              <Button className="submit-button">Submit</Button>{' '}
            </Form>
          </Col>


{/* CONTACT INFO */}

        <Col>
        
        <div class="container-contactinfo">
              <div class="line4"></div>
              <h1 class="text">CONTACT INFO</h1>
              <div class="line4"></div>
            </div>
            <p>
            E-Shopper Inc. <br></br>
            935 W. Webster Ave New Streets Chicago, IL <br></br>
            60614, NY <br></br>
            Newyork USA <br></br>
            Mobile: +2346 17 38 93 <br></br>
            Fax: 1-714-252-0026 <br></br> 
            E-mail: info@eshopper.com
        </p>
        

{/* SOCIAL NETWORKING */}

<div className="socialnetworking">
<div class="container-socialnetworking">
              <div class="line5"></div>
              <h1 class="text">SOCIAL NETWORKING</h1>
              <div class="line5"></div>
            </div>
    <BsFacebook className="socialnetworking-icon1"/>
    <AiFillTwitterCircle className="socialnetworking-icon"/>
    <TiSocialGooglePlus className="socialnetworking-icon"/>
    <TfiYoutube className="socialnetworking-icon"/>
    </div>

        
        </Col>

        </Row>



      </Container>
    </>
  );
}

export default ContactInfo;
