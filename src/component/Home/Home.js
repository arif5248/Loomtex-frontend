import React, { Fragment } from "react";
import CustomCarousel from "./Carousel";
import { Link } from "react-router-dom";
import BasicService from "./BasicService";
import Welcome from "./welcome";

import "./Home.css";

function Home() {
  return (
    <Fragment>
      <div className="landing-page">
        <div className="hero-section-left">
          <CustomCarousel />
        </div>

        <div className="hero-section-right">
          <div className="hero-section-right-content">
            <Link className="right-content" to={`Curtain`}>
              <h4 className="content-heading">Curtains</h4>
              <p className="content-desccription">
                Curtains An irresistible range of decorative home accessories so
                brighten up your home
              </p>
            </Link>

            <Link className="right-content" to={`Blind`}>
              <h4 className="content-heading">Blinds</h4>
              <p className="content-desccription">
                Our window blinds are versatile and stylish with practical
                screening and shade
              </p>
            </Link>

            <Link className="right-content" to={`Accessories`}>
              <h4 className="content-heading">Accessories</h4>
              <p className="content-desccription">
                An irresistible range of decorative home accessories so brighten
                up your home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="basic-service">
        <BasicService />
      </div>
      <div className="Welcome-section">
        <Welcome />
      </div>
    </Fragment>
  );
}

export default Home;
