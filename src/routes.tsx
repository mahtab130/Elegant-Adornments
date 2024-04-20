import { RouteObject } from "react-router-dom";
import Home from "./components/page/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "*",
        element: <h1>Route Not Found!!</h1>,
      },
    ],
  },
];
