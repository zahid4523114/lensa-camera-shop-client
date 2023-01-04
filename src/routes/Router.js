import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../components/Banner/Banner";
import Cart from "../components/cart/Cart";
import Products from "../components/products/Products";
import Contact from "../components/contact/Contact";

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
        element: <Cart></Cart>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
