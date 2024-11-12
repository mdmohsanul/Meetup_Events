import { useState } from "react";
import Header from "./components/Header";
import Events from "./components/Events";
import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetails from "./pages/EventDetails";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Events />,
      },
      {
        path: "/:eventId",
        element: <EventDetails />,
      },
    ],
  },
]);

export default appRouter;
