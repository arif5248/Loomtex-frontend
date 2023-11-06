import React, { Fragment } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./MainSerrvice.css";
import { Link } from "react-router-dom";

function MainService() {
  return (
    <Fragment>
      <Container>
        <div className="main-service-container">
          <div className="service-heading-box">
            <h2 className="service-heading">Our Services</h2>
            <div className="service-underline"></div>
          </div>
          <div className="service-content">
            <Row className="main-service-row row-1">
              <Col sm={6} md={6} lg={4} className="column">
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faWindowRestore} />
                    </div>
                    <div className="service-heading">
                      <h4>Window Curtains.</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} className="column">
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faWindowRestore} />
                    </div>
                    <div className="service-heading">
                      <h4>Window Curtains.</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} className="column">
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faWindowRestore} />
                    </div>
                    <div className="service-heading">
                      <h4>Window Curtains.</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="main-service-row row-2">
              <Col sm={6} md={6} lg={4} className="column">
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faWindowRestore} />
                    </div>
                    <div className="service-heading">
                      <h4>Window Curtains.</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} className="column">
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faWindowRestore} />
                    </div>
                    <div className="service-heading">
                      <h4>Window Curtains.</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Link className="service-button" to={"service"}>
              Find out more Services
            </Link>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default MainService;
