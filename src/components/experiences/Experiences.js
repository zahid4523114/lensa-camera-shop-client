import React from "react";
import logo from "../../Projects images/photography-modified.png";
import logo1 from "../../Projects images/photography.jpg";

const Experiences = () => {
  return (
    <div>
      <div data-aos="fade-up" className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src={logo}
            className="max-w-sm lg:block hidden  bg-base-100"
          />
          <div className="">
            <p className="py-6">DISCOVER NEW EXPERIENCES</p>
            <h1 className="text-5xl font-bold">Capture Every Second</h1>
            <p className="py-6">
              A camera records images in the form of photographs, film or video.
              If you want evidence that you've spotted Bigfoot in the woods
              behind your house, you'll need a camera.
            </p>
            <div>
              <div className="lg:w-1/2">
                <div className="flex justify-between">
                  <p>BUILD QUALITY</p>
                  <p>73%</p>
                </div>
                <progress
                  className="progress progress-secondary w-full mb-8"
                  value="73"
                  max="100"
                ></progress>
              </div>
              <div className="lg:w-1/2">
                <div className="flex justify-between">
                  <p>LENS KIT</p>
                  <p>90%</p>
                </div>
                <progress
                  className="progress progress-info w-full mb-8"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div className="lg:w-1/2">
                <div className="flex justify-between">
                  <p>CAMERA STRAP</p>
                  <p>80%</p>
                </div>
                <progress
                  className="progress progress-warning w-full mb-8"
                  value="80"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <img
            alt=""
            src={logo1}
            className="w-full lg:hidden  block bg-base-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
