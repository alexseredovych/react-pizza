import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from '../assets/img/empty-cart.png'

const CartEmpty = () => {
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>
          Cart is empty <icon>😕</icon>
        </h2>
        <p>
          Most likely you haven't ordered your pizza yet
          <br />
          To make an order, please return to Home page
        </p>
        <img src={cartEmptyImg} />
        <Link to="/" class="button button--black">
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
