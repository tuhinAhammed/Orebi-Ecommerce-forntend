import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/Layout/RootLayout.jsx';
import Home from './components/pages/Home.jsx';
import Shop from './components/pages/Shop.jsx';
import ProductInside from './components/pages/ProductInside.jsx';
import About from './components/pages/About.jsx';
import Contacts from './components/pages/Contacts.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductInside />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />

      
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
