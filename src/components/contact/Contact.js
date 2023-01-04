import React, { useRef } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_htwy73q",
        "template_3d5qo9g",
        form.current,
        "rMfQImtUBOyES3xc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:m-14 md:m-8 m-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div>
          <h1 className="text-4xl mb-5 font-bold">Get In Touch</h1>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="my-8">
                <h1 className="text-xl font-bold">Location</h1>
                <p>Tangail,Dhaka,Bangladesh</p>
              </div>
              <div className="my-8">
                <h1 className="text-xl font-bold">Email</h1>
                <p>dewanmohammodzahidhasan@gmail.com</p>
              </div>
            </div>
            <div className="">
              <div className="my-8">
                <h1 className="text-xl font-bold">Phone</h1>
                <p>+8801734095414</p>
              </div>
              <div className="my-8">
                <h1 className="text-xl font-bold">Work Hours</h1>
                <p>Everyday 08:00 - 18:00</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center mt-3 ">
            <h1 className="font-bold text-xl">Social Media :</h1>
            <a
              href="https://www.facebook.com/Zahid4523114"
              className="text-xl ml-3 border p-2 rounded-full hover:bg-slate-300"
            >
              <GrFacebookOption></GrFacebookOption>
            </a>
            <a
              href="https://twitter.com/Zahid4523114"
              className="text-xl ml-3 border p-2 rounded-full hover:bg-slate-300"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="https://github.com/zahid4523114"
              className="text-xl ml-3 border p-2 rounded-full hover:bg-slate-300"
            >
              <BsGithub></BsGithub>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="shadow-2xl p-5 lg:mt-0 mt-8">
          <h1 className="text-2xl font-bold">Leave A Message</h1>
          <p>
            Leave me a message. To inform me about your valuable opinions and
            statement.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="my-5">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="my-5">
              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="my-5">
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="Send Message"
              ></textarea>
            </div>
            <button className="btn rounded-none w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
