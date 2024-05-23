import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

// Uwaga: To ćwiczebne API nie udostępnia bezpośrednio tablicy produktów,
// a obiekt, który tablicę zawiera w swoim polu o nazwie „products”. Możesz
// najpierw wpisać powyższy adres URI w przeglądarce by obejrzeć zwracane dane
// w formacie JSON.

export default function ProductList() {
    const [products, setProducts ]= useState([]);
    var data = [{id: 1, title: "iPhone 14", brand: "Apple"},
    {id: 2, title: "iPad Air", brand: "Apple"},
    {id: 3, title: "Galaxy A51", brand: "Samsung"}];
    useEffect(() => {
        // setProducts(data);
        axios.get("https://dummyjson.com/products").then((response) => {
            console.log(response.data);
            setProducts(response.data.products)
        });
    });
    // }, [])
    return (
        <div>
            <h1>List of products</h1>
            <ul>
                {products.map((product) => {
                    return <ProductItem product={product} key={product.id} />
                })}
            </ul>
        </div>
    );
}