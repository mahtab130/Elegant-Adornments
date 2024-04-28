import { RouteObject } from "react-router-dom";

import Home from "./components/page/Home";
import Blogs from "./components/page/Blogs";
import AboutUs from "./components/page/AboutUs";
import Services from "./components/page/Services";
import Category from "./components/page/Category";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "category", element: <Category /> },
      { path: "services", element: <Services /> },
      {
        path: "*",
        element: <h1>Route Not Found!!</h1>,
      },
    ],
  },
];
