import React from "react";
import heroLogo from "../../Projects images/professional-digital-lensremovebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <img alt="" src={heroLogo} className=" lg:w-1/2 w-full  rounded-lg" />
          <div className="lg:ml-16">
            <h4 className="text-xl">Ready To Spoil Every Moment</h4>
            <h1 className="text-5xl py-6 font-bold">
              SHOP TO GET WHAT YOU LOVE
            </h1>
            <p className="pb-6">
              A digital camera is a camera that captures photographs in digital
              memory. Most cameras produced today are digital,largely replacing
              those that capture images on photographic film.High-end,
              high-definition dedicated cameras are still commonly used by
              professionals and those who desire to take higher-quality
              photographs.
            </p>
            <Link to="/products">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
