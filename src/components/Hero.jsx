import React from "react";
import Image1 from "../assets/images/image1.png";
import Image3 from "../assets/images/image3.png";
import Image2 from "../assets/images/image2.png";
import Image4 from "../assets/images/image4.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-of-hero">
        <h1 className="hero-heading">
          Rent a <span className="hero-span">Place</span> Away from{" "}
          <span className="hero-span">Home</span> in the{" "}
          <span className="hero-span">Metaverse</span>{" "}
        </h1>

        <p className="hero-text">
          We provide you with access to luxury and affordable houses in the
          metaverse. Get a chance to turn your imagination to reality at your
          comfort zone.
        </p>

        <div className="hero-search">
          <input type="text" placeholder="Search for location" />
          <button className="hero-btn">Search</button>
        </div>
      </div>

      <div className="right-of-hero">
        <div className="set1">
          <img src={Image1} alt="" className="hero-img1" />
          <img src={Image3} alt="" className="hero-img3" />
        </div>

        <div className="set2">
          <img src={Image2} alt="" className="hero-img2" />
          <img src={Image4} alt="" className="hero-img4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
