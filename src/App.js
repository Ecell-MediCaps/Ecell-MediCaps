import React from "react";

import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./routes/Home";
import ESummit from "./routes/ESummit";
import Archives from "./routes/Archives";
import OurTeam from "./routes/OurTeam";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Footer from "./components/Footer/Footer"
import Register from "./routes/Register";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/esummit",
        element: <ESummit />,
      },
      {
        path: "/archives",
        element: <Archives />,
      },
      {
        path: "/ourteam",
        element: <OurTeam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

