import React, { useState, useEffect } from "react";
import useWindowDimensions from "./helpers/windowDimentions";
import "./Header.css";
import amazon_logo from "./images/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  const { width } = useWindowDimensions();
  const [dropmenu, setDropmenu] = useState(true);

  useEffect(() => {
    function windowWidth() {
      if (width <= 600) {
        setDropmenu(false);
      }
    }
    windowWidth();
  }, []);

  return (
    <div className="header">
      <img className="header_logo" src={amazon_logo} alt="amazon logo" />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {dropmenu && (
        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </div>
      )}

      <div
        onClick={(e) => {
          setDropmenu(!dropmenu);
        }}
        className="header_nav_dropDown"
      >
        <KeyboardArrowDownIcon />
      </div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className="header_optionLineTwo header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
