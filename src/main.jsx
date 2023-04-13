import React from 'react'
import ReactDOM from 'react-dom/client'
import {Cadastro} from './pages/Cadastro'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from './pages/Home/Index';
import { ErrorPage } from './pages/Error';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Cadastro />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
