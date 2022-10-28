/* eslint-disable */
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickAdd = () => {
    dispatch(addItem(pizza));
  };

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://634592fe39ca915a6902e89d.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error while getting pizzas");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <h4 className="loading-label">Loading...</h4>
    )
  }

  return (
    <div className="container">
      <div className="single-pizza-block">
        <img className="single-pizza-block__image" src={pizza.imageUrl} />
        <h3 className="single-pizza-block__title">{pizza.title}</h3>
        <h3 className="single-pizza-block__price">{pizza.price} $</h3>
        <p>{pizza.description}</p>
        <Link to="/" className="return-home button button--black">
          <span>Return to Home</span>
        </Link>
        <button
          onClick={onClickAdd}
          className="single-add-button button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {/* {addedCount > 0 && <i>{addedCount}</i>}  */}
        </button>
        
      </div>
    </div>
  );
};

export default FullPizza;
