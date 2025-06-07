import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/style/reset.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
