import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import consulting from "../../images/consulting.png";
import guide from "../../images/Guide.png";
import measurment from "../../images/measurment.png";
import "./BasicService.css";

function BasicService() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="BS-box">
            <div className="BS-icon-content">
              <div className="BS-icon">
                <div className="inner-box"></div>
                <div className="image-box">
                  <img src={consulting} alt="Consulting" className="img-icon" />
                </div>
              </div>
            </div>
            <div className="BS-text-content">
              <h4 className="BS-heading">Free Consulting</h4>
              <p className="BS-description">
                Make informed decisions with our free consulting services. Our
                experienced team will guide you through the process, helping you
                choose the perfect curtain styles and fabrics.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="BS-box">
            <div className="BS-icon-content">
              <div className="BS-icon">
                <div className="inner-box"></div>
                <div className="image-box">
                  <img src={guide} alt="Guidance" className="img-icon" />
                </div>
              </div>
            </div>
            <div className="BS-text-content">
              <h4 className="BS-heading">Free Guidance</h4>
              <p className="BS-description">
                Navigate the world of curtains with confidence. We provide free
                guidance, offering insights into the latest trends, colors, and
                designs to make your space truly unique.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="BS-box">
            <div className="BS-icon-content">
              <div className="BS-icon">
                <div className="inner-box"></div>
                <div className="image-box">
                  <img src={measurment} alt="Measuring" className="img-icon" />
                </div>
              </div>
            </div>
            <div className="BS-text-content">
              <h4 className="BS-heading">Free Measuring</h4>
              <p className="BS-description">
                Accurate measurements are the foundation of perfect curtains.
                Our experts offer precise and free measuring services to ensure
                a seamless fit for your windows.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default BasicService;
