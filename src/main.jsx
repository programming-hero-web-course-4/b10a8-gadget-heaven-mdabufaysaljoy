import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Statictics from "./components/Statictics/Statictics";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Products from "./components/ProductContainer/Products";
import SingleProduct from "./components/Product/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/laptop",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/phone",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/accessories",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/smart-watch",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/mac",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
          {
            path: "/ios",
            loader: () => fetch("productData.json"),
            element: <Products />,
          },
        ],
      },
      {
        path: "/product/:id",
        loader: () => fetch("productData.json"),
        element: <SingleProduct />,
      },
      {
        path: "/statistics",
        element: <Statictics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
