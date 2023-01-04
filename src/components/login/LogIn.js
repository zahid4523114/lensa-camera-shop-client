import React, { useContext, useState } from "react";
import signInLogo from "../../Projects images/signin-removebg-preview.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/ContextProvider";
import { toast } from "react-hot-toast";

const LogIn = () => {
  const { userLogin, loginWithGoogle, loginWithGitHub, resetPasswordEmail } =
    useContext(AuthContext);

  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_email = form.email.value;
    const user_password = form.password.value;

    userLogin(user_email, user_password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful");
        navigate(from, { replace: true });
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const emailOnChange = (e) => {
    setMail(e.target.value);
  };

  const handleResetEmail = () => {
    resetPasswordEmail(mail).then(() => {
      toast.success("Password reset email sent!").then((error) => {
        console.log(error);
      });
    });
  };

  return (
    <div className="lg:m-14 md:m-8 m-4">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <div className="lg:w-1/2 w-full shadow-xl p-8">
          <h1 className="text-4xl my-8 font-bold text-center">SIGN IN</h1>
          <form onSubmit={handleLogIn}>
            {/* <div className="my-5">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </div> */}
            <div className="my-5">
              <input
                onChange={emailOnChange}
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
            <Link onClick={handleResetEmail} to="/signUp">
              <p className="mt-3 hover:underline inline-block hover:text-orange-600">
                Forgot your password?
              </p>
            </Link>
            <br />
            <Link to="/signUp">
              <p className="my-3 hover:underline inline-block hover:text-orange-600">
                Create an account?
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

export default LogIn;
