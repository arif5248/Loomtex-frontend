import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../images/LoomtexLogo3.PNG";
import "./Footer.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   Event listener to control the visibility of the "scroll to top" button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  return (
    <Fragment>
      <Container className="footer-container">
        <div className="row-one">
          <div className="email-section">
            <a href="mailto:info@loomtexdxb.com" className="email-link">
              <span className="email-phone-heading">Email</span>
              <br />
              <span className="email-phone">info@loomtexdxb.com</span>
            </a>
          </div>
          <div className="footer-logo">
            {isVisible && (
              <a href="/" id="scrollToTopLogo" onClick={scrollToTop}>
                <img
                  className="logoImage footer-logo-img"
                  src={Logo}
                  alt="LoomTex"
                />
              </a>
            )}
          </div>
          <div className="phone-section">
            <a href="tel:+971508810769" className="phone-link">
              <span className="email-phone-heading">Phone</span>
              <br />
              <span className="email-phone">+971508810769</span>
            </a>
          </div>
        </div>
        <div className="row-one">
          <div className="horizontal-line"></div>
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon
                className="icon"
                icon={faWhatsapp}
                style={{ color: "#077e09" }}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="icon"
                icon={faInstagram}
                style={{ color: "#a632ae" }}
              />
            </a>

            <a href="#">
              <FontAwesomeIcon
                className="icon"
                icon={faFacebook}
                style={{ color: "#0957dc" }}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="icon"
                icon={faTiktok}
                style={{ color: "#6034a2" }}
              />
            </a>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </Container>
      <div className="copyright">
        <span>Loomtex</span> &copy; 2023 || All right recerved
      </div>
    </Fragment>
  );
}

export default Footer;
