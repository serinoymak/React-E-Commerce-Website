import { Button, Col, Container, Row } from "reactstrap";
import React, { useState } from "react";
import dress1 from "../img/dress1.jpg";
import dress2 from "../img/dress2.jpg";
import dress3 from "../img/dress3.jpg";
import dress4 from "../img/dress4.jpg";
import dress5 from "../img/dress5.jpg";
import Form from "react-bootstrap/Form";

function CartContent() {
  const [item1, setItem1] = useState(36);
  const [count1, setCount1] = useState(0);
  const [item2, setItem2] = useState(58);
  const [count2, setCount2] = useState(0);
  const [item3, setItem3] = useState(42);
  const [count3, setCount3] = useState(0);
  const [item4, setItem4] = useState(48);
  const [count4, setCount4] = useState(0);
  const [item5, setItem5] = useState(53);
  const [count5, setCount5] = useState(0);
  const [deleted1, setDeleted1] = useState(false);
  const [deleted2, setDeleted2] = useState(false);
  const [deleted3, setDeleted3] = useState(false);
  const [deleted4, setDeleted4] = useState(false);
  const [deleted5, setDeleted5] = useState(false);

  const arttır1 = () => {
    setCount1(count1 + 1);
  };
  const eksilt1 = () => {
    setCount1(count1 - 1);
  };

  const arttır2 = () => {
    setCount2(count2 + 1);
  };
  const eksilt2 = () => {
    setCount2(count2 - 1);
  };

  const arttır3 = () => {
    setCount3(count3 + 1);
  };
  const eksilt3 = () => {
    setCount3(count3 - 1);
  };

  const arttır4 = () => {
    setCount4(count4 + 1);
  };
  const eksilt4 = () => {
    setCount4(count4 - 1);
  };

  const arttır5 = () => {
    setCount5(count5 + 1);
  };
  const eksilt5 = () => {
    setCount5(count5 - 1);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {/* RECTANGLE */}
      <Container className="rectangle-top">
        <p className="item-name">Item</p>
        <p className="price-name">Price</p>
        <p className="quantity-name">Quantity</p>
        <p className="total-name">Total</p>
      </Container>
      {/* ITEM-1 */}

      {!deleted1 ? (
        <Container className="item1">
          <img className="dressimg" src={dress1}></img>

          <p className="item-p">Short Flounce Dress</p>

          <h4 className="price"> $36 </h4>

          <Button
            className="eksilt"
            onClick={() => {
              if (count1 > 0) {
                eksilt1();
              }
            }}
          >
            -
          </Button>

          <Button className="sayi">{count1}</Button>
          <Button className="arttır" onClick={() => arttır1()}>
            +
          </Button>

          <h1 className="totalprice">{item1 * count1}</h1>

          {/* ÇARPI */}
          <Button onClick={() => setDeleted1(true)} className="carpi">
            {" "}
            <p className="x">x </p>
          </Button>
        </Container>
      ) : null}

      {/* ITEM-2 */}

      {!deleted2 ? (
        <Container className="item1">
          <img className="dressimg" src={dress2}></img>

          <p className="item-p">Black and White T-Shirt</p>

          <h4 className="price2"> $58 </h4>

          <Button
            className="eksilt"
            onClick={() => {
              if (count2 > 0) {
                eksilt2();
              }
            }}
          >
            -
          </Button>

          <Button className="sayi">{count2}</Button>
          <Button className="arttır" onClick={() => arttır2()}>
            +
          </Button>

          <h1 className="totalprice">{item2 * count2}</h1>
          {/* ÇARPI */}
          <Button onClick={() => setDeleted2(true)} className="carpi">
            {" "}
            <p className="x">x </p>
          </Button>
        </Container>
      ) : null}

      {/* ITEM-3 */}
      {!deleted3 ? (
        <Container className="item1">
          <img className="dressimg" src={dress3}></img>

          <p className="item-p">White Casual Sports Shoes</p>

          <h4 className="price3"> $42 </h4>

          <Button
            className="eksilt"
            onClick={() => {
              if (count3 > 0) {
                eksilt3();
              }
            }}
          >
            -
          </Button>

          <Button className="sayi">{count3}</Button>
          <Button className="arttır" onClick={() => arttır3()}>
            +
          </Button>

          <h1 className="totalprice">{item3 * count3}</h1>
          {/* ÇARPI */}
          <Button onClick={() => setDeleted3(true)} className="carpi">
            {" "}
            <p className="x">x </p>
          </Button>
        </Container>
      ) : null}

      {/* ITEM-4 */}
      {!deleted4 ? (
        <Container className="item1">
          <img className="dressimg" src={dress4}></img>

          <p className="item-p">Blue Shoulder Detailed Dress</p>

          <h4 className="price4"> $48 </h4>

          <Button
            className="eksilt"
            onClick={() => {
              if (count4 > 0) {
                eksilt4();
              }
            }}
          >
            -
          </Button>

          <Button className="sayi">{count4}</Button>
          <Button className="arttır" onClick={() => arttır4()}>
            +
          </Button>

          <h1 className="totalprice">{item4 * count4}</h1>
          {/* ÇARPI */}
          <Button onClick={() => setDeleted4(true)} className="carpi">
            {" "}
            <p className="x">x </p>
          </Button>
        </Container>
      ) : null}

      {/* ITEM-5 */}
      {!deleted5 ? (
        <Container className="item1">
          <img className="dressimg" src={dress5}></img>

          <p className="item-p">Wide Leg Light Color Jeans</p>

          <h4 className="price5"> $53 </h4>

          <Button
            className="eksilt"
            onClick={() => {
              if (count5 > 0) {
                eksilt5();
              }
            }}
          >
            -
          </Button>

          <Button className="sayi">{count5}</Button>
          <Button className="arttır" onClick={() => arttır5()}>
            +
          </Button>

          <h1 className="totalprice">{item5 * count5}</h1>
          {/* ÇARPI */}
          <Button onClick={() => setDeleted5(true)} className="carpi">
            {" "}
            <p className="x">x </p>
          </Button>
        </Container>
      ) : null}

      {/* YAZI  */}

      <Container className="writing">
        <h4>What would you like to do next?</h4>
        <p>
          Choose if you have a discount code or reward points you want to use or
          would like to estimate your delivery cost.
        </p>
      </Container>

      {/* TABLOLAR */}
      <Container className="tables">
        <Row>
          <Col xs={1}></Col>

          <Col xs={4}>
            {/* RADIO */}

            <Form className="m-5">
              <Form.Check
                type="radio"
                label="Use Coupon Code"
                name="options"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="mb-3"
              />
              <Form.Check
                type="radio"
                label="Use Gift Voucher"
                name="options"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="mb-3"
              />
              <Form.Check
                type="radio"
                label="Estimate Shipping & Taxes"
                name="options"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
            </Form>

            {/* ADRES */}

            <Row className="m-5">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Country:</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>United States</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Region/State:</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Select</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <div className="buttons">
              <Button className="buttons1" type="submit">
                Get Quotes
              </Button>

              <Button className="buttons2" type="submit">
                Continue
              </Button>
            </div>
          </Col>

          <Col xs={2}></Col>

          {/* ÖDEMELER */}

          <Col className="table2" xs={4}>
            <div className="rectangle3">
              <p className="m-3">Cart Sub Total </p>
              <p className="cartsubtotal">
                {" "}
                ${" "}
                {item1 * count1 +
                  item2 * count2 +
                  item3 * count3 +
                  item4 * count4 +
                  item5 * count5}{" "}
              </p>
            </div>

            <div className="rectangle3">
              <p className="m-3">Eco Tax </p>
              <p className="cartsubtotal1"> $ 2 </p>
            </div>

            <div className="rectangle3">
              <p className="m-3">Shipping Cost </p>
              <p className="cartsubtotal"> Free </p>
            </div>

            <div className="rectangle3">
              <p className="m-3">Total </p>
              <p className="cartsubtotal2">
                {" "}
                ${" "}
                {item1 * count1 +
                  item2 * count2 +
                  item3 * count3 +
                  item4 * count4 +
                  item5 * count5 +
                  2}{" "}
              </p>
            </div>

            <div className="buttons mt-4">
              <Button className="buttons1" type="submit">
                Update
              </Button>

              <Button className="buttons2" type="submit">
                Check
              </Button>
            </div>
          </Col>

          <Col xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default CartContent;
