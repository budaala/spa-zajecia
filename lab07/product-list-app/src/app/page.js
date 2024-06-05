"use client";
import ProductList from "./ProductList";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./ProductDetail";

export default function Home() {
  const [products, setProducts] = useState([]);
  var data = [{ id: 1, title: "iPhone 14", brand: "Apple" },
  { id: 2, title: "iPad Air", brand: "Apple" },
  { id: 3, title: "Galaxy A51", brand: "Samsung" }];
  useEffect(() => {
    // setProducts(data);
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data.products)
    });
  });
  // }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} />,
    },
    {
      path: "details/:id",
      element: <ProductDetail products={products} />,
    },
  ]);

  return (
    <div>
      {/* <ProductList products={ products }/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<ProductList products={products} />} />
          <Route path="details/:id"
            element={<ProductDetail products={products} />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} /> 

    </div>
  );
}
