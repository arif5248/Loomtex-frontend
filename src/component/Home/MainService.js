import React, { Fragment, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./MainSerrvice.css";
import { Link } from "react-router-dom";

import Curtain from "../../images/serviceImages/curtains.png";
import WallPaper from "../../images/serviceImages/wallpaper.png";
import Carpet from "../../images/serviceImages/prayer.png";
import Upholstery from "../../images/serviceImages/armchair.png";
import Furniture from "../../images/serviceImages/workspace.png";

function MainService() {
  const [columnWidth, setColumnWidth] = useState(0);

  useEffect(() => {
    const updateColumnHeight = () => {
      const dynamicColumns = [
        "dynamic-column1",
        "dynamic-column2",
        "dynamic-column3",
        "dynamic-column4",
        "dynamic-column5",
      ];

      for (const dynamicColumn of dynamicColumns) {
        const column = document.getElementById(dynamicColumn);

        const currentWidth = column.offsetWidth;
        column.style.height = `${currentWidth}px`;
      }
    };

    updateColumnHeight();
    window.addEventListener("resize", updateColumnHeight);

    return () => {
      window.removeEventListener("resize", updateColumnHeight);
    };
  }, []);

  return (
    <Fragment>
      <Container>
        <div className="main-service-container">
          <div className="service-heading-box">
            <h2 className="service-heading">Our Services</h2>
            {/* <div className="service-underline"></div> */}
            <p className="sercvice-heading-descripion">
              Expert In Designing Window Curtains, Wall Papers, Carpets,
              Upholstery, Home and Office Furniture
            </p>
          </div>
          <div className="service-content">
            <Row className="main-service-row row-1">
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                id="dynamic-column1"
                className="dynamic-column column"
              >
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <img src={Curtain} alt="Window Curtain" />
                    </div>
                    <div className="service-content-heading">
                      <h4>Window Curtains</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Elevate your interiors with our exquisite window
                        curtains. From timeless classics to contemporary
                        designs, our collection combines style and
                        functionality, allowing you to customize your space with
                        elegance and precision.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                id="dynamic-column2"
                className="dynamic-column column"
              >
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <img src={WallPaper} alt="Wall Papers" />
                    </div>
                    <div className="service-content-heading">
                      <h4>Wallpapers</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Unleash your creativity and redefine your living spaces
                        with our diverse range of wallpapers. Whether you prefer
                        subtle textures or bold patterns, our collection offers
                        a wide selection to bring your walls to life.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                id="dynamic-column3"
                className="dynamic-column column"
              >
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <img src={Carpet} alt="Carpets" />
                    </div>
                    <div className="service-content-heading">
                      <h4>Carpets</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Transform your floors into a statement of luxury with
                        our meticulously crafted carpets. Our collection
                        features a harmonious blend of textures and designs,
                        providing a cozy and stylish foundation for your home or
                        office.
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
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                id="dynamic-column4"
                className="dynamic-column column"
              >
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <img src={Upholstery} alt="Upholstery" />
                    </div>
                    <div className="service-content-heading">
                      <h4>Upholstery</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Renew the charm of your furniture with our premium
                        upholstery services. Choose from a curated selection of
                        fabrics, colors, and patterns to breathe new life into
                        your favorite pieces, combining comfort and aesthetic
                        appeal.
                      </p>
                    </div>
                    <div className="service-more-details">
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                id="dynamic-column5"
                className="dynamic-column column"
              >
                <div className="service-col">
                  <div className="service-box">
                    <div className="service-icon">
                      <img src={Furniture} alt="Furniture" />
                    </div>
                    <div className="service-content-heading">
                      <h4>Home and Office Furniture</h4>
                    </div>
                    <div className="service-description">
                      <p>
                        Redefine your living and working spaces with our
                        thoughtfully designed furniture collection. From
                        timeless classics to modern essentials, each piece is
                        crafted for comfort and durability, ensuring a
                        harmonious blend of style and functionality.
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
