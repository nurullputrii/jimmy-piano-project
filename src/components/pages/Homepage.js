import React, { Component } from "react";
import CarouselPage from "./homepageCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Test from "./pdfTest";
import Header from "../headerComponent/header";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Jimmy Chan World</h1>
        <p className="welcome-text">
          Hello this will be the welcoming message for the visitor of the page
        </p>
        <CarouselPage />
        <hr />
        {/* making grid layout left and right for equal amount */}
        <div className="homepage-2">
          <Container>
            <Row>
              <Col>
                <div className="text-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Diam volutpat commodo sed egestas egestas. Ac tortor vitae
                  purus faucibus. Ut consequat semper viverra nam libero justo
                  laoreet sit. Viverra tellus in hac habitasse platea dictumst
                  vestibulum rhoncus est.
                  <div className="button-about-us">
                    <Button variant="outline-dark" size="lg">
                      About Us
                    </Button>
                  </div>
                </div>
              </Col>
              <Col>
                <img
                  className="piano-1"
                  src="https://i.pinimg.com/564x/85/eb/45/85eb455bb7101551afbd1d9ca20e83bc.jpg"
                  alt="piano-one"
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* different page */}
        <hr />
        <div className="homepage-3 text-content">
          <Container>
            <Row>
              <Col>
                <Test />
              </Col>
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
                volutpat commodo sed egestas egestas. Ac tortor vitae purus
                faucibus. Ut consequat semper viverra nam libero justo laoreet
                sit. Viverra tellus in hac habitasse platea dictumst vestibulum
                rhoncus est.
                <div className="button-about-us">
                  <Button variant="outline-dark" size="lg">
                    Go To Music Collection
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <hr />
      </div>
    );
  }
}

export default Homepage;
