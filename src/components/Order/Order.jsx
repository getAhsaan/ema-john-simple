import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Order = () => {
    const products = useLoaderData();
  return (
    <div className="shop-container">
      <div className="products-container">
        <h2>Order Page : {products.length}</h2>
      </div>
      <div className="cart-container">
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Order;
