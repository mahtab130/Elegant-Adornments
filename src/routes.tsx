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
import Register from "./components/page/Register";
import { UserView } from "./components/page/UserView";
import { UserEdit } from "./components/page/UserEdit";
import { NotFound } from "./components/page/NotFound";
import Logout from "./components/page/Logout";

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
      { path: "logout", element: <Logout /> },
      { path: "carts", element: <Carts /> },
      { path: "billing-detail", element: <BillingDetails /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "sign-up", element: <Register /> },
      { path: "category", children: [{ path: ":id", element: <Category /> }] },
      {
        path: "products",
        children: [{ path: ":id", element: <Product /> }],
      },
      {
        path: "view",
        children: [{ path: ":id", element: <UserView /> }],
      },
      {
        path: "edit",
        children: [{ path: ":id", element: <UserEdit /> }],
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
