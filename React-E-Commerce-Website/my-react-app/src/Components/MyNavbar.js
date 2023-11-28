import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../img/logo.png";
import "../styles.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BsLockFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function MyNavbar() {
  return (
    <>
      {/* En üstteki kutu */}

      <Container>
        <div className="rectangle">
          <div className="left">
            <BsTelephone className="rectangle-icon1" />{" "}
            <p className="rectangle-p"> +2 95 01 88 821</p>
            <AiOutlineMail className="rectangle-icon1" />{" "}
            <p className="rectangle-p"> info@domain.com</p>
          </div>

          <div className="right">
            <BsFacebook className="rectangle-icon" />
            <AiFillTwitterCircle className="rectangle-icon" />
            <BsLinkedin className="rectangle-icon" />
            <TfiWorld className="rectangle-icon" />
            <TiSocialGooglePlus className="rectangle-icon" />
          </div>
        </div>
      </Container>

      {/* Logo ve usa-dollar kısım */}
      <Container>
        <Navbar expand="lg" className="navbar1">
          <Container>
            <Navbar.Brand href="/home">
              <img className="logo" src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  className="usa"
                  title="USA"
                  id="basic-nav-dropdown"
                ></NavDropdown>
                <NavDropdown
                  className="usa"
                  title="DOLLAR"
                  id="basic-nav-dropdown"
                ></NavDropdown>
              </Nav>
            </Navbar.Collapse>

            {/* Navbar sağdaki icon içeren kısım */}

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="navbar-righticon">
                <BsFillPersonFill />{" "}
                <a className="navbar-rightname" href="#login">
                  Account
                </a>
              </Navbar.Text>

              <Navbar.Text className="navbar-righticon">
                <BiCurrentLocation />{" "}
                <a className="navbar-rightname" href="/wishlist">
                  Wishlist
                </a>
              </Navbar.Text>

              <Navbar.Text className="navbar-righticon">
                <BiCurrentLocation />{" "}
                <a className="navbar-rightname" href="#login">
                  Checkout
                </a>
              </Navbar.Text>

              <Navbar.Text className="navbar-righticon">
                <FaShoppingCart />{" "}
                <a className="navbar-rightname" href="/cart">
                  Cart
                </a>
              </Navbar.Text>

              <Navbar.Text className="navbar-righticon">
                <BsLockFill />{" "}
                <a className="navbar-rightname" href="/login">
                  Login
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <hr></hr>

        {/* İkinci navbar */}

        <Navbar expand="lg" className="navbar2">
          <Container>
            <Navbar.Brand className="navbarhome" href="/home">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* Dropdown-1 */}

                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Male</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Female</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Kid</NavDropdown.Item>
                </NavDropdown>

                {/* Dropdown-1 */}

                <NavDropdown title="Blog" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Fashion</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Collections
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="">404</Nav.Link>

                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              {/* Search box */}

              <div class="search-container">
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search"
                ></input>
                <div className="searchicon">
                  <BsSearch className="searchicon1" />
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default MyNavbar;
