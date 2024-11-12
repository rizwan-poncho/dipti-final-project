import React from 'react'
import { createRoot } from 'react-dom/client'
// import AppRouter from './Router/AppRouter.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './Pages/Auth.jsx';
import "./index.css"
import Register from './Pages/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Auth/></>,
  },
  {
    path: "register",
    element: <><Register/></>,
  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
