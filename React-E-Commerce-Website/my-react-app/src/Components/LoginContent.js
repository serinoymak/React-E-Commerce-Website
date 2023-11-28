import React from "react";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function LoginContent() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1}></Col>

          {/* LOGIN FORM */}

          <Col xs={4}>
            <Form className="loginform">
              <p className="rectangle-p">Login to your account</p>

              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3 rectangle-p"
                
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="label rectangle-p"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3 rectangle-p"
                
              >
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  className="label rectangle-p"
                />
              </FloatingLabel>

              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Keep me signed in`}
                  />
                </div>
              ))}

              <button className="btn-login ">Login</button>
            </Form>
          </Col>

          {/* OR CIRCLE */}

          <Col xs={2}>
            <div className="circle">OR</div>
          </Col>

          {/* SIGNUP FORM */}

          <Col xs={4}>
            <Form className="loginform">
              <p className="rectangle-p">New User Signup!</p>

              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3 rectangle-p"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="label"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3 rectangle-p"
              >
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  className="label"
                />
              </FloatingLabel>
              
              <FloatingLabel
                controlId="floatingInput"
                label="password"
                className="mb-3 rectangle-p"
              >
                <Form.Control
                  type="text"
                  placeholder="Password"
                  className="label"
                />
              </FloatingLabel>

              <button className="btn-login">Signup</button>
            </Form>
          </Col>

          <Col xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginContent;
