import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
]);

export default router;