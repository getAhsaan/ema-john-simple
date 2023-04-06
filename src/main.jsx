import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import cartProductsLoader from './loaderProducts/loaderProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: ()=> cartProductsLoader(),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
