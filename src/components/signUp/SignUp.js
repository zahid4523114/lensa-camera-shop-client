import React, { useContext } from "react";
import signInLogo from "../../Projects images/signup-removebg-preview.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/ContextProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { userSignUp, loginWithGoogle, loginWithGitHub, updateUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = form.name.value;
    const user_email = form.email.value;
    const user_password = form.password.value;

    userSignUp(user_email, user_password)
      .then((result) => {
        const user = result.user;
        handleUpdateUser(user_name);
        form.reset();
        toast.success("SignUp successful");
        navigate("/");
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = (name) => {
    updateUser(name)
      .then(() => {
        console.log("updated");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:m-14 md:m-8 m-4">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <div className="lg:w-1/2 w-full shadow-xl p-8">
          <h1 className="text-4xl my-5 font-bold text-center">SIGN UP</h1>
          <form onSubmit={handleSignUp}>
            <div className="my-5">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="my-5">
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mt-5">
              <input
                required
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full "
              />
            </div>
            <Link to="/logIn">
              <p className="my-3 hover:underline inline-block hover:text-orange-600">
                Already have an account?
              </p>
            </Link>
            <button className="btn  w-full">Sign In</button>
            <div className="flex mt-8 justify-center items-center">
              <span className="text-4xl">
                <FcGoogle onClick={loginWithGoogle}></FcGoogle>
              </span>
              <span className="text-4xl ml-8">
                <BsGithub onClick={loginWithGitHub}></BsGithub>
              </span>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src={signInLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
