import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
    const [filter, setFilter] = useState("");

    return (
        <div>
            <h1>List of products</h1>
            <label>Filter by product title: </label>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {products.filter((product) => {
                    return product.title.includes(filter);
                }).map((product) => {
                    return <ProductItem product={product} key={product.id} />
                })}
                {/* {products.map((product) => {
                    return <ProductItem product={product} key={product.id} />
                })} */}
            </ul>
        </div>
    );
}