import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/style/reset.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </React.StrictMode>
);
