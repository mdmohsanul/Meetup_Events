import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import appRouter from "./App.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
  </StrictMode>
);