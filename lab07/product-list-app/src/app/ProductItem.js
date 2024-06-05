import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product, key }) {
    return (
        <li key={key}>
            {/* {product.title} ({product.brand}) */}
            <Link to={`/details/${product.id}`}>{product.title} ({product.brand})</Link>
        </li>
    );
}