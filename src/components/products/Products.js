import { useQuery } from "@tanstack/react-query";
import React from "react";
import "./Products.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { toast } from "react-hot-toast";

const Products = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = res.json();
      return data;
    },
  });

  const handleAddProduct = (product) => {
    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added to cart");
          refetch();
        } else {
          toast.success("Product already added");
        }
        console.log(data);
      });
  };

  return (
    <div className="my-20 ">
      <h1 className="text-4xl font-bold my-8 ml-8">New Products</h1>
      <div className="cards-container">
        {products.map((product) => (
          <div
            data-aos="fade-up"
            className="card card-compact mb-8  lg:w-80 md:80 w-full bg-base-100 shadow-2xl rounded-none"
          >
            <figure>
              <img className="w-full" src={product.productThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>
              <p className="font-bold text-lg">${product.productPrice}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAddProduct(product)}
                  className="btn btn-dark rounded-none"
                >
                  <HiOutlineShoppingCart className="text-2xl mr-2"></HiOutlineShoppingCart>
                  <span className="">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
