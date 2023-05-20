import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalStyle } from './styles/GlobalStyle'

// - pages
import { Cadastro } from './pages/Cadastro/Index'
import { ErrorPage } from './pages/Error/Index'
import { Home } from './pages/Home/Index';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
