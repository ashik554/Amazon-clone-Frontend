import { useEffect } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Home from "./components/UI/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/UI/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./Payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./components/hooks/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KDAivAPECwHF1aH78JWwMb6HSFTpGA61HCw8btJskclba1BpKuw43k7Yh0J9VEKua6UID43Gys7mquPCAVGDzj4008noulcAq"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // This is only run according to the dependencies or when the component load
    auth.onAuthStateChanged((authUser) => {
      console.log("THIS IS OUR AUTHENTICATED USER", authUser);

      if (authUser) {
        // user just logged in or lodgged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
