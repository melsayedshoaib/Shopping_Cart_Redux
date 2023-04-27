import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Components/Products/Products";
import { Provider } from "react-redux";
import React from 'react'
import store from "./store/store";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Products /> },
        { path: 'products', element: <Products /> },
        { path: 'cart', element: <Cart /> },
        {path: 'about/:id', element: <About/>},
        {path: '*', element: <NotFound />}
    ]}
]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routers}></RouterProvider>
      </Provider>
    </div>
  )
}
