import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../hooks/StateProvider";
import { getBasketTotal } from "../../hooks/reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {basket.length} items) :<strong>{value}</strong>
            </p>
            <small className={classes.subtotalGift}>
              <input type="checkbox" className={classes.subtotalGiftInput} />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className={classes.subtotalBtn}
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
