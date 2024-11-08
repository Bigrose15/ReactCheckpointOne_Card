import React from "react";
import {
  Card,
  Button,
  Container,
  Form,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./index.css";

const firstName = "Lawrence"; // Providing my name as a variable

const App = () => {
  return (
    <div style={{ backgroundColor: "#f0f8ff" }}>
      {/* Set body background color */}

      {/* Navbar */}
      <Navbar expand="lg" className="bg-info">
        <Container fluid>
          <Navbar.Brand href="#">Product Card</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ space: "10em" }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Local</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Foreign Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Place Order</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Products"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          padding: "",
          marginTop: "1rem",
        }}
      >
        {/* Card displaying the product */}
        <Card
          style={{
            width: "18rem",
            border: "2px solid #5bc0de",
            borderRadius: "3%",
          }}
          className="card-hover" // for hover effect
        >
          <Card.Body>
            <Image />
            <Name />
            <Price />
            <Description />
            <Button variant="info">Add to Cart</Button>
          </Card.Body>
        </Card>

        {/* Greeting message */}
        <div
          className="user-card"
          style={{
            marginTop: "15px",
            textAlign: "center",
            border: "2px solid #5bc0de",
            borderRadius: "5%",
            paddingRight: "1em",
            paddingLeft: "1em",
          }}
        >
          <h4 className="userName">
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </h4>
          {firstName && (
            <img
              src="/LawrenceUgo.png" // User image
              alt="user"
              style={{
                borderRadius: "50%", // Makes the image round
                marginTop: "0px",
                width: "50px",
                height: "50px",
                marginBottom: "10px",
              }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
