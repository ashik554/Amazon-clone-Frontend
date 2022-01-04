import classes from "./Payment.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../components/hooks/StateProvider";
import CheckoutProduct from "../components/UI/Checkout/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../components/hooks/reducer";
import axios from "axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects subunit of a currency
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    console.log(getClientSecret);
    getClientSecret();
  }, [basket]);
  console.log("The secret is", clientSecret);
  console.log("😃", user);

  const submitHandler = async (event) => {
    // this part is for our stripe
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
      });
  };
  const changeHandler = (event) => {
    //Listen for any kind of changing in the cardElement
    // display any error as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className={classes.payment}>
      <div className={classes.paymentContainer}>
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section -delivery adress */}
        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Delivery Adress</h3>
          </div>
          <div className={classes.paymentAdress}>
            <p>{user?.email}</p>
            <p>An der Allee36</p>
            <p>Room No:4050</p>
            <p>27568 Bremerhaven,Germany</p>
          </div>
        </div>
        {/* payment section -Review Item */}
        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Review Items and delivery</h3>
          </div>
          <div className={classes.paymentItem}>
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
        {/* payment section -Payment method */}
        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Payment Method</h3>
            {/* stripe for completing coustomer payment */}
          </div>
          <div className={classes.paymentDetail}>
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />

              <div className={classes.paymentPriceContainer}>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total :{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* If any kind of error is appeared */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
