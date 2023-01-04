import React from "react";
import logo1 from "../../Projects images/two-vintage-oldcameras-together-big-and-little-co-HSHTLQV-713x1024.png";
import logo2 from "../../Projects images/the-digital-camera--667x1024.png";
const Advertise = () => {
  return (
    <div className="flex justify-between lg:mx-10 md:mx-4 m-3 lg:flex-row md:flex-col flex-col">
      <div
        data-aos="fade-right"
        className=" bg-base-100 shadow-2xl lg:w-1/2 w-full flex lg:flex-row md:flex-row flex-col justify-between p-8 mr-5"
      >
        <div>
          <h1 className="font-bold text-4xl">Shop & Save More Cashback</h1>
          <p>
            Shopping is an activity in which a customer browses the available
            goods or services presented by one or more retailers with the
            potential intent to purchase a suitable selection of them.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={logo1} alt="" />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className=" bg-base-100 shadow-2xl lg:w-1/2 md:w-full flex lg:flex-row md:flex-row flex-col justify-between p-8 lg:my-0 md:my-10 my-10"
      >
        <div>
          <h1 className="font-bold text-4xl">Shop Now!</h1>
          <p>
            Shop now to get discount . A customer browses the available goods or
            services presented by one or more retailers with the potential
            intent to purchase a suitable selection of them.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
