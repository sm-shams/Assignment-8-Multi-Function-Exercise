import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, details, time, age } = props.product;
  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl border-2 border-sky-200"
        style={{ height: "500px" }}
      >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-gray-200">{name}</h2>
          <p>{details}</p>
          <p>For Age: {age}yr</p>
          <p>Time Required: {time}s</p>
          <div className="card-actions">
            <button
              onClick={() => props.handleAddToCard(props.product)}
              className="btn-cart btn btn-primary w-full"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
