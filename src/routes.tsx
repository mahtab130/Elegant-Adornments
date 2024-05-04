import { RouteObject } from "react-router-dom";

import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Blogs from "./components/page/Blogs";
import AboutUs from "./components/page/AboutUs";
import Services from "./components/page/Services";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Login isSignUp /> },
      { path: "about-us", element: <AboutUs /> },
      // { path: "category", element: <Category /> },
      { path: "services", element: <Services /> },
      {
        path: "products",
        children: [
          { index: true, element: <></> },
          { path: "products/:id", element: <></> },
        ],
      },
      {
        path: "*",
        element: <h1>Route Not Found!!</h1>,
      },
    ],
  },
];
