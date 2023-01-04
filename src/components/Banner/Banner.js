import React from "react";
import Home from "../home/Home";
import Services from "../services/Services";
import Experiences from "../experiences/Experiences";
import Advertise from "../advertise/Advertise";
import Products from "../products/Products";
import Blog from "../blog/Blog";
import Footer from "../footer/Footer";

const Banner = () => {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <Experiences></Experiences>
      <Advertise></Advertise>
      <Products></Products>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Banner;
