import React from "react";
import classes from "./Product.module.css";
import { useStateValue } from "../hooks/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p> {title}</p>
        <p className={classes.productPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img className={classes.productItem} src={image} alt="" />
      <button onClick={addToBasketHandler} className={classes.productBtn}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
