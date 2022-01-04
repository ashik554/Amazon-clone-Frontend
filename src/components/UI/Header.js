import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../hooks/StateProvider";
import { auth } from "../../firebase";

const Header = (props) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAutth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.headerLogo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo-img"
        />
      </Link>

      <div className={classes.headerSearch}>
        <input type="text" className={classes.headerSearchInput} />
        <SearchIcon className={classes.headerSearchIcon} />
      </div>

      <div className={classes.headerNav}>
        <Link className={classes.loginLink} to={!user && "/login"}>
          <div onClick={handleAutth} className={classes.headerOption}>
            <span className={classes.headerOptionOne}>
              Hello {!user ? "Customer" : user.email}
            </span>
            <span className={classes.headerOptionTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionOne}>Returns</span>
          <span className={classes.headerOptionTwo}>&Orders</span>
        </div>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionOne}>Your</span>
          <span className={classes.headerOptionTwo}>Prime</span>
        </div>
      </div>
      <Link className={classes.checkoutLink} to="/checkout">
        <div className={classes.headerBasketIcon}>
          <ShoppingBasketIcon />
          <span
            className={`${classes.headerOptionTwo} ${classes.headerBasketCount}`}
          >
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
