import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Pricing from "./components/Pages/Pricing";
import Resources from "./components/Pages/Resources";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Developers";
import About1 from "./components/Pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About1 />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/servicing",
        element: <Resources />,
      },
    ],
  },
]);

export default router;
