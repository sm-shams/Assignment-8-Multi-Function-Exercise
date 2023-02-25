import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1">
      <div className="lg:col-span-4 md:col-span-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-10 my-10 mx-auto">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h3>Purchase History</h3>
      </div>
    </div>
  );
};

export default Shop;
