import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
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
              <div id="scrollToTopLogo" onClick={scrollToTop}>
                <img
                  className="logoImage footer-logo-img"
                  src={Logo}
                  alt="LoomTex"
                />
              </div>
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
          <div className="social-icon wrapper">
            <a
              href="https://wa.me/message/PGEKSQYAAKZDC1"
              target="_blank"
              rel="noreferrer"
              className="icon whatsapp"
            >
              <div class="tooltip">Whatsapp</div>
              <span>
                <FontAwesomeIcon
                  className="i"
                  icon={faWhatsapp}
                  style={{ color: "#2CCD47" }}
                />
              </span>
            </a>
            <a
              href="https://instagram.com/loomtex_curtain_?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
              className="icon instagram"
            >
              <div class="tooltip">instagram</div>
              <span>
                <FontAwesomeIcon
                  className="i"
                  icon={faInstagram}
                  style={{ color: "#D02883" }}
                />
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552381468895&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
              className="icon facebook"
            >
              <div class="tooltip">Facebook</div>
              <span>
                <FontAwesomeIcon
                  className="i"
                  icon={faFacebookF}
                  style={{ color: "#3b5999" }}
                />
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@loomtexcurtaindxb?_t=8gQfJBR9d4i&_r=1"
              target="_blank"
              rel="noreferrer"
              className="icon tiktok"
            >
              <div class="tooltip">Tiktok</div>
              <span>
                <FontAwesomeIcon
                  className="i"
                  icon={faTiktok}
                  style={{ color: "#000" }}
                />
              </span>
            </a>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </Container>
      <div className="copyright">
        <span>Loomtex</span> &copy; 2023 || All right reserved
      </div>
    </Fragment>
  );
}

export default Footer;
