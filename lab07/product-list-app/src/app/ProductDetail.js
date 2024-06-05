import { React } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails({ products }) {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) { return null; }
    return (
        <div>
            <h1>{product.title}</h1>
            <p>
                {product.category} <br />
                {product.brand} <br />
                {product.description}<br />
                {product.price}
            </p>
            <img src={product.thumbnail} alt={product.title} />
            <br />
            <Link to="/">Go back to ProductList</Link>
        </div>
    );
}