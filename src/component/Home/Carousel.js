import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImage1 from "../../images/HeroImage1.jpg";
import HeroImage2 from "../../images/HeroImage2.jpg";
import HeroImage3 from "../../images/HeroImage3.jpg";
import HeroImage4 from "../../images/HeroImage4.jpg";
import HeroImage6 from "../../images/HeroImage6.jpg";
import HeroImage7 from "../../images/HeroImage7.jpg";
import HeroImage8 from "../../images/HeroImage8.jpg";
import "./Carousel.css";

function CustomCarousel() {
  const HeroImages = [
    {
      imageUrl: HeroImage1,
      imageTitle: "Quality Curtains for Every Room",
      imageDescription:
        "Find high-quality curtains for your living room, bedroom, kitchen, and more. Elevate your home decor",
    },

    {
      imageUrl: HeroImage2,
      imageTitle: "Custom Curtains Tailored for You",
      imageDescription:
        "Create curtains that match your style perfectly. Our experts will help you design custom curtains for your home.",
    },

    {
      imageUrl: HeroImage3,
      imageTitle: "Elegant Curtain Designs",
      imageDescription:
        "Transform your space with our beautiful curtain collections. Choose from a variety of elegant designs and colors.",
    },

    {
      imageUrl: HeroImage4,
      imageTitle: "Affordable Curtain Solutions",
      imageDescription:
        "Discover affordable curtain options without compromising on style. Your dream curtains are just a click away.",
    },

    {
      imageUrl: HeroImage6,
      imageTitle: "Quality Curtains for Every Room",
      imageDescription:
        "Find high-quality curtains for your living room, bedroom, kitchen, and more. Elevate your home decor",
    },

    {
      imageUrl: HeroImage7,
      imageTitle: "Elegant Curtain Designs",
      imageDescription:
        "Find high-quality curtains for your living room, bedroom, kitchen, and more. Elevate your home decor",
    },

    {
      imageUrl: HeroImage8,
      imageTitle: "Expert Curtain Installation",
      imageDescription:
        "Find high-quality curtains for your living room, bedroom, kitchen, and more. Elevate your home decor",
    },
  ];

  // ...

  return (
    <Fragment>
      <Carousel autoPlay showStatus={false} showThumbs={false}>
        {HeroImages.map((HeroImage, index) => (
          <div className="box" key={index}>
            <div className="inner-box">
              <img
                src={HeroImage.imageUrl}
                alt={`Image ${index + 1}`}
                className="image-content"
              />
              <div className="overlay-carousel"></div>
            </div>

            <div className="text-content">
              <h2
                style={{
                  animation: `heroheading 1s ${index * 0.5}s ease backwards`,
                }}
              >
                {HeroImage.imageTitle}
              </h2>
              <div className="horizontal-line-1"></div>
              <p
                style={{
                  animation: `heroDescription 1s ${
                    index * 0.5 + 0.5
                  }s ease backwards`,
                }}
              >
                {HeroImage.imageDescription}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </Fragment>
  );
}

export default CustomCarousel;
