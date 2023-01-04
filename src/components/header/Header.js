import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Projects images/logo1-N3XMXXM-1536x398.png";
import { AuthContext } from "../context/ContextProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("You have logged out");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="navbar lg:px-10 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold ">
                <Link to="/">Home</Link>
              </li>
              <li className="font-bold " tabIndex={0}>
                <Link to="/products" className="justify-between">
                  Shop
                </Link>
              </li>
              <li className="font-bold ">
                <Link to="/contact">Contact</Link>
              </li>
              {user?.email ? (
                <li className="font-bold ">
                  <Link onClick={handleSignOut}>
                    {" "}
                    <span
                      className="tooltip tooltip-right"
                      data-tip="click to Sign Out"
                    >
                      {user?.displayName}
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="font-bold ">
                  <Link to="/logIn">Log In</Link>
                </li>
              )}
            </ul>
          </div>
          <Link className=" normal-case text-xl">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold ml-5">
              <Link to="/home">Home</Link>
            </li>
            <li className="font-bold ml-5" tabIndex={0}>
              <Link to="/products">Shop</Link>
            </li>
            <li className="font-bold ml-5">
              <Link to="/contact">Contact</Link>
            </li>
            {user?.email ? (
              <li className="font-bold ">
                <Link onClick={handleSignOut}>
                  <span
                    className="tooltip tooltip-right"
                    data-tip="click to Sign Out"
                  >
                    {user?.displayName}
                  </span>
                </Link>
              </li>
            ) : (
              <li className="font-bold ">
                <Link to="/logIn">Log In</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:mr-0 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
