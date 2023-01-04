import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { data: AddedProducts = [], refetch } = useQuery({
    queryKey: ["AddedProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://lens-lab-camera-shop-server.vercel.app/AddedProducts`
      );
      const data = res.json();
      return data;
    },
  });

  const handleProductDelete = (id) => {
    fetch(
      `https://lens-lab-camera-shop-server.vercel.app/AddedProducts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.error("Product removed from cart!");
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div className="mx-auto w-4/5">
        {AddedProducts.length === 0 ? (
          <>
            <h1 className="text-3xl my-5">No products are added yet..!</h1>
          </>
        ) : (
          <div className="mt-8">
            {AddedProducts.map((product, i) => (
              <div
                key={i}
                className="card lg:flex lg:flex-row flex-col my-5 card-side bg-base-100 shadow-2xl"
              >
                <figure>
                  <img
                    className="w-60"
                    src={product.productThumb}
                    alt="camera"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl font-bold">
                    {product.productName}
                  </h2>
                  <p className="font-bold text-2xl">${product.productPrice}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleProductDelete(product._id)}
                      className="btn btn-error text-white btn-sm rounded-none"
                    >
                      Remove
                    </button>
                    <button className="btn btn-sm rounded-none">Buy now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
