import React from "react";
import "./Services.css";
import cardLogo1 from "../../Projects images/professional-camera-lense-isolated-on-white-backgr-DPA6TD7.png";
import cardLogo2 from "../../Projects images/professional-camera-over-white-PSPQ8J7.png";
import cardLogo3 from "../../Projects images/professional-photo-lens-PYEEEEM.png";

const Services = () => {
  return (
    <div className=" flex lg:flex-row flex-col justify-between lg:m-8 lg:mt-20 md:mt-16 mt-10 m-5">
      <div
        data-aos="fade-right"
        className="card lg:w-96 bg-base-100 rounded-none lg:ml-5 md:mb-8 mb-8  shadow-2xl"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl">
            New Digital Camera With Tilt Lens
          </h2>
          <p>DISC UP TO 50%</p>
        </div>
        <figure>
          <img className="" src={cardLogo1} alt="Shoes" />
        </figure>
      </div>
      <div
        data-aos="fade-up"
        className="card lg:w-96 bg-base-100 rounded-none lg:ml-5 md:mb-8 mb-8  shadow-2xl"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Photograph Camera For Professional
          </h2>
          <p>WIDE CAMERA</p>
        </div>
        <figure>
          <img src={cardLogo2} alt="Shoes" />
        </figure>
      </div>
      <div
        data-aos="fade-left"
        className="card lg:w-96 bg-base-100 rounded-none lg:ml-5 md:mb-8 mb-8  shadow-2xl"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl">
            New Lenses With A Million Effects
          </h2>
          <p>REMOTE LENS</p>
        </div>
        <figure>
          <img className="w-3/4" src={cardLogo3} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Services;
