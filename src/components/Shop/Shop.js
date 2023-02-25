import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import WishlistSummary from "../WishlistSummary/WishlistSummary";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // for adding wishlist time
  const [wishlist, setWishlist] = useState([]); //jehuto sabai data add korbe tai akta array lagbe.

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToWishlist = (product) => {
    // console.log(product);

    const newWishlist = [...wishlist, product];
    setWishlist(newWishlist);
  };

  return (
    <div className="shop-container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1">
      <div className="lg:col-span-4 md:col-span-3">
        <div className="px-10">
          <div className="flex items-center mt-5 mb-7">
            <img
              style={{ height: "70px", width: "65px" }}
              src="./images/header-icon.png"
              alt=""
            />
            <h1 className="ml-2 md:text-4xl lg:text-5xl max-sm:text-2xl font-bold text-green-400">
              Multi Function Exercise
            </h1>
          </div>
          <p className="text-2xl text-white"> Select Your Exercise</p>
        </div>
        {/* ***************** */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-10 mt-5 mb-16 mx-auto">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCard={handleAddToWishlist}
            ></Product>
          ))}
        </div>
      </div>
      {/* Cart Container  WishlistSummary*/}
      <div className="cart-container">
        <WishlistSummary wishlist={wishlist}></WishlistSummary>
      </div>
    </div>
  );
};

export default Shop;
