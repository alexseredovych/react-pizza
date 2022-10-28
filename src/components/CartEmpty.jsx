/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <div className="empty-cart-info">
          <h2>Cart is empty 😕</h2>
          <p>
            Most likely you haven't ordered your pizza yet
            <br />
            To make an order, please return to Home page
          </p>
        </div>
        <img className="empty-cart-img" src={cartEmptyImg} alt='empty-car' />
        <Link to="/" className="button button--black">
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
