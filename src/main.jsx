import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AppRouter from './Router/AppRouter.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
