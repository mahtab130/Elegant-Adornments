import { RouteObject } from "react-router-dom";

import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Carts from "./components/page/Carts";
import Blogs from "./components/page/blogs/Blogs";
import AboutUs from "./components/page/AboutUs";
import Services from "./components/page/Services";
import SearchPage from "./components/page/SearchPage";
import { BlogDetail } from "./components/page/blogs/BlogDetail";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "blogs",
        children: [
          { index: true, element: <Blogs /> },
          { path: "blog/:id", element: <BlogDetail /> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "carts", element: <Carts /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "sign-up", element: <Login isSignUp /> },
      // { path: "category", element: <Category /> },
      {
        path: "products",
        children: [
          { index: true, element: <></> },
          { path: "products/:id", element: <></> },
        ],
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <h1>Route Not Found!!</h1>,
      },
    ],
  },
];
