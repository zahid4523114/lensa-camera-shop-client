import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../components/Banner/Banner";
import Cart from "../components/cart/Cart";
import Products from "../components/products/Products";
import Contact from "../components/contact/Contact";
import LogIn from "../components/login/LogIn";
import SignUp from "../components/signUp/SignUp";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/home",
        element: <Banner></Banner>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
