import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import welcomeImage1 from "../../images/WelcomeImage.jpg";
import welcomeImage2 from "../../images/WelcomeImage2.jpg";
import welcomeImage3 from "../../images/WelcomeImage3.jpg";

import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  const welcomeImages = [
    {
      imageUrl: welcomeImage1,
    },
    {
      imageUrl: welcomeImage2,
    },
    {
      imageUrl: welcomeImage3,
    },
  ];
  return (
    <Fragment>
      <Container>
        <Row className="welcome-row">
          <Col sm={12} md={4} lg={4}>
            <div className="welcome-img-main-box">
              <div className="welcome-img-inner-box"></div>
              <div className="welcome-img-box">
                <Carousel
                  autoPlay
                  showStatus={false}
                  showThumbs={false}
                  id="abc"
                >
                  {welcomeImages.map((welcomeImage, index) => (
                    <div className="welcome-box" key={index}>
                      <img
                        src={welcomeImage.imageUrl}
                        alt="Welcome"
                        className="Welcome-img"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <div className="welcome-text-content">
              <div className="welcome-text">
                <h4>Welcome</h4>
                <div className="welcome-underline"></div>
              </div>
              <div className="welcome-heading">
                <h2>
                  Loomtex For Quality Blinds, Curtains, Furniture
                  <span>
                    <div class="dot dot1"></div>
                    <div class="dot dot2"></div>
                    <div class="dot dot3"></div>
                  </span>
                </h2>
              </div>
              <div className="welconme-description">
                <p>
                  Discover elegance and comfort at Loomtex. We specialize in
                  high-quality blinds, curtains, and furniture, transforming
                  your space into a sanctuary of style and sophistication.We
                  offer a stunning collection of blinds, curtains, and
                  furniture, carefully curated to your home into a haven of
                  luxury and design with Loomtex..
                </p>
              </div>
              <Link className="welconme-button" to={"about"}>
                Find out more about us
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Welcome;
