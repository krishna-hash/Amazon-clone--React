import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStatevalue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStatevalue();
  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className=" header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        ></img>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchinput"></input>
        <SearchIcon className="header_searchicon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={logout} className="header_option">
            <span className="lineone">hello {user?.email}</span>
            <span className="linetwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="lineone">Return</span>
            <span className="linetwo">& Order</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="lineone">Your</span>
            <span className="linetwo">Prime</span>
          </div>
        </Link>
        <Link to="/check" className="header_link">
          <div className="header_basket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className=" linetwo count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
