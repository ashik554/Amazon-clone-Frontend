import React from "react";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../hooks/StateProvider";

const CheckOut = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutLeft}>
        <img
          className={classes.checkoutAd}
          src="https://cdn2.hubspot.net/hubfs/4567260/WelcomeBanner_Desktop._CB1545466266_.png"
          alt="checkout img"
        />
        <div className={classes.checkoutTitle}>
          <h3> Hallo,{user?.email}</h3>
          <h2>Your Shopping Basket</h2>
        </div>
        <div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className={classes.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
