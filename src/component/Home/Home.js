import React, { Fragment } from "react";
import CustomCarousel from "./Carousel";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className="landing-page">
        <div className="hero-section-left">
          <CustomCarousel />
        </div>

        <div className="hero-section-right">
          <Link className="content-right" to={`Curtain`}>
            <h4 className="content-heading">Curtains</h4>
            <p className="content-desccription">
              Curtains An irresistible range of decorative home accessories so
              brighten up your home
            </p>
          </Link>

          <Link className="content-right" to={`Blind`}>
            <h4 className="content-heading">Blinds</h4>
            <p className="content-desccription">
              Our window blinds are versatile and stylish with practical
              screening and shade
            </p>
          </Link>

          <Link className="content-right" to={`Accessories`}>
            <h4 className="content-heading">Accessories</h4>
            <p className="content-desccription">
              An irresistible range of decorative home accessories so brighten
              up your home
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
