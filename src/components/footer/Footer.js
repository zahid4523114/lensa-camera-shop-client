import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../Projects images/logo1-N3XMXXM-1536x398.png";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title text-black">Services</span>
          <Link className="link link-hover text-black ">Branding</Link>
          <Link className="link link-hover text-black ">Design</Link>
          <Link className="link link-hover text-black ">Marketing</Link>
          <Link className="link link-hover text-black ">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title text-black">Company</span>
          <Link className="link link-hover text-black ">About us</Link>
          <Link className="link link-hover text-black ">Contact</Link>
          <Link className="link link-hover text-black ">Jobs</Link>
          <Link className="link link-hover text-black ">Press kit</Link>
        </div>
        <div>
          <span className="footer-title text-black">Legal</span>
          <Link className="link link-hover text-black ">Terms of use</Link>
          <Link className="link link-hover text-black ">Privacy policy</Link>
          <Link className="link link-hover text-black ">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-300 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img src={footerLogo} className="w-20" alt="" />
          <p className="ml-3 text-black">
            Lensa Industries Ltd. <br />
            Providing reliable technology since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/Zahid4523114">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/Zahid4523114">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
