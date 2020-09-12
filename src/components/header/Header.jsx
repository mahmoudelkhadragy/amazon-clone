import React, { useState, useEffect } from "react";
import useWindowDimensions from "../helpers/windowDimentions";
import "./Header.css";
import amazon_logo from "../../images/amazon_logo.png";
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
        console.log("changed");
      }
    }
    windowWidth();
  }, []);

  return (
    <div className="header">
      <img className="header__logo" src={amazon_logo} alt="amazon logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {dropmenu && (
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>
      )}

      <div
        onClick={(e) => {
          setDropmenu(!dropmenu);
        }}
        className="header__nav__dropDown"
      >
        <KeyboardArrowDownIcon />
      </div>
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
