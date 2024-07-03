import { RouteObject } from "react-router-dom";

import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Carts from "./components/page/Carts";
import AboutUs from "./components/page/AboutUs";
import Blogs from "./components/page/blogs/Blogs";
import Category from "./components/page/Category";
import Services from "./components/page/Services";
import SearchPage from "./components/page/SearchPage";
import BillingDetails from "./components/page/BillingDetails";
import { BlogDetail } from "./components/page/blogs/BlogDetail";
import Product from "./components/page/Product";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "blogs",
        children: [
          { index: true, element: <Blogs /> },
          { path: ":id", element: <BlogDetail /> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "carts", element: <Carts /> },
      { path: "billing-detail", element: <BillingDetails /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "sign-up", element: <Login isSignUp /> },
      { path: "category", children: [{ path: ":id", element: <Category /> }] },
      {
        path: "products",
        children: [{ path: ":id", element: <Product /> }],
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
