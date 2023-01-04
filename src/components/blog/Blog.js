import React from "react";
import img_1 from "../../Projects images/woman-photographing.jpg";
import img_2 from "../../Projects images/camera-on-tripod.jpg";
import img_3 from "../../Projects images/mirrorless-digital-camera.jpg";
const Blog = () => {
  const blogsElement = [
    {
      blogImage: img_1,
      blogHeader: "How To Buy A Good Digital Camera For Beginners",
      blogDes:
        "In those days, buying a camera was simple. Fast-forward more than a century later, and modern cameras are so diverse and advanced that buying one is definitely not a one-model-fits-all kind of decision.",
    },
    {
      blogImage: img_2,
      blogHeader: "Introducing Innovative Digital Camera Lensa TR 6000",
      blogDes:
        "In those days, buying a camera was simple. Fast-forward more than a century later, and modern cameras are so diverse and advanced that buying one is definitely not a one-model-fits-all kind of decision.",
    },
    {
      blogImage: img_3,
      blogHeader: "The Most Popular Digital Camera Coming In This Month",
      blogDes:
        "In those days, buying a camera was simple. Fast-forward more than a century later, and modern cameras are so diverse and advanced that buying one is definitely not a one-model-fits-all kind of decision.",
    },
  ];

  return (
    <div className="mb-10 p-5">
      <h1 className="text-4xl font-bold my-8">Latest Blog</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
        {blogsElement.map((element, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className="card lg:w-96 md:w-full w-full rounded-none bg-base-100 shadow-2xl"
          >
            <div className="card-body p-5">
              <h2 className="card-title">{element.blogHeader}</h2>
              <p>{element.blogDes}</p>
            </div>
            <figure>
              <img src={element.blogImage} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
