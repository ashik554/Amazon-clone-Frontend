import React from "react";
import classes from "./CheckoutProduct.module.css";
import { useStateValue } from "../../hooks/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeProductFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProductImage}
        src={image}
        alt="productImage"
      />
      <div className={classes.checkoutProductInfo}>
        <p className={classes.checkoutProductTitle}>{title}</p>
        <p className={classes.checkoutProductPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.checkoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button
          className={classes.checkoutProductBtn}
          onClick={removeProductFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
